require('dotenv').config()
const express = require('express')
const { connectToDb } = require('./config/database')

const app = express()
const port = process.env.PORT

connectToDb()

app.listen(port, () => console.log(`Server running in the port: ${port}`))
