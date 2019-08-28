<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">拈花一笑</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          《金刚经》是大乘佛教的重要经典。全称《能断金刚般若波罗蜜经》（vájra-cchedikā-prajñā-pāramitā-sūtra 梵文释义：以能断金刚的智慧到彼岸），又称《金刚般若波罗蜜经》，简称《金刚经》。
          后秦鸠摩罗什翻译《金刚经》的法本最早，文字流畅，简明扼要，流传最广，是人们常用的译本。
        </p>
        <p class="m-p">
          中文译本相继出现5种：北魏菩提流支译《金刚般若波罗蜜经》；南朝陈真谛译《金刚般若波罗蜜经》；隋达摩笈多译《金刚能断般若波罗蜜经》；唐玄奘译《能断金刚般若波罗蜜多经》；唐义净译《佛说能
          断金刚般若波罗蜜多经》。
        </p>
        <p class="m-p">
            《金刚经》的释论有：六祖慧能《金刚经口诀》；天亲菩萨《金刚般若波罗蜜经论》；憨山大师《金刚决疑》等。


        </p>
        
        <img src="../../../../../static/img/lf17.png" />
        
        
        
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
      this.$router.back("/webcslf");
    },
    top() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.top();
  }
};
</script>

<style scoped>
.m-bg {
  background-image: url("../../../../../static/img/bg.png");
  margin-top: 1rem;
  padding-bottom: 2rem;
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
  line-height: 0.6rem;
  padding: 0.2rem 0;
  text-indent: 2em
}

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
