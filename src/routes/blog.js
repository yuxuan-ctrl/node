const { SuccessModel, ErrorModel } = require('../model/responseModel')
const { getList, createNewList } = require('../controller/blog')

const handleBlogRoutes = (req, res) => {
  const id = req.query.id || '';
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  // req.path = req.url.spilt('?')[0];
  if (req.path === '/api/blog' && req.method === 'GET') {
    const listDataPromise = getList(author, keyword);
    return listDataPromise.then(listData => {
      return new SuccessModel(listData);
    })
    // return {
    //   name: 'yuxuan',
    //   age: 18
    // }
  }
  if (req.path === '/api/app' && req.method === 'GET') {


  }
  if (req.path === '/api/new' && req.method === 'POST') {
    console.log(req.body);
    return new SuccessModel(createNewList(id))
  }
  if (req.path === '/api/update' && req.method === 'POST') {
    console.log(req.body);
    return {
      name: 'fenfen',
      age: 8
    }
  }
  if (req.path === '/api/delete' && req.method === 'POST') {
    console.log(req.body);
    return {
      name: 'fenfen',
      age: 8
    }
  }
}
module.exports = handleBlogRoutes