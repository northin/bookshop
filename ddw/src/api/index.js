import axios from 'axios'
import store from '../store'
import router from '../router'
import config from '../config/config'
import { AlertModule } from 'vux'
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

//创建一个axios的实例
const instance = axios.create({
  baseURL:config.url
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use = instance.interceptors.request.use;
axios.interceptors.response.use = instance.interceptors.response.use;
//request拦截器
instance.interceptors.request.use(
  config => {
    //每次请求前检测state的token
    if(store.state.token){
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

//response拦截器

instance.interceptors.response.use(
    response => {
        if(response.data.errorCode == -2){
          router.replace({ //跳转到登录页面
              path: '/login',
              query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          });

        }else{
          return response;
        }

    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){
            switch(error.response.status){
                case 401:   //token问题
                    // store.dispatch('UserLogout'); //可能是token过期，清除它
                    AlertModule.show({
                      title: '提示',
                      content: ('请先登录！'),
                      onShow () {
                        // console.log('Module: I\'m showing')
                      },
                      onHide () {
                        // console.log('Module: I\'m hiding now')
                      }
                    })
                    // router.replace({ //跳转到登录页面
                    //     path: '/login',
                    //     query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    // });
                    break
                case 500:
                    // store.dispatch('UserLogout'); //可能是token过期，清除它
                    AlertModule.show({
                      title: '提示',
                      content: ('服务器错误！'),
                      onShow () {
                        // console.log('Module: I\'m showing')
                      },
                      onHide () {
                        // console.log('Module: I\'m hiding now')
                      }
                    })
                    break
                    // router.replace({ //跳转到登录页面
                    //     path: '/login',
                    //     query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    // });
            }
        }
        return Promise.reject(error.response);
    }
);

// instance.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if(error.response){
//       switch (error.response.status) {
//         case 401:
//           // store.dispatch('userLogin');
//           router.replace({
//             path:'/', //没有token 返回登录页
//             query: { redirect: router.currentRoute.fullPath }  //登录后跳转到该页面
//           })
//
//       }
//
//     }
//     return Promise.reject(error.response.data);
//   }
// )

export default instance;
