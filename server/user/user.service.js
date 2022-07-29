const User = require('./user.model')

const UserService = {
  async register(usuario) {
    try {
      const newUser = new User(usuario)
      await newUser.save()
      return newUser
    } catch (error) {
      return error
    }
  },
}

module.exports = UserService
