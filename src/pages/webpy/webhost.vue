<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">中华孝道园</van-col>
      <van-col span="2" ></van-col>
    </van-row>
   <van-tabbar v-model="active">
       <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <hr  class="m-hr">
    <div class="swiper">
      <van-swipe :autoplay="3000"  style="margin-top:1rem">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    </div>
    
    
    <hr style="background: #a09e9e; border: none; height: 0.2rem;">
    <van-row type="flex" justify="center" style="text-align:center;margin-top:0.3rem">
      <van-col span="2"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-ticket.png" class="m-a" @click="goticket">
        <!-- <van-icon name="location-o" class="m-icon" @click="goticket"/> -->
        <p class="m-icon-text" @click="goticket">门票简介</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-hotel.png" class="m-b" @click="gohotel">
        <!-- <van-icon name="location-o" class="m-icon" @click="gohotel"/> -->
        <p class="m-icon-text" @click="gohotel">酒店住宿</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-route.png" class="m-c" @click="gotraffic">
        <!-- <van-icon name="location-o" class="m-icon"  @click="gotraffic"/> -->
        <p class="m-icon-text" @click="gotraffic">交通路线</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <!-- <van-row type="flex" justify="center" style="text-align:center">
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon"  @click="gofor2"/>
        <p class="m-icon-text">新闻动态</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="gofor5"/>
        <p class="m-icon-text">公司简介</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="gofor3"/>
        <p class="m-icon-text">服务中心</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row> -->
    <br/>
    <van-row type="flex" justify="center" style="text-align:center;margin-bottom:0.3rem">
      <van-col span="2"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-theme.png" class="m-d" @click="gofor4">
        <!-- <van-icon name="location-o" class="m-icon"  @click="gofor4"/> -->
        <p class="m-icon-text"  @click="gofor4">主题文化</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-scenic.png" class="m-e" @click="gofor">
        <!-- <van-icon name="location-o" class="m-icon" @click="gofor"/> -->
        <p class="m-icon-text" @click="gofor">景点介绍</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <img src="../../../static/img/my-icon-contace.png" class="m-f" @click="gofor6">
        <!-- <van-icon name="location-o" class="m-icon" @click="gofor6"/> -->
        <p class="m-icon-text" @click="gofor6">联系我们</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <br/>
    <hr style="background: #a09e9e; border: none; height: 0.2rem;">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          中华孝道园坐落于全国十大旅游名片之一的武进太湖湾旅游度假区，占地860亩，面朝太湖，背依蓼莪山脉，位于太湖七湾中最美丽的一湾，空气质量等级为一 级，是江南一带的“世外桃源”。
          园区以距今1600多年历史的古迹——蓼莪禅寺为依托，以弘扬孝道精神为主旨，是融寻根祭祖、朝山礼佛、旅游观光和觉悟教 育于一体的综合景区。其主要景点和服务设施为蓼莪禅寺、正法明大殿、
          石窟观音、妙音宝塔、先祖庙堂、中华孝道博物馆、思恩广场、净心池、普光山庄等。
        </p>
        
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      active:1,
      images: [
        "../../../static/img/lbd.png",
        "../../../static/img/lbf.png",
        "../../../static/img/lba.png",
      ],
      autoHeight:""
    };
  },
  methods:{
    goback(){
      this.$router.back('/webhome')
    },
    gofor(){
      this.$router.push('/webview')
    },
    gofor2(){
      this.$router.push('/webnews')
    },
    gofor3(){
      this.$router.push('/webserv')
    },
    gofor4(){
      this.$router.push('/webtheme')
    },
    gofor5(){
      this.$router.push('/webinfo')
    },
    gofor6(){
      this.$router.push('/weblink')
    },
    goticket(){
      this.$router.push('/webticket')
    },
    gohotel(){
      this.$router.push('/webhotel')
    },
    gotraffic(){
      this.$router.push('/webtraffic')
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

<style lang="scss" scoped>
.swiper {
     width: 100%;
     height: 3.6rem;
  .van-swipe{
    width: 100%;
    height: 100%;
    }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}
  .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
}
}
</style>

<style scoped>
.m-bg{
    background-image: url("../../../static/img/bg.png") ;
    padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: #050505;
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-image: url("../../../static/img/bg-header.png");
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-icon {
  font-size: 0.5rem;
  padding: 0.4rem 0 0 0;
}

.m-icon-text {
  font-size: 0.35rem;
}

.m-p{
    margin-top: 0.2rem;
    text-indent: 2em;
    font-size: 0.35rem;
    line-height: 0.6rem
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}

.m-a{
  width: 72%;
  margin: 0.33rem  0.1rem
}
.m-b{
  width: 60%;
  margin: 0.31rem  0.2rem
}
.m-c{
  width: 55%;
  margin: 0.27rem  0.2rem
}
.m-d{
  width: 55%;
  margin: 0.26rem  0.2rem
}
.m-e{
  width: 55%;
  margin: 0.38rem  0.2rem
}
.m-f{
  width: 55%;
  margin: 0.25rem  0.2rem
}
</style>
