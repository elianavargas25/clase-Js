const {moviesMock } = require('../utils/mocks/movies');

class MoviesServices{
    async getMovies(){
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }
}

module.exports=MoviesServices;