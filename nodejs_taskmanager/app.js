const express = require('express')
const bodyParser =  require('body-parser')

const routes = require('./Router/indexRoutes')
let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})); 

app.listen('4000', ()  => {
    console.log('app is listening at port 4000')
})


app.use('/',routes)




