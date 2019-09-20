const express = require('express');
const MoviesServices = require('../Services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesServices();

    router.get('/', async (req, res, next) => {

        const { tag } = req.query;
        try {
            const movies = await moviesService.getMovies({ tag });

            res.status(200).json({
                data: movies,
                mensage: 'movies listend'
            })
        } catch (err) {
            next(err);
        }

    });
}

module.exports = moviesApi;