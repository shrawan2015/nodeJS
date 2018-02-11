const jobList = require('../config/job')

module.exports = {
    create(req,res) {
        let id = req.body.id
        let name = req.body.name
        let age = req.body.age
    
        let job = {
            id,
            name,
            age
        }
        jobList.push(job)
        return res.json(jobList)
    },
    findAll(req,res){
        console.log("hitting the job list page")
        return res.json(jobList)
    }
}