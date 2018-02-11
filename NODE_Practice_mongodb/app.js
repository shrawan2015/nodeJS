const express = require('express')
const app = express()
const routes = require('./Routers/index.route')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const configfile = require('./config/Config')
//after aplying the middle we can parse the body.
app.use(body_parser.json());  //this will help to parse the req.body  object in the nodejs
app.use(body_parser.urlencoded({extended:true}));   //locahost:3000/jobs/?job_id=23,filter=1

app.use((req,res,next) => {
    console.log("middle ware is called")
    next() //call the next middleware function of the json data
})

app.listen('3000', () => {
    console.log('app is listening on port 3000')
})

mongoose.connect(configfile.mongoose_uri, () => {
    console.log('mongoose is connected to the mongoose server')

});

//api lavel middleware
app.use('/api',routes)   //routes is the index routes


