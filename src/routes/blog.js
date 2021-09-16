const { SuccessModel, ErrorModel } = require('../model/responseModel')


const handleBlogRoutes = (req, res) => {
  // req.path = req.url.spilt('?')[0];
  if (req.path === '/api/blog' && req.method === 'GET') {

    return {
      name: 'yuxuan',
      age: 18
    }
  }
  if (req.path === '/api/api' && req.method === 'GET') {
    return {
      name: 'feifen',
      age: 28
    }
  }
  if (req.path === '/api/yes' && req.method === 'POST') {
    return {
      name: 'fenfen',
      age: 8
    }
  }

}
module.exports = handleBlogRoutes