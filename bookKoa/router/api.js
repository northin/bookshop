const router = require('koa-router')()
const authController = require('./../controller/authController')
const personController = require('./../controller/personController')
const commonController = require('./../controller/commonController')
const tradeController = require('./../controller/tradeController')
const checkToken = require('../token/checkToken.js');

const routers = router
	.post('/userDetail/getDetail',checkToken,personController.userDetail)
	.post('/userDetail/userDetailUpdate',checkToken,personController.userDetailUpdate)
	.post('/address/insert',checkToken,personController.addressInsert)
	.post('/address/update',checkToken,personController.addressUpdate)
	.post('/address/get',checkToken,personController.addressSelect)
	.post('/address/delete',checkToken,personController.addressDelete)
	.post('/collection/get',checkToken,personController.collectionQry)
	.post('/collection/delete',checkToken,personController.collectionDel)
	.post('/collection/insert',checkToken,personController.collectionInsert)
	.post('/cart/get',checkToken,personController.cartQry)
	.post('/cart/delete',checkToken,personController.cartDel)
	.post('/cart/insert',checkToken,personController.cartInsert)
	.post('/cart/update',checkToken,personController.cartUpdate)

	.get('/book/getType',commonController.bookType)
	.get('/book/getStyle',commonController.bookStyle)
	.post('/book/getBook',commonController.book)
	.post('/book/getCondBook',commonController.bookSearch)
	.post('/book/getCondStyle',commonController.styleSearch)
	.post('/book/getById',commonController.bookById)

	.post('/user/login',authController.login)
	.post('/user/reg', authController.register)
	.post('/user/loginOut', authController.loginOut)
	.post('/user/isLogin', authController.isLogin)

	.post('/order/get',checkToken, tradeController.orderQry)
	.post('/order/getAll',checkToken, tradeController.orderQryAll)
	.post('/order/delete',checkToken, tradeController.orderDel)
	.post('/order/insert',checkToken, tradeController.orderInsert)
	.post('/order/update',checkToken, tradeController.orderUpdate)
	.post('/order/pay',checkToken, tradeController.pay)


module.exports = routers
