require('dotenv').config()

// module.exports = {
//   env: {
//     API_ENDPOINT: process.env.API_ENDPOINT,
//   },
// }

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  /* config options here */
})
