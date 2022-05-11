const express = require('express');
const router = express.Router();
const qq = require('../utils/api/qq.js')
const kuwo = require('../utils/api/kuwo.js')
const kugou = require('../utils/api/kugou.js')
const netease = require('../utils/api/netease.js')
const {get, qq_album_pic_url, kugou_album_pic_url, kuwo_album_pic_url, netease_album_pic_url} = require("../config/config");

router.get('/:type/pic/:id', function(req, res, next) {
    const id = req.params.id
    const type = req.params.type
    switch (type) {
        case 'qq':
            qq.get_pic(get(qq_album_pic_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kugou':
            kugou.get_pic(get(kugou_album_pic_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kuwo':
            kuwo.get_pic(get(kuwo_album_pic_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'netease':
            netease.get_pic(get(netease_album_pic_url, id), (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
    }
})

module.exports = router