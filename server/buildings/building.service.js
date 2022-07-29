const Building = require('./building.model')

const BuildingServices = {
  async findByName(name) {
    try {
      const building = await Building.find({ name })
      return building
    } catch (error) {
      return error
    }
  },
  async findByCity(city) {
    try {
      const building = await Building.find({ city })
      return building
    } catch (error) {
      return error
    }
  },
  async findByAddress(address) {
    try {
      const building = await Building.find({ address })
      return building
    } catch (error) {
      return error
    }
  },
  async findByPostal(postal) {
    try {
      const building = await Building.find({ postal })
      return building
    } catch (error) {
      return error
    }
  },
  async findByState(state) {
    try {
      const building = await Building.find({ state })
      return building
    } catch (error) {
      return error
    }
  },
}

module.exports = BuildingServices
