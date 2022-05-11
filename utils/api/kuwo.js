const request = require('../request.js')
const req = require('request');

class kuwo {
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
        request.get(url, callback)
    }
}

module.exports = kuwo