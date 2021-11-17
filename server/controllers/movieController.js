require('../models/db');
const Movie = require('../models/movie');

// /api/movies
// get all movies

exports.listMovies = async(req, res) => {
    let { limit = 10, page = 1, category, filledQuery } = req.query;

    const limitMovies = parseInt(limit);
    const next = (page -1) * limit;

    let query = {};
    if(category) query.category = category;
    if(filledQuery) {
        query = {$text: {$search: q}};
    }

    try {
        const movies = await Movie.find().limit(limitMovies).skip(next);
        res.json({page:page, limit: limitMovies, movies});
    } catch (err) {
        res.status(400).json( {message: err} )
    }}

// /api/movies
// post a movie

exports.insertMovie = async(req, res) => {
    const newMovie = new Movie({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        year: req.body.year
    });
    try {
        await newMovie.save();
        res.json(newMovie);
    } catch (err) {
        res.status(400).json( {message: err} )

    }
}

// /api/movies/:id
// update(patch) the info of a movie

exports.updateMovieInfo = async(req, res) => {
    let paramID = req.params.id;
    let name = req.body.name;
    
    try {
        const updateMovie = await Movie.updateOne({ _id:paramID}, { name:name } );
        res.json(updateMovie);
    } catch (err) {
        res.status(400).json( {message: err} )
    }
}
// /api/movies/:id
// delete a movie from the db

exports.deleteMovie = async(req, res) => {
    let paramID = req.params.id;
    
    try {
        const deleteMovie = await Movie.deleteOne({ _id:paramID});
        res.json(deleteMovie);
    } catch (err) {
        res.status(400).json( {message: err} )
    }
}
