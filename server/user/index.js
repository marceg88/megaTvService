const express = require('express')
const { createUser } = require('./user.controllers')

const router = express.Router()

router.post('/', createUser)

module.exports = router
