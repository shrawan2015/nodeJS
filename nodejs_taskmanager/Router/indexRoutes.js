let express = require('express')
let route = express.Router()
let taskRoutees = require('./taskManagerRouter')


route.use('/task',taskRoutees)
module.exports =  route
