const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

//Routes

router.get('/api/movies/', movieController.listMovies);
router.post('/api/movies/', movieController.insertMovie);
router.patch('/api/movies/:id', movieController.updateMovieInfo);
router.delete('/api/movies/:id', movieController.deleteMovie);

module.exports = router;
