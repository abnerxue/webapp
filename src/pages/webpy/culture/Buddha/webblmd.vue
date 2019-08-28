<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">般若波罗蜜多心经</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
         《般若波罗蜜多心经》也称为《摩诃般若波罗蜜多心经》，简称《般若心经》或《心经》，是般若经系列中一部言简义丰、博大精深、提纲挈领、极为重要的经典，为大乘佛教出家及在家佛教徒日常背诵的佛经。现以唐代三藏法师玄奘译本为最流行。
        </p>
        <p class="m-p">
         整段话的概略意思是“透过心量广大的通达智慧，而超脱世俗困苦的根本途径”。
        </p>
        <p class="m-p">
         “摩诃”：无边无际的大、心量广大。比喻宇宙万物大自然之间的规律与特质，约略相当于中国传统文化指称的道与广义的命。
        </p>
        <p class="m-p">
         “般若”为梵语音译，指通达妙智慧；
        </p>
        <p class="m-p">
         “波罗”为梵语音译，指到彼岸（不生不灭、不垢不净），有解脱挂碍的意思；
        </p>
        <p class="m-p">
        “蜜多”为梵语音译，意为无极。可联想比如蜜蜂采花酿蜜，能融合众多不同来源成分而归纳为一。
        </p>
        <p class="m-p">
         “心”：根本、核心、精髓。一方面表示内容所探讨的主体重心，另一方面也表示全篇内容的重要性。
        </p>
        <p class="m-p">
         “经”：字义是线、路、径，引申为经典。代表前人走过的路途、独特而深入的经历或见解，借口述语言或文字记载来传承后世，以供人们做为参考指引。
        </p>

        <br>
        <img src="../../../../../static/img/lf2.png">  
        
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
