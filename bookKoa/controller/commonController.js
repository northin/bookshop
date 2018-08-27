const config = require(".././config.js")
const userCode = require('../util/userCode')

//登出
async function bookType(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getType",formData)

  ctx.body = userResult
}
async function bookStyle(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getStyle",formData)

  ctx.body = userResult
}
async function book(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getBook",formData)

  ctx.body = userResult
}
async function bookSearch(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getCondBook",formData)

  ctx.body = userResult
}
async function styleSearch(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getCondStyle",formData)

  ctx.body = userResult
}
async function bookById(ctx){
	let formData = ctx.request.body;
	let userResult = await ctx.get(config.serverUrl+"/book/getById",formData)

  ctx.body = userResult
}


module.exports = {
	bookType,
  bookStyle,
  book,
  bookSearch,
  styleSearch,
  bookById,
}
