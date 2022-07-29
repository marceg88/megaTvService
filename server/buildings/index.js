const express = require('express')
const {
  findByName,
  findByCity,
  findByAddress,
  findByPostal,
  findByState,
} = require('./building.controllers')

const router = express.Router()

router.use('/name', findByName)
router.use('/city', findByCity)
router.use('/address', findByAddress)
router.use('/postal', findByPostal)
router.use('/state', findByState)

module.exports = router
