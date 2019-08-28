<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">企业荣誉</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <br>
        <h4 style="font-size:0.4rem">国家级荣誉</h4>
        <img src="../../../../static/img/honor-a.png" style="margin:0.3rem 0">
        <h4 style="font-size:0.4rem">市级荣誉</h4>
        <img src="../../../../static/img/honor-b.png" style="margin:0.3rem 0">
        <h4 style="font-size:0.4rem">区级荣誉</h4>
        <img src="../../../../static/img/honor-c.png" style="margin:0.3rem 0">
        <br><br><br><br><br><br><br><br>
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
      active: 1
    };
  },
  methods: {
    goback() {
      this.$router.back("/webs");
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
.m-bg {
  background-image: url("../../../../static/img/bg.png");
  margin-top: 1rem;

}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-image: url("../../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
 