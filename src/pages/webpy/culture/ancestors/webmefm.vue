<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">埋儿奉母</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          汉郭巨，家贫。有子三岁，母尝减食与之。巨谓妻曰：“贫乏不能供母，子又分母之食，盍埋此子？儿可再有，母不可复得。”妻不敢违。巨遂掘坑三尺余，忽见黄金一釜，上云：
          “天赐孝子郭巨，官不得取，民不得夺。”
        </p>
        <p class="m-p">
          郭巨，东汉隆虑（今河南安阳林州）人，一说河内温县（今河南温县西南）人，原本家道殷实。父亲死后，他把家产分作两份，给了两个弟弟，自己独取母亲供养，对母极孝。
          后家境逐渐贫困，妻子生一男孩，郭巨担心，养这个孩子，必然影响供养母亲，遂和妻子商议：“儿子可以再有，母亲死了不能复活，不如埋掉儿子，节省些粮食供养母亲。”当他们挖坑时
          ，在地下二尺处忽见一坛黄金，上书“天赐郭巨，官不得取，民不得夺”。夫妻得到黄金，回家孝敬母亲，并得以兼养孩子。
        </p>
        <p class="m-p">
          郭巨思供给，埋儿愿母存。黄金天所赐，光彩照寒门。
        </p>
        <br>
        <img src="../../../../../static/img/theme9.png">
        
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
