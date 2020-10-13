const UserDAO = require('../daos/userDAO')
const bcryptHelper = require('../helpers/bcryptHelper')

class UserService {
  static getUsers = async () => {
    return await UserDAO.fetchAll()
  }

  static getUser = async (id) => {
    return await UserDAO.findById(id)
  }

  static findByField = async (field) => {
    return await UserDAO.findByField(field)
  }

  static createUser = async (user) => {
    const password = await bcryptHelper.encrypt(user.password)
    return UserDAO.create({
      ...user,
      password
    }, { returning: true })
    .then((user) => {
      return user
    }, (error) => {
      handleError(error.original.code)
    })
  }
}

const handleError = (code) => {
  switch (code) {
    case 'ER_DUP_ENTRY':
      throw new Error('Username already exists.')
    default:
      throw new Error('Error creating user.')
  }
}

module.exports = UserService
