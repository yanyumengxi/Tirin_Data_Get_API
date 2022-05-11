const request = require('../request.js')
const req =require('request');
const cheerio = require("cheerio");
// const {JSDOM} = require("jsdom");

class netease {
    static search (url, callback) {
        request.get(url, callback);
    }
    static get_play (url, callback) {
        request.get(url, callback);
    }
    static get_lyric (url, callback) {
        request.get(url, callback);
    }
    static get_pic (url, callback) {
        request.get(url, callback);
    }
    static get_recommend_songlist (url, callback) {
        let options = {
            url: url,
            method: "GET",
        }
        req(options, callback)
    }
}

module.exports = netease