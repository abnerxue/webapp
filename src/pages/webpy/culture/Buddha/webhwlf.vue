<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">何为菩提</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          很早以前就听说过菩提树，很多人念它的好，念他的伟大，念它孕育了一个伟大的人物，并解救了万物众生。“菩提”这两个字，看着文雅入眼，念着也音圆上口。却始终未能明白，何为菩提？佛缘殊胜，
          不知何时我来到了这样一个充满梵音的地方，最初不为修行，却渐渐明白了些许。
        </p>
        <p class="m-p">
          很久以前，古印度国有一座繁华的宫殿，日夜歌舞升平，杯酒相倾，贵人们生活在纸醉金迷中，而那宫殿外的贫民们却饱受风吹日晒极寒穷苦的困扰。宫殿内外鲜明的对比令穷人们望之兴叹，垂头无奈，
          那里有一个他们进不去的世界，而城墙里面的人似乎也不打算看看外面的世界。两种截然不同的生活，即天堂与地狱之别。
        </p>
        
        <p class="m-p">
          上天仿佛注定要派来一个救世主，他关注到生老病死，还有更多那些无法得到自由的灵魂。那厚厚的宫墙，囚禁不住这颗悲悯的心。在一切生命都沉睡的时候，悉达多太子终究舍弃皇族身份踏上寻求真理的道路。
        </p>
        <p class="m-p">
          人间已苦，修行是否更苦？若更苦，那世上的这些人还有什么活路？于是在那样苦苦的煎熬里，他到底悟出了这世上循环轮回的中道。“弦，绷紧了会断，松了又弹不出那样美妙的音色。”什么东西都有适合他的道，
          不多不少，适中最好。这话听来是带着神秘的宗教信仰的佛陀所说，但就是今天，他却与今天的物质哲学理论不谋而合。撇开那些迷信的宗教色彩，佛学的理论是广大渊源的，正与这个宇宙的世界物质学说有太多谋和之处。
        </p>
        <img src="../../../../../static/img/lf12.png" />
        <p class="m-p">
          原来佛陀在几千年前就有那样的智慧，几千年前就给了世人如此解脱。悉达多在菩提树下经受各种诱惑最后逃离他自己的诱惑的那一段旅程，真的给我很大的震撼。若说人最难逃避的是什么，自然是诱惑，很多时候，
          我们经受住了别人给我们的诱惑，最后还是逃不过自己内心的迷幻。
        </p>
        <p class="m-p">
          所以我想，我应该是渐渐的明白了，什么是菩提。
        </p>
        <p class="m-p">
          菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。
        </p>
        <p class="m-p">
          其实这首小诗一开始就点醒了我们，这世上或许从来就没有一棵叫做菩提的树，那不过是我们内心的安宁变化而来。我们看到的都是表象，菩提不过是我们内心的选择。他开启了我们的智慧，让我们选择自己的走向。
          什么路该走、该怎么走，什么事对错，往心里的明镜一照，很多事情都已经一目了然。跟着心走，跟着慈悲和善良，跟着对万物的关怀，即便不去念经，心亦可成佛。
        </p>
        
        
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
