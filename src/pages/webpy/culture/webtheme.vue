<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">主题文化</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr>
   <!--  <van-row style="margin-top:1rem; text-align:center; position:relative">          
      <van-col span="2"></van-col>
      <van-col span="20" >
        <div class="list-box" @click="goxdwh">
          <img src="../../../../static/img/theme_bg.png" >
          <div class="container" style="position:absolute; top:29% ;left:38%">
            孝道文化
          </div>
        </div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-row style="margin-top:0.5rem; text-align:center; position:relative">
      <van-col span="2"></van-col>
      <van-col span="20" >
        <div class="list-box" @click="gocslf">
          <img src="../../../../static/img/theme_bg.png" >
          <div class="container" style="position:absolute; top:29%; left:38%">
            朝山礼佛
          </div>
        </div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-row style="margin-top:0.5rem; text-align:center; position:relative">
      <van-col span="2"></van-col>
      <van-col span="20" >
        <div class="list-box" @click="goxgjz">
          <img src="../../../../static/img/theme_bg.png" >
          <div class="container" style="position:absolute; top:29% ;left:38%">
            寻根祭祖
          </div>
        </div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row> -->
<div>
<img src="../../../../static/img/theme.png" style="position:relative">
<van-row style="top:2.9rem; text-align:center;position:absolute;width:100%">
<van-col span="8"></van-col>
<van-col span="8">
<p class="container" @click="goxdwh">孝道文化</p >
</van-col>
<van-col span="8"></van-col>
</van-row>
<van-row style="top:5.8rem; text-align:center;position:absolute;width:100%">
<van-col span="8"></van-col>
<van-col span="8">
<p class="container" @click="gocslf">朝山礼佛</p >
</van-col>
<van-col span="8"></van-col>
</van-row>
<van-row style="top:8.7rem; text-align:center;position:absolute;width:100%">
<van-col span="8"></van-col>
<van-col span="8">
<p class="container" @click="goxgjz">寻根祭祖</p >
</van-col>
<van-col span="8"></van-col>
</van-row>
</div>

    <!-- <van-row  style="margin-top:0.5rem">        
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group>
          <van-cell title="孝道文化" @click="goxdwh" style="font-size:0.4rem"/>
          <van-cell title="朝山礼佛"  @click="gocslf" style="font-size:0.4rem"/>
          <van-cell title="寻根祭祖" @click="goxgjz" style="font-size:0.4rem"/>
        </van-cell-group>
      </van-col>
      <van-col span="1"></van-col>
      
    </van-row> -->



    <!-- <van-row>                                
        <van-col span="4"></van-col>
        <van-col span="20">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button" @click="goxdwh">孝道文化</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-col span="4"></van-col>
        <van-col span="20">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="gocslf">朝山礼佛</van-button>
        </van-col>
    </van-row>
    <van-row>
        <van-col span="4"></van-col>
        <van-col span="20">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goxgjz">寻根祭祖</van-button>
        </van-col>
    </van-row> -->
  
    <van-tabbar v-model="active">
       <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
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
    goxdwh(){
      this.$router.push('/webxdwh')
    },
    gocslf(){
      this.$router.push('/webcslf')
    },
    goxgjz(){
      this.$router.push('/webxgjz')
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
}

.m-header {
  position:fixed;
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

.list-box{
  width: 100%;
  height: 2rem;
  /* margin:0 5%; */
  
}

.container{
  font-size: 0.5rem;
  text-align: center;
  font-weight:500
}



</style>
