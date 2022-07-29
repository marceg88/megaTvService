const BuildingServices = require('./building.service')

const findByName = async (req, res) => {
  const { name } = req.body
  try {
    const building = await BuildingServices.findByName(name)
    res.status(200).json({
      message: 'The building is found successfully!',
      status: 'Ok',
      data: building,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The building was not found successfully!',
      status: 'Ok',
      data: error,
    })
  }
}
const findByCity = async (req, res) => {
  const { city } = req.body
  try {
    const building = await BuildingServices.findByCity(city)
    res.status(200).json({
      message: 'The building is found successfully!',
      status: 'Ok',
      data: building,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The building was not found successfully!',
      status: 'Ok',
      data: error,
    })
  }
}
const findByAddress = async (req, res) => {
  const { address } = req.body
  try {
    const building = await BuildingServices.findByAddress(address)
    res.status(200).json({
      message: 'The building is found successfully!',
      status: 'Ok',
      data: building,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The building was not found successfully!',
      status: 'Ok',
      data: error,
    })
  }
}
const findByPostal = async (req, res) => {
  const { postal } = req.body
  try {
    const building = await BuildingServices.findByPostal(postal)
    res.status(200).json({
      message: 'The building is found successfully!',
      status: 'Ok',
      data: building,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The building was not found successfully!',
      status: 'Ok',
      data: error,
    })
  }
}
const findByState = async (req, res) => {
  const { state } = req.body
  try {
    const building = await BuildingServices.findByState(state)
    res.status(200).json({
      message: 'The building is found successfully!',
      status: 'Ok',
      data: building,
    })
  } catch (error) {
    res.status(400).json({
      message: 'The building was not found successfully!',
      status: 'Ok',
      data: error,
    })
  }
}

module.exports = {
  findByName,
  findByCity,
  findByAddress,
  findByPostal,
  findByState,
}
