
const mongoose = require('mongoose')

const movieScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    totalRating:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Movies',movieScheme)