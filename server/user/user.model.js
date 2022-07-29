const mongoose = require('mongoose')

const Schemas = mongoose.Schema

const UserSchema = new Schemas({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: [{ type: Schemas.Types.ObjectId, ref: 'Building' }],
  aptNumber: { type: Number, required: true },
  tvPlan: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
})

module.exports = mongoose.model('User', UserSchema)
