<template>
  <div>
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">园区简介</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row class="m-bg">
      <van-col span="2"></van-col>
      <van-col span="20">
          <br>
          <p style="text-indent: 2em">
              中华孝道园坐落于全国十大旅游名片之一的武进太湖湾旅游度假区，占地860亩，面朝太湖，背依蓼莪山脉，位于太湖七湾中最美丽的一湾，空气质量等级为一级，
              是江南一带的“世外桃源”。园区以距今1600多年历史的古迹——蓼莪禅寺为依托，以弘扬孝道精神为主旨，是融寻根祭祖、朝山礼佛、旅游观光和觉悟教 育于一体的综合景区。
              其主要景点和服务设施为蓼莪禅寺、正法明大殿、石窟观音、妙音宝塔、先祖庙堂、中华孝道博物馆、思恩广场、净心池、普光山庄等。
          </p>
          <br>
          <!-- <p>
              一、中华孝道园大门
          </p>
          <img src="../../../../static/img/jianjie1.png" class="m-img">
          <p>
              二、思恩广场
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              思恩广场以净瓶为主景，直出净澄湖中，净瓶高12米，定时出水，迎接众生洗去繁杂。净瓶周边伴报恩泉，报恩甘露于八瑞浮雕图间跌宕而下，供游客净手净心，清净思恩。
          </p>
          <img src="../../../../static/img/jianjie2.png" class="m-img">
          <p>
              三、中华孝道博物馆
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              中华孝道博物馆依据五行的原理，采用园林式布局，占地面积3600平方米，拥有展览馆、青少年教育馆、孝道研究院等。
          </p>
          <img src="../../../../static/img/jianjie3.png" class="m-img">
          <p>
              四、先祖庙堂
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              先祖庙堂是集国祭、家祭于一体的综合性祠堂，供大众寻根祭祖、礼敬先人。大殿内供奉炎黄二帝、伏羲女娲、如意轮观音和历代贤君，
              后殿中间一殿供奉华夏儿女共同的母亲华胥氏，东西两殿为谱牒文化馆，两侧105间厢房为百家姓祠堂。
          </p>
          <img src="../../../../static/img/jianjie4.png" class="m-img">
          <p>
              五、净心池
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              净心池造型为水心莲花，喻心诚，莲花亦即莲华，为佛教四花之一。临水设发愿台，于修行前真诚发愿，助修孝圆满。
          </p>
          <img src="../../../../static/img/jianjie5.png" class="m-img">
          <p>
              六、正法明大殿
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              正法明大殿采用明永乐年间的建筑风格，高31米，殿内供奉孝佛正法明如来和十二圆觉菩萨。正法明如来为观世音菩萨前世，乃古佛中之古佛，是十方如来之师。 
              殿前坛城，又名曼荼罗，由梵文“mandala”音译而来，意为获得佛陀无上正等正觉，是佛菩萨的聚集之地。三世观音灵气在此聚集，另有四大天王、哼哈二 将助阵，佛力汇聚，护法十方。
          </p>
          <img src="../../../../static/img/jianjie6.png" class="m-img">
          <p>
              七、江南石窟
          </p>
          <p style="text-indent: 2em ;margin-top:0.1rem">
              石窟观音为坐高21.9米的准提观音圣像，准提观音是救度人间道的伟大菩萨，对信仰者充满无限关怀，感应极大。圣像用稀有材质18K耐腐蚀亚金铜打造，善 财童子、小龙女协侍左右，三尊菩萨皆装纯金。
              江南石窟有香炉长40余米，吸纳山水灵气，聚集美好愿心，形成福报磁场。另有幽谧紫竹林、庄严神道，共生圣境。
          </p>
          <img src="../../../../static/img/jianjie7.png" class="m-img">
          <p>
              八、普光西区
          </p>
          <img src="../../../../static/img/jianjie8.png" class="m-img">
           <p>
              九、普光东区
          </p>
          <img src="../../../../static/img/jianjie9.png" class="m-img">
          <img src="../../../../static/img/jianjie10.png" class="m-img">
          <p style="text-align:center">普光商业街</p>
          <img src="../../../../static/img/jianjie11.png" class="m-img">
          <p style="text-align:center">普光别墅</p> -->

        <br><br><br><br>
        
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
      this.$router.push("/webinfo");
    }
  }
};
</script>

<style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    margin-top:1rem;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-image: url("../../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-img{
    margin: 0.15rem auto;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
