<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">周朝祭祀六器</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p">
              在周朝的时候祭祀有六器 : 壁、琮、珪、璋、琥、璜。
          </p>
          <p class="m-p">
             苍壁礼天 ： 蓝色的圆扁形的玉。
          </p>
          <p class="m-p">
              黄琮礼地 ： 黄褐色方形的瓶子。
          </p>
          <p class="m-p">
             青珪礼东方 ： 东方属木，木色青。神为苍龙，祭器用青色的长方形的圭。
          </p>
          <p class="m-p">
              赤璋礼南方 ： 南方属火，火色赤。神为朱雀，祭器用红色的长形而半尖似刻刀形的璋。
          </p>
          <p class="m-p">
             白琥礼西方 ： 西方属金，金色白。神是白虎，祭器用白色刻成虎形的玉。
          </p>
          <p class="m-p">
              玄璜礼北方 ： 北方属水，水色黑。神是玄武，祭器用黑色半圆形的璜。
          </p>
          <p class="m-p">
             荀子对玉的说明，解释了古代天子对特别情况所用的玉：
          </p>
          <p class="m-p">
              聘人以珪、问士以壁、召人以瑗、绝人以玦、反对以环。
          </p>
          <br>
        <img src="../../../../../static/img/jisi7.png">
     
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
      this.$router.back("/webxgjz");
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
    background-image: url("../../../../../static/img/bg.png") ;
    margin-top:1rem;
    padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-image: url("../../../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-p {
  font-size: 0.35rem;
  text-indent: 2em;
  line-height: 0.6rem;
  padding-top: 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

