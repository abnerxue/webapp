const home = () => import('@/pages/home/home.vue')

const hde = () => import('@/pages/home/hde.vue')



export default [


  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: ''
    },
  },
  {
    path: '/hde',
    name: 'hde',
    component: hde,
    meta: {
      title: ''
    },
  },



]
