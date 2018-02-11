//import the mongoose package
const mongoose = require('mongoose')
//create the jobschema
const Jobschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Jobs',Jobschema)




//export the instance of the model by passing   the jobschema