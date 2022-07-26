const mongoose = require('mongoose')

const MONGO = process.env.MONGO_URI

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

exports.connectToDb = () => {
  mongoose.connect(MONGO, options)
  const { connection } = mongoose
  connection.once('open', () => console.log('conexion establecida'))
  connection.on('error', () => console.log('Algo salio mal'))
  return connection
}
