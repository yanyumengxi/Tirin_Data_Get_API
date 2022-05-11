const request = require('../request.js')
const req = require("request");
const {lyric_URL_Header, recommend_URL_Header} = require("../../config/config");

class qq {
    static search (url, callback) {
        request.get(url, callback);
    }
    static get_play (url, callback) {
        request.get(url, callback);
    }
    static get_lyric (url, id, callback) {
        let data = url.replace(lyric_URL_Header, "");
        let options = {
            url: url,
            method: 'POST',
            headers: {
                "referer": "https://y.qq.com/"
            },
            body: data
        }
        req(options, callback);
    }
    static get_pic (url, callback) {
        callback(url);
    }
    static get_recommend_songlist (url, callback) {
        let data = url.replace(recommend_URL_Header, "");
        let options = {
            url: url,
            method: 'POST',
            headers: {
                "referer": "https://y.qq.com/"
            },
            body: data
        }
        req(options, callback);
    }
}

module.exports = qq