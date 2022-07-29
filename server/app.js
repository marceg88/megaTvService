require('dotenv').config()
const express = require('express')
const { connectToDb } = require('./config/database')
const routes = require('./routes')

const app = express()
const port = process.env.PORT

connectToDb()
app.use(express.json())
routes(app)

app.listen(port, () => console.log(`Server running in the port: ${port}`))
