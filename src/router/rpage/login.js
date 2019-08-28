const registe = () => import('@/pages/login/registe.vue') //注册
const load = () => import('@/pages/login/load.vue') //登录


export default [


    {
        path: '/registe',
        name: 'registe',
        component: registe,
        meta:{
            title:' '
        },
    },
    
    {
        path: '/load',
        name: 'load',
        component: load,
        meta:{
            title:' '
        },
    },
    
  
  
  
  ]
  