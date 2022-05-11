const http = require('http')
const req = require('request')

class request {
    static get (url, callback) {
        let res;
        http.get(url, (r) => {
            let html = [];
            let htmlLength = 0;
            r.on('data', (w) => {
                html.push(w)
                htmlLength += w.length
            })
            r.on('end', () => {
                const data = Buffer.concat(html, htmlLength);
                res = data.toString()
                callback(res);
            })
        })
    }
    static getPost (url, header, body, callback) {
        let options = {
            url: url,
            method: "POST",
            headers: header,
            body: body
        }
        req(options, callback);
    }
}

module.exports = request