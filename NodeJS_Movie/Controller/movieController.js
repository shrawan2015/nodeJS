// var moveiList = require('../Config/movie')

//Get all the movie from the local db
var MovieModel = require('../Model/movieSchema')

module.exports ={
    createMovie(req,res) {
        let title = req.body.title
        let rating = req.body.rating
        let totalRating = req.body.totalRating
    
        if (!title) {
            return res.status(400).send({err:'title is mandatory'})
        }
        let movie = {
            title,
            rating,
            totalRating
        }


        console.log('working 1')
        const Movie =  MovieModel(movie)
        Movie.save(err => {
            if(err) {
                return res.status(500).send(err);
            }
        })
        console.log('working 2')

        MovieModel.find({} ,(err,movies) => {

            if(err){
                console.log('working 3')

                return res.status(404).send(err);
            }
            console.log('working 4')

            return  res.status(200).json(movies)
        })

    },

    updateMovie(req,res) {

    },
    deleteMovie(req,res){

    },
    getAllMovieList(req,res){
        MovieModel.find({}, (err,movies) => {
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).json(movies)
        })
    }
}






