const config = require(".././config.js")
const userCode = require('../util/userCode')
var koa2Req = require('koa2-request');
const factory = require("./factory.js")
//
const bookType = factory.factoryCon("/book/getType")
const bookStyle = factory.factoryCon("/book/getStyle")
const book = factory.factoryCon("/book/getBook")
const bookSearch = factory.factoryCon("/book/getCondBook")
const styleSearch = factory.factoryCon("/book/getCondStyle")
const bookById = factory.factoryCon("/book/getById")
// async function bookType(ctx){
// 	let formData = ctx.query;
// 	var options = {
//     method: 'get',
//     uri: config.serverUrl+"/book/getType",
//     body: formData,
//     json: true // Automatically stringifies the body to JSON
// };
// 	let userResult = await koa2Req(options)

//   ctx.body = userResult.body
// }
// async function bookStyle(ctx){
// 	let formData = ctx.query;
// 	// console.log(formData)
// 	var options = {
//     method: 'get',
//     uri: config.serverUrl+"/book/getStyle",
//     body: formData,
//     json: true // Automatically stringifies the body to JSON
// 	};
// 	let userResult = await koa2Req(options)
// 	// let userResult = await ctx.get(config.serverUrl+"/book/getStyle",formData)

//   ctx.body = userResult.body
// }

// async function book(ctx){
// 	let formData = ctx.request.body;
// 	let userResult = await ctx.get(config.serverUrl+"/book/getBook",formData)

//   ctx.body = userResult
// }

// async function bookSearch(ctx){
// 	let formData = ctx.request.body;
// 	var options = {
//     method: 'get',
//     uri: config.serverUrl+"/book/getCondBook",
//     body: formData,
//     json: true // Automatically stringifies the body to JSON
// 	};
// 	let userResult = await koa2Req(options)
// 	// let userResult = await ctx.get(config.serverUrl+"/book/getCondBook",formData)

//   ctx.body = userResult.body
// }

// async function styleSearch(ctx){
// 	let formData = ctx.request.body;
// 	var options = {
//     method: 'get',
//     uri: config.serverUrl+"/book/getCondStyle",
//     body: formData,
//     json: true // Automatically stringifies the body to JSON
// 	};
// 	let userResult = await koa2Req(options)
// 	// let userResult = await ctx.get(config.serverUrl+"/book/getCondStyle",formData)

//   ctx.body = userResult.body
// }

// async function bookById(ctx){
// 	let formData = ctx.request.body;
// 	var options = {
//     method: 'get',
//     uri: config.serverUrl+"/book/getById",
//     body: formData,
//     json: true // Automatically stringifies the body to JSON
// 	};
// 	let userResult = await koa2Req(options)
// 	// let userResult = await ctx.get(config.serverUrl+"/book/getById",formData)

//   ctx.body = userResult.body
// }


module.exports = {
	bookType,
  bookStyle,
  book,
  bookSearch,
  styleSearch,
  bookById,
}
