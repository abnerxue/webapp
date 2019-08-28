<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">酒店住宿</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../static/img/hotel1.png" style="margin:0.5rem auto">
            <img src="../../../static/img/hotel4.png" style="margin:0.5rem auto">
        </van-col>
        <van-col span="14">
            <p class="m-hb">怀南山庄</p><br>
            <p class="m-p">怀南山庄拥有不同风格的套房、湖景房及特色风景房等166间（套），宽敞舒适、移窗即景、独具品味，健康睡眠设施、独立空调、数字电视、互联网宽带接口等配套设施齐全，
                客房管家亲情化服务，精心营造的艺术氛围，让您感受湖畔山居的自然清新，使每位宾客都能有宾至如归的感觉。
            </p>
            <p class="m-p-a">预定电话: 0519-85289088 </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../static/img/hotel2.png" style="margin:0.3rem auto">
            <img src="../../../static/img/hotel5.png" style="margin:0.3rem auto">
        </van-col>
        <van-col span="14">
            <p class="m-hb">太湖湾开元度假村</p><br>
            <p class="m-p">常州嬉戏谷开元度假村拥有各式豪华客房、5个不同风格的中西餐厅、21个格调典雅的湖景山景包厢，10个不同规格的会议设施，最大多功能宴会厅450平方米，拥有室内外游泳池、
                网球场、停车场、足浴、健身房、KTV、棋牌室等配套齐全的一流设施。
            </p>
            <p class="m-p-a">预定电话: 0519-83599999 </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <br>
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../static/img/hotel3.png" style="margin:0.6rem auto">
            <img src="../../../static/img/hotel6.png" style="margin:0.6rem auto">
        </van-col>
        <van-col span="14">
            <p class="m-hb">常州竺山湖度假小镇</p><br>
            <p class="m-p">湖畔亭酒店是竺山湖小镇酒店管理公司精心打造的“精品休闲度假天堂”，依山傍水，置身于山麓、绿林之中，独占山水精华。酒店拥有
              可容纳80-100人的水上自助餐厅、及600人可同时就餐的湖畔多功能厅，可承办大、中型会议及喜宴。同时，店内还配有各类装修豪华的包厢及棋牌休闲娱乐设施。
　　
            </p>
            <p class="m-p-a">预定电话: 0519-86541800 </p>
        </van-col>
        <van-col span="1"></van-col>
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
      this.$router.back("/webhost");
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
  background-image: url("../../../static/img/bg.png");
  padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: url("../../../static/img/bg-header.png");
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

.m-row {
  vertical-align: middle;
  margin-top: 1rem;
  padding-top: 0.2rem
}

.m-hb {
  margin-left:0.4rem;
  text-align: left;
  font-size: 0.35rem;
  font-weight: bolder
}

.m-p {
  margin-left:0.2rem;
  font-size: 0.3rem;
  line-height: 0.55rem
}
.m-p-a {
  margin:0 0 0.4rem 0.2rem;
  font-size: 0.3rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}

</style>
