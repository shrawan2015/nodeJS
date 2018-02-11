const express = require('express')
const router = express.Router()
const jobController = require('../Controller/jobs.controller')

router.get('/', jobController.findAll );  
////  /api/jobs
router.post('/', jobController.create);
router.get('/:id', jobController.findOne);
router.put('/:id',jobController.update)
router.delete('/:id',jobController.deleteJob)

module.exports = router
