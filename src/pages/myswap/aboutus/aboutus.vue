<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">关于我们</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <div class="s-bgs">
      <van-row style="padding-top:0.8rem">
        <van-col span="8"></van-col>
        <van-col span="8">
          <img src="../../../../static/img/co-logo-name.png" />
        </van-col>
        <van-col span="8"></van-col>
      </van-row>

      <van-row style="margin-top:0.4rem">
        <van-col span="6"></van-col>
        <van-col span="12">
          <!-- <img src="http://47.103.100.232:8085/apk/%E5%B8%B8%E5%AD%9D%E5%A4%A9%E4%B8%8B.apk" /> -->
          <qriously :value="value2" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.9rem " @click="goc"/>
        </van-col>
        <van-col span="6"></van-col>
      </van-row>

      <van-row style="padding:0.2rem 0 0.5rem 0">
        <van-col span="6"></van-col>
        <van-col span="12" class="s-t-ss">扫描二维码，下载客户端</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <van-cell title="隐私政策" is-link @click="goprivacy"/>
    <van-cell title="版本更新" is-link @click="goupdate"/>
  </div>
</template>

<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      value: "",
      value2:'https://www.cxtx.info/download.html'
    };
  },
   created(){
        this.setcolors();
        this.getDataList()
        
    },
  methods: {
     setcolors(){
      console.log(this.GLOBAL.systemName);
    if(this.GLOBAL.systemName==='android'){
         var obj = $(".qw");
        obj.text(this.GLOBAL.systemName);
        console.log('android')
       window.android.setStatusBarColor("#00a2ff");
    }
    if(this.GLOBAL.systemName==='ios'){
      //  var obj = $(".test");
      //  obj.text(this.GLOBAL.systemName);
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#00a2ff");
    }
    },
    goback() {
      this.$router.back("/myswap");
    },
    goprivacy(){
        this.$router.push("/privacy");
    },
    goupdate(){
        this.$router.push("/update");
    }
  }
};
</script>

<style scoped>
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-t-ss {
  margin: 0 0.5rem;
}

.s-bgs{
    background-color: #f3f3f3;
}
</style>
