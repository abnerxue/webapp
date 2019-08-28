<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">门票简介</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row style="margin-top:1rem">
        <van-col span="2"></van-col>
        <van-col span="20">
            <p class="m-hh">订票须知 <span class="m-pp">咨询热线：400-860-6081</span></p>
            
            <ul>
                <li>1、开园时间：9:00-17:00</li><br>
                <li>2、夏令时间：3月1日至10月31日 8:30-17:00</li><br>
                <li>3、冬令时间：11月1日至次年2月28日 8:30-16:30</li><br>
                <li>4、请游客妥善保管自己的门票和携带的物品，照顾好老人和小孩，注意安全。</li><br>
                <li>5、各园谢绝携带宠物、请勿携带危险品入园，请保护景区内景观设施，服从景区管理人员指挥，文明游览。</li><br>
                <li>6、以上须知敬请广大游客入园前认真阅读并遵守。</li>
            </ul>
        </van-col>
        <van-col span="2"></van-col>
    </van-row>
    <van-row>
        <van-col span="2"></van-col>
        <van-col span="20">
            <p class="m-hh">门票简介</p>
            <ul>
                <li>1、身高1.5米以上儿童、成人购买全价票120元。</li><br>
                <li>2、1.4米-1.5米（含）以下儿童、60周岁以上（含）、现役军人、残疾人、记者、离休干部、30年教龄教师享受半价票55元。</li><br>
                <li>3、中、小学生享受学生票60元。</li><br>
                <li>4、大、中专院校学生享受学生票80元。</li><br>
                <li>5、1.4米（含）以下儿童、持功臣证、烈属证、军残证、佛教教职人员免费入园。</li>
            </ul>
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
      active:1,
       images: [
       
      ]
    };
  },
  methods:{
    goback(){
      this.$router.back('/webhost')
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
    background-image: url("../../../static/img/bg.png") ;
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

.m-hh{
    font-size: 0.4rem;
    margin:0.2rem 0;
    font-weight: bolder
}

ul li{
  list-style: none;
  font-size: 0.35rem;
  line-height: 0.6rem
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}

.m-pp{
  font-size: 0.3rem;
  line-height: 0.7rem;
  
}

</style>
