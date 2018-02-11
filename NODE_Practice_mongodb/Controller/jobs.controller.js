const jobList = require('../config/job')
const JobModel = require('../Models/jobs.model')
module.exports = {
    create(req,res) {
        // let id = req.body.id
        let title = req.body.title
        let name = req.body.name
        let age = req.body.age
    

        if (!title) {
            return res.status(400).send({err:'title is error property'})
        }


        let job = {
            title,
            name,
            age
        }


        const jobMODEL =  JobModel(job)
        jobMODEL.save(err => {
            if(err) {
                return res.status(500).send(err);
            }
        })
        //return res.status(200).json(jobMODEL)

        JobModel.find({} ,(err,jobs) => {
            if(err){
                return res.status(404).send(err);

            }

            return  res.status(200).json(jobs)
        })



        // jobList.push(job)
        // return res.json(jobList)
    },
    findAll(req,res){
        console.log("hitting the job list page")
        return res.json(jobList)
    },
    findOne(req,res){
        let id  =  req.params.id
        if(!id){
            return res.status(400).send(err)
        }

        JobModel.findById(id, (err,job) => { 
            if(err){
                return res.status(400).send(err)
            }
            return  res.status(200).json(job)

        })

    },
    update(req,res){
        let id  =  req.params.id
        if(!id){
            return res.status(400).send(err)
        }

        let title = req.body.title
        let name = req.body.name
        let age = req.body.age
    
        let jonattri = {};
        if (title){
jonattri.title = title
        }
        if (name){
            jonattri.name = name

        }
        if (age){
            jonattri.age = age

        }

        JobModel.update({_id:id}, jonattri ,(err,result) => {
            if(err){
                return res.status(400).send(err)
            }
            return  res.status(200).json({msg:`job is updated with id ${id}`});

        })

    },
    deleteJob(req,res){
        let id  =  req.params.id
        if(!id){
            return res.status(400).send(err)
        }

        JobModel.findByIdAndRemove(id, err => {
            if(!id){
                return res.status(400).send(err)
            }

            return  res.status(200).json({msg:`job is deleted with id ${id}`});
 
        })
    }
}