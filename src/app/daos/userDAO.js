const models  = require('../models')

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      models.User.findAll().then(users => {
        resolve(users)
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUser: (id) => {
    return new Promise((resolve, reject) => {
      models.User.findByPk(id).then(user => {
        resolve(user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findByField: (field) => {
    return new Promise((resolve, reject) => {
      models.User.findAll({
        where: field
      }).then(users => {
        resolve(users[0])
      }).catch(err => {
        reject(err)
      })
    })
  },
  createUser: (user) => {
    return new Promise(async (resolve, reject) => {
      models.User.create(user).then(user => {
        resolve(user)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
