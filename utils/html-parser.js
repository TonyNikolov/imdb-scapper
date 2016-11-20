/* globals console require setTimeout Promise */
/*jshint esversion: 6 */

"use strict";

const jsdom = require("jsdom").jsdom,
    doc = jsdom(),
    window = doc.defaultView,
    $ = require("jquery")(window);

module.exports.parseSimpleMovie = (selector, html) => {
    $("body").html(html);
    let items = [];
    $(selector).each((index, item) => {
        const $item = $(item);

        items.push({
            title: $item.html(),
            url: $item.attr("href")
        });
    });

    return Promise.resolve()
        .then(() => {
            return items;
        });
};
module.exports.parseSimpleActor = (nameSelector,profileImgSelector,bioSelector,html) => {
    $("body").html(html);
    let nameActor = $(nameSelector).html();
    let profilePhoto = $(profileImgSelector).html();
    let biographyActor = $(bioSelector).html();

    let actor = {
        profileImage:profilePhoto,
        name:nameActor,
        biography:biographyActor
    };
    
    return Promise.resolve()
        .then(() => {
            return actor;
        });
};