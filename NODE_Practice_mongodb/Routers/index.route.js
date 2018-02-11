const express = require('express')
const router = express.Router()

const jobRouters =  require('../Routers/jobs.routes')
router.use('/jobs', jobRouters)

module.exports = router
