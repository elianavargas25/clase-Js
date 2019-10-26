const express = require('express');
const MoviesServices = require('../Services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesServices();

    //Obtener una película
    router.get('/:moviesId', async (req, res, next) => {
        const { moviesId } = req.params;
        try {
            //Servicio que voy a consumir
            const movie = await moviesService.getMovie({ moviesId });

            //respuesta
            res.status(200).json({
                data: movie,
                mensage: 'movies retrieved'
            })
        } catch (err) {
            next(err);
        }

    });

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

    //Crear una nueva pelicula
    router.post('/', async (req, res, next) => {
        const { body: movie } = req;
        try {
            const createdMovieId = await moviesService.createMovie({ movie });
            res.status(201).json({
                createdMovieId: createdMovieId,
                mensage: 'movies created'
            })
        } catch (err) {
            next(err)
        }
    })

}

module.exports = moviesApi;