const detail = () => import('@/pages/detail.vue')
const calendars = () => import('@/pages/calendars.vue')
const test = () => import('@/pages/test.vue')
const qwer = () => import('@/pages/qwer.vue')
const qwert = () => import('@/pages/qwert.vue')
const jqqd = () => import('@/pages/jqqd.vue')


import shoppingconst from './rpage/shoppingconst.js'//购物商城
import webpy  from './rpage/webpy.js'//网站
import home from './rpage/home.js'//首页
import myswap from './rpage/myswap.js'//个人信息
import login from './rpage/login'//登录注册
import verification from './rpage/verification'//验证
import Structure from './rpage/Structure'//验证
import general from './rpage/general'//一卡通
//放弃dom 关注数据变化
export default{
    mode:'history',
  routes: [
    {
      path: '/jqqd',
      name:'jqqd',
      component: jqqd, 
    },
    {
      path: '/qwer',
      name:'qwer',
      component: qwer, 
    },
    {
      path: '/qwert',
      name:'qwert',
      component: qwert, 
    },
    {
      path: '/detail',
      name:'detail',
      component: detail, 
    },
    {
        path: '/calendars',
        name:'calendars',
        component: calendars, 
    },
    {
      path: '/test',
      name:'test',
      component: test, 
  },
  
    ...shoppingconst,
    ...webpy,
    ...home,
    ...myswap,
    ...login,
    ...verification,
    ...Structure,
    ...general,
   
    

  ]
}