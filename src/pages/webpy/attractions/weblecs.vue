<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">蓼莪禅寺</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row style="margin-top:1rem">
        <van-col span="2"></van-col>
        
        <van-col span="20">
            
            <p class="m-p">蓼莪禅寺始建于东晋，距今已有1600多年的历史，千百年来，蓼莪禅寺屡有兴废，然历代僧人屡毁屡建，其历史上也曾先后得到4位皇帝的6次拨款。
                中华孝道园正致力于将其恢复到明朝永乐年间最鼎盛时期的规模。</p>
            <img src="../../../assets/jd2.png" class="m-img">
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
      active:1,
       images: [
       
      ]
    };
  },
  methods:{
    goback(){
      this.$router.back('/webview')
    }
  }
};
</script>

<style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    height: 100%;
    padding-bottom: 2rem
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

.m-img{
    margin: 0.4rem auto
}

.m-p{
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
