const config = require(".././config.js")
const userCode = require('../util/userCode')
const factory = require("./factory.js")
//获取用户具体信息
const userDetail = factory.factoryCon("/userDetail/getDetail")
const userDetailUpdate = factory.factoryCon("/userDetail/update",'post')


// async function userDetail(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/userDetail/getDetail",formData)
// 	ctx.body = userResult
// }

// async function userDetailUpdate(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/userDetail/update",formData)
// 	ctx.body = userResult
// }

//收获地址
const addressInsert = factory.factoryCon("/address/insert",'post')
const addressUpdate = factory.factoryCon("/address/update",'post')
const addressSelect = factory.factoryCon("/address/get")
const addressDelete = factory.factoryCon("/address/delete",'post')
// async function addressInsert(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/address/insert",formData)
// 	ctx.body = userResult
// }
// async function addressUpdate(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/address/update",formData)
// 	ctx.body = userResult
// }
// async function addressSelect(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/address/get",formData)
// 	ctx.body = userResult
// }
// async function addressDelete(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/address/delete",formData)
// 	ctx.body = userResult
// }


//收藏
const collectionQry = factory.factoryCon("/collection/get")
const collectionDel = factory.factoryCon("/collection/delete",'post')
const collectionInsert = factory.factoryCon("/collection/insert",'post')
// async function collectionQry(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/collection/get",formData)
// 	ctx.body = userResult
// }
// async function collectionDel(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/collection/delete",formData)
// 	ctx.body = userResult
// }
// async function collectionInsert(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/collection/insert",formData)
// 	ctx.body = userResult
// }

//购物车
const cartQry = factory.factoryCon("/cart/get")
const cartDel = factory.factoryCon("/cart/delete",'post')
const cartInsert = factory.factoryCon("/cart/insert",'post')
const cartUpdate = factory.factoryCon("/cart/update",'post')
// async function cartQry(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/cart/get",formData)
// 	ctx.body = userResult
// }

// async function cartDel(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/cart/delete",formData)
// 	ctx.body = userResult
// }
// async function cartInsert(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/cart/insert",formData)
// 	ctx.body = userResult
// }
// async function cartUpdate(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/cart/update",formData)
// 	ctx.body = userResult
// }

module.exports = {
	userDetail,
	userDetailUpdate,
	addressInsert,
	addressUpdate,
	addressSelect,
	addressDelete,
	collectionQry,
	collectionDel,
	collectionInsert,
	cartQry,
	cartDel,
	cartInsert,
	cartUpdate,

}
