const mysql = require('mysql');

const shuju = require('../config/db')

const connection = mysql.createConnection(shuju)

connection.connect();

async function execSQL(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(result)
      }
    })
  })
}

module.exports = {
  execSQL
}