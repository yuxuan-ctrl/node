const { SuccessModel, ErrorModel } = require('../model/responseModel')
const { getList, createNewList, updateList } = require('../controller/blog')

const handleBlogRoutes = (req, res) => {
  const id = req.query.id || '';
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  const listname = req.query.listname || 'blioglist'
  const idpost = req.body.id;
  const columnpost = req.body.update.split(':')[0];
  const valuepost = req.body.update.split(':')[1]
  const authorpost = req.body.author;
  const keywordpost = req.body.keyword;
  const listnamepost = req.body.listname;


  if (req.path === '/api/query' && req.method === 'GET') {
    const listDataPromise = getList(author, keyword, listname);
    return listDataPromise.then(listData => {
      return new SuccessModel(listData);
    })

  }
  if (req.path === '/api/new' && req.method === 'POST') {

    console.log(req.body);
    const createPromise = createNewList(idpost, authorpost, keywordpost, listnamepost)
    return createPromise.then((createNewList => {
      return new SuccessModel(createNewList)
    }))
  }
  if (req.path === '/api/update' && req.method === 'POST') {
    const updatePromise = updateList(listname, idpost, columnpost, valuepost)
    return updatePromise.then((updateList => {
      return new SuccessModel(updateList)
    }))
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