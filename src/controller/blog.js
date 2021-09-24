const { execSQL } = require('../dbbase/mysql')


const getList = (author, keyword, listname) => {
  let sql = `select * from ${listname} `;
  if (author || keyword) {
    sql += `where `;
  }
  if (author) {
    sql += `author='${author}' `;
  }
  if (keyword) {
    sql += `and keyword like'%${keyword}%'`
  }
  console.log(sql);
  return execSQL(sql)
}
const createNewList = (id, author, keyword, listname) => {
  let sql = `insert into ${listname} (author,keyword) values (`

  if (author) {
    sql += `'${author}',`
  }
  if (keyword) {
    sql += `'${keyword}'`
  }
  sql += `)`
  console.log(sql);
  return execSQL(sql) //execSQL是我们定义的一个函数，返回值是Promise
}

const updateList = (listname, id, column, value) => {
  let sql = `update ${listname} set ${column}='${value}' where id = '${id}'`
  console.log(sql);
  return execSQL(sql) //execSQL是我们定义的一个函数，返回值是Promise
}

const deleteList = (listname, id) => {
  let sql = `delete from ${listname}  where id = '${id}'`
  console.log(sql);
  return execSQL(sql) //execSQL是我们定义的一个函数，返回值是Promise
}
module.exports = { getList, createNewList, updateList, deleteList }