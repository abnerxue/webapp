<template>
  <div  class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“张”姓</van-col>
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
              1、出自黄帝之后挥。据《新唐书·宰相世系表》所载：“黄帝子少昊青阳氏第五子挥为弓正，始制弓矢，子孙赐姓张氏。”又据《元和姓纂》所载：“黄帝第五子青阳生挥，为弓正，观弧星，始制弓矢，主祀弧星，因姓
              张氏。”由上这两条史料的记载可看出，曾经是重要武器弓的发明者挥，其后有以张为姓氏的。
          </p>
          <p class="m-p">
             2、出自黄帝姬姓的后代。据《通志·氏族略》所载，春秋时，晋国有大夫解张，字张侯，其子孙以字命氏，也称张氏。又载，张氏世仕晋，公元前403年韩、赵、魏三家瓜分晋国后，除部分留在原地外，大部分随着三国
             迁都而迁移。
          </p>
          <p class="m-p">
             3、出自赐姓或他姓。据《读史方舆纪要》所载，世居云南的南蛮酋长龙佑那，于三国时被蜀相诸葛亮赐姓张，以后其子孙便以张为氏。另有韩、姬等姓人士和乌桓、女真、羯、鲜卑、匈奴、契丹等一些少数民族分支改姓张姓。
          </p>
          <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
              春秋时晋国有解张，字张侯，其后以祖父字为姓，从此晋国世代有张姓。公元前403年，赵、韩、魏三家瓜分了晋国后，张姓人口也随之分散于三个诸侯国。这两种说法都为张姓的起源、繁衍以至成为今天第三大姓作了说
              明：一是张姓历史久远，为中国最早产生的姓氏之一，而且相当受重视；二是张姓分布很广，晋国有此姓，随着三家分晋又遍及赵、韩、魏三国，即今华北、中原广大地区；三是有不少人被赐姓改姓张，如三国时诸葛亮就
              赐龙佑那为张姓，曹魏大将张辽，原姓聂，后改姓张等。
          </p>
          <p class="m-p">
             据记载，晋代有中原张氏迁福建；唐高宗总章年间，陈政、陈元光父子奉命入闽，有中原张姓军校随从；后王潮、王审知入闽，又有河南固始人张睦随同前往，居古田梅溪，后被封为梁国公。福建张氏，大致以居住地分为
             鉴湖、金坡、板挢等派，此后有的又迁往广东，均称其始祖来自河南光州固始。
          </p>
          <p class="m-p">
            从清初开始，闽、粤张氏陆续有人移居台湾，进而又有不少人到海外谋生。张氏以北方人居多，主是汉族，但在多次民族大融合中也有不少人融入少数民族。移居海外的张氏，现主要分布在新加坡、印度尼西亚、泰国、菲律
            宾、美、英、法、澳大利亚、巴拿马等国家和香港地区。
          </p>
          
          <br>
        <img src="../../../../../static/img/jisi9.png">
        
          
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

