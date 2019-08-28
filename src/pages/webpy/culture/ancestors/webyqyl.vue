<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">涌泉跃鲤</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          汉姜诗，事母至孝；妻庞氏，奉姑尤谨。母性好饮江水，去舍六七里，妻出汲以奉之；又嗜鱼脍[kuai]，夫妇常作；又不能独食，召邻母共食。舍侧忽有涌泉，味如江水，日跃双鲤，取以供。
        </p>
        <p class="m-p">
          姜诗，东汉四川广汉人，娶庞氏为妻。夫妻孝顺，其家距长江六七里之遥，庞氏常到江边取婆婆喜喝的长江水。婆婆爱吃鱼，夫妻就常做鱼给她吃，婆婆不愿意独自吃，他们又请来邻居老婆婆一起吃。一次因风大，庞氏取水晚归，姜诗怀疑她怠慢母亲，将她逐出家门。庞氏寄居在邻居家中，昼夜辛勤纺纱织布，将积蓄所得托邻居送回家中孝敬婆婆。其后，婆婆知道了庞氏被逐之事，令姜诗将其请回。庞氏回家这天，院中忽然喷涌出泉水，口味与长江水相同，每天还有两条鲤鱼跃出。从此，庞氏便用这些供奉婆婆，不必远走江边了。
        </p>
        <br>
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
    margin-top: 1rem;
    padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: url("../../../../../static/img/bg-header.png");
  position: fixed;
  top: 0;
  z-index: 1;
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
  z-index: 2;
  width: 100%;
}

</style>
