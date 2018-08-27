const createToken = require('../token/createToken')
const config = require(".././config.js")
const userCode = require('../util/userCode')
//登录
async function login( ctx ) {
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/user/login",formData)
	ctx.body = userResult
}

//注册
async function register(ctx){

	let formData = ctx.request.body;

	let userResult = await ctx.get(config.serverUrl+"/user/reg",formData)

  ctx.body = userResult

}
//登出
async function loginOut(ctx){
	let formData = ctx.request.body;

  let userResult = await ctx.get(config.serverUrl+"/user/loginOut",formData)

  ctx.body = userResult

}



async function isLogin(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/user/isLogin",formData)

  ctx.body = userResult
}

module.exports = {
	login,
	register,
  loginOut,
	isLogin
}
