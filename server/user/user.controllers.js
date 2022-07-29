const UserService = require('./user.service')

const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    Address,
    aptNumber,
    tvPlan,
    email,
    phoneNumber,
  } = req.body
  try {
    const user = await UserService.register({
      firstName,
      lastName,
      Address,
      aptNumber,
      tvPlan,
      email,
      phoneNumber,
    })
    res.status(200).json({
      message: 'The user save successfully',
      status: 'Ok',
      data: user,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The user could not be saved',
      status: 'Failed',
      data: error,
    })
  }
}

module.exports = { createUser }
