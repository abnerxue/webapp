<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">仲由为亲负米</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <h5 style="padding-top: 0.3rem;font-size:0.35rem">
          【经典原文】
        </h5>
        <p class="m-p">
          周仲由，字子路。家贫，常食藜藿之食，为亲负米百里之外。亲殁，南游于楚，从车百乘，积粟万钟，累茵而坐，列鼎而食。乃叹曰：“虽欲食藜藿，为亲负米，不可得也。”
          诗曰：负米供旨甘，宁辞百里遥。身荣亲已殁，犹念旧劬劳。
        </p>
        <h5  style="padding-top: 0.3rem;font-size:0.35rem">
          【原文注释】
        </h5>
        <p class="m-p">
          春秋时的卞州人仲由，字子路，小时候家里非常穷，他侍奉父母却是极尽孝心，即使家徒四壁，也要竭尽所能让父母吃好穿好，而自己往往只随便吃些粗粮。有一次，家里没有粮食吃了，卞州的粮价却一路飞涨，
          家里仅剩的那些钱已无法维持下去。子路听说百里之外的某地粮价较低，便不分昼夜地亲自赶往那里买了米，扛着回家。看着父母又能吃上香喷喷的米饭，他心里乐滋兹的。
          两位老人过世后，子路游学到南方，得到楚王的重用。每次外出随从的车子都有上百辆，座位上的垫子铺得特别厚，每次宴饮都是丰盛的佳肴，在当时声势极为煊赫。子路却一点也不高兴，
          面对着自己拥有的一切往往黯然神伤，叹息着对人说：“我现在虽然高贵了，可我的父母在哪里?虽然我还想吃粗粮，还想像当年一样肩扛米袋步行百里回家，可是这一切都没有机会了。”
        </p>
        <h5  style="padding-top: 0.3rem;font-size:0.35rem">
          【孝道解读】
        </h5>
        <p class="m-p">
          当今的儿女是如何侍奉双亲的？新闻媒体时有报道：父母年老体弱，遗弃之，甚至逐出家门，沦落为丐；更恶劣的还杀害父母！为此，我们应竭力弘扬古人恪尽孝道的精神!
          其实，父母在世时即使没有丰厚的供给，事事以父母为先，处处以父母为主，时时想着父母，就是真正的孝行。
        </p>
        <br>
        <img src="../../../../../static/img/theme5.png">
        
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
  padding-top: 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
