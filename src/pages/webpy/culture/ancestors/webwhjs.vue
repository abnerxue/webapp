<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">孝道文化简述</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          所谓孝道文化，就是关于关爱父母长辈、尊老敬老的一种文化传统。孝道是中国古代社会的基本道德规范。一般指社会要求子女对父母应尽的义务，包括尊敬、关爱、赡养老人，为父母长辈养老送终等等。
        </p>
        <p class="m-p">
          孝与感恩是中华民族传统美德的基本元素，是中国人品德形成的基础。我国孝道文化包括敬养父母、生育后代、推恩及人、忠孝两全、缅怀先祖等，是一个由个体到整体，修身、齐家、治国、平天下的延展攀高的多元文化体系。
        </p>
        <p class="m-p">
          人间有三大真情：亲情、友情、爱情。如今，亲情缺认、友情缺位、爱情缺真的现象屡见不鲜。特别是在亲情方面出现的“六亲不认”的不孝与不感恩现象导致的问题已构成社会问题，影响了人际和谐、家庭和谐、社会和谐建设的进程与质量。孝与感恩是中华民族的最基本的传统美德，是中国人传统美德形成的基础，也是政治道德、社会公德、职业道德、家庭美德，个人品德建设的基本元素，也是当今政治文明、经济文明、精神文明建设不可忽视的精神支柱和精神力量。所以，给予我国孝道文化以科学和现代的诠释，对当下公民教育大有裨益。
        </p>
        <br>
        <img src="../../../../../static/img/theme7.png">
        
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
