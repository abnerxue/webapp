<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">孝道文化</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group>
          <van-cell title="孝道经典——《二十四孝》简介" @click="goessx" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——虞舜孝感动天"  @click="goxgdt" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——老莱子戏彩娱亲" @click="goxcyq" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——千年孝子寺——蓼莪禅寺简介" @click="goxzs" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——仲由为亲负米" @click="gowqfm" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——剡子鹿乳奉亲" @click="golrfq" style="font-size:0.4rem"/>
          <van-cell title="孝道文化——孝道文化简述" @click="gowhjs" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——亲尝汤药" @click="goqcty" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——埋儿奉母" @click="gomefm" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——卖身葬父" @click="gomszf" style="font-size:0.4rem"/>
          <van-cell title="孝道文化——刻木事亲" @click="gokmsq" style="font-size:0.4rem"/>
          <van-cell title="孝道经典——涌泉跃鲤" @click="goyqyl" style="font-size:0.4rem"/>
        </van-cell-group>
        <br><br><br>
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
    goessx(){
        this.$router.push('/webessx')
    },
    goxgdt(){
        this.$router.push('/webxgdt')
    },
    goxcyq(){
      this.$router.push('/webxcyq')
    },
    goxzs(){
      this.$router.push('/webxzs')
    },
    gowqfm(){
      this.$router.push('/webwqfm')
    },
    golrfq(){
      this.$router.push('/weblrfq')
    },
    gowhjs(){
      this.$router.push('/webwhjs')
    },
    goqcty(){
      this.$router.push('/webqcty')
    },
    gomefm(){
      this.$router.push('/webmefm')
    },
    gomszf(){
      this.$router.push('/webmszf')
    },
    gokmsq(){
      this.$router.push('/webkmsq')
    },
    goyqyl(){
      this.$router.push('/webyqyl')
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
