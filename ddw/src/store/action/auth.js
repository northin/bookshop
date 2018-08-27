import api from '@/api/auth.js'
import * as types from '../types.js'
const actions = {
  login(store, loginData){
    return api.userLogin(loginData).then(res => {
      // console.log(res);
      if(!res.data.errorCode){
        store.commit(types.LOGIN, res.data.data);
      }else{
        store.commit(types.LOGINFAIL);
      }
      return res;
    })
  },
  isLogin(store, data){
    return api.isLogin(data).then(res => {
      return res;
    })
  },
  loginOut(store, loginData){
    return api.userLoginOut(loginData).then(res => {
      // console.log(res);
      if(!res.data.errorCode){
        store.commit(types.LOGINOUT);
      }else{
        // store.commit(types.LOGINFAIL);
      }
      return res;
    })
  },
  register(store, data){
    return api.register(data).then(res => {
      return res;
    })
  },
}
export default actions;
