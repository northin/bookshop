const koa = require("koa")
const config = require("./config")
const router = require("./router/index")

var app = new koa()

app.use(router.routes()).use(router.allowedMethods())


app.listen(config.port, () => {
	console.log(`the server is start at port ${config.port}`)
})
