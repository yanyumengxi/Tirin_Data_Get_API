const express = require('express');
const router = express.Router();
const qq = require('../utils/api/qq.js')
const kuwo = require('../utils/api/kuwo.js')
const kugou = require('../utils/api/kugou.js')
const netease = require('../utils/api/netease.js')
const {qq_recommend_songList_url, kugou_recommend_songList_url, kuwo_recommend_songList_url,
    netease_recommend_songList_url
} = require("../config/config");

router.get('/:type/recommend', function(req, res, next) {
    const type = req.params.type
    switch (type) {
        case 'qq':
            qq.get_recommend_songlist(qq_recommend_songList_url, (e, rp, r) => {
                // console.log(r)
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kugou':
            kugou.get_recommend_songlist(kugou_recommend_songList_url, (e, rp, r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'kuwo':
            kuwo.get_recommend_songlist(kuwo_recommend_songList_url, (r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
        case 'netease':
            netease.get_recommend_songlist(netease_recommend_songList_url, (e, rp, r) => {
                res.render('index', {
                    requestResult: r
                })
            })
            break;
    }
})

module.exports = router