/*jshint esversion: 6 */
let wait= function(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);});
};

module.exports.wait = wait;