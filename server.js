const express = require('express') // import express
const dotenv = require('dotenv').config({ path: './config/config.env' }) // import and ref .env config file (environmental variables)
const morgan = require('morgan')
const bootcamps = require('./routes/bootcamps') // import bootcamp routers file
const connectDB = require('./config/db') // Import MongoDB connection config

const PORT = process.env.PORT || 5000 // Get port from .env
connectDB() // initiate mongo connection
const app = express() // create instance of express 'app'

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps', bootcamps) // mount bootcamp router

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`)
)

// handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Erroe: ${err.message}`)
  server.close(() => process.exit(1))
})
