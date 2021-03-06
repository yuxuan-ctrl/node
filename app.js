const handleBlogRoutes = require('./src/routes/route')
const url = require('url')
const querystring = require('querystring')

const getPostData = (req, res) => {
  return new Promise((resolve, rej) => {
    if (req.method != 'POST') {
      resolve({});
      return;
    }
    if (req.headers['content-type'] != 'application/json') {
      resolve({});
      return;
    }

    let postData = '';
    req.on('data', chunk => { //当有数据可读时触发
      postData += chunk.toString();
    })
    req.on('end', () => {   //当没有数据可读时触发 
      if (!postData) {
        resolve({});
      }

      resolve(JSON.parse(postData))

    })

  })
}
const handleServe = (req, res) => {
  console.log(url.parse(req));
  res.setHeader('Content-Type', 'application/json') //设置数据返回的格式
  res.setHeader("Access-Control-Allow-Origin", "*");
  req.query = querystring.parse(req.url.split('?')[1])
  req.path = req.url.split('?')[0];
  getPostData(req).then((postData) => {
    req.body = postData;
    const blogNamePromise = handleBlogRoutes(req, res);
    if (blogNamePromise) {
      blogNamePromise.then((blogName) => {
        res.end(JSON.stringify(blogName));
      })
      return;
    }
    res.writeHead(404, { "Content-Type": 'text/plain' })
    res.write('404 Not Found')
    res.end()
  })

}

module.exports = handleServe;