const express = require('express')
const router = express.Router()

const UserService = require('../services/userService')

const ADMIN_ROLE_ID = 1

router.post('/create-admin', async (req, res) => {
  const { user } = req.body
  const roleId = ADMIN_ROLE_ID

  UserService.createUser({
    ...user,
    roleId
  }).then(user => {
    delete user.password
    res.status(200).send({ data: { user }})
  }).catch(error => {
    res.status(422).send({ error: { message: error.message } })
  })
})

module.exports = router
