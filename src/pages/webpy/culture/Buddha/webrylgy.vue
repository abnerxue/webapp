<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">如意轮观音</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
         如意轮观音报身即俗话说的菩萨真身，《佛说观无量寿经》载：观世音菩萨身长八十亿那由他恒河沙由旬。身紫金色。顶有肉髻。项有圆光。面各百千由旬。其圆光中有五百化佛。是宗教学名词，宗教中意思是除难，
         求财，在东密众多的修法中，系属于秘法中之秘法女用昱珀男用寂断添“浆草，出云鞍马，四灵物”3个押印。如释迦牟尼。一一化佛。有五百菩萨无量诸天。供奉：每天三柱香。以为侍者。举身光中五道众生。一切色
         相皆于中现。顶上毗楞伽摩尼妙宝。以为天冠。其天冠中有一立化佛。高二十五由旬。眉间毫相备七宝色。流出八万四千种光明。一一光明。有无量无数百千化佛。一一化佛。无数化菩萨以为侍者。变现自在满十方界。
         臂如红莲花色。有八十亿微妙光明。以为璎珞。其璎珞中。普现一切诸庄严事。手掌作五百亿杂莲华色。手十指端。一一指端有八万四千画。犹如印文。一一画有八万四千色。一一色有八万四千光。其光柔软普照一切。
         以此宝手接引众生。举足时。足下有千辐轮相。自然化成五百亿光明台。下足时。有金刚摩尼花。布散一切莫不弥满。其余身相众好具足。如佛无异。唯顶上肉髻及无见顶相。不及世尊。
        </p>
        <p class="m-p">
         这种观音，也可以称为「大梵深远观音」，而之所以名为「如意轮观音」，主要是因其形象是左右手分持宝珠及宝轮，故名为如意轮，密宗则称其为「持宝金刚」。
        </p>
        <p class="m-p">
         这种观音，一般是六臂造型，并且各有不同的作用。右边的第一手，主要是用于思维；第二手是用于持如意宝；第三手是持念珠。而左边的第一手，则是按明山；第二手持莲花，第三手是持宝轮。这六臂的功能，
         主要都是在于解除众生的烦恼。
        </p>
    
        <br>
        <img src="../../../../../static/img/lf4.png">  
        
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
