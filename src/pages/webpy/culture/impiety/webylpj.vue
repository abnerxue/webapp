<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">盂兰盆节</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
            每年农历七月十五日为“盂兰盆节”，“盂兰盆会”，也称“中元节”（一定意义上讲，中元节归属道教，盂兰盆节归属佛教），有些地方俗称“鬼节”、“施孤”，又称亡人节、七月半。“鬼节”，
            俗称“七月半”（有些地区,尤以华南为十三或十四，相传是宋代末年蒙古人入侵某地，居民为逃难而提早一天过节）。俗传去世的祖先七月初被阎王释放半月，故有七月初接祖，七月半送祖习俗。
            依照佛家的说法，农历七月十五日这天，佛教徒举行“盂兰盆法会”供奉佛祖和僧人，济度六道苦难，以及报谢父母长养慈爱之恩。
        </p>
        <p class="m-p">
            无论贫富都要备下酒菜、纸钱祭奠亡人，以示对死去的先人的怀念。中元节一般是七天，又有新亡人和老亡人之分。三年内死的称新亡人，死亡超过三年的称老亡人。迷信说新老亡人这段时间要回家看看，
            还说新老亡人回来的时间并不相同，新亡人先回，老亡人后回。因此要分别祭奠。烧纸钱的时间选晚上夜深人静，先用石灰在院子里洒几个圈儿，说是把纸钱烧在圈儿里孤魂野鬼不敢来抢，然后一堆一
            堆地烧，烧时嘴里还要不住地念叨：“某某来领钱。”最后还要在圈外烧一堆，说是烧给孤魂野鬼的。亡人们回去的这一天，无论贫富都要做一餐好饭菜敬亡人，又叫“送亡人”。
        </p>  
        <img src="../../../../../static/img/jisi4.png" class="m-p">
        <p class="m-p">
            七月祀鬼之俗演变成民间的鬼节，道教文化与佛教文化起到了重要的作用。民间的鬼月俗信与此中元节、盂兰盆节之间，在精神实质上出现了惊人的相通之处。皆是以奉亲、敬养、普渡为主题，佛教盂兰
            盆会、道教中元节与华夏民间文化礼俗的一致，使它们迅即得到广泛的认同。两者皆指向七月十五，又使民间的鬼月有了成为节日的重要时间契机。节日的确立需要确定一个固定的节期和拥有它特有的节
            俗,佛、道两教一同确定了七月鬼节的固定节期，佛教盂兰盆会、道教中元节的打醮等仪式活动又成了这一鬼节特有节俗的组成部分,同时由于道教是完全的本土宗教，“中元”这一名词也为民间接受，成为
            这一节日通行的称呼。
        </p>
        <p class="m-p">
          华夏文化与民间信仰有强大的同化作用，不论是本土的道教还是传自印度的佛教，都在不知不觉中完成了适应本土文化的过程。佛教与道教在七月十五的仪式逐渐世俗化，与民间的鬼月俗信和风物渐渐难分
          难解。从此，中元节成为了一个内涵丰富的祭亡、祀鬼、解难、赦罪的盛大的华夏民俗节日。
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

