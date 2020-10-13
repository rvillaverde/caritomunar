const models  = require('../models')

module.exports = {
  fetchAll: () => {
    return new Promise((resolve, reject) => {
      models.Role.findAll().then(roles => {
        resolve(roles)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findById: (id) => {
    return new Promise((resolve, reject) => {
      models.Role.findByPk(id).then(role => {
        resolve(role)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findByField: (field) => {
    return new Promise((resolve, reject) => {
      models.Role.findAll({
        where: field
      }).then(roles => {
        resolve(roles[0])
      }).catch(err => {
        reject(err)
      })
    })
  },
  create: (role) => {
    return new Promise(async (resolve, reject) => {
      models.Role.create(role).then(role => {
        resolve(role)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
