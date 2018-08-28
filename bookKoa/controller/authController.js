const createToken = require('../token/createToken')
const config = require(".././config.js")
const userCode = require('../util/userCode')
var koa2Req = require('koa2-request');
const factory = require("./factory.js")

async function login( ctx ) {
	let formData = ctx.request.body;
	var options = {
		method: 'post',
		uri: config.serverUrl+"/user/login",
		body: formData,
		json: true // Automatically stringifies the body to JSON
	};
	let userResult = await koa2Req(options)
	// let userResult = await ctx.get(config.serverUrl+"//",formData)
	if(userResult.body.errorCode == 0){
		userResult.body.token = createToken("1477158484@qq.com")
	}
	ctx.body = userResult.body
}

// //注册
// async function register(ctx){

// 	let formData = ctx.request.body;

// 	let userResult = await ctx.get(config.serverUrl+"/user/reg",formData)

//   ctx.body = userResult

// }
// //登出
// async function loginOut(ctx){
// 	let formData = ctx.request.body;

//   let userResult = await ctx.get(config.serverUrl+"/user/loginOut",formData)

//   ctx.body = userResult

// }
//登录
// const login = factory.factoryCon("/user/login",'post')
const register = factory.factoryCon("/user/reg",'post')
const loginOut = factory.factoryCon("/user/loginOut")
const isLogin = factory.factoryCon("/user/isLogin")

// async function isLogin(ctx){
//   let formData = ctx.request.body;
// 	var res = await koa2Req(config.serverUrl+"/user/isLogin");

// 	ctx.body = res.body;
// }

module.exports = {
	login,
	register,
  loginOut,
	isLogin
}
