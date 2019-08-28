<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">准提观音</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          观音掌管六道，而准提观音掌管着人所存在的人间道，人们只有向准提观音发愿，才能实现愿望。而中华孝道园石窟观音中供奉的就是准提观音的讲经说法像，其结跏趺坐于出水莲花之上，下有两位龙王支撑，
          左右有善财和龙女做协侍，显示其至高无上，功德无量。同时，她也是我国最高的室内观音坐像（21.9米），拥有全国最长的香炉（44米），并且此尊观音像享八千顷太湖水供养，得千万名信众者香火，及其灵验。
        </p>
        <p class="m-p">
          观音为了替其父亲阿弥陀佛完成打造西方极乐世界的弘愿，倒驾慈航来到婆娑世界救苦救难，实现了对父亲的小孝和对大众的大孝，是佛教的孝行代表，因此，登上神道拜见观音后才代表了此次孝道之行的圆满。
        </p>
        
        <img src="../../../../../static/img/lf15.png" />
        
        
        
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
