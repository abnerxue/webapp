<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">正法明大殿</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row style="margin-top:1rem">
      <van-col span="2"></van-col>

      <van-col span="20">
        
        <p class="m-p">
          正法明大殿高31米，殿内供奉正法明如来和十二圆觉菩萨。正法明如来为观世音菩萨前世，乃古佛中之古佛，是十方如来之师。
          正法明大殿位于中华孝道园的核心地带，经过观音胜境的山门，进入坛城区域，有三世观音助阵，有四大天王和哼哈二将守护加持。大殿内有正法明灯，可供迎请，
          迎请正法明灯可惠及己身，开启智慧，破迷开悟，功德无量。
        </p>
        <img src="../../../assets/jd12.png" class="m-img">
        <br><br><br>
      </van-col>

      <van-col span="2"></van-col>
    </van-row>

    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      images: []
    };
  },
  methods: {
    goback() {
      this.$router.back("/webview");
    },
    top(){
      window.scrollTo(0,0)
    }
  },
  created(){
    this.top()
  }
};
</script>

<style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    height: 100%;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: url("../../../../static/img/bg-header.png");
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-img {
  margin: 0.3rem auto;
}

.m-p {
  text-indent: 2em;
  font-size: 0.35rem;
  margin-top: 0.3rem;
  line-height: 0.6rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
