const { execSQL } = require('../dbbase/mysql')

const getAlarmMsg = (listname) => {
  let sql = `select * from ${listname}`
  return execSQL(sql)
}
const getBingData = () => {
  let sql = `select * from bingdata`
  return execSQL(sql)
}
module.exports = { getAlarmMsg, getBingData }