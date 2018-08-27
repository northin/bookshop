const router = require('koa-router')()
const authController = require('./../controller/authController')
const personController = require('./../controller/personController')
const commonController = require('./../controller/commonController')
const tradeController = require('./../controller/tradeController')
const checkToken = require('../token/checkToken.js');

const routers = router
	.post('/userDetail/getDetail',personController.userDetail)
	.post('/userDetail/userDetailUpdate',personController.userDetailUpdate)
	.post('/address/insert',personController.addressInsert)
	.post('/address/update',personController.addressUpdate)
	.post('/address/get',personController.addressSelect)
	.post('/address/delete',personController.addressDelete)
	.post('/collection/get',personController.collectionQry)
	.post('/collection/delete',personController.collectionDel)
	.post('/collection/insert',personController.collectionInsert)
	.post('/cart/get',personController.cartQry)
	.post('/cart/delete',personController.cartDel)
	.post('/cart/insert',personController.cartInsert)
	.post('/cart/update',personController.cartUpdate)

	.post('/book/getType',commonController.bookType)
	.post('/book/getStyle',commonController.bookStyle)
	.post('/book/getBook',commonController.book)
	.post('/book/getCondBook',commonController.bookSearch)
	.post('/book/getCondStyle',commonController.styleSearch)
	.post('/book/getById',commonController.bookById)

	.post('/user/login',authController.login)
	.post('/user/reg', authController.register)
	.post('/user/loginOut', authController.loginOut)
	.post('/user/isLogin', authController.isLogin)

	.post('/order/get', tradeController.orderQry)
	.post('/order/getAll', tradeController.orderQryAll)
	.post('/order/delete', tradeController.orderDel)
	.post('/order/insert', tradeController.orderInsert)
	.post('/order/update', tradeController.orderUpdate)
	.post('/order/pay', tradeController.pay)


module.exports = routers
