const express = require('express')
const router = express.Router()

const UserService = require('../services/userService')
const authHelper = require('../helpers/authHelper')
const bcryptHelper = require('../helpers/bcryptHelper')

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await UserService.findByField({ username })

  if (user) {
    const isValid = await bcryptHelper.compare(password, user.password)
    if (isValid) {
      const token = authHelper.getToken(username)
      res.status(200).send({ token, user })
    } else {
      res.sendStatus(403)
    }
  } else {
    res.sendStatus(403)
  }
})

router.post('/validate', async (req, res) => {
  const { authorization } = req.headers
  const { decoded, token } = await authHelper.validate(authorization)

  if (decoded) {
    const user = await UserService.findByField({ username: decoded.username })
    return res.status(200).json({ user, token })
  } else {
    return res.sendStatus(401)
  }
})

module.exports = router
