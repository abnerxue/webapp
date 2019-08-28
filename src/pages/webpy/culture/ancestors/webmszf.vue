<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">卖身葬父</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          汉董永，家贫。父死，卖身贷钱而葬。及去偿工，途遇一妇，求为永妻。俱至主家，令织缣[音jian]三百匹，乃回。一月完成，归至槐阴会所，遂辞永而去。
        </p>
        <p class="m-p">
          董永，相传为东汉时期千乘（今山东博兴县）人，少年丧母，因避兵乱迁居安陆（今属湖北）。其后父亲亡故，董永卖身至一富家为奴，换取丧葬费用。上工路上，于槐荫下遇一女子，自言无家可归，二人结为夫妇。女子以一月时间织成三百匹锦缎，为董永抵债赎身，返家途中，行至槐荫，女子告诉董永：自己是天帝之女，奉命帮助董永还债。言毕凌空而去。因此，槐荫改名为孝感。
        </p>
        
        <br>
        <img src="../../../../../static/img/theme10.png">
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
