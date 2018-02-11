var express = require('express')
var body_parser = require('body-parser')
const routes = require('./Router/indexRouter')
const mongoose = require('mongoose')

var app = express()
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use((req,res,next) => {
    console.log(`middle ware with req ${req.url}`)
    next() 
})

// app.get('/movie', (req,res) => {
//     console.log("this is the app running")
//     return res.json({msg:"this is message"})
// })

app.listen(30001,(res) => {
    console.log("app is listening at port 30001")
})

mongoose.connect('mongodb://localhost/mean_db', () => {
    console.log('mongoose is connected to the mongoose server')
});

app.use('/api',routes)