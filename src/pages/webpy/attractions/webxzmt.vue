<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">先祖庙堂</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr>
    <van-row>
        <van-col span="2"></van-col>
        
        <van-col span="20">
            
            <p class="m-p"> 先祖庙堂是集国祭、家祭于一体的综合性祠堂，大殿内供奉炎黄二帝、伏羲女娲、
                如意轮观音和历代贤君神位。后殿中间一殿供奉华夏儿女共同的母亲华胥氏，东西两殿为谱牒文化馆，两侧105间厢房为百家姓祠堂</p>
            <img src="../../../assets/jd10.png" class="m-img">
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
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: url("../../../../static/img/bg-header.png");
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-img{
    margin: 0.31rem auto;
}

.m-p{
    text-indent: 2em;
    font-size: 0.35rem;
    margin-top: 0.3rem;
    line-height: 0.6rem;
}



</style>
