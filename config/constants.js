/*jshint esversion: 6 */
const _ = require("../node_modules/underscore/underscore-min");

module.exports = {
    connectionString: "mongodb://localhost:27017/test",
    genres: ["action", "sci-fi", "fantasy", "horror", "comedy"],
    pagesCount: 1,
    searchUrl : _.template("http://www.imdb.com/search/title?genres=<%= genre %>&title_type=feature&0sort=moviemeter,asc&page=<%= page %>&view=simple&ref_=adv_nxt"),
    asyncPagesCount : 5,
    actorsUrl: _.template("http://www.imdb.com/name/nm<%= count %>/")
};