import Vue from 'vue'
import Router from 'vue-router'
import person from './person.js'
import store from '@/store/index.js'
// import Index from '@/view/index'
const Index  = resolve => require.ensure([], () => resolve(require('@/view/index')), 'Index')
// import IndexMain from '@/view/indexMain'
const IndexMain = resolve => require.ensure([], () => resolve(require('@/view/indexMain')), 'indexMain')
const Cart = resolve => require.ensure([], () => resolve(require('@/view/cart')), 'Cart')
const Order = resolve => require.ensure([], () => resolve(require('@/view/order')), 'Order')
const OrderDetail = resolve => require.ensure([], () => resolve(require('@/view/orderDetail')), 'OrderDetail')
const Info = resolve => require.ensure([], () => resolve(require('@/view/Info')), 'Info')
const SearchDetail = resolve => require.ensure([], () => resolve(require('@/view/searchDetail')), 'SearchDetail')
const Detail = resolve => require.ensure([], () => resolve(require('@/view/detail')), 'Detail')
const Login = resolve => require.ensure([], () => resolve(require('@/view/login')), 'Login')
const Register = resolve => require.ensure([], () => resolve(require('@/view/register')), 'Register')
// const store = resolve => require.ensure([], () => resolve(require('@/view/index')), 'store')
const Test = resolve => require.ensure([], () => resolve(require('@/view/test')), 'Test')
const User  = resolve => require.ensure([], () => resolve(require('@/view/user/user')), 'User')
const Search  = resolve => require.ensure([], () => resolve(require('@/view/search')), 'Search')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
      	  {
	      	path:'',
	      	component: IndexMain,
	      },
	      {
	      	path:'index',
	      	component: IndexMain,
	      },
        {
          path:'user',
          name: 'user',
          component: User,
          children:[...person]
        },
        // ...person,
	      {
	      	path:'cart',
	      	component: Cart,
          meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          },
	      },
	      {
	      	path:'search',
	      	component: Search,
	      },
      ]
    },{
      path:'/order/:order_id',
      component: Order,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path:'/orderDetail/:order_status',
      component: OrderDetail,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },{
      path: '/info/:id',
      name: 'Info',
      component: Info,
    },{
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
    },{
      path: '/searchDetail',
      name: 'searchDetail',
      component: SearchDetail,
    },{
      path: '/login',
      name: 'login',
      component: Login,
    },{
      path: '/register',
      name: 'register',
      component: Register,
    },{
      path: '/test',
      name: 'test',
      component: Test,
    }

  ]
})
router.beforeEach((to, from, next) => {
  let token = store.state.token;
    //判断要去的路由有没有requiresAuth  
  // console.log(to.meta.requireAuth);
  console.log(to)
  if(to.meta.requireAuth || to.path.indexOf("user/") > -1){
    console.log(token)
    if(token != 'undefined' && token != undefined){
      next();
    }else{
      next({
        path: '/login',
        query: {redirect: to.path}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
})



export default router;
