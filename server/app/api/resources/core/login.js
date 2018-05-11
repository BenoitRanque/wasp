const ServerError = require('@tools/serverError')

module.exports = async function login ({ session, fields }, tools, { username, password }, params) {
  const bcrypt = require('bcrypt')
  const User = require('@models/core/User')

  if (!username) throw new ServerError(401)

  let user = await User.query().where({ username }).eager('role.privileges.privilege').first()	
  if (!user) throw new ServerError(401)

  let auth = await bcrypt.compare(password, user.password)	
  if (!auth) throw new ServerError(401)

  delete user.password	
  
  let {
    user_id,
    displayname,
    role
  } = user

  session.user = {
    user_id,
    username,
    displayname
  }
  session.role = role.map(({ role_id }) => role_id)

  let privileges = {}
  role.forEach(role => {
    role.privileges.forEach(privilege => {
      let { resource, action, possession } = privilege.privilege
      if (!privileges[resource]) privileges[resource] = {}
      if (!privileges[resource][action]) privileges[resource][action] = []
      if (!privileges[resource][action].includes(possession)) privileges[resource][action].push(possession)
    })
  })
  return {
    privileges,
    user: {
      user_id,
      username,
      displayname
    }
  }
}