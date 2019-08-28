<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">地坛</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p">
              地坛公园又称方泽坛，是古都北京五坛中的第二大坛。地坛公园位于北京市东城区定门外大街，占地37.4公顷。公园始建于明代嘉靖九年（公元1530年），是明清两朝帝王祭祀“皇地祇神”的场所，也是中国现存的
              最大的祭地之坛。地坛公园有方泽坛、皇祇室、牌楼、斋宫等著名旅游景点。1984年被评为北京市文物保护单位。
          </p>
          <p class="m-p">
             祭祀共分九个仪程，即迎神、奠玉帛、进组、初献、亚献、终献、撤撰、送神、望瘗等。清乾隆七年额定地坛设文、武、乐舞生480人，执事生90人。每进行一项仪程，皇帝都要分别向正位、各配位、各从位行三跪九
             叩礼，从迎神至送神要下跪70多次、叩头200多下，历时两小时之久。如此大的活动量对帝王来说是个很大的负担，所以皇帝到年迈体衰时，一般不亲诣致祭，而派遣亲王或皇子代为行礼。清代康熙皇帝在位61年，
             前40年中亲诣地坛致祭26次，而后21年则全部由亲王、皇子代祭。
          </p>
          <br>
        <img src="../../../../../static/img/jisi5.png">
        
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

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

