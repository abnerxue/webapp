<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">观音菩萨简述</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
         观世音菩萨（梵文： Avalokiteśvara），观世音是鸠摩罗什的旧译，玄奘新译为观自在，中国每略称为观音。观世音菩萨是佛教中慈悲和智慧的象征，无论在大乘佛教还是在民间信仰，都具有极其重要的地位。
         以观世音菩萨为主导的大慈悲精神，被视为大乘佛教的根本。佛经上说，观世音是过去的正法明如来所现化，他在无量国土中，以菩萨之身到处寻声救苦。观世音与阿弥陀佛有着特殊的关系。他是西方三圣中的一尊，
         也是一生补处的法身大士，是继承阿弥陀佛位的菩萨，而且还有说观世音就是阿弥陀佛的化身。
        </p>
        <p class="m-p">
         观世音菩萨具有平等无私的广大悲愿，当众生遇到任何的困难和苦痛， 如能至诚称念观世音菩萨，就会得到菩萨的救护。而且，观世音菩萨最能适应众生的要求，对不同的众生，便现化不同的身相，说不同的法门。
         在佛教的众多菩萨中，观世音菩萨也最为民间所熟知和信仰。在中国的江、浙、闽、广、台湾，以及南洋华侨间，观音信仰极为普及，所谓“家家阿弥陀，户户观世音”。浙江的普陀山，自古以来也一直被视为观世音菩
         萨应化的道场。
        </p>
    
        <br>
        <img src="../../../../../static/img/lf3.png">  
        
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
      this.$router.back("/webcslf");
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
  padding-top: 0.3rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
