const express = require('express');
const router = express.Router();
const qq = require('../utils/api/qq.js')
const kuwo = require('../utils/api/kuwo.js')
const kugou = require('../utils/api/kugou.js')
const netease = require('../utils/api/netease.js')
const {get, qq_lyric_url, kugou_lyric_url, kuwo_lyric_url, netease_lyric_url} = require("../config/config");

router.get('/:type/lyric/:id', function(req, res, next) {
    const id = req.params.id
    const type = req.params.type
    switch (type) {
        case 'qq':
            qq.get_lyric(get(qq_lyric_url, id), id,(e, resp, r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kugou':
            kugou.get_lyric(get(kugou_lyric_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kuwo':
            kuwo.get_lyric(get(kuwo_lyric_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'netease':
            netease.get_lyric(get(netease_lyric_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
    }
})

module.exports = router