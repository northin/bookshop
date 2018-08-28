const config = require(".././config.js")
const userCode = require('../util/userCode')
var koa2Req = require('koa2-request');

function factoryCon(url,type='get'){
    return async function ( ctx ) {
        let formData = ctx.request.body;
        var options = {
            method: type,
            uri: config.serverUrl+url,
            body: formData,
            json: true // Automatically stringifies the body to JSON
        };
        let userResult = await koa2Req(options)
        // let userResult = await ctx.get(config.serverUrl+"//",formData)
        ctx.body = userResult.body
    }
}
module.exports = {
    factoryCon:factoryCon
}