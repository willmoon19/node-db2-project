const express = require("express")
const carsRouter = require('./cars/cars-router')


const server = express()

server.use(express.Router())
server.use('/api/cars', carsRouter)
server.use('/', (req, res) => {
    res.status(200).json({message: 'server up'})
})


module.exports = server
