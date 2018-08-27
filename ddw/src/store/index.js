import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutation'
Vue.use(Vuex)

const state = {
  token: window.sessionStorage.token,
  isLoginFail:false
}


export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules:{
    // person:person,
    // trade,
    // auth,
    // common
  }
})
