/* globals console require setTimeout Promise */
/*jshint esversion: 6 */


const httpRequester = require("./http-requester");
const wait = require("./utilities").wait;
const htmlParser = require("./html-parser");
const queuesFactory = require("../data-structures/queue");
const modelsFactory = require("../models");


let urlsQueue = queuesFactory.getQueue();

let getActorsFromUrl = function (url) {
    console.log(`Working with ${url}`);
    httpRequester.get(url)
        .then((result) => {
            const nameSelector ="h1.header span[itemprop='name']";
            const profileImgSelector ="img#name-poster"; 
            const bioSelector = "span[itemprop='description']"; 
            const filmographySelector="div.filmo-category-section";
            const html = result.body;

            return htmlParser.parseSimpleActor(nameSelector,profileImgSelector,bioSelector,html);
        })
        .then(actors => {
            let dbActors = modelsFactory.getSimpleActor(actors.profileImage,actors.name,actors.biography);

            modelsFactory.insertActor(dbActors);

            return wait(1000);
        })
        .catch((err) => {
            console.dir(err, { colors: true });
        });
};

module.exports.getActorsFromUrl = getActorsFromUrl;