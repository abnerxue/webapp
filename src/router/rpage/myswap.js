const myswap = () => import('@/pages/myswap/myswap.vue')     // 我的
const personal = () => import('@/pages/myswap/mymessage/personal.vue')  // 个人信息
const pricing = () => import('@/pages/myswap/price/pricing.vue')     // 制定价格
const mytotal = () => import('@/pages/myswap/mytotal/mytotal.vue')    // 总资产
const mycoin = () => import('@/pages/myswap/mytotal/mycoin.vue')       // 我的法币
const mycoindetail = () => import('@/pages/myswap/mytotal/mycoindetail.vue')  // 我的法币  提现明细
const wallet = () => import('@/pages/myswap/mytotal/wallet.vue')  // 我的法币  提现方式
const alipay = () => import('@/pages/myswap/mytotal/alipay.vue')  // 我的法币  提现方式  支付宝
const wechat = () => import('@/pages/myswap/mytotal/wechat.vue')  // 我的法币  提现方式  微信
const mycxt = () => import('@/pages/myswap/mytotal/mycxt.vue')        // 我的常孝通
const mygeneral = () => import('@/pages/myswap/mytotal/mygeneral.vue')        // 我的一卡通
const generaltx = () => import('@/pages/myswap/mytotal/generaltx.vue')        // 一卡通提现
const mycxtdetail = () => import('@/pages/myswap/mytotal/mycxtdetail.vue')        // 我的常孝通明细
const mypoints = () => import('@/pages/myswap/mytotal/mypoints.vue')        // 我的积分
const mypointsdetail = () => import('@/pages/myswap/mytotal/mypointsdetail.vue')        // 我的积分明细
const mybenefit = () => import('@/pages/myswap/mybenefit/mybenefit.vue')        // 我的收益
const mymessage = () => import('@/pages/myswap/mymessage/mymessage.vue')        // 我的信息
const vipmember = () => import('@/pages/myswap/mymessage/vipmember.vue')        // 我的信息
const commonmember = () => import('@/pages/myswap/mymessage/commonmember.vue')        // 我的信息
const codea = () => import('@/pages/myswap/mymessage/codea.vue')        // 我的信息
const hermessage = () => import('@/pages/myswap/mymessage/hermessage.vue') 
const mymessageb = () => import('@/pages/myswap/mymessage/mymessageb.vue')          // 她的信息
const account = () => import('@/pages/myswap/account/account.vue')        // 即时转账
const myaccount = () => import('@/pages/myswap/account/myaccount.vue')        // 即时转账
const ctrlload = () => import('@/pages/myswap/control/ctrlload.vue')        // 风险控制
const statistics = () => import('@/pages/myswap/control/statistics.vue')        // 风险统计

const abnormal = () => import('@/pages/myswap/control/abnormal.vue')        // 异常
const trade = () => import('@/pages/myswap/control/trade.vue')        // 异常
const price = () => import('@/pages/myswap/control/price.vue')        // 价格
const amount = () => import('@/pages/myswap/control/amount.vue')        // 价格
const cctrlload = () => import('@/pages/myswap/chairman/cctrlload.vue')        // 董事长风险控制
const cstatistics = () => import('@/pages/myswap/chairman/cstatistics.vue')        // 风险统计
     // 风险统计
const cabnormal = () => import('@/pages/myswap/chairman/cabnormal.vue')        // 异常
const ctrade = () => import('@/pages/myswap/chairman/ctrade.vue')        // 异常
const cprice = () => import('@/pages/myswap/chairman/cprice.vue')        // 价格
const camount = () => import('@/pages/myswap/chairman/camount.vue')        // 价格
const message = () => import('@/pages/myswap/message/message.vue')        // 通知消息
const invitecode = () => import('@/pages/myswap/mycode/invitecode.vue')        // 邀请码
const aboutus = () => import('@/pages/myswap/aboutus/aboutus.vue')        // 关于我们
const privacy = () => import('@/pages/myswap/aboutus/privacy.vue')        // 关于我们
const update = () => import('@/pages/myswap/aboutus/update.vue')        // 关于我们
const set = () => import('@/pages/myswap/setup/set.vue')        // 设置
const personalmsg = () => import('@/pages/myswap/setup/personalmsg.vue')        // 个人信息
const myimg = () => import('@/pages/myswap/setup/myimg.vue')        // 个人信息
const mycode = () => import('@/pages/myswap/setup/mycode.vue')        // 个人信息
const changetelnum = () => import('@/pages/myswap/setup/changetelnum.vue')        //修改手机
const certification = () => import('@/pages/myswap/setup/certification.vue')        //实名认证
const pass = () => import('@/pages/myswap/setup/pass.vue')        //实名认证
const bindleader = () => import('@/pages/myswap/bindleader/bindleader.vue')        //
const mall = () => import('@/pages/myswap/mall/mall.vue')        // 我的订单
const dtmall = () => import('@/pages/myswap/mall/dtmall.vue')        // 我的订单详情
const dtmall2 = () => import('@/pages/myswap/mall/dtmall2.vue')        // 订单发货
const dtmall3 = () => import('@/pages/myswap/mall/dtmall3.vue')        // 订单发货
const mallmanage = () => import('@/pages/myswap/mall/mallmanage.vue')        // 订单管理
const order = () => import('@/pages/myswap/order/order.vue')        //
const ardset = () => import('@/pages/myswap/order/ardset.vue')        //
const dtorder = () => import('@/pages/myswap/order/dtorder.vue')        //
const myaddress = () => import('@/pages/myswap/setup/myaddress.vue')        //
const dtads = () => import('@/pages/myswap/setup/dtads.vue') 
const addads = () => import('@/pages/myswap/setup/addads.vue')   
const dtbenefit = () => import('@/pages/myswap/mybenefit/dtbenefit.vue')   
const company = () => import('@/pages/myswap/control/company.vue')		//按公司查看K线图
const large = () => import('@/pages/myswap/control/large.vue')        // k线图
const shar= () => import('@/pages/myswap/control/shar.vue')					//分时图
const plate= () => import('@/pages/myswap/control/plate.vue')					//盘口


const consult= () => import('@/pages/myswap/control/consult.vue')					//纯展示
const transact= () => import('@/pages/myswap/control/transact.vue')					//纯展示
const introduce= () => import('@/pages/myswap/control/introduce.vue')					//纯展示
const partner= () => import('@/pages/myswap/control/partner.vue')					//纯展示


export default [
  {
    path: '/mymessageb',
    name: 'mymessageb',
    component: mymessageb,
    meta: {
      title: ''
    },
  },
  {
    path: '/partner',
    name: 'partner',
    component: partner,
    meta: {
      title: ''
    },
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: introduce,
    meta: {
      title: ''
    },
  },
  {
    path: '/transact',
    name: 'transact',
    component: transact,
    meta: {
      title: ''
    },
  },
  {
    path: '/consult',
    name: 'consult',
    component: consult,
    meta: {
      title: ''
    },
  },
  {
    path: '/company',
    name: 'company',
    component: company,
    meta: {
      title: ''
    },
  },
  {
    path: '/shar',
    name: 'shar',
    component: shar,
    meta: {
      title: ''
    },
  },
  {
    path: '/plate',
    name: 'plate',
    component: plate,
    meta: {
      title: ''
    },
  },

  {
    path: '/myswap',
    name: 'myswap',
    component: myswap,
    meta: {
      title: ''
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: pricing,
    meta: {
      title: ''
    },
  },
  {
    path: '/mytotal',
    name: 'mytotal',
    component: mytotal,
    meta: {
      title: ''
    },
  },
  {
    path: '/mycoin',
    name: 'mycoin',
    component: mycoin,
    meta: {
      title: ''
    },
  },
  {
    path: '/mycxt',
    name: 'mycxt',
    component: mycxt,
    meta: {
      title: ''
    },
  },
  {
    path: '/mygeneral',
    name: 'mygeneral',
    component: mygeneral,
    meta: {
      title: ''
    },
  },  
  {
    path: '/generaltx',
    name: 'generaltx',
    component: generaltx,
    meta: {
      title: ''
    },
  },          
  {
    path: '/mypoints',
    name: 'mypoints',
    component: mypoints,
    meta: {
      title: ''
    },
  },
  {
    path: '/mycoindetail',
    name: 'mycoindetail',
    component: mycoindetail,
    meta: {
      title: ''
    },
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: wallet,
    meta: {
      title: ''
    },
  },
  {
    path: '/alipay',
    name: 'alipay',
    component: alipay,
    meta: {
      title: ''
    },
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: wechat,
    meta: {
      title: ''
    },
  },
  {
    path: '/mymessage',   //我的信息
    name: 'mymessage',
    component: mymessage,
    meta: {
      title: ''
    },
  },
  {
    path: '/vipmember',   //vip
    name: 'vipmember',
    component: vipmember,
    meta: {
      title: ''
    },
  },
  {
    path: '/commonmember',   //普通
    name: 'commonmember',
    component: commonmember,
    meta: {
      title: ''
    },
  },
  {
    path: '/codea',   //
    name: 'codea',
    component: codea,
    meta: {
      title: ''
    },
  },
  {
    path: '/hermessage',   //他的信息
    name: 'hermessage',
    component: hermessage,
    meta: {
      title: ''
    },
  },
  {
    path: '/account',   //即时转账
    name: 'account',
    component: account,
    meta: {
      title: ''
    },
  },
  {
    path: '/myaccount',   //即时转账
    name: 'myaccount',
    component: myaccount,
    meta: {
      title: ''
    },
  },
  {
    path: '/ctrlload',   //风险控制
    name: 'ctrlload',
    component: ctrlload,
    meta: {
      title: ''
    },
  },
  {
    path: '/statistics',   //风险统计
    name: 'statistics',
    component: statistics,
    meta: {
      title: ''
    },
  },
  {
    path: '/large',   //风险统计
    name: 'large',
    component: large,
    meta: {
      title: ''
    },
  },
  {
    path: '/abnormal',   //风险统计
    name: 'abnormal',
    component: abnormal,
    meta: {
      title: ''
    },
  },
  {
    path: '/trade',   //风险统计
    name: 'trade',
    component: trade,
    meta: {
      title: ''
    },
  },
  {
    path: '/price',   //风险统计
    name: 'price',
    component: price,
    meta: {
      title: ''
    },
  },
  {
    path: '/amount',   //风险统计
    name: 'amount',
    component: amount,
    meta: {
      title: ''
    },
  },
  {
    path: '/cctrlload',   //董事长风险控制
    name: 'cctrlload',
    component: cctrlload,
    meta: {
      title: ''
    },
  },
  {
    path: '/cstatistics',   //风险统计
    name: 'cstatistics',
    component: cstatistics,
    meta: {
      title: ''
    },
  },
  {
    path: '/large',   //风险统计
    name: 'large',
    component: large,
    meta: {
      title: ''
    },
  },
  {
    path: '/cabnormal',   //风险统计
    name: 'cabnormal',
    component: cabnormal,
    meta: {
      title: ''
    },
  },
  {
    path: '/ctrade',   //风险统计
    name: 'ctrade',
    component: ctrade,
    meta: {
      title: ''
    },
  },
  {
    path: '/cprice',   //风险统计
    name: 'cprice',
    component: cprice,
    meta: {
      title: ''
    },
  },
  {
    path: '/camount',   //风险统计
    name: 'camount',
    component: camount,
    meta: {
      title: ''
    },
  },
  {
    path: '/personal',   //风险统计
    name: 'personal',
    component: personal,
    meta: {
      title: ''
    },
  },
  {
    path: '/message',   //通知消息
    name: 'message',
    component: message,
    meta: {
      title: ''
    },
  },
  {
    path: '/invitecode',   //邀请码
    name: 'invitecode',
    component: invitecode,
    meta: {
      title: ''
    },
  },
  {
    path: '/aboutus',   //关于我们
    name: 'aboutus',
    component: aboutus,
    meta: {
      title: ''
    },
  },
  {
    path: '/privacy',   //隐私政策
    name: 'privacy',
    component: privacy,
    meta: {
      title: ''
    },
  },
  {
    path: '/update',   //更新
    name: 'update',
    component: update,
    meta: {
      title: ''
    },
  },
  {
    path: '/set',   //设置
    name: 'set',
    component: set,
    meta: {
      title: ''
    },
  },
  {
    path: '/personalmsg',   //个人信息
    name: 'personalmsg',
    component: personalmsg,
    meta: {
      title: ''
    },
  },
  {
    path: '/myimg',   //个人信息
    name: 'myimg',
    component: myimg,
    meta: {
      title: ''
    },
  },
  {
    path: '/mycode',   //个人信息
    name: 'mycode',
    component: mycode,
    meta: {
      title: ''
    },
  },
  {
    path: '/changetelnum',   //修改手机号
    name: 'changetelnum',
    component: changetelnum,
    meta: {
      title: ''
    },
  },
  {
    path: '/certification',   //实名认证
    name: 'certification',
    component: certification,
    meta: {
      title: ''
    },
  },
  {
    path: '/pass',   //实名认证
    name: 'pass',
    component: pass,
    meta: {
      title: ''
    },
  },
  
  {
    path: '/mycxtdetail',   //常孝通明细
    name: 'mycxtdetail',
    component: mycxtdetail,
    meta: {
      title: ''
    },
  },
  {
    path: '/mypointsdetail',   //积分明细
    name: 'mypointsdetail',
    component: mypointsdetail,
    meta: {
      title: ''
    },
  },
  {
    path: '/mybenefit',   //积分明细
    name: 'mybebefit',
    component: mybenefit,
    meta: {
      title: ''
    },
  },
  {
    path: '/bindleader',   //
    name: 'bindleader',
    component: bindleader,
    meta: {
      title: ''
    },
  },
  {
    path: '/mall',   //
    name: 'mall',
    component: mall,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtmall',   //
    name: 'dtmall',
    component: dtmall,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtmall2',   //
    name: 'dtmall2',
    component: dtmall2,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtmall3',   //
    name: 'dtmall3',
    component: dtmall3,
    meta: {
      title: ''
    },
  },
  {
    path: '/mallmanage',   //
    name: 'mallmanage',
    component: mallmanage,
    meta: {
      title: ''
    },
  },
  {
    path: '/order',   //
    name: 'order',
    component: order,
    meta: {
      title: ''
    },
  },
  {
    path: '/ardset',   //
    name: 'ardset',
    component: ardset,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtorder',   //
    name: 'dtorder',
    component: dtorder,
    meta: {
      title: ''
    },
  },
  {
    path: '/myaddress',   //
    name: 'myaddress',
    component: myaddress,
    meta: {
      title: ''
    },
  },
  {
    path: '/addads',   //
    name: 'addads',
    component: addads,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtads',   //
    name: 'dtads',
    component: dtads,
    meta: {
      title: ''
    },
  },
  {
    path: '/dtbenefit',   //
    name: 'dtbenefit',
    component: dtbenefit,
    meta: {
      title: ''
    },
  },
  

]
