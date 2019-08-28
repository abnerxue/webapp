<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">《二十四孝》简介</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <br>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        
        <p class="m-p">
          《二十四孝》全名《全相二十四孝诗选》，是元代郭居敬编录。由历代二十四个孝子从不同角度、不同环境、不同遭遇行孝的故事集合而成。由于后来的印本大都配以图画，故又称《二十四孝图》。为中国古代宣扬儒家思想及孝道的通俗读物。《二十四孝》的故事大都取材于西汉经学家刘向编辑的《孝子传》，也有一些故事取材《艺文类聚》、《太平御览》等书籍。
          二十四孝包括下面二十四个故事：一、孝感动天二、戏彩娱亲三、鹿乳奉亲四、百里负米 五、啮指痛心 六、芦衣顺母七、亲尝汤药 八、拾葚异器 九、埋儿奉母 十、卖身葬父 十一、刻木事亲 十二、涌泉跃鲤 十三、怀橘遗亲 十四、扇枕温衾 十五、行佣供母 十六、闻雷泣墓 十七、哭竹生笋 十八、卧冰求鲤 十九、扼虎救父 二十、恣蚊饱血 二十一、尝粪忧心 二十二、乳姑不怠 二十三、亲涤溺器 二十四、弃官寻母。
          俗话说百善孝为先，“孝”是中国古代重要的伦理思想之一，郭居敬辑录《二十四孝》，序而诗之，用训童蒙，成为宣传孝道的通俗读物，流传甚广。在传统的木雕、砖雕和刺绣上，常见这类题制的图案。
        </p>
        <img src="../../../../../static/img/theme1.png">
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
      this.$router.back("/webxdwh");
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
  font-size: 0.35rem;
  text-indent: 2em;
  line-height: 0.6rem;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
