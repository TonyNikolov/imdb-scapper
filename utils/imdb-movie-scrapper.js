/* globals console require setTimeout Promise */
/*jshint esversion: 6 */

const httpRequester = require("./http-requester");
const wait = require("./utilities").wait;
const htmlParser = require("./html-parser");
const queuesFactory = require("../data-structures/queue");
const modelsFactory = require("../models");


let urlsQueue = queuesFactory.getQueue();

let getMoviesFromUrl = function (url) {
    console.log(`Working with ${url}`);
    httpRequester.get(url)
        .then((result) => {
            const selector = ".col-title span[title] a";
            const html = result.body;
            return htmlParser.parseSimpleMovie(selector, html);
        })
        .then(movies => {
            let dbMovies = movies.map(movie => {
                return modelsFactory.getSimpleMovie(movie.title, movie.url);
            });

            modelsFactory.insertManySimpleMovies(dbMovies);

            return wait(1000);
        })
        .catch((err) => {
            console.dir(err, { colors: true });
        });
};

module.exports.getMoviesFromUrl = getMoviesFromUrl;