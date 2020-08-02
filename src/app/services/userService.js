const UserDAO = require('../daos/userDAO')

class UserService {
  static getUsers = async () => {
    return await UserDAO.getUsers()
  }

  static getUser = async (id) => {
    return await UserDAO.getUser(id)
  }

  static findByField = async (field) => {
    return await UserDAO.findByField(field)
  }

  static createUser = async (user) => {
    const savedUser = await UserDAO.createUser(user, { returning: true })
    return savedUser.user_id
  }
}

module.exports = UserService
