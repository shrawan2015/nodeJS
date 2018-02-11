let express = require('express')
let router = express.Router()

//Get all the movie routes
let movieRouter = require('../Router/MovieRoute')
router.use('/movies',movieRouter)


//Get all the routers 
let actorRoutes = require('../Router/actorRoutes')
router.use('/actors',actorRoutes)


module.exports =  router