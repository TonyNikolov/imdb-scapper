/* globals console require setTimeout Promise */
/*jshint esversion: 6 */

const queuesFactory = require("./data-structures/queue");
const getMoviesFromUrl = require("./utils/imdb-movie-scrapper").getMoviesFromUrl;
const constants = require("./config/constants");
const getActorsFromUrl = require("./utils/imdb-actor-scrapper").getActorsFromUrl;

require("./config/mongoose")(constants.connectionString);

let movieUrlsQueue = queuesFactory.getQueue();
let actorUrlsQueue = queuesFactory.getQueue();

//get actors
for(let i = 0; i < 1000;i+=1){
    let url = constants.actorsUrl({count: i+1});
    actorUrlsQueue.push(url);
}

//get movies by genre
// constants.genres.forEach(genre => {
//     for (let i = 0; i < constants.pagesCount; i += 1) {
//         let url = constants.searchUrl({genre:genre,page: i+1});
//         movieUrlsQueue.push(url);
//     }
// });

Array.from({ length: constants.asyncPagesCount })
    .forEach(() => getActorsFromUrl(actorUrlsQueue.pop()));

// Array.from({ length: constants.asyncPagesCount })
//     .forEach(() => getMoviesFromUrl(movieUrlsQueue.pop()));