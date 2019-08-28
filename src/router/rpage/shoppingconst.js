/* const MarketTuple = () => import('@/pages/shoppingconst/Market.vue')  */
const Market = () => import('@/pages/shoppingconst/Market.vue') //首页


const webitema = () => import('@/pages/shoppingconst/firsrtMarket/webitema.vue') //一级市场 产品1
const webitemb = () => import('@/pages/shoppingconst/firsrtMarket/webitemb.vue') //一级市场 产品2
const webitemc = () => import('@/pages/shoppingconst/firsrtMarket/webitemc.vue') //一级市场 产品3
const webitemd = () => import('@/pages/shoppingconst/firsrtMarket/webitemd.vue') //一级市场 产品4
const webiteme = () => import('@/pages/shoppingconst/firsrtMarket/webiteme.vue') //一级市场 产品5

const webFrame = () => import('@/pages/shoppingconst/secondMarket/webFrame.vue') //
const webfrom = () => import('@/pages/shoppingconst/secondMarket/webfrom.vue') //
const webservice = () => import('@/pages/shoppingconst/thirdMarket/webservice.vue') //

const webproducta = () => import('@/pages/shoppingconst/thirdMarket/webproducta.vue') //三级市场 产品1
const webproductb = () => import('@/pages/shoppingconst/thirdMarket/webproductb.vue') //三级市场 产品2
const webproductc = () => import('@/pages/shoppingconst/thirdMarket/webproductc.vue') //三级市场 产品3
const webproductd = () => import('@/pages/shoppingconst/thirdMarket/webproductd.vue') //三级市场 产品4
const webproductf = () => import('@/pages/shoppingconst/thirdMarket/webproductf.vue') //三级市场 产品5
const webbuy = () => import('@/pages/shoppingconst/thirdMarket/webbuy.vue') //三级市场 支付
const webbuyt = () => import('@/pages/shoppingconst/thirdMarket/webbuyt.vue') //三级市场 支付
const torder = () => import('@/pages/shoppingconst/thirdMarket/torder.vue') //三级市场 支付
const taddress = () => import('@/pages/shoppingconst/thirdMarket/taddress.vue') //三级市场 支付
const confirmoprder= () => import('@/pages/shoppingconst/thirdMarket/taddress.vue') //三级市场 支付
const detailaddress = () => import('@/pages/shoppingconst/thirdMarket/detailaddress.vue') //三级市场 支付
const mycard = () => import('@/pages/shoppingconst/thirdMarket/mycard.vue') //三级市场 支付
const webbuynew = () => import('@/pages/shoppingconst/thirdMarket/webbuynew.vue') //三级市场 支付






export default[
    {
        path: '/webbuynew',
        name: 'webbuynew',
        component: webbuynew,
        meta:{
            title:''
        },
    }, 
     {
        path: '/mycard',
        name: 'mycard',
        component: mycard,
        meta:{
            title:'市场'
        },
    }, 
    {
        path: '/Market',   //首页
        name: 'Market',
        component: Market,
        meta:{
            title:'市场'
        },
    },
    
    {
        path: '/webFrame',
        name: 'webFrame',
        component: webFrame,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webfrom',
        name: 'webfrom',
        component: webfrom,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webservice',
        name: 'webservice',
        component: webservice,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webitema',   //一级市场 产品1
        name: 'webitema',
        component: webitema,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webitemb',   //一级市场 产品2
        name: 'webitemb',
        component: webitemb,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webitemc',   //一级市场 产品3
        name: 'webitemc',
        component: webitemc,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webitemd',   //一级市场 产品4
        name: 'webitemd',
        component: webitemd,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webiteme',   //一级市场 产品5
        name: 'webiteme',
        component: webiteme,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webproducta',   //三级市场 产品1
        name: 'webproducta',
        component: webproducta,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webproductb',   //三级市场 产品2
        name: 'webproductb',
        component: webproductb,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webproductc',   //三级市场 产品3
        name: 'webproductc',
        component: webproductc,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webproductd',   //三级市场 产品4
        name: 'webproductd',
        component: webproductd,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webproductf',   //三级市场 产品5
        name: 'webproductf',
        component: webproductf,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webbuy',   //
        name: 'webbuy',
        component: webbuy,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/webbuyt',   //
        name: 'webbuyt',
        component: webbuyt,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/torder',   //
        name: 'torder',
        component: torder,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/taddress',   //
        name: 'taddress',
        component: taddress,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/confirmoprder',   //
        name: 'confirmoprder',
        component: confirmoprder,
        meta:{
            title:'市场'
        },
    },
    {
        path: '/detailaddress',   //
        name: 'detailaddress',
        component: detailaddress,
        meta:{
            title:'市场'
        },
    },
]