const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const serve = require('koa-static')
const controller = require('./controller')
const path = require('path')
const port = 3888


// 使用静态文件
app.use(serve(path.join(__dirname + '/static')))

// 根据路由渲染html页面
// app.use(main)

app.use(bodyParser())
app.use(controller())

app.listen(port)
console.log(`haha ${port}`)