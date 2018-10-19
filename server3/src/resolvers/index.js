const { extractFragmentReplacements } = require('prisma-binding')

const resolvers = {
  Query: require('./Query'),
  Mutation: require('./Mutation'),
  AuthPayload: require('./AuthPayload'),
  Employee: require('./Employee'),
  AttendanceReport: require('./AttendanceReport'),
  AttendanceReportDate: require('./AttendanceReportDate')
}

module.exports = {
  resolvers,
  fragmentReplacements: extractFragmentReplacements(resolvers)
}
