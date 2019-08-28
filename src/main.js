import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import Vconsole from 'vconsole';
import vuex from 'vuex';
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Dialog } from 'vant';
import VueQriously from 'vue-qriously';
import { PullRefresh,List  } from 'vant';
import './assets/fonts/iconfont.css'; 
import ECharts from 'vue-echarts/components/ECharts';
Vue.use(PullRefresh).use(List);
Vue.use(VueQriously);
Vue.component('chart', ECharts);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Vant);
Vue.use(Lazyload);
if(location.href.indexOf('192.168') > 0) {
    //本地开发环境显示调试器
    // new Vconsole();
}


import global_ from './pages/global.vue'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面


// 全局引入公共js
import Base from '../static/base';
var Promise = require('es6-promise').Promise;
Promise.polyfill();
Vue.prototype.$ajax = axios;

// 全局引入公共样式
require('../static/base.css');
Vue.prototype.Base = Base;

//axios请求数据格式化成java服务器能识别的组件
import qs from 'qs'; 
Vue.prototype.$qs = qs;

import datasfake from '../static/datas.json';
Vue.prototype.datasfake = datasfake;

new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
Vue.prototype.setToken = function (){//changeData是函数名
 

  
}