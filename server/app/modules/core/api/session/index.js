import express from 'express'
import bcrypt from 'bcrypt'
import { BCRYPT_SALT_ROUNDS } from '../../../../cfg'
import authenticate from '../../../../utils/authenticate'
import authorize from '../../../../utils/authorize';

const router = express.Router()

router.post('/login', function (req, res) {

  req.pg.one(require('./login.sql'), { username: req.body.username })
    .then(([user]) => {
      if (!user) { return res.status(403).end() }

      bcrypt.compare(req.body.password, user.password)
        .then(match => {
          if (!match) { return res.status(403).end() }

          delete user.password
          req.session.user = user
          res.status(200).json({ user })
        })
        .catch(err => {
          console.error(err)
          res.status(500).end()
        })
    })
})

router.get('/logout', authenticate, function (req, res) {
  req.session.destroy()
  res.status(200).end()
})

router.get('user', authorize('core', 'session/user', 'get'), function (req, res) {
  req.pg.one(require('./user_get'), { id: req.session.user.id }).then(user => {
    res.status(200).send({ user })
  })
})

export default router