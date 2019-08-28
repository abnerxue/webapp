<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">虞舜孝感动天</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <br/>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          
          <p class="m-p">

［虞］舜，姓姚，名重华。瞽瞍之子，性至孝。父顽，母嚣，弟象傲。舜耕于历山，象为之耕，鸟为之耘，其孝感如此。陶于河滨，器不苦窳，渔于雷泽，烈风雷雨弗迷。虽竭力尽瘁，而无怨怼之心。尧闻之，使总百揆，事以九男，妻以二女。相尧二十有八载，帝遂让以位焉。

解说：

舜是瞽瞍的儿子，他是个至孝的人，舜的父母非常愚顽，继弟也十分狂妄。他们待舜都很不好，三番五次地设计害他。使舜感到万分伤心，总是在到田间劳作时向上天哭诉，恼恨自己不能使父母欣慰。舜的宽宏大度终于感动了父母和弟弟，他们觉悟了。从此，一家人和和睦睦。</p>
         <br/>
         <img src="../../../../../static/img/theme2.png">
      </van-col>
      <van-col span="2" ></van-col>
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
      active:1,
       images: [
       
      ]
    };
  },
  methods:{
    goback(){
      this.$router.back('/webxdwh')
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

.m-p{
    font-size: 0.35rem;
    text-indent: 2em;
    line-height: 0.6rem;
    /* padding-top: 0.2rem; */
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
