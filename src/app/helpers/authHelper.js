const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const EXPIRACY_TIME = 60 * 60 * 24 * 7

module.exports = {
  validate: (authorization) => {
    return new Promise((resolve) => {
      if (!authorization || authorization.indexOf('Bearer ') !== 0) {
        resolve(false)
      }
    
      const token = authorization.split(' ')[1]
      jwt.verify(token, JWT_SECRET, async (err, decoded) => {
        if (err) {
          console.log('Auth validate error', err)
          resolve(false)
        }
        resolve({ decoded, token })
      })
    })
  },

  getToken: (username) => {
    return jwt.sign({ username }, JWT_SECRET, { expiresIn: EXPIRACY_TIME })
  }
}
