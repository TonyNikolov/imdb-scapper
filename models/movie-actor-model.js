/*jshint esversion: 6 */


const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let movieActorSchema = new Schema({
    profileImage: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    biography:{
        type: String
    },
    movies:[]
});

movieActorSchema.virtual.imdbUr = function(){
    return `http://imdb.com/title/${this.imdbId}/?ref_=adv_li_tt`;
};


let MovieActor;
movieActorSchema.statics.getMovieActor =
    function(profileImage,name,biography) {
        return new MovieActor({ profileImage,name,biography});
    };


mongoose.model("MovieActor", movieActorSchema);
MovieActor = mongoose.model("MovieActor");
module.exports = MovieActor;