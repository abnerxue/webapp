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
          梵文音译为“曼陀罗”或“曼达”、“满达”。据佛经记载，印度密教修法时，为防止外道“魔众”侵入，在修法处划定界线或修建土坛，并在上面设置诸佛像，表示诸佛聚集或轮圆具足。后来，修法时设置的坛
          和划定的界线被称为坛城或曼荼罗。由此构成了后世坛城的基本框架，演变出多种形式和类别的曼陀罗。坛城作为象征宇宙世界结构的本源，是变化多样的本尊神及眷属众神聚居处的模型缩影。
        </p>
        <p class="m-p">
          坛城以立体或平面的方、圆几何形并塑或绘以神像法器，表现诸神的坛场和宫殿，比喻佛教世界的结构。
        </p>
        
        <p class="m-p">
          由于密教修法的内容不同，坛城的设置形式和内容（陈设品）也各不相同，极其复杂。为便于人们修行，后人据其内容以金、石、木、泥（土）等材料和绘画方式分别制成样式不同、大小不一的坛城，以表示
          不同的佛陀世界，陈设于佛堂，以供观想。
        </p>
        
        <img src="../../../../../static/img/lf13.png" />
        
        
        
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
