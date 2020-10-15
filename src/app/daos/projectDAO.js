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
  },
  update: function(id, fields) {
    return new Promise(async (resolve, reject) => {
      models.Project.update(
        fields,
        { where: { id } }
      ).then(updated => {
        resolve(updated[0]);
      }).catch(err => {
        reject(err);
      });
    });
  },
  delete: function(id) {
    return new Promise(async (resolve, reject) => {
      models.Project.destroy({
        where: { id }
      }).then(deleted => {
        resolve(deleted);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
