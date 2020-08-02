const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
const jwtSaltRounds = 8;
const UserService = require('../services/userService');

const encrypt = (password) => {
  bcrypt.hash(password, 8, function(err, hash) {
    return hash
  });
}

// router.use('/validate', (req, res, next) => {
//   const token = req.headers.authorization
//   jwt.verify(token, jwtSecret, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ "msg": err.message })
//     }
//     next()
//   });
// });

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await UserService.findByField({ email })

  if (user) {
    bcrypt.compare(password, user.password, function(err, result) {
      if (result == true) {
        const token = jwt.sign({ email }, jwtSecret, { expiresIn: 60 * 60 * 24 * 7 })
        res.status(200).send({ token, user })
      } else {
        res.sendStatus(403)
      }
    })
  } else {
    res.sendStatus(403)
  }
})

router.post('/validate', (req, res) => {
  const { authorization } = req.headers
  if (!authorization || authorization.indexOf('Bearer ') !== 0) {
    return res.status(401).json({ msg: 'Invalid authorization' })
  }

  const token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, jwtSecret, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: err.message })
    }
    const user = await UserService.findByField({ email: decoded.email })
    return res.status(200).json({ user, token })
  })
})

module.exports = router
