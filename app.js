require('module-alias/register')
const koa = require('koa')
const path = require('path')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const static = require('koa-static')

const app = new koa();
app.use(catchError)
app.use(parser())
app.use(static(path.join(__dirname,'./static')))
InitManager.initCore(app)
app.listen(3000);