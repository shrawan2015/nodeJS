let express = require('express')
let router = express.Router()

///import the controller 
let taskManagerController = require('../Controller/taskManagerController')
router.get('/',taskManagerController.getAllTask)
router.get('/taskList',taskManagerController.getAllTask)
router.post('/',taskManagerController.createNewTask)

module.exports =  router
