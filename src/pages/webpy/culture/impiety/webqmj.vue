<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">清明节祭祀</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
            清明节是中国三大鬼节之一。“鬼节”即是悼念亡人之节，是和祭祀天神、地神的节日相对而言的。
        </p>
        <p class="m-p">
            清明祭祀的参与者是全体国民，上至君王大臣，下至平头百姓，都要在这一节日祭拜先人亡魂。从唐朝开始，朝廷就给官员放假以便于归乡扫墓。
            据宋《梦粱录》记载：每到清明节，“官员士庶俱出郊省墓，以尽思时之敬。”参加扫墓者也不限男女和人数，往往倾家出动。这样清明前后的扫墓活动常成为社会全体亲身参与的事，
            数日内郊野间人群往来不绝，规模极盛。
        </p>
        <p class="m-p">
            作为鬼节，清明之祭主要祭祀祖先和去世的亲人，表达祭祀者的孝道和对死者的思念之情。清明节属于鬼节而通常不被冠以鬼节之名，就在于它所祭祀的主要是善鬼、家鬼，或亲近者的亡魂，
            重在表达孝思亲情。另外两个鬼节则连恶鬼、野鬼也一并祭祀，重在安抚鬼魂，不让它们作祟。但也不能一概而论。有些地方也有清明节祭祀其他鬼神的做法。上海旧俗就有在清明节举行的专祭厉
            鬼的祭台会仪式，祭祀那些饿鬼、幽鬼孤魂，防止它们成为恶鬼作乱。这种祭台叫祭厉台。旧上海还有清明节的前一天迎请城隍神的做法。在清明节这天，城隍神要坐大轿出巡祭厉台，以赈济安抚孤魂
            野鬼，其场面十分盛大热闹。
        </p>
        <p class="m-p">
            清明祭祀在清明前后，各地有所差异。旧时，北京人祭扫坟墓不在清明当天，而在临近清明的“单日”进行。只有僧人才在清明当天祭扫坟墓。浙江丽水一带则在清明节的前三天和后四天的范围内扫墓，
            称为“前三后四”。在山东，旧时，多数地区在清明当天扫墓，少数地区如诸城，在寒食这天扫墓，有些地方在清明前四天内扫墓；现在，一般都在清明这天去扫墓。晋南人则将扫墓的时间分为两次。
            一次在清明前几天，是各家分头去扫墓。第二次是在清明当天，一个村里同姓的各家派出代表，同去墓地祭祀共同的祖先。上海人扫墓时间，新坟旧坟有别。凡是新近过世的，过了七七四十九天而没做过
            超度法事的，要在清明节这天请僧道诵经做法事或道场。如果是老坟并已做过法事或道场，扫墓不一定在清明当天，可以前后放宽些，但不能超出前七天后八天的范围，俗谓：“前七后八，阴司放假。”意思是过早或过迟都会失灵。
        </p>
        <p class="m-p">
            清明祭祀按祭祀场所的不同可分为墓祭、祠堂祭。以墓祭最为普遍。清明祭祀的特色就是墓祭。在墓地祭祀，祭祀者离祭祀对象最近，容易引起亲近的感觉，使生者对死者的孝思亲情得到更好的表达
            和寄托。清明祭祀被称为扫墓，主要是由于采取墓祭方式。另一种形式是祠堂祭，又称庙祭，是一个宗族的人聚集在祠堂共祭祖先，祭完后要开会聚餐等，这种祭祀是团聚族人的一种方式。还有一种情
            况是家在外地工作的人不能赶回家乡扫墓，就在山上或高处面对家乡的方向遥祭。
        </p>
        <p class="m-p">
            清明祭祀的方式或项目各地有所不同，常见的做法有两部分内容组成：一是整修坟墓，二是挂烧纸钱、供奉祭品。
        </p>
        <img src="../../../../../static/img/jisi1.png" class="m-p">
        <p class="m-p">
            扫墓时首先整修坟墓，其做法主要是清除杂草，培添新土。这种行为一方面可以表达祭祀者对亡人的孝敬和关怀，另一方面，在古人的信仰里，祖先的坟墓和子孙后代的兴衰福祸有莫大的关系，所以培墓是不可轻忽的一项祭奠内容。
            《清通礼》把修整坟墓解释为“扫墓”名称的来由：“岁，寒食及霜降节，拜扫圹茔，届期素服诣墓，具酒馔及芟剪草木之器，周胝封树，剪除荆草，故称扫墓。”
        </p>
        <p class="m-p">过去由于寒食禁火的影响，纸钱不焚烧，而是挂在墓地的小树上、竹竿上，或用石块、坷垃压在坟墓边。宋庄季裕《鸡肋篇》卷上：“寒食上冢，亦不设香火。纸钱挂于茔树。其去乡里者，
            皆登山望祭。裂帛于空中，谓之掰钱。”这样，凡是祭扫过的坟墓就有纸幡飘飘，构成清明前后的特有景观。没有纸钱者，一般就是缺少后嗣的孤坟了。后来，一般不再讲究禁火，就把纸钱烧掉。旧时北
            京清明祭祖的主要形式是“烧包袱”。所谓“包袱”，被祭祀者当作从阳世寄往“阴间”的邮包。过去南纸店有卖所谓的“包袱皮”，即用白纸糊的一个大口袋。这口袋有两种样式：一种是有图案的，用木刻版
            印上梵文音译的《往生咒》，中间印莲座牌位，写上亡人的名讳，如“已故张府君讳云山老大人”字样。另一种是素包袱皮，不印任何图案，中间只贴一张蓝签，写上亡人名讳。包袱里装有各种冥钱。所
            供奉祭品主要是食品，品种各地不同，都是当地人认为的并且按祭祀者的经济能力能拿得出来的美味佳肴，或合于时令的特色食品。</p>
   
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

.m-img{
  margin-top: 0.2rem
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

