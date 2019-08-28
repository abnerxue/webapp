<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“黄”姓</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p-a">
              一、姓氏起源
          </p>
          <p class="m-p">
              1、出自嬴姓。帝舜时代，东夷部落首领伯益，因助大禹治水有功，被帝舜赐嬴姓。伯益后裔有14，合称嬴姓十四氏。其中的黄氏于周初在今河南潢川建立黄国，春秋时为楚所灭，亡国后的黄国子孙，以国为氏，
              称黄氏。
          </p>
          <p class="m-p">
              2、出自金天氏之后。台骀是上古少昊金天氏的苗裔，春秋时，台骀的后人建立沈、姒、蓐、黄诸国，后皆被晋国所灭。其中黄国子孙以国为姓，称黄姓。
          </p>
          <p class="m-p">
             3、出自古代南方的蛮族。《新唐书》中有“邕管（在广西境内）蛮有黄姓。唐黄少卿、少高、少温是也。”其实，此支黄氏乃是黄国遗民的后裔。
          </p>
          
        <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
              黄姓发源地在今河南省潢川县西部一带。黄国被楚灭后，部分北逃至河南中部，大批则被迫内迁到楚国腹地（今河北境），今黄冈、黄陂、黄安、黄梅等地，据说均因黄国人迁此而得名。
          </p>
          <p class="m-p">
              秦汉之时，黄姓已称盛于长江中游及以北河南、安徽等地。黄姓大举南迁始于西晋末年，经魏晋至隋唐的迁徙和繁衍，黄姓形成了今河南、湖北、四川、江苏、福建、广西等地望族。宋代有黄潜善，其九子散居广东
              各地，以梅州居多，后发展为广东大姓。北宋末，金兵功入开封，河南固始人黄建联南徙杭州，后成为杭州著姓，支分漳浦、饶平、陆丰等地。宋元之际，黄氏称盛于闽粤，至明末清初，开始移居台湾，后有不少人迁
              至海外。黄姓是我国一个比较典型的南方姓氏。
          </p>
          <br>
        <img src="../../../../../static/img/jisi13.png">
          <br>
          <p class="m-p-a">
              三、郡望堂号
          </p>
          <p class="m-p-a">
              【郡望】
          </p>
          <p class="m-p-a">
             江夏郡：汉高祖置郡。此支黄氏，为东汉大臣黄香之族所在。
          </p>
          <p class="m-p-a">
              会稽郡：秦时置郡。此支黄氏，出自东汉黄昌之后。
          </p>
          <p class="m-p-a">
              零陵郡：西汉时置郡。此支黄氏为三国黄盖之族所在。
          </p>
          <p class="m-p-a">
              巴东郡：东汉时置郡。此支黄氏，出自东汉蜀将黄权之后。 
          </p>
          <p class="m-p-a">
              西郡：在今甘肃永昌一带，为酒泉黄衍之后。
          </p>
          <p class="m-p-a">
              【堂号】
          </p>
          <p class="m-p-a">
             宽和堂：汉代河南太守黄霸，为政独尚宽和。
          </p>
          <p class="m-p-a">
              江夏堂：后汉黄香，少时丧母，对父亲极孝，夏为父亲扇凉席子，冬为父亲暖褥。人夸他的孝：“天下无双，江夏黄童！”
          </p>
          <p class="m-p-a">
              黄姓堂号还有“思敬”、“逸敦”、“敦睦”、“炽昌”等。“炽昌堂”以黄峭山公外八句诗末“炽昌”二字为名。
          </p>
          
          <p class="m-p-a">
              历史名人
          </p>
          <p class="m-p-a">
              黄宗羲：明清杰出思想家、史学家。所著《明儒学案》、《宋元学案》为中国历史上系统的哲学思想专著，是明末清初三大思想家之一。
          <p class="m-p-a">
              黄 慎：清代画家。善画人物，兼工花鸟、山水。为"扬州八怪"之一。
          </p>
          <p class="m-p-a">
              黄庭坚：北宋文学家。其诗与苏轼并称"苏黄"，开创江西诗派。也是宋代四大书法家之一。
          </p>
          <p class="m-p-a">
               黄道婆：元初女纺织家。发明和传授先进防治技术，被尊为布业始祖。
          </p>
          <p class="m-p-a">
              黄飞鸿：南海西樵禄舟村人，岭南武术界的一代宗师，也是一位济世为怀的名医。
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

