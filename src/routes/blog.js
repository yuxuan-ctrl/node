const { SuccessModel, ErrorModel } = require('../model/responseModel')
const { getList, createNewList } = require('../controller/blog')
const { execSQL } = require('../dbbase/mysql')

const handleBlogRoutes = (req, res) => {
  const id = req.query.id || '';
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  // req.path = req.url.spilt('?')[0];
  if (req.path === '/api/blog' && req.method === 'GET') {
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
    // return {
    //   name: 'yuxuan',
    //   age: 18
    // }
  }
  if (req.path === '/api/app' && req.method === 'GET') {
    const sql = `select * from blioglist;`;
    execSQL(sql).then(res => {
      console.log(res);

    })


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