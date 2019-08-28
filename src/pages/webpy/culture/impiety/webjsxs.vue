<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">祭祀—献食</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          
          <p class="m-p">
              祭祀神灵，是以献出礼品为代价的。人们对神灵的归顺，可以跪拜叩头，可以焚香燃纸，但对神灵来说最实惠的祭祀方式还是献上祭品。人有七情六欲，神灵也是如此。人们既然对神灵有所祈求，理应舍得拿出自
              己最好的东西祭献，以博得神灵的欢心。但人的喜好不一，不同的神灵也各有自己的口味，所以祭品多种多样，其中就包括献食。
          </p>
          <p class="m-p">
             食物民以食为天，最初的祭祀以献食为主要手段。《礼记·礼运》称：“夫礼之初，始诸饮食。其燔黍捭豚，污尊而抱饮，蒉桴而土鼓，犹可以致其敬于鬼神”。意思是说，祭礼起源于向神灵奉献食物，只要燔烧黍稷
             并用猪肉供神享食，凿地为穴当作水壶而用手捧水献神，敲击土鼓作乐，就能够把人们的祈愿与敬意传达给鬼神。研究文字的起源也会发现，表示“祭祀”的字多与饮食有关。
          </p>
          <img src="../../../../../static/img/jisi14.png" style="margin:0.2rem auto">
          <p class="m-p">
             在诸多食物中，又以肉食为最。在原始采集和狩猎时代，肉食是人们拼着性命猎来的。当原始农业和畜牧业发展起来时，肉食仍极为宝贵。孟子构想的理想生活，就以70岁能吃上肉为重要标准，弟子拜师的礼物也
             不过是两束肉干，可见肉食的难得。正因为如此，肉食成为献给神灵的主要祭品。
          </p>
          <p class="m-p">
             古代用于祭祀的肉食动物叫“牺牲”，指马、牛、羊、鸡、犬、豕等牲畜，后世称“六畜”。六畜中最常用的是牛羊豕三牲。鱼兔野味也用于祭祀，但不属“牺牲”之列。祭祀也有用人的，但人本身不叫“牺牲”，古书只说
             “用人”，不说“人牲”。
          </p>
          <p class="m-p">
             作为祭品的食物除“牺牲”外，还有粮食五谷，称“粢盛”。鲜嫩的果品蔬菜在民间祭祀中也是常用的祭品，《诗经》中屡屡提及；佛教传入中国后，“斋祭”中果品更丰。另外，酒也是祭祀神灵的常用祭品。
          </p>
          <br>
        
        
     
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
      this.$router.back("/webxgjz");
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

.m-p-a {
  font-size: 0.35rem;
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

