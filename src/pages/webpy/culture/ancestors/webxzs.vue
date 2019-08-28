<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">千年孝子寺——蓼莪禅寺简介</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          蓼莪禅寺位于常州市武进太湖湾旅游度假区内的中华孝道园景区，是蓼莪禅寺是全国唯一的孝子寺遗址，因孝子王裒得名，又名千年孝子寺。王裒孝行感天动地。这也就是元朝的郭居敬先生编写的《二十四孝》中“王裒纯孝，闻雷泣墓”的感人故事。
          王裒身故后，其族人在此处建了王裒的祠堂。王裒的孝行感染了附近的江南民众，大家常来祭拜，随着香火的旺盛，渐渐由祠堂演变成了寺庙。因王裒生前喜欢《诗经·小雅》中的《蓼莪》篇，而更名为“蓼莪禅寺”，黄婆岭也随之易名为“王裒岭”，又名“蓼莪山”。这就是王裒一生的孝行和蓼莪禅寺的由来。
          蓼莪庵始建于东晋，距今已有1000余年历史，系江南千年名刹。据志载，在明成祖永乐年间（1403～1424），有僧屋百余楹，僧徒数百。
          至明神宗万历年间（1573～1619），寺宇倒塌，仅存殿3间。后瑞云法师修葺寺庙，蓼莪庵得以振兴。
        </p>
        <img src="../../../../../static/img/theme4-1.png">
        <p class="m-p">
          清朝恒一禅师继承瑞云宏愿，在旧庵上进行扩充，有田60亩。并率徒众樵割山柴，耕垦种植，先后建弥勒殿、天王殿；修大殿，盖斋堂。恒一禅师等圆寂后，觉如、戒如两禅师吃野菜，饮清水，以米麦粗屑充饥，广积殿宇费用，修成殿堂、楼宇、厨房多处。佛堂高大华美，庄严肃穆，蓼莪庵恢复了古刹旧观。
          据现存殿上的户部尚书江阴张有誉碑记称：蓼莪寺，前靠太湖，后枕梅堂，湖中七十二峰拱其南；无锡的闾山、杨山、九龙（山）绕其北。水秀山明，幽奇旷远，优美景色独魁全县。
          惜因战乱，寺宇屡毁。抗日战争时期，又遭毁损。
          20世纪50年代，余房拆除，至此遂废。
          1994年恢复开放后，重建天王殿、观音殿、念佛堂、膳房、寮房和其他附属建筑，总计1800平方米，占地5亩。前中国佛教协会会长赵朴初居士亲为古刹题额“蓼莪禅寺”；已故上海佛教协会原会长真禅大师、江苏省佛教协会原会长茗山长老都曾为古寺题字赐墨。
        </p>
        <br>
        <img src="../../../../../static/img/theme4-2.png">
       
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
.m-bg {
  background-image: url("../../../../../static/img/bg.png");
  margin-top: 1rem;
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

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
