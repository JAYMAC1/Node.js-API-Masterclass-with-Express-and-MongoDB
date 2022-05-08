const express = require('express') // import express
const dotenv = require('dotenv').config({ path: './config/config.env' }) // import and ref .env config file (environmental variables)
const bootcamps = require('./routes/bootcamps') // import bootcamp routers file
const PORT = process.env.PORT || 5000 // Get port from .env

const app = express() // create instance of express 'app'

const logger = (req, res, next) => {
  req.hello = 'Hello World'
  console.log('Middleware ran')
  next()
}

app.use(logger)
app.use('/api/v1/bootcamps', bootcamps) // mount bootcamp router

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
)
