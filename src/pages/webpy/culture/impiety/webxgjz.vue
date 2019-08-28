<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">寻根祭祖</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group >
          <van-cell title="祭祀文化——祭祀文化简说" @click="gofora" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——家祭流程" @click="goforb" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——清明节祭祀" @click="goforc" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——盂兰盆节" @click="goford" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——地坛"  @click="gofore" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——周朝祭祀六器" @click="goforg" style="font-size:0.4rem"/>
          <van-cell title="祭祀文化——祭祀—献食" @click="goforn" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“王”姓"  @click="goforf" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“李”姓" @click="goforh" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“张”姓" @click="gofori" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“刘”姓" @click="goforj" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“陈”姓" @click="gofork" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“杨”姓" @click="goforl" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“黄”姓" @click="goform" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“孙”姓" @click="goforo" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“周”姓" @click="goforp" style="font-size:0.4rem"/>
          <van-cell title="姓氏起源——“吴”姓" @click="goforq" style="font-size:0.4rem"/>
        </van-cell-group>
        
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
      this.$router.back("/webtheme");
    },
    gofora() {
      this.$router.push("/webjswh");
    },
    goforb() {
      this.$router.push("/webjslc");
    },
    goforc() {
      this.$router.push("/webqmj");
    },
    goford() {
      this.$router.push("/webylpj");
    },
    gofore() {
      this.$router.push("/webditan");
    },
    goforf() {
      this.$router.push("/webwang");
    },
    goforg() {
      this.$router.push("/webjslq");
    },
    goforh() {
      this.$router.push("/webli");
    },
    gofori() {
      this.$router.push("/webzhang");
    },
    goforj() {
      this.$router.push("/webliu");
    },
    gofork() {
      this.$router.push("/webchen");
    },
    goforl() {
      this.$router.push("/webyang");
    },
    goform() {
      this.$router.push("/webhuang");
    },
    goforn() {
      this.$router.push("/webjsxs");
    },
    goforo() {
      this.$router.push("/websun");
    },
    goforp() {
      this.$router.push("/webzhou");
    },
    goforq() {
      this.$router.push("/webwu");
    },
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
  font-size: 0.2rem;
  text-indent: 2em;
  line-height: 0.35rem;
  padding-top: 0.3rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

