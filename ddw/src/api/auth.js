import instance from './index.js'

export default {
  userLogin(data){
    return instance.post('/user/login',data);
  },
  userLoginOut(data){
    return instance.post('/user/loginOut',data);
  },
  isLogin(data){
    return instance.post('/user/isLogin',data);
  },
  register(data){
    return instance.post('/user/reg',data);
  },
}
