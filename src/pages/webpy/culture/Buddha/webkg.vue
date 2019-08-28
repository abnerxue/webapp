<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">开光</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          开光，是将自然界的日、月、星三神灵光接引到道场里来，使道场里供奉的神像或吉祥物，承接天地灵气，或是把宇宙中无形的、具有无边法力的真灵注入到神像或吉祥物中去，神像或吉祥物也就具有无边法力的灵性，以造化万民之福祉。在佛教中，开光的佛像与吉祥物具有宗教意义上的神圣性，受到佛教徒的顶礼膜拜，是护平安、保健康、纳福财的极佳选择。
        </p>
        <p class="m-p">
          中华孝道园，目前已落成观世音菩萨前世“正法明如来”、现世“准提观音”两座圣像，未来还将打造观世音菩萨未来式“妙音如来”圣像。因观世音菩萨乃是为助其父亲阿弥陀佛打造西方极乐世界，倒驾慈航来到娑婆世界，度化众生脱离苦难，因此被称为“孝佛”。大孝之心成就三世观音福报磁场，在此许下的心愿，定得加持，充满灵性。
        </p>
        <p class="m-p">
          开光就如同给物品点上烛光，持有开光吉祥物的人做善事、修功德，就会让烛光更亮，在冥冥中引到灵性和仙气。圣像及圣像周边吉祥物，皆经过德高望重的法师开光，极具灵性。加之孝道园优越的地势、极好的风水，此处的开光吉祥物可谓采天地之精华，纳阴阳之灵气，拥五行之平衡。无论是迎请给自己，还是迎请给家人，都是开运消灾、辟邪护身、纳福得财、智慧聪颖的绝佳选择。
        </p>
        <br>
        <img src="../../../../../static/img/lf1.png">  
        
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
  padding-top: 0.3rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
