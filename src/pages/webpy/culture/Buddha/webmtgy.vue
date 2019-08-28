<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">坛城</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          马头观音，先天自有观音法身，是六观音之一，主救度畜生道众生，因以马首置于头顶，故称此名。马头观音是六道中畜牲道的护法明王，也称马头明王、马头金刚或马头大士。
        </p>
        <p class="m-p">
          马头观音通体赤红，三面八臂，三目圆睁，獠牙外露，头发和胡须着红黄两色并向上竖起，呈狮子无畏相。马头观音的三面表示空灵悟性，八臂表示智悲双运，三目圆睁表示降
          伏三界恶魔，獠牙外露表示震慑一切阻碍众生运行的魔障。
        </p>
        
        <p class="m-p">
          马头观音的主要法力有：降伏罗刹、鬼神、天龙八部中的一切恶魔，消除无明业障、瘟疫、病苦、免去一切恶咒邪法。在六观音中，唯有马头观音在发髻上有一个或三个马头，是护佑人们出行平安的象征。
        </p>
        
        <img src="../../../../../static/img/lf14.png" />
        
        
        
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
.m-bg {
  background-image: url("../../../../../static/img/bg.png");
  margin-top: 1rem;
  padding-bottom: 2rem;
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
  line-height: 0.6rem;
  padding: 0.2rem 0;
  text-indent: 2em
}

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
