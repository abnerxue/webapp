<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">跪拜仪轨</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          第一，站立姿势．轻轻合起双掌，手指并拢，手肘自然弯曲，置于胸前约呈四十五度；
        </p>
        <p class="m-p">
          第二，分右掌向下，按于蒲团之中心，左掌不动，两膝跨开，跪于蒲团上；
        </p>
        <img src="../../../../../static/img/lf6.png" />
        <p class="m-p">
          第三，左掌按于蒲团之前左边；
        </p>
        <p class="m-p">
          第四，右掌从中心移于蒲团之前右边，两掌相离六寸许；以头按于两掌中间之蒲团上；
        </p>
        <img src="../../../../../static/img/lf7.png" />
        <p class="m-p">
          第五，以两手掌向外边翻转(手心向上，意在以两手承佛足，头面接足礼)；
        </p>
        <p class="m-p">
          第六，两手曲指反转，仍按于蒲团之原处；头离蒲团由伏而起；右掌移于蒲团之中心；
        </p>
        <p class="m-p">
          第七，左掌离蒲团，置于胸前如合掌之状；右掌用力撑起(两膝同时离蒲团)，合于左掌当胸，此为一拜；
        </p>
        <p class="m-p">
          第八，拜毕后尚有一礼，如世俗之作揖，名曰问讯；
        </p>
        <img src="../../../../../static/img/lf8.png" />
        <p
          class="m-p"
        >注：大殿中央拜垫是寺主用的，不可在上礼拜，宜用两旁的垫凳，分男左女右拜用，凡有人礼拜时，不可在他的头前行走。拜佛时，不可移动双脚的位置，拜时要将臀部置于脚上，不可翘起。</p>
        <img src="../../../../../static/img/lf9.png" />
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
}

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
