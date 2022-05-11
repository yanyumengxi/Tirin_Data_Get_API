const request = require('../request.js')
const req = require('request')

class kugou {
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
}

module.exports = kugou