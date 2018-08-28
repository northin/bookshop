
// import UserInfo from '@/view/user/userInfo'
const UserInfo  = resolve => require.ensure([], () => resolve(require('@/view/user/userInfo')), 'UserInfo')
// import SetNiName from '@/view/user/setNiName'
const SetNiName  = resolve => require.ensure([], () => resolve(require('@/view/user/setNiName')), 'SetNiName')
// import SetEmail from '@/view/user/setEmail'
const SetEmail  = resolve => require.ensure([], () => resolve(require('@/view/user/setEmail')), 'SetEmail')
// import SetQQ from '@/view/user/setQQ'
const SetQQ  = resolve => require.ensure([], () => resolve(require('@/view/user/setQQ')), 'SetQQ')
// import SetDesc from '@/view/user/setDesc'
const SetDesc  = resolve => require.ensure([], () => resolve(require('@/view/user/setDesc')), 'SetDesc')
// import SetSys from '@/view/user/setSys'
const SetSys  = resolve => require.ensure([], () => resolve(require('@/view/user/setSys')), 'SetSys')
// import AboutShop from '@/view/user/aboutShop'
const AboutShop  = resolve => require.ensure([], () => resolve(require('@/view/user/aboutShop')), 'AboutShop')
// import SetAddress from '@/view/user/setAddress'
const SetAddress  = resolve => require.ensure([], () => resolve(require('@/view/user/setAddress')), 'SetAddress')
// import Collection from '@/view/user/collection'
const Collection  = resolve => require.ensure([], () => resolve(require('@/view/user/collection')), 'Collection')
const UserMain  = resolve => require.ensure([], () => resolve(require('@/view/user/userMain')), 'UserMain')

// import User from '@/view/'

const person = [
        {
          path:'user',
          component: UserMain,
        },
        {
          path: 'aboutShop',
          name: 'aboutShop',
          component: AboutShop,
        },
        {
          path: 'setAddress',
          name: 'setAddress',
          component: SetAddress,
        },{
          path: 'collection',
          name: 'collection',
          component: Collection,
        },{
          path: 'setNiName',
          name: 'setNiName',
          component: SetNiName,
        },{
          path: 'setEmail',
          name: 'setEmail',
          component: SetEmail,
        },{
          path: 'setQQ',
          name: 'setQQ',
          component: SetQQ,
        },{
          path: 'setDesc',
          name: 'setDesc',
          component: SetDesc,
        },{
          path: 'setSys',
          name: 'setSys',
          component: SetSys,
        },{
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo,
        }
      ]


export default person
