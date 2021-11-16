const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

// 创建 express 应用
const app = express()

// function mylogger(req, res, next){
//     console.log('mylogger')
//     next();
// }
// app.use(mylogger)

// 监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//   throw new Error('error....')
// })
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/',router)          //router 是中间件

// app.post('/user', function(req,res){
//     res.json('user...')
// })

// function errorHandler(err, req, res, next){
//     console.log(err)
//     res.status(500).json({
//         error: -1,
//         msg: err.toString()
//     })
// }
// app.use(errorHandler)

// 使 express 监听 5000 端口号发起的 http 请求
const privateKey = fs.readFileSync('./https/gotoplay.xyz.key')
const pem = fs.readFileSync('./https/gotoplay.xyz.pem')
const credentials = {
  key: privateKey,
  cert:pem
}
const httpsServer = https.createServer(credentials, app)
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
httpsServer.listen (18082, function(){
  console.log('Http Server is running on http://localhost:%s', 18082)

})