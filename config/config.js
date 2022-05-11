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

function get(key, value) {
    return key.replaceAll('{keyword}', value)
}

module.exports = {
    get,
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
}