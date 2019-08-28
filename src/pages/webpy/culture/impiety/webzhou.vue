<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“周”姓</van-col>
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
              1、最早出自周昌和周任。据《姓氏考略》所载，相传黄帝时有位大将名周昌，至商代有太史名周任，此二人的后代都以周为姓氏。
          </p>
          <p class="m-p">
              2、出自姬姓，其始祖为周文王。黄帝的儿子后稷，姓姬，是古代周族始祖。周平王之后通常被认为是我国周姓来源的主体。另有周赧王之后，周公旦之后。
          </p>
          <p class="m-p">
            3、出自他氏改姓或他族改姓为周。如北魏时有鲜卑皇族普氏改姓周。
          </p>
          
        <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
                周氏早期在河南发展繁衍。河南临汝周氏部分于秦代迁往沛郡，成为当地著姓，西汉大臣周昌、周勃、周亚夫即属此支。东汉董卓叛乱，汝南安城周氏有一支迁居今安徽庐江。西晋永嘉年间，中原有一支周氏迁往
                姑熟[今安徽当涂]。唐高宗时，陈政、陈元光父子入闽开辟漳州，有周姓将校随行，这是周姓入福建最早者。唐代元和年间，周氏大都是西汉汝坟侯周仁的后裔。周仁5世孙周燕，子孙繁盛，分衍出许多支脉，如周
                燕之子周忠因任太山太守而在当地定居，形成太山周氏。南宋时，汝南周氏有一支直接迁往福建宁化石壁乡，还有一支徙居永定。清朝康熙、乾隆年间，闽、粤周氏陆续有人移居台湾，后有不少人到海外谋生。
          </p>
          <br>
        <img src="../../../../../static/img/jisi16.png">
          <br>
          <p class="m-p-a">
              三、郡望堂号
          </p>
          <p class="m-p-a">
              【郡望】
          </p>
          <p class="m-p-a">
             汝南郡：汉时置郡。此支周氏为周平王少的后代，有汝南周氏遍天下之说。
          </p>
          <p class="m-p-a">
              沛国郡：汉时置郡。此支周氏，其开基始祖为汉代汾阴侯周昌。
          </p>
          <p class="m-p-a">
               陈留郡：西汉时置郡。此支周氏为汉代周仁之后，其开基始祖为晋代的周震。
          </p>
          <p class="m-p-a">
              【堂号】
          </p>
          <p class="m-p-a">
              细柳堂：汉文帝时，周亚夫驻兵细柳（今陕西咸阳西南）抗击匈奴。
          </p>
          <p class="m-p-a">
               爱莲堂：北宋哲学家周敦颐，清正廉洁，以莲花比君子，作《爱莲说》。
          </p>
          
          <p class="m-p-a">
              历史名人
          </p>
          <p class="m-p-a">
               周亚夫：西汉名将。防守细柳抗匈奴，被誉为“真将军”。
          <p class="m-p-a">
              周敦颐：北宋哲学家，字茂叔，今湖南道县人，朱熹推崇他为理学的创始人。 
          </p>
          <p class="m-p-a">
              周昉：唐代以画肖像、佛像著称的名画家，出身显贵家族。其画风为“衣裳简劲，色彩柔丽，以丰厚为体”。宋代的米芾将他与顾恺之、陆探微、吴道子三人并称为"四大人物画家"。
          </p>
          <p class="m-p-a">
               周瑜：字公瑾，今安徽庐江人，三国吴之名将，火烧赤壁，大败曹军，以弱胜强。精音乐，时称“曲有误，周郎顾。”
          </p>
          <p class="m-p-a">
                周树人：鲁迅本名，字豫才，浙江绍兴人氏。伟大的文学家、思想家、革命家，周敦颐的第三十二世孙。
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

