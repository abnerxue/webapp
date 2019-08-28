<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">联系我们</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <br>
    <van-row style=" margin-top:1rem ">
        <van-col span="2"></van-col>
        <van-col span="7">
            <p class="m-p1">联系地址：</p>
        </van-col>
        <van-col span="14">
            <p class="m-p2">常州市武进太湖湾旅游度假区（常州市武进区雪堰镇环太湖路101号）</p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row style=" margin:0.3rem 0">
        <van-col span="2"></van-col>
        <van-col span="7">
            <p class="m-p1">联系电话：</p>
        </van-col>
        <van-col span="14">
            <p class="m-p2">400-860-6081</p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row style=" margin:0.3rem 0">
        <van-col span="2"></van-col>
        <van-col span="7">
            <p class="m-p1">传真号码：</p>
        </van-col>
        <van-col span="14">
            <p class="m-p2">0519-81885555</p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row style=" margin:0.3rem 0">
        <van-col span="2"></van-col>
        <van-col span="7">
            <p class="m-p1">电子邮箱：</p>
        </van-col>
        <van-col span="14">
            <p class="m-p2">zhxdyhlw@163.com</p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row style=" margin:0.3rem 0">
        <van-col span="2"></van-col>
        <van-col span="7">
            <p class="m-p1">地图概况：</p>
        </van-col>
    </van-row>
    <van-row style=" margin:0.3rem 0">
        <van-col span="2"></van-col>
        <van-col span="20"><img src="../../../../static/img/addrmap.png"></van-col>
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
      this.$router.back('/webhost')
    },
    top() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.top();
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

.m-p1{
    font-size: 0.4rem;
}

.m-p2{
    font-size: 0.35rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
