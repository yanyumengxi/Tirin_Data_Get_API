// Global URL
const lyric_URL_Header = "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?";
const recommend_URL_Header = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?";
const recommend_URL_Header_kugou = "https://gateway.kugou.com/specialrec.service/special_recommend?";
const recommend_URL_Body = "{\"appid\":1005,\"clientver\":11175,\"platform\":\"android\",\"clienttime\":1652278621,\"module_id\":1,\"mid\":\"286965302025480660759526968984819273431\",\"userid\":\"1535677767\",\"req_multi\":1,\"page\":1,\"pagesize\":30,\"session\":\"1652278612_2\",\"key\":\"cebcb3bb01a913105043e9bf8abc45c1\",\"theme_last_showtime\":0,\"apiver\":4,\"fakem\":\"8b214795671ea4c161c8cbb1100014814a1b\",\"special_recommend\":{\"withtag\":1,\"withsong\":0,\"sort\":3,\"categoryid\":0,\"ugc\":1,\"is_selected\":0,\"area_code\":\"1\"},\"u_info\":\"391407a73175e3e942bd61bb76fdb01466e9f6a6e60984f929042bc42bd0609a448a5de8d31202d1225f78d18d20a2241651f32fc75d3ae52cd2cb92686b7b1c6e5a7900dab2e35a160a23f4fff04162\",\"album_statistic_count\":{\"20220509\":{\"click_count\":0,\"exposure_count\":0},\"20220508\":{\"click_count\":0,\"exposure_count\":0},\"20220507\":{\"click_count\":0,\"exposure_count\":0},\"20220506\":{\"click_count\":0,\"exposure_count\":0},\"20220505\":{\"click_count\":0,\"exposure_count\":0},\"20220511\":{\"click_count\":0,\"exposure_count\":0},\"20220510\":{\"click_count\":0,\"exposure_count\":0}},\"clientcache\":1}";
// Search URL
const qq_search_url = "http://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w={keyword}&format=json";
const kugou_search_url = "http://songsearch.kugou.com/song_search_v2?keyword={keyword}&page=1";
const kuwo_search_url = "http://search.kuwo.cn/r.s?all={keyword}&ft=music&itemset=web_2013&client=kt&pn=1&rn=30&rformat=json&encoding=utf8";
const netease_search_url = "http://music.163.com/api/search/get/web?csrf_token=hlpretag=&hlposttag=&s={keyword}&type=1&offset=0&total=true&limit=20";
// Play Address URL
const qq_play_url = "http://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={\"req_0\":{\"module\":\"vkey.GetVkeyServer\",\"method\":\"CgiGetVkey\",\"param\":{\"guid\":\"10000\",\"songmid\":[\"{keyword}\"],\"songtype\":[0],\"uin\":\"0\",\"loginflag\":1,\"platform\":\"20\"}},\"comm\":{\"uin\":0,\"format\":\"json\",\"ct\":20,\"cv\":0}}";
const kugou_play_url = "http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash={keyword}";
const kuwo_play_url = "http://antiserver.kuwo.cn/anti.s?type=convert_url&rid={keyword}&format=aac|mp3&response=url";
const netease_play_url = "http://music.163.com/api/song/enhance/player/url?id={keyword}&ids=%5B{keyword}%5D&br=3200000";
// Lyric URL
const qq_lyric_url = "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?nobase64=1&musicid={keyword}&callback=jsonp1&g_tk=5381&jsonpCallback=jsonp1&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf8=0&platform=yqq&needNewCode=0";
const kugou_lyric_url = "http://m.kugou.com/app/i/krc.php?cmd=100&hash={keyword}&timelength=3012000";
const kuwo_lyric_url = "http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId={keyword}";
const netease_lyric_url = "http://music.163.com/api/song/lyric?id={keyword}&lv=1&kv=1&tv=-1";
// Album Pic URL
const qq_album_pic_url = "https://y.qq.com/music/photo_new/T002R300x300M000{keyword}.jpg";
const kugou_album_pic_url = "http://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash={keyword}&dfid=0jJ7mD0bl98c1ew8mN1nhOTN&appid=1014&mid=99a4ccaedd0af2b6f82babcec28256cb&platid=4&album_id=43576862&_=1643286284645";
const kuwo_album_pic_url = "http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId={keyword}";
const netease_album_pic_url = "http://music.163.com/api/song/detail/?id={keyword}&ids=%5B{keyword}%5D";
// Recommend SongList URL
const qq_recommend_songList_url = "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.4826250867848212&g_tk=732560869&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=10000000000";
// const kugou_recommend_songList_url = "http://gateway.kugou.com/specialrec.service/special_recommend?dfid=2lxWdY1Aetic0LS9fn0IRW7I&Content-Encoding=gzip&mid=286965302025480660759526968984819273431&clienttime=1652278621&KG-THash=4526531&Accept-Encoding=gzip%2C%20deflate&User-Agent=Android10-AndroidPhone-11175-201-0-recommend-wifi&KG-RC=1&KG-FAKE=1535677767&KG-RF=0080edba&Content-Length=489&Host=gateway.kugou.com&Connection=Keep-Alive";
const kugou_recommend_songList_url = "http://gateway.kugou.com/specialrec.service/special_recommend?dfid=2lxWdY1Aetic0LS9fn0IRW7I&Content-Encoding=gzip&mid=286965302025480660759526968984819273431&clienttime=1652278621&KG-THash=4526531&Accept-Encoding=gzip%2C%20deflate&User-Agent=Android10-AndroidPhone-11175-201-0-recommend-wifi&KG-RC=1&KG-FAKE=1535677767&KG-RF=0080edba&Content-Length=489&Host=gateway.kugou.com&Connection=Keep-Alive";
const kuwo_recommend_songList_url = "http://wapi.kuwo.cn/api/mobicase/playlist/taglist?type=hot_taglist&digest=10000&start=0&count=200&format=new&isnew=1&apiVer=1&source=kwplayer_ar_10.1.2.1_138.apk&loginUid=509372710&loginSid=1334199501&sid=1334199501&prod=kwplayer_ar_10.1.2.1&platform=ar&uid=2466033307&corp=kuwo&q36=8b214795671ea4c161c8cbb1100014814a1b&vipver=10.1.2.1&newver=3";
const netease_recommend_songList_url = "https://netease-musicapi.vercel.app/top/playlist/highquality&limit=10000000000";

function get(key, value) {
    return key.replaceAll('{keyword}', value)
}

module.exports = {
    get,
    lyric_URL_Header,
    recommend_URL_Header,
    recommend_URL_Header_kugou,
    recommend_URL_Body,
    qq_search_url,
    kugou_search_url,
    kuwo_search_url,
    netease_search_url,
    qq_play_url,
    kugou_play_url,
    kuwo_play_url,
    netease_play_url,
    qq_lyric_url,
    kugou_lyric_url,
    kuwo_lyric_url,
    netease_lyric_url,
    qq_album_pic_url,
    kugou_album_pic_url,
    kuwo_album_pic_url,
    netease_album_pic_url,
    qq_recommend_songList_url,
    kugou_recommend_songList_url,
    kuwo_recommend_songList_url,
    netease_recommend_songList_url,
}