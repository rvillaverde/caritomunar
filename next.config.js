require('dotenv').config()

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
})
