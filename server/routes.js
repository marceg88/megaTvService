const user = require('./user/index')
const building = require('./buildings/index')

const routes = (app) => {
  app.use('/user', user)
  app.use('/building', building)
}

module.exports = routes
