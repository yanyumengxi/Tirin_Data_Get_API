const express = require('express');
const router = express.Router();
const qq = require('../utils/api/qq.js')
const kuwo = require('../utils/api/kuwo.js')
const kugou = require('../utils/api/kugou.js')
const netease = require('../utils/api/netease.js')
const {qq_play_url, get, kugou_play_url, kuwo_play_url, netease_play_url} = require("../config/config");

router.get('/:type/playurl/:id', function(req, res, next) {
    const id = req.params.id
    const type = req.params.type
    switch (type) {
        case 'qq':
            qq.get_play(get(qq_play_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kugou':
            kugou.get_play(get(kugou_play_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kuwo':
            kuwo.get_play(get(kuwo_play_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'netease':
            netease.get_play(get(netease_play_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
    }
})

module.exports = router