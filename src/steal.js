let axios = require('axios')
const iconvLite = require('iconv-lite');
const cheerio = require('cheerio');
let childrenList = []
for (let i = 1; i <= 16; i++) {
  var urlList = `https://www.dytt8.net/html/tv/oumeitv/list_9_${i}.html`
  axios.get(urlList, { responseType: 'arraybuffer' }).then((res, rej) => {
    const data = iconvLite.decode(res.data, 'gbk')
    var $ = cheerio.load(data)  // 加载需要的html
    var chapters = $('.tbspan a').each(function (i, e) {
      // console.log(e.attribs.href);
      childrenList.push(e.attribs.href)
    },
    ).attr("href");
    console.log(chapters);
    var courseData = [] // 创建一个数组，用来保存资源
    var a = chapters.each(function (item, index) {
      // console.log(item, index);
    })
    console.log(a);
    // console.log(data);
    // console.log(rej);
  }).catch(err => {
    // console.log(err);
  })
}


