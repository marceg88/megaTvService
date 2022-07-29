const mongoose = require('mongoose')

const Schemas = mongoose.Schema

const BuildingSchema = new Schemas({
  name: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  postal: { type: String, required: true },
  state: { type: String, required: true },
  plans: [{ type: String }],
})

module.exports = mongoose.model('Building', BuildingSchema)
