const http = require('http'); // node.js里面的http模块

const Port = 5000;//端口号

const handleServe = require('../app')  //返回的数据

const serve = http.createServer(handleServe) //创建服务

serve.listen(Port, () => {
  console.log('Serve running in Port ' + Port);
})