<template>
  <div  class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">公司简介</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr>
    <van-row>
        <van-col span="4"></van-col>
        <van-col span="20">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button" @click="goyqjj">园区简介</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-col span="4"></van-col>
        <van-col span="20">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="gobqxx">版权信息</van-button>
        </van-col>
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
      this.$router.push('/webhost')
    },
    goyqjj(){
      this.$router.push('webyqjj')
    },
    gobqxx(){
      this.$router.push('webbqxx')
    },
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

.m-button{
    font-size: 0.35rem;
    margin-top: 1.2rem
}

.m-button-a{
    font-size: 0.35rem;
    margin-top: 0.6rem
}

.m-c-icon{
    font-size: 0.35rem;
}

</style>
