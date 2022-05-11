const request = require('../request.js')
const req = require('request')
const {recommend_URL_Header_kugou, recommend_URL_Body, kugou_recommend_songList_url} = require("../../config/config");
const axios = require("axios");

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
    static get_recommend_songlist (url, callback) {
        let data = '{"appid":1005,"clientver":11175,"platform":"android","clienttime":1652278621,"module_id":1,"mid":"286965302025480660759526968984819273431","userid":"1535677767","req_multi":1,"page":1,"pagesize":30,"session":"1652278612_2","key":"cebcb3bb01a913105043e9bf8abc45c1","theme_last_showtime":0,"apiver":4,"fakem":"8b214795671ea4c161c8cbb1100014814a1b","special_recommend":{"withtag":1,"withsong":0,"sort":3,"categoryid":0,"ugc":1,"is_selected":0,"area_code":"1"},"u_info":"391407a73175e3e942bd61bb76fdb01466e9f6a6e60984f929042bc42bd0609a448a5de8d31202d1225f78d18d20a2241651f32fc75d3ae52cd2cb92686b7b1c6e5a7900dab2e35a160a23f4fff04162","album_statistic_count":{"20220509":{"click_count":0,"exposure_count":0},"20220508":{"click_count":0,"exposure_count":0},"20220507":{"click_count":0,"exposure_count":0},"20220506":{"click_count":0,"exposure_count":0},"20220505":{"click_count":0,"exposure_count":0},"20220511":{"click_count":0,"exposure_count":0},"20220510":{"click_count":0,"exposure_count":0}},"clientcache":1}';
        let options = {
            url: url,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36',
                'Content-Type': 'application/json'
            },
            body: data
        };
        req(options, callback)
    }
}

module.exports = kugou