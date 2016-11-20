/* globals module require */
/*jshint esversion: 6 */

const SimpleMovie = require("./simple-movie-model");
const SimpleActor = require("./movie-actor-model");
module.exports = {
    getSimpleMovie(name, url) {
        return SimpleMovie.getSimpleMovieByNameAndUrl(name, url);
    },
    insertManySimpleMovies(movies) {
        SimpleMovie.insertMany(movies);
    },
    getSimpleActor(profileImage,name,biography){
        return SimpleActor.getMovieActor(profileImage,name,biography);
    },
    insertActor(actor){
        actor.save();
    }
};