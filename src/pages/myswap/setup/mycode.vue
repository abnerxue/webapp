<template>
  <div class="s-f">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">我的二维码</van-col>
      <van-col span="2" ></van-col>
    </van-row>

    <div class="s-s">
      <div class="s-d-1">
        <img src="../../../../static/img/myimg.png" class="s-img-1">
        <van-cell v-model="tel" size="large" class="s-right" />
      </div>
      <div class="s-d-2">
        <qriously :value="value" :size="size" :backgroundAlpha="backgroundAlpha" class="s-img-2" />
      </div>
      
    </div>
    <p style="position:absolute;top:68%;left:33%">长按二维码进行识别</p>
  </div>
</template>

<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      value: "https://www.baidu.com/",
      // 二维码大小 默认 100
      size: 190,
      // 背景透明度，默认透明 0 
      backgroundAlpha:1,
      img:'',
      tel:'',
      code:'',
      token:''
    };
  },
  methods: {
    goback() {
      this.$router.back("/personalmsg");
    },
    getDataList(){
      let data={
        token:this.GLOBAL.token
      };
      let _this = this;
      this.tc={
        img:'',
        tel:'',
        code:'',
      };
      this.$ajax.get('/cxt/user/getInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
        
           
        });
    }
  },
  created(){
    this.getDataList()
  }
};
</script>

<style scoped>
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: white;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-f {
  position: relative;
  background-color: #f8f5f5d5;
  height: 100%;
}

.s-s {
  position: absolute;
  top: 15%;
  background-color: white;
  height: 50%;
  width: 80%;
  margin: 0 10%;
}

.s-img-1{
  width: 25%;
  float: left;
}
.s-img-2{
  width: 100%;
  clear: both
}
.s-d-1{
  margin:0.4rem;
  height: 25%;
}

.s-d-2{
  margin:0.3rem 1.2rem 0.4rem 1.2rem;
  height: 70%;
  clear: both
}

.s-right{
  float: right;
  width: 70%;
  margin-top: 0.25rem;
  font-size: 0.35rem
}
</style>
