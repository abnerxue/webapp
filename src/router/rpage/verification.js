const identify = () => import('@/pages/verification/identify.vue')        //账户与密码
const setpsd = () => import('@/pages/verification/setpsd.vue')        //设置支付密码
const confirmpsd = () => import('@/pages/verification/confirmpsd.vue')        //确认支付密码
const pay = () => import('@/pages/verification/pay.vue')        //输入支付密码
const pays = () => import('@/pages/verification/pays.vue')        //输入支付密码
const register = () => import('@/pages/verification/register.vue') //设置密码
const resetpassword = () => import('@/pages/verification/resetpassword.vue') //重置密码
const psderror = () => import('@/pages/verification/psderror.vue') //密码错误
const resetpay = () => import('@/pages/verification/resetpay.vue') //密码错误
const resetpass = () => import('@/pages/verification/resetpass.vue') 
const resetpassa = () => import('@/pages/verification/resetpassa.vue') 
const identifys = () => import('@/pages/verification/identifys.vue')        //账户与密码//密码错误




export default [
  {
    path: '/pays',   //账户与密码
    name: 'pays',
    component: pays,
    meta: {
      title: ''
    },
},
  {
    path: '/resetpass',   //账户与密码
    name: 'resetpass',
    component: resetpass,
    meta: {
      title: ''
    },
},
{
  path: '/resetpassa',   //账户与密码
  name: 'resetpassa',
  component: resetpassa,
  meta: {
    title: ''
  },
},
  {
    path: '/resetpay',   //账户与密码
    name: 'resetpay',
    component: resetpay,
    meta: {
      title: ''
    },
},
{
  path: '/identifys',   //账户与密码
  name: 'identifys',
  component: identifys,
  meta: {
    title: ''
  },
},

    {
        path: '/identify',   //账户与密码
        name: 'identify',
        component: identify,
        meta: {
          title: ''
        },
    },
    {
        path: '/setpsd',   //设置支付密码confirmpsd
        name: 'setpsd',
        component: setpsd,
        meta: {
          title: ''
        },
    },
    {
        path: '/confirmpsd',   //确认支付密码
        name: 'confirmpsd',
        component: confirmpsd,
        meta: {
          title: ''
        },
    },
    {
        path: '/pay',   //输入支付密码
        name: 'pay',
        component: pay,
        meta: {
          title: ''
        },
    },
    {
        path: '/register',     //设置密码
        name: 'register',
        component: register,
        meta:{
            title:' '
        },
    },
    {
        path: '/resetpassword',   //重置密码
        name: 'resetpassword',
        component: resetpassword,
        meta: {
          title: ''
        },
    },
    {
        path: '/psderror',   //密码错误
        name: 'psderror',
        component: psderror,
        meta: {
          title: ''
        },
    },

  ]
  