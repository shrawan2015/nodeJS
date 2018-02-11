
let actorController = require('../Controller/ActorController')
let express  = require('express')
let router = express.Router()

router.get('/',actorController.getAllactor)

module.exports = router