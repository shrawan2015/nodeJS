const express = require('express')
const router = express.Router()
const jobController = require('../Controller/jobs.controller')

router.get('/', jobController.findAll );  
////  /api/jobs
router.post('/', jobController.create);

module.exports = router
