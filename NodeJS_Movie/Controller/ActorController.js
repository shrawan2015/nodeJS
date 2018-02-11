
var actorData = require('../Config/actor')

module.exports ={
    getAllactor(req,res){
        return  res.status(200).json(actorData)
    }
}