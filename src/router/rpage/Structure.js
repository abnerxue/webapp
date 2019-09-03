
const Structure = () => import('@/pages/Structure/list/Structure.vue') 
const member = () => import('@/pages/Structure/list/member.vue') //
const childmember = () => import('@/pages/Structure/list/childmember.vue') //
const add = () => import('@/pages/Structure/list/add.vue') //
const addchild = () => import('@/pages/Structure/list/addchild.vue') //
const search = () => import('@/pages/Structure/list/search.vue') //
const department = () => import('@/pages/Structure/list/department.vue') //
const mmdetail = () => import('@/pages/Structure/list/mmdetail.vue') //
const adddept = () => import('@/pages/Structure/list/adddept.vue') //
const addchilddept = () => import('@/pages/Structure/list/addchilddept.vue') //
const edit = () => import('@/pages/Structure/list/edit.vue') //
const editdept = () => import('@/pages/Structure/list/editdept.vue') //
const editchilddept = () => import('@/pages/Structure/list/editchilddept.vue') //

const choosea = () => import('@/pages/Structure/dept_incharge/choosea.vue') //
const chooseb = () => import('@/pages/Structure/dept_incharge/chooseb.vue') //
const choosec = () => import('@/pages/Structure/dept_incharge/choosec.vue') //
const childmmdetail = () => import('@/pages/Structure/list/childmmdetail.vue') //
const editchild = () => import('@/pages/Structure/list/editchild.vue') //
const searchdetail = () => import('@/pages/Structure/list/searchdetail.vue') //
const adde = () => import('@/pages/Structure/list/adde.vue') //
const work = () => import('@/pages/Structure/work/work.vue') //
const generalapproval = () => import('@/pages/Structure/work/generalapproval.vue') //
const setapproval = () => import('@/pages/Structure/work/setapproval.vue') //
const setchaosong = () => import('@/pages/Structure/work/setchaosong.vue') //
const approval = () => import('@/pages/Structure/work/approval.vue') //
const send = () => import('@/pages/Structure/work/send.vue') //
const isend = () => import('@/pages/Structure/work/isend.vue') //
const idetail = () => import('@/pages/Structure/work/idetail.vue') //
const approvalofme = () => import('@/pages/Structure/work/approvalofme.vue') //
const details= () => import('@/pages/Structure/work/details.vue') //
const sdetail= () => import('@/pages/Structure/work/sdetail.vue') //

const choose = () => import('@/pages/Structure/send/choose.vue') //
const choosed = () => import('@/pages/Structure/send/choosed.vue') //
const choosef = () => import('@/pages/Structure/send/choosef.vue') //
const chooseg = () => import('@/pages/Structure/send/chooseg.vue') //


export default [


    {
        path: '/Structure',
        name: 'Structure',
        component: Structure,
        meta:{
            title:' '
        },
    },
    {
        path: '/member',
        name: 'member',
        component: member,
        meta:{
            title:' '
        },
    },
    {
        path: '/add',
        name: 'add',
        component: add,
        meta:{
            title:' '
        },
    },
    {
        path: '/addchild',
        name: 'addchild',
        component: addchild,
        meta:{
            title:' '
        },
    },
    {
        path: '/search',
        name: 'search',
        component: search,
        meta:{
            title:' '
        },
    },
    {
        path: '/department',
        name: 'department',
        component: department,
        meta:{
            title:' '
        },
    },
    {
        path: '/mmdetail',
        name: 'mmdetail',
        component: mmdetail,
        meta:{
            title:' '
        },
    },
    {
        path: '/adddept',
        name: 'adddept',
        component: adddept,
        meta:{
            title:' '
        },
    },
    {
        path: '/addchilddept',
        name: 'addchilddept',
        component: addchilddept,
        meta:{
            title:' '
        },
    },
    {
        path: '/edit',
        name: 'edit',
        component: edit,
        meta:{
            title:' '
        },
    },
    {
        path: '/editdept',
        name: 'editdept',
        component: editdept,
        meta:{
            title:' '
        },
    },
    {
        path: '/childmember',
        name: 'childmember',
        component: childmember,
        meta:{
            title:' '
        },
    },
    {
        path: '/editchilddept',
        name: 'editchilddept',
        component: editchilddept,
        meta:{
            title:' '
        },
    },
    {
        path: '/choosea',
        name: 'choosea',
        component: choosea,
        meta:{
            title:' '
        },
    },
    {
        path: '/chooseb',
        name: 'chooseb',
        component: chooseb,
        meta:{
            title:' '
        },
    },
    {
        path: '/choosec',
        name: 'choosec',
        component: choosec,
        meta:{
            title:' '
        },
    },
    {
        path: '/childmmdetail',
        name: 'childmmdetail',
        component: childmmdetail,
        meta:{
            title:' '
        },
    },
    {
        path: '/editchild',
        name: 'editchild',
        component: editchild,
        meta:{
            title:' '
        },
    },
    {
        path: '/searchdetail',
        name: 'searchdetail',
        component: searchdetail,
        meta:{
            title:' '
        },
    },
    {
        path: '/adde',
        name: 'adde',
        component: adde,
        meta:{
            title:' '
        },
    },
    {
        path: '/work', 
        name: 'work',
        component: work,
        meta:{
            title:' '
        },
    },
    {
        path: '/generalapproval', //
        name: 'generalapproval',
        component: generalapproval,
        meta:{
            title:' '
        },
    },
    {
        path: '/setapproval', //
        name: 'setapproval',
        component: setapproval,
        meta:{
            title:' '
        },
    },
    {
        path: '/setchaosong', //
        name: 'setchaosong',
        component: setchaosong,
        meta:{
            title:' '
        },
    },
    {
        path: '/approval', //
        name: 'approval',
        component: approval,
        meta:{
            title:' '
        },
    },
    {
        path: '/send', //
        name: 'send',
        component: send,
        meta:{
            title:' '
        },
    },
    {
        path: '/isend',
        name: 'isend',
        component: isend,
        meta:{
            title:' '
        },
    },
    {
        path: '/choose',
        name: 'choose',
        component: choose,
        meta:{
            title:' '
        },
    },
    {
        path: '/choosed',
        name: 'choosed',
        component: choosed,
        meta:{
            title:' '
        },
    },
    {
        path: '/choosef',
        name: 'choosef',
        component: choosef,
        meta:{
            title:' '
        },
    },
    {
        path: '/chooseg',
        name: 'chooseg',
        component: chooseg,
        meta:{
            title:' '
        },
    },
    {
        path: '/idetail',
        name: 'idetail',
        component: idetail,
        meta:{
            title:' '
        },
    },
    {
        path: '/approvalofme',
        name: 'approvalofme',
        component: approvalofme,
        meta:{
            title:' '
        },
    },
    {
        path: '/details',
        name: 'details',
        component: details,
        meta:{
            title:' '
        },
    },
    {
        path: '/sdetail',
        name: 'sdetail',
        component: sdetail,
        meta:{
            title:' '
        },
    },

  ]
  