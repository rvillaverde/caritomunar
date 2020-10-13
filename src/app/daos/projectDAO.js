const models  = require('../models')

module.exports = {
    fetchAll: () => {
    return new Promise((resolve, reject) => {
      models.Project.findAll().then(users => {
        resolve(users)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findById: (id) => {
    return new Promise((resolve, reject) => {
      models.Project.findByPk(id).then(project => {
        resolve(project)
      }).catch(err => {
        reject(err)
      })
    })
  },
  findByField: (field) => {
    return new Promise((resolve, reject) => {
      models.Project.findAll({
        where: field
      }).then(users => {
        resolve(users[0])
      }).catch(err => {
        reject(err)
      })
    })
  },
  create: (project) => {
    return new Promise(async (resolve, reject) => {
      models.Project.create(project).then(project => {
        resolve(project)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
