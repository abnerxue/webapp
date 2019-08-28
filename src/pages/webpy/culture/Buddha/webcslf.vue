<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">朝山礼佛</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group >
          <van-cell title="佛教知识——开光" @click="gokg" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——跪拜仪轨" @click="gogb" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——佛家的语言和礼仪" @click="goly" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——拜佛仪轨" @click="gobf" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——何为菩提" @click="golf" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——坛城" @click="gotc" style="font-size:0.4rem"/>
          <van-cell title="佛教知识——拈花一笑" @click="gonhyx" style="font-size:0.4rem"/>
          <van-cell title="佛学典藏——金刚经" @click="gojgj" style="font-size:0.4rem"/>
          <van-cell title="佛学典藏——般若波罗蜜多心经" @click="goblmd" style="font-size:0.4rem"/>
          <van-cell title="观音胜境——观音菩萨简述" @click="gogyps" style="font-size:0.4rem"/>
          <van-cell title="观音胜境——如意轮观音" @click="gorylgy" style="font-size:0.4rem"/>
          <van-cell title="观音胜境——圣观音" @click="gosgy" style="font-size:0.4rem"/>
          <van-cell title="观音胜境——马头观音" @click="gomtgy" style="font-size:0.4rem"/>
          <van-cell title="观音胜境——准提观音" @click="gotzgy" style="font-size:0.4rem"/>
        </van-cell-group>
        
      </van-col>
      <van-col span="1"></van-col>
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
      this.$router.back("/webtheme");
    },
    gokg() {
      this.$router.push("/webkg");
    },
    goblmd() {
      this.$router.push("/webblmd");
    },
    gogyps() {
      this.$router.push("/webgyps");
    },
    gorylgy() {
      this.$router.push("/webrylgy");
    },
    gosgy() {
      this.$router.push("/websgy");
    },
    gogb(){
      this.$router.push("/webgbyg");
    },
    goly(){
      this.$router.push("/webyyly");
    },
    gobf(){
      this.$router.push("/webbfyg");
    },
    golf(){
      this.$router.push("/webhwlf");
    },
    gotc(){
      this.$router.push("/webtc");
    },
    gomtgy(){
      this.$router.push("/webmtgy");
    },
    gotzgy(){
      this.$router.push("/webtzgy");
    },
    gonhyx(){
      this.$router.push("/webnhyx");
    },
    gojgj(){
      this.$router.push("/webjgj");
    },
    
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
  font-size: 0.2rem;
  text-indent: 2em;
  line-height: 0.3rem;
  padding-top: 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

