const express = require('express');
const router = express.Router();
const qq = require('../utils/api/qq.js')
const kuwo = require('../utils/api/kuwo.js')
const kugou = require('../utils/api/kugou.js')
const netease = require('../utils/api/netease.js')
const { get, qq_search_url, kugou_search_url, kuwo_search_url, netease_search_url } = require("../config/config");

router.get('/:type/search/:keyword', function(req, res, next) {
  const keyword = req.params.keyword;
  const type = req.params.type;
  switch (type) {
    case 'qq':
      qq.search(get(qq_search_url, keyword), (r) => {
        res.render('index', {
          requestResult: r
        })
      })
      break;
    case 'kugou':
      kugou.search(get(kugou_search_url, keyword), (r) => {
        res.render('index', {
          requestResult: r
        })
      })
      break;
    case 'kuwo':
      kuwo.search(get(kuwo_search_url, keyword), (r) => {
        res.render('index', {
          requestResult: r.replaceAll('\'', '"')
        })
      })
      break;
    case 'netease':
      netease.search(get(netease_search_url, keyword), (r) => {
        res.render('index', {
          requestResult: r
        })
      })
      break;
  }
});

module.exports = router;
