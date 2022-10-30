const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const Port = process.env.PORT || 5000

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// TODO: create routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

// TODO: set a more dynamic way to set port
app.listen(Port, () => console.log(`API server running on port: ${Port}`))
