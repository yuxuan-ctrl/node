const { execSQL } = require('../dbbase/mysql')


const getList = (author, keyword) => {
  let sql = `select * from blioglist where;`;
  if (author) {
    sql += `and author='${author}'`;
  }
  if (keyword) {
    sql += `and title like'%${keyword}%'`
  }
  return execSQL(sql)

  // return [
  //   {
  //     id: 1,
  //     name: 'yuxuan',
  //     age: 18,
  //     author: 'xuan',
  //     keyword: 123
  //   },
  //   {
  //     id: 2,
  //     name: 'feifen',
  //     age: 20,
  //     author: 'fen',
  //     keyword: 123
  //   },
  //   {
  //     id: 3,
  //     name: 'gougou',
  //     age: 3,
  //     author: 'gou',
  //     keyword: 123
  //   }

  // ]
}
const createNewList = (id) => {
  return {
    id: 567
  }
}
const updateList = () => {
  return {

  }
}
module.exports = { getList, createNewList }