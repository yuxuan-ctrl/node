const handleBlogRoutes = require('./src/routes/blog')

const handleServe = (req, res) => {
  res.setHeader('Content-Type', 'application/json') //设置数据返回的格式

  req.path = req.url.split('?')[0];
  const blogName = handleBlogRoutes(req, res)
  if (blogName) {
    res.end(JSON.stringify(blogName));
    return
  }
  res.writeHead(404, { "Content-Type": 'text/plain' })
  res.write('404 Not Found')
  res.end()
}

module.exports = handleServe;