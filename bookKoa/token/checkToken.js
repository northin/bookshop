const jwt = require('jsonwebtoken')

module.exports = async (ctx, next) => {
	if(ctx.request.header['authorization']){
		let token = ctx.request.header['authorization'].split(' ')[1]

		let decoded = jwt.decode(token, 'zhangchunxu');
		if(token && decoded.exp <= new Date()/1000){
			ctx.status = 401;
            ctx.body = {
                message: 'token过期'
            };
		}else{
			return next();
		}
	}else{
		ctx.status = 401;
        ctx.body = {
            message: '没有token'
        }
	}
}
