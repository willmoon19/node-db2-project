const express = require("express")
const carsRouter = require('./cars/cars-router')


const server = express()

server.use(express.Router())
server.use('/api/cars', carsRouter)
server.use('*', (req, res) => {
    res.status(404).json({message: 'server not found'})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})


module.exports = server
