const express = require('express')
const  body_parser = require('body-parser')



const app = express()

//after aplying the middle we can parse the body.
app.use(body_parser.json());  //this will help to parse the req.body  object in the nodejs

app.use(body_parser.urlencoded({extended:true}));   //locahost:3000/jobs/?job_id=23,filter=1
app.use((req,res,next) => {
    console.log("middle ware is called")
    next() //call the next middleware function of the json data
})

app.get('/' ,(req,res) => {
return res.send("hello world. This is the basic tutorial")
})

app.listen('3000', () => {
    console.log('app is listening on port 3000')
})

var jobList = [{
    id:12,
    name:"shrawan",
    age:24
},{
    id:12,
    name:"shrawan",
    age:24 
},{
    id:12,
    name:"shrawan",
    age:24
}]


app.get('/jobs', (req,res) => {
    console.log("hitting the job list page")
    return res.json(jobList)
})




app.post('/jobs', (req,res) => {
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

})
