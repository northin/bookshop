const Router = require('koa-router');
// const home = require('./home')
const error = require('./error')
const api = require('./api')

//装载路由
let router = new Router();



// router.use('/', home.routes(), home.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())


module.exports = router
