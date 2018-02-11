let express = require('express')
let router =  express.Router()

let movieController = require('../Controller/movieController')

router.get('/',movieController.getAllMovieList);
router.put('/:id',movieController.updateMovie);
router.post('/',movieController.createMovie)
router.delete('/:id',movieController.deleteMovie)


module.exports = router
