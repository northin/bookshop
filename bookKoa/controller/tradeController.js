async function orderQry(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/get",formData)

  ctx.body = userResult
}
async function orderQryAll(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/getAll",formData)

  ctx.body = userResult
}
async function orderDel(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/delete",formData)

  ctx.body = userResult
}
async function orderInsert(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/insert",formData)

  ctx.body = userResult
}
async function orderUpdate(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/update",formData)

  ctx.body = userResult
}
async function pay(ctx){
  let formData = ctx.request.body;
  let userResult = await ctx.get(config.serverUrl+"/order/pay",formData)

  ctx.body = userResult
}

module.exports = {
	orderQry,
	orderQryAll,
  orderDel,
	orderInsert,
  orderUpdate,
  pay
}
