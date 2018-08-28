const koa = require("koa")
const config = require("./config")
const router = require("./router/index")
var bodyParser = require('koa-bodyparser');
var app = new koa()
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())


app.listen(config.port, () => {
	console.log(`the server is start at port ${config.port}`)
})
