<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">圣观音</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
         圣观音无千手千眼，马头、十一面、十八臂等异相。圣观音菩萨是六观音、七观音的总体或正体，民间平常所说的观世音菩萨，其实指的就是圣观音和正观音。
        </p>
        <p class="m-p">
        六观音之一（位列第二）。密宗称圣观音，天台宗称大慈观音。梵文Arya-avalo Kitesvara的意译。亦称正观音，圣观自在。此尊法相为观世音菩萨本身相，是观音各种法相的总体代表，也可以说是观音菩萨的正体
        标准像。观音菩萨其他应化身，都是从正观音形象演变的。佛教庙宇中以观音为主尊之"大士殿"、"圆通殿"多供奉此像。圣观音的形象为一首两臂的菩萨相，通常头戴天冠，冠中有阿弥陀佛像；结跏趺坐于莲花座上；
        身上有璎珞项钏等装饰。法相表情端庄、慈祥、悲悯。其手姿印相、持物，则有以下几种不同：一、左手曲肘举胸前，拇指尖顶在食指尖成环圈状，其余三指直竖，作施大悲无畏印，右手托净瓶；二、左手持莲花，右手
        结大悲施无畏印；三、双手放在胸前腿上结法界定印或者弥陀定印；四、双手作说法印。圣观音两旁有善财童子和龙女胁侍。民间供奉的圣观音法相大多为女相，身着白色天衣，其面相颇类似中国古代仕女的造型。四川
        安岳石窟有一尊明代圣观音造像（紫竹观音），法相美丽而庄严，堪称历代民间圣观音造像之代表。
        </p>
        
        <br>
        <img src="../../../../../static/img/lf5.png">  
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
