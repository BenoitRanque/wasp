const { AttException, AttThreshold, AttShift, AttTimetype, Employee, AttSchedule, AttScheduleDowntime } = require('@models/hr')

const format = require('date-fns/format')
const isBefore = require('date-fns/is_before')
const isAfter = require('date-fns/is_after')
const isWithinRange = require('date-fns/is_within_range')
const isSameDay = require('date-fns/is_same_day')
const isSameMinute = require('date-fns/is_same_minute')
const differenceInCalendarDays = require('date-fns/difference_in_calendar_days')
const differenceInMinutes = require('date-fns/difference_in_minutes')
const compareAsc = require('date-fns/compare_asc')
const compareDesc = require('date-fns/compare_desc')
const max = require('date-fns/max')
const min = require('date-fns/min')
const eachDay = require('date-fns/each_day')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')
const addDays = require('date-fns/add_days')
const subDays = require('date-fns/sub_days')
const addHours = require('date-fns/add_hours')
const addMinutes = require('date-fns/add_minutes')

function combineDateAndTime (date, time) {
  if (typeof date === 'string') date = new Date(date)
  if (typeof time === 'string') time = new Date(time)
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds(), 0)
}

function getHalfpointBetweenDates(a, b) {
  if (typeof a === 'string') a = new Date(a)
  if (typeof b === 'string') b = new Date(b)
  return new Date((a.getTime() + b.getTime()) / 2)
}

module.exports = class EmployeeAttendance {
  constructor (employee_id, from, to) {
    this.employee_id = employee_id
    this.from = from
    this.to = to
    this.initialized = false
  }

  async init () {
    if (this.initialized) return

    debugger
    const from = subDays(this.from, 1)
    const to = addDays(this.to, 2)

    const shifts = await this.getEmployeeShifts(from, to)
    const exceptions = await this.getEmployeeExceptions(from, to)

    this.references = eachDay(from, to).map(date => this.mapDateToReference(date, shifts, exceptions))

    this.events = await this.getEmployeeEvents(from, to)

    this.timetypes = await AttTimetype.query()
    this.thresholds = await AttThreshold.query().first()
    debugger
    this.initialized = true
  }

  async getEmployeeShifts (from, to) {
    return AttShift.query()
      .where({ employee_id: this.employee_id })
      .whereNot('start_date', '>', format(to, 'YYYY-MM-DD'))
      .where(query => query.where('end_date', null).orWhereNot('end_date', '<', format(from, 'YYYY-MM-DD')))
      .eager('[slots.schedule.[breaktime, uptime, downtime]]')
  }

  async getEmployeeExceptions (from, to) {
    const data = await AttException.query()
      .where({ employee_id: this.employee_id })
      .innerJoin('hr_att_exception_authorization', 'hr_att_exception.exception_id', 'hr_att_exception_authorization.exception_id')
      .where({ granted: true })
      .eager('[slots(inDateRange).schedule.[breaktime, uptime, downtime], authorization]', {
        inDateRange (query) {
          query.whereBetween('date', [format(from, 'YYYY-MM-DD'), format(to, 'YYYY-MM-DD')])
        }
      })
    return data.filter(exception => exception && exception.slots && exception.slots.length > 0)
  }

  async getEmployeeEvents (from, to) {
    const knextlite = require('@db/knexlite')

    const { zktime_pin } = await Employee.query().where({ employee_id: this.employee_id }).first()

    const events = await knextlite('att_punches')
      .innerJoin('hr_employee', 'hr_employee.id', 'att_punches.emp_id')
      .select(['punch_time', 'terminal_id', 'emp_pin'])
      .where({ 'emp_pin': zktime_pin })
      .whereBetween('punch_time', [format(from, 'YYYY-MM-DD'), format(to, 'YYYY-MM-DD')])

    return events.map(e => new Date(e.punch_time)).sort(compareAsc)
  }

  mapDateToReference(date, shifts, exceptions) {
    debugger
    // find all exceptions with a slot within range
    // sort by exception aproval date
    const candidateExceptionsForDate = exceptions
      .filter(exception => exception && exception.slots && exception.slots.some(slot => isSameDay(slot.date, date)))
      .sort((a, b) => compareDesc(a.authorization.created_at, b.authorization.created_at))
    
    const exceptionForDate = candidateExceptionsForDate[0] ? candidateExceptionsForDate[0] : null
    
    const exceptionScheduleForDate = exceptionForDate ? exceptionForDate.slots.find(slot => isSameDay(slot.date, date)).schedule : null
    
    const candidateShiftsForDate = shifts
      .filter(shift => shift.end_date ? isWithinRange(date, shift.start_date, shift.end_date) : !isBefore(date, shift.start_date))
      .sort((a, b) => compareDesc(a.start_date, b.start_date))
    
    const shiftForDate = candidateShiftsForDate[0] ? candidateShiftsForDate[0] : null
    
    const shiftScheduleForDate = (shiftForDate &&  shiftForDate.slots) ? shiftForDate.slots[differenceInCalendarDays(date, shiftForDate.start_date) % shiftForDate.slots.length].schedule : null
    
    const scheduleForDate = exceptionScheduleForDate ? exceptionScheduleForDate : shiftScheduleForDate
    
    return {
      date,
      schedule: this.mapScheduleToDate(scheduleForDate, date),
      shift: shiftForDate ? shiftForDate : null,
      exception: exceptionForDate ? exceptionForDate : null
    }
  }

  mapScheduleToDate (schedule, date) {
    debugger
    return {
      ...schedule,
      breaktime: schedule.breaktime.map(breaktime => ({
        ...breaktime,
        duration: combineDateAndTime(date, breaktime.duration),
        start_time: combineDateAndTime(date, breaktime.start_time),
        end_time: isBefore(breaktime.end_time, breaktime.start_time) ? combineDateAndTime(addDays(date, 1), breaktime.end_time) : combineDateAndTime(date, breaktime.end_time)
      })),
      uptime: schedule.uptime.map(uptime => ({
        ...uptime,
        start_time: combineDateAndTime(date, uptime.start_time),
        end_time: isBefore(uptime.end_time, uptime.start_time) ? combineDateAndTime(addDays(date, 1), uptime.end_time) : combineDateAndTime(date, uptime.end_time)
      }))
    }
  }

  getTimetype (timetype_id) {
    if (!this.initialized) throw new Error(`Please initialize before calling this function`)
    
    const timetype = this.timetypes.find(t => t.timetype_id === timetype_id)
    if (!timetype) throw new Error(`Unknown timetype_id ${timetype_id}`)
    return timetype
  }

  getReferenceForDate(date) {
    if (!this.initialized) throw new Error(`Please initialize before calling this function`)
    const from = subDays(this.from, 1)
    const to = addDays(this.to, 2)
    
    if (!isWithinRange(date, from, to)) throw new Error(`Date ${date} out of bounds ${from} ${to}`)
    
    return this.references.find(ref => isSameDay(ref.date, date))
  }
  
  getBoundsForDate(date) {
    if (!this.initialized) throw new Error(`Please initialize before calling this function`)
    
    const startRef = this.getReferenceForDate(subDays(date, 1))
    const startCandidates = [startOfDay(date)]
    if (startRef && startRef.schedule && startRef.schedule.uptime) {
      startRef.schedule.uptime.forEach(uptime => {
        if (uptime.start_require_event && uptime.start_time) {
          startCandidates.push(uptime.start_time)
        }
        if (uptime.end_require_event && uptime.end_time) {
          startCandidates.push(uptime.end_time)
        }
      })
    }
    
    const endRef = this.getReferenceForDate(date)
    const endCandidates = [endOfDay(date)]
    if (endRef && endRef.schedule && endRef.schedule.uptime) {
      endRef.schedule.uptime.forEach(uptime => {
        if (uptime.start_require_event && uptime.start_time) {
          endCandidates.push(uptime.start_time)
        }
        if (uptime.end_require_event && uptime.end_time) {
          endCandidates.push(uptime.end_time)
        }
      })
    }
    
    return {
      start: max(...startCandidates),
      end: max(...endCandidates)
    }
  }
  
  getBoundsForEvent(event) {
    if (!this.initialized) throw new Error(`Please initialize before calling this function`)
    
    let candidateReferences = [startOfDay(event), endOfDay(event)]
    
    let eventRef = this.getReferenceForDate(event)
    
    if (eventRef && eventRef.schedule) {
      if (eventRef.schedule.uptime) {
        eventRef.schedule.uptime.forEach(uptime => {
          if (uptime.start_require_event && uptime.start_time !== null && !isSameMinute(event, uptime.start_time)) {
            candidateReferences.push(getHalfpointBetweenDates(event, uptime.start_time))
          }
          if (uptime.end_require_event && uptime.end_time !== null && !isSameMinute(event, uptime.end_time)) {
            candidateReferences.push(getHalfpointBetweenDates(event, uptime.end_time))
          }
        })
      }
      if (eventRef.schedule.breaktime) {
        eventRef.schedule.breaktime.forEach(breaktime => {
          if (breaktime.start_require_event && breaktime.start_time !== null) candidateReferences.push(breaktime.start_time)
          if (breaktime.end_require_event && breaktime.end_time !== null) candidateReferences.push(breaktime.end_time)
        })
      }
    }
    
    return {
      start: max(...candidateReferences.filter(ref => isBefore(ref, event))),
      end: min(...candidateReferences.filter(ref => isAfter(ref, event)))
    }
  }
  
  getTransactionsForException(exception) {
    if (!this.initialized) throw new Error(`Please initialize before calling this function`)

    const accountableTimetypes = []
    const currentTally = {}
    const exceptionTally = {}
    const transactions = []

    this.timetypes.forEach(timetype => {
      if (timetype.accountable) {
        accountableTimetypes.push(timetype.timetype_id)
        currentTally[timetype.timetype_id] = 0
        exceptionTally[timetype.timetype_id] = 0
      }
    })

    exception.slots.forEach(slot => {
      const currentRef = this.getReferenceForDate(slot.date)
      debugger

      if (currentRef && currentRef.schedule) {
        currentRef.schedule.uptime.forEach(uptime => {
          if (accountableTimetypes.includes(uptime.timetype_id)) {
            currentTally[uptime.timetype_id] += Number(uptime.value)
          }
        })
        currentRef.schedule.downtime.forEach(downtime => {
          if (accountableTimetypes.includes(downtime.timetype_id)) {
            currentTally[downtime.timetype_id] += Number(downtime.value)
          }
        })
      }

      if (slot.schedule) {
        slot.schedule.uptime.forEach(uptime => {
          if (accountableTimetypes.includes(uptime.timetype_id)) {
            exceptionTally[uptime.timetype_id] += Number(uptime.value)
          }
        })
        slot.schedule.downtime.forEach(downtime => {
          if (accountableTimetypes.includes(downtime.timetype_id)) {
            exceptionTally[downtime.timetype_id] += Number(downtime.value)
          }
        })
      }
    })
    debugger
    // TOODO: verify logic here

    accountableTimetypes.forEach(timetype_id => {
      if (currentTally[timetype_id] > exceptionTally[timetype_id]) {
        transactions.push({
          exception_id: exception.exception_id,
          employee_id: this.employee_id,
          timetype_id,
          type: 'CREDIT',
          amount: currentTally[timetype_id] - exceptionTally[timetype_id]
        })
      } else if (exceptionTally[timetype_id] > currentTally[timetype_id]) {
        transactions.push({
          exception_id: exception.exception_id,
          employee_id: this.employee_id,
          timetype_id,
          type: 'DEBIT',
          amount: exceptionTally[timetype_id] - currentTally[timetype_id]
        })
      }
    })

    return transactions
  }

  async getVacationScheduleForDateRange(from, to) {
    // return whatever schedule is apropriate for a vacation day on date
    const { timetype_id } = await AttTimetype.query().select('timetype_id').where({ vacation: true }).first()
    const { schedule_id } = await AttScheduleDowntime.query().select('schedule_id').where({ timetype_id, value: 1 }).first()
    const schedule = await AttSchedule.query().where({ schedule_id }).eager('[uptime, downtime, breaktime]').first()

    return await Promise.all(eachDay(from, to).map(async date => {
      let refForDate = this.getReferenceForDate(date)
      let totalAccountableValue = refForDate.schedule.downtime.reduce((acc, val) => this.getTimetype(val.timetype_id).accountable ? acc + Number(val.value) : acc, 0) 
      
      if (totalAccountableValue === 0) {
        return {
          date,
          schedule,
          schedule_id
        }
      }

      const vacationSchedule = {
        uptime: [],
        breaktime: [],
        downtime: refForDate.schedule.downtime
          .filter(d => this.getTimetype(d.timetype_id).accountable)
          .map(({ value, timetype_id, description }) => ({ value, timetype_id, description }))
      }
      
      const vacationScheduleAccountableValue = vacationSchedule.downtime.reduce((acc, val) => acc + Number(val.value), 0)

      if (vacationScheduleAccountableValue !== 1) {
        vacationSchedule.downtime.push({
          timetype_id,
          value: 1 - vacationScheduleAccountableValue,
          description: 'Vacación'
        })
      }

      return {
        date,
        schedule: vacationSchedule
      }

    }))
  }
}