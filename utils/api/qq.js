const request = require('../request.js')
const req = require("request");

class qq {
    static search (url, callback) {
        request.get(url, callback);
    }
    static get_play (url, callback) {
        request.get(url, callback);
    }
    static get_lyric (url, id, callback) {
        let data = url.replace("http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?", "");
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
}

module.exports = qq