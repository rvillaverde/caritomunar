require('dotenv').config()
const express = require('express')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const cors = require('cors')
const next = require('next')
const models = require('./src/app/models')

const port =  process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const authRouter = require('./src/app/routes/authRouter.js')
const userRouter = require('./src/app/routes/userRouter.js')

app.prepare().then(() => {
  const server = express()

  server.use(cors())
  // server.use(express.json())
  server.use(fileUpload({
    createParentPath: true
  }))

  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))

  server.use('/api/auth', authRouter)
  server.use('/api/users', userRouter)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  models.sequelize.sync().then(() => {
    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
})
