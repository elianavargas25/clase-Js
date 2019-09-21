const {moviesMock } = require('../utils/mocks/movies');

class MoviesServices{
    async getMovies(){
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

   
    async getMovie(){
        const movie = await Promise.resolve(moviesMock[0]);
        return movie || {};
    }

    async createMovie(){
        const createMovieId = await Promise.resolve(moviesMock[2].id);
        return createMovieId;
    }
}

module.exports=MoviesServices;