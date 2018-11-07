
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

const gql = require('graphql-tag')

const { ZKTIME_DB_PATH } = require('../utils')

const knex = require('knex')({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: ZKTIME_DB_PATH
  }
})

module.exports = {
  nameFull: {
    fragment: `fragment EmployeeNames on Employee { nameFirst nameMiddle namePaternal nameMaternal }`,
    resolve: ({ nameFirst, nameMiddle, namePaternal, nameMaternal }, args, ctx, info) => [nameFirst, nameMiddle, namePaternal, nameMaternal].join(' ').trim().replace(/  /, ' ')
  },
  attendanceReport: {
    fragment: `fragment EmployeeIDzkTimePin on Employee { id zkTimePin }`, // fragment ensures requires parent object properties will be present
    resolve: async (obj, args, ctx, info) => loadAttendanceReport(obj, args, ctx, info)
  },
  calendarDate: {
    fragment: `fragment EmployeeID on Employee { id }`, // fragment ensures requires parent object properties will be present
    resolve: async (obj, args, ctx, info) => loadCalendarDate(obj, args, ctx, info)
  },
  calendarRange: {
    fragment: `fragment EmployeeID on Employee { id }`, // fragment ensures requires parent object properties will be present
    resolve: async (obj, args, ctx, info) => loadCalendarRange(obj, args, ctx, info)
  },
  vacationRange: {
    fragment: `fragment EmployeeID on Employee { id }`, // fragment ensures requires parent object properties will be present
    resolve: async (obj, args, ctx, info) => {
      const presetSchedules = await loadVacationSchedules(ctx)
      const range = await loadCalendarRange(obj, args, ctx, info, true)
      return range.map(calendarDate => ({
        ...calendarDate,
        schedule: getVacationSchedule(calendarDate, presetSchedules)
      }))
    }
  }
}

async function loadCalendarDate({ id }, { date, withExceptions, withHolidays }, { db }) {
  const references = await loadEmployeeReferencesForDateRange(db, id, date, date, { withExceptions, withHolidays, withScheduleData: false })
  console.log('reference', references)
  return {
    date,
    ...getReferencesForDate(date, references)
  }
}

async function loadCalendarRange({ id }, { from, to, withExceptions, withHolidays }, { db }, info, withScheduleData = false) {
  const references = await loadEmployeeReferencesForDateRange(db, id, from, to, { withExceptions, withHolidays, withScheduleData })

  const dates = eachDay(from, to)

  return dates.map(date => ({
    date,
    ...getReferencesForDate(date, references)
  }))
}

async function loadAttendanceReport({ id, zkTimePin }, { from, to, withExceptions, withHolidays }, { db }) {

  // we load the data for one day before in that day's schedule slightly overlaps the first day in this range
  const references = await loadEmployeeReferencesForDateRange(db, id, subDays(from, 1), to, { withExceptions, withHolidays, withScheduleData: true })
  const events = await loadEmployeeEventsForDateRange(zkTimePin, from, to)

  const dates = getAttendanceDates(from, to, references, events)

  return {
    from,
    to,
    shifts: references.shifts.filter(shift => !isAfter(shift.startDate, to) && (!shift.endDate || isBefore(shift.endDate, from))),
    exceptions: references.exceptions.filter(exception => exception.slots.some(slot => isWithinRange(slot.date, from, to))),
    events: events.filter(event => isWithinRange(event, dates[0].innerBound, dates[dates.length - 1].outerBound)),
    dates
  }
}

async function loadEmployeeEventsForDateRange(zkTimePin, from, to) {
  const between = [format(from, 'YYYY-MM-DD'), format(addDays(to, 2), 'YYYY-MM-DD')]

  const events = await knex('att_punches')
    .innerJoin('hr_employee', 'hr_employee.id', 'att_punches.emp_id')
    .select(['punch_time']) // posssibly interesting fields: 'punch_time', 'terminal_id', 'emp_pin'
    .where({ 'emp_pin': zkTimePin })
    .whereBetween('punch_time', between)

  return events
    .map(({ punch_time }) => punch_time)
    .sort(compareAsc)
}

async function loadEmployeeReferencesForDateRange(db, employeeId, from, to, { withExceptions, withHolidays, withScheduleData } = { withScheduleData: false, withExceptions: false, withHolidays: false }) {
  const response = await db.request(`
    query ($id: ID! $from: DateTime! $to: DateTime! $withHolidays: Boolean! $withExceptions: Boolean! $withScheduleData: Boolean!) {
      shifts (where: {
        employee: {
          id: $id
        }
        startDate_lte: $to
        OR: [
          { endDate: null },
          { endDate_gte: $from }
        ]
      }) {
        id
        startDate
        endDate
        slots (orderBy: index_ASC) {
          index
          schedule {
            id
            ...AllScheduleData @include(if: $withScheduleData)
          }
        }
      }
      exceptions (where: {
        employee: {
          id: $id
        }
        authorization: {
          granted: true
        }
        slots_some: {
          date_lte: $to
          date_gte: $from
        }
      }) @include(if: $withExceptions) {
        id
        slots (orderBy: date_ASC) {
          date
          schedule {
            id
            ...AllScheduleData @include(if: $withScheduleData)
          }
        }
      }
      holidays (where: {
        date_lte: $to
        date_gte: $from
      }) @include(if: $withHolidays) {
        id
        date
        name
      }
      holidaySchedule: schedules (first: 1 where: {
        isPreset: true
        timeline_every: {
          id: null
        }
        restline_every: {
          id: null
        }
        offline1: {
          category: SCH_DAY_HOLIDAY
        }
        offline2: {
          category: SCH_DAY_HOLIDAY
        }
      }) @include(if: $withHolidays) {
        id
        ...AllScheduleData @include(if: $withScheduleData)
      }
    }

    fragment AllScheduleData on Schedule {
      baseTime
      timeline (orderBy: startTime_ASC) {
        category
        startTime
        startEventRequired
        endTime
        endEventRequired
      }
      restline (orderBy: startTime_ASC) {
        category
        startTime
        startEventRequired
        endTime
        endEventRequired
        duration
      }
      offline1 {
        category
      }
      offline2 {
        category
      }
    }
  `, { id: employeeId, from, to, withExceptions, withHolidays, withScheduleData })

  console.log('response', response)

  const holidaySchedule = response.data && response.data.holidaySchedule.length ? response.data.holidaySchedule[0] : null

  return {
    shifts: (response.data && response.data.shifts) ? response.data.shifts : [],
    exceptions: (response.data && response.data.exceptions) ? response.data.exceptions : [],
    holidays: (response.data && response.data.holidays)
      ? response.data.holidays.map(holiday => ({
          ...holiday,
          schedule: holidaySchedule
        }))
      : []
  }
}

async function loadVacationSchedules ({ db }) {
  const response = await db.request(`
    query {
      VacationVacation: schedules (first: 1 where: {
        isPreset: true
      	timeline_every: {
          id: null
        }
        restline_every: {
          id: null
        }
        offline1: {
          category: SCH_DAY_VACATION
        }
        offline2: {
          category: SCH_DAY_VACATION
        }
      }) {
        id
        ...AllScheduleData
      }
      DayoffVacation: schedules (first: 1 where: {
        isPreset: true
      	timeline_every: {
          id: null
        }
        restline_every: {
          id: null
        }
        offline1: {
          category: SCH_DAY_OFF
        }
        offline2: {
          category: SCH_DAY_VACATION
        }
      }) {
        id
        ...AllScheduleData
      }
      VacationDayoff: schedules (first: 1 where: {
        isPreset: true
      	timeline_every: {
          id: null
        }
        restline_every: {
          id: null
        }
        offline1: {
          category: SCH_DAY_VACATION
        }
        offline2: {
          category: SCH_DAY_OFF
        }
      }) {
        id
        ...AllScheduleData
      }
      DayoffDayoff: schedules (first: 1 where: {
        isPreset: true
      	timeline_every: {
          id: null
        }
        restline_every: {
          id: null
        }
        offline1: {
          category: SCH_DAY_OFF
        }
        offline2: {
          category: SCH_DAY_OFF
        }
      }) {
        id
        ...AllScheduleData
      }
    }

    fragment AllScheduleData on Schedule {
      baseTime
      timeline (orderBy: startTime_ASC) {
        category
        startTime
        startEventRequired
        endTime
        endEventRequired
      }
      restline (orderBy: startTime_ASC) {
        category
        startTime
        startEventRequired
        endTime
        endEventRequired
        duration
      }
      offline1 {
        category
      }
      offline2 {
        category
      }
    }
  `)

  return {
    VacationVacation: response.data.VacationVacation.length ? response.data.VacationVacation[0] : null,
    DayoffVacation: response.data.DayoffVacation.length ? response.data.DayoffVacation[0] : null,
    VacationDayoff: response.data.VacationDayoff.length ? response.data.VacationDayoff[0] : null,
    DayoffDayoff: response.data.DayoffDayoff.length ? response.data.DayoffDayoff[0] : null
  }
}

function getVacationSchedule(date, { VacationVacation, DayoffVacation, VacationDayoff, DayoffDayoff }) {
  const { schedule } = date

  if (!schedule) return VacationVacation

  if (schedule.offline1 && schedule.offline1.category === 'SCH_DAY_OFF') {
    if (schedule.offline2 && schedule.offline2.category === 'SCH_DAY_OFF') {
      return DayoffDayoff
    } else {
      return DayoffVacation
    }
  } else if (schedule.offline2 && schedule.offline2.category === 'SCH_DAY_OFF') {
    return VacationDayoff
  } else {
    return VacationVacation
  }
}

function getAttendanceDates (from, to, references, events) {
  const dates = eachDay(from, to)

  const datesWithReferences = dates.map(date => ({
    date,
    ...getReferencesForDate(date, references)
  }))

  const referencesForDateBeforeRange = getReferencesForDate(subDays(from, 1), references)

  const datesWithReferencesBounds = getDateBounds(datesWithReferences, referencesForDateBeforeRange)

  return datesWithReferencesBounds.map(date => ({
    ...date,
    events: events.filter(event => isWithinRange(event, date.innerBound, date.outerBound))
  }))
}

function getReferencesForDate(date, { shifts, exceptions, holidays }) {
  const candidateExceptionsForDate = exceptions
    .filter(exception => exception && exception.slots && exception.slots.some(slot => isSameDay(slot.date, date)))
    .sort((a, b) => compareDesc(a.authorization.created_at, b.authorization.created_at))

  const exceptionForDate = candidateExceptionsForDate[0] ? candidateExceptionsForDate[0] : null

  const exceptionScheduleForDate = exceptionForDate ? exceptionForDate.slots.find(slot => isSameDay(slot.date, date)).schedule : null

  const holidayForDate = holidays && holidays.length ? holidays.find(holiday => isSameDay(holiday.date, date)) : null

  const holidayScheduleForDate = holidayForDate && holidayForDate.schedule ? holidayForDate.schedule : null

  const candidateShiftsForDate = shifts
    .filter(shift => shift.endDate ? isWithinRange(date, shift.startDate, shift.endDate) : !isBefore(date, shift.startDate))
    .sort((a, b) => compareDesc(a.startDate, b.startDate))

  const shiftForDate = candidateShiftsForDate[0] ? candidateShiftsForDate[0] : null

  const shiftScheduleForDate = (shiftForDate &&  shiftForDate.slots)
    ? shiftForDate.slots[differenceInCalendarDays(date, shiftForDate.startDate) % shiftForDate.slots.length].schedule : null

  const scheduleForDate = exceptionScheduleForDate ? exceptionScheduleForDate : holidayScheduleForDate ? holidayScheduleForDate : shiftScheduleForDate

  return {
    exception: exceptionForDate ? exceptionForDate : null,
    shift: shiftForDate ? shiftForDate : null,
    holiday: holidayForDate? holidayForDate : null,
    schedule: scheduleForDate
  }
}

function getScheduleOuterBound(schedule) {
  const MINTHRESHOLD = 6 * 60

  if (!schedule || !schedule.timeline) return 24 * 60

  return Math.max(...schedule.timeline.reduce((acc, val) => {
    acc.push(val.startTime + MINTHRESHOLD)
    acc.push(val.endTime + MINTHRESHOLD)
    return acc
  }, [24 * 60]))
}

function getDateBounds(dates, dateBefore) {
  const firstBound = getScheduleOuterBound(dateBefore.schedule)
  return dates
    .map(date => ({
      ...date,
      outerBound: getScheduleOuterBound(date.schedule)
    })).map((date, index, arr) => ({
      ...date,
      innerBound: (index === 0 ? firstBound : arr[index - 1].outerBound) - (24 * 60)
    }))
    .map(date => ({
      ...date,
      outerBound: addMinutes(date.date, date.outerBound).toISOString(),
      innerBound: addMinutes(date.date, date.innerBound).toISOString()
    }))
}
