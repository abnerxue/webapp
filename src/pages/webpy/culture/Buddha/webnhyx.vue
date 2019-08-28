<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">拈花一笑</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          拈花一笑，佛教语，禅宗以心传心的第一宗典故，包含两层意思：一是指对禅理有了透彻的理解，二是指彼此默契、心神领会、心意相通、心心相印。
        </p>
        <p class="m-p">
          有一次大梵天王在灵鹫山上请佛祖释迦牟尼说法。大梵天王率众人把一朵金婆罗花献给佛祖，隆重行礼之后大家退坐一旁。佛祖拈起一朵金婆罗花，意态安详，
          却一句话也不说。大家都不明白他的意思，面面相觑，唯有摩诃迦叶破颜轻轻一笑。佛祖当即宣布：“我有普照宇宙、包含万有的精深佛法，熄灭生死、超脱轮回的奥妙心法，
          能够摆脱一切虚假表相修成正果，其中妙处难以言说。我不立文字，以心传心，于教外别传一宗，现在传给摩诃迦叶。”然后把平素所用的金缕袈裟和钵盂授与迦叶。这就是禅宗“拈
          花一笑”和“衣钵真传”的典故。中国禅宗把摩诃迦叶列为‘西天第一代祖师’。
        </p>
        <p class="m-p">
            注：此段引用自“拈花一笑”的博客，原文为拈花一笑编写。
        </p>
        
        <img src="../../../../../static/img/lf16.png" />
        
        
        
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
