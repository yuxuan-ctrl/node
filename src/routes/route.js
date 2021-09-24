const { SuccessModel, ErrorModel, bingEchartModel } = require('../model/responseModel')
const { getList, createNewList, updateList, deleteList } = require('../controller/blog')
const { getAlarmMsg, getBingData } = require('../controller/getAlarmData')
const handleBlogRoutes = (req, res) => {
  const id = req.query.id || '';
  const author = req.query.author || '';
  const keyword = req.query.keyword || '';
  const listname = req.query.listname || 'blioglist'
  const idpost = req.body.id;
  let columnpost;
  let valuepost;
  if (req.body.update) {
    columnpost = req.body.update.split(':')[0];
    valuepost = req.body.update.split(':')[1]
  }
  const authorpost = req.body.author;
  const keywordpost = req.body.keyword;
  const listnamepost = req.body.listname;


  if (req.path === '/api/query' && req.method === 'GET') {
    const listDataPromise = getList(author, keyword, listname);
    return listDataPromise.then(listData => {
      return new SuccessModel(listData);
    })

  }

  if (req.path === '/api/alarmData' && req.method === 'GET') {
    const listDataPromise = getAlarmMsg('alarmMsg')
    return listDataPromise.then(listData => {
      return new SuccessModel(listData)
    })
  }
  if (req.path === '/api/bingData' && req.method === 'GET') {
    const listDataPromise = getBingData()
    return listDataPromise.then(listData => {
      return new bingEchartModel(listData)
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
    const deletePromise = deleteList(listname, idpost)
    return deletePromise.then((deleteList => {
      return new SuccessModel(deleteList)
    }))
  }
}
module.exports = handleBlogRoutes