const txrequest = () => import('@/pages/myswap/mytotal/general/txrequest.vue')
const txrequestdetail = () => import('@/pages/myswap/mytotal/general/txrequestdetail.vue')



export default [


  {
    path: '/txrequest',
    name: 'txrequest',
    component: txrequest,
    meta: {
      title: ''
    },
  },
  {
    path: '/txrequestdetail',
    name: 'txrequestdetail',
    component: txrequestdetail,
    meta: {
      title: ''
    },
  },

]
