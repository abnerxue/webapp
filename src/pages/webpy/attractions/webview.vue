<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">景点介绍</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row style="margin-top:1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group >
          <van-cell title="净心池" @click="gofora" style="font-size:0.4rem"/>
          <van-cell title="蓼莪禅寺"  @click="goforb" style="font-size:0.4rem"/>
          <van-cell title="蓼莪源" @click="goforc" style="font-size:0.4rem"/>
          <van-cell title="妙音宝塔" @click="goford" style="font-size:0.4rem"/>
          <van-cell title="菩提大道"  @click="gofore" style="font-size:0.4rem"/>
          <van-cell title="普光商街" @click="goforf" style="font-size:0.4rem"/>
          <van-cell title="如意潭" @click="goforg"  style="font-size:0.4rem"/>
          <van-cell title="思恩广场" @click="goforh" style="font-size:0.4rem"/>
          <van-cell title="太湖观音" @click="gofori" style="font-size:0.4rem"/>
          <van-cell title="先祖庙堂" @click="goforj" style="font-size:0.4rem"/>
          <van-cell title="孝道博物馆"  @click="gofork" style="font-size:0.4rem"/>
          <van-cell title="正法明大殿" @click="goforl" style="font-size:0.4rem"/>
        </van-cell-group>
      </van-col>
      <van-col span="1"></van-col>
      
    </van-row>
    <!-- <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button" @click="gofora">净心池</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button" @click="goforb">蓼莪禅寺</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforc">蓼莪源</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goford">妙音宝塔</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="gofore">菩提大道</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforf">普光商街</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforg">如意潭</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforh">思恩广场</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="gofori">太湖观音</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforj">先祖庙堂</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row>
        <van-col span="1"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="gofork">孝道博物馆</van-button>
        </van-col>
        <van-col span="2"></van-col>
        <van-col span="10">
            <van-icon name="like-o" class="m-c-icon"/><van-button  type="default" size="normal" class="m-button-a" @click="goforl">正法明大殿</van-button>
        </van-col>
        <van-col span="1"></van-col>
    </van-row> -->
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
      active:1
    };
  },
  methods:{
    goback(){
      this.$router.back('/webhost')
    },
    gofora(){
        this.$router.push('/webjxc')
    },
    goforb(){
        this.$router.push('/weblecs')
    },
    goforc(){
        this.$router.push('/webley')
    },
    goford(){
        this.$router.push('/webmybt')
    },
    gofore(){
        this.$router.push('/webptdd')
    },
    goforf(){
        this.$router.push('/webpgsj')
    },
    goforg(){
        this.$router.push('/webryt')
    },
    goforh(){
        this.$router.push('/websegc')
    },
    gofori(){
        this.$router.push('/webthgy')
    },
    goforj(){
        this.$router.push('/webxzmt')
    },
    gofork(){
        this.$router.push('/webbwg')
    },
    goforl(){
        this.$router.push('/webzfmdd')
    },
    top(){
        window.scrollTo(0,0)
    }
  },
  created(){
      this.top();
  }
};
</script>

<style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: url("../../../../static/img/bg-header.png");
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-button{
    font-size: 0.35rem;
    margin-top: 1rem
}

.m-button-a{
    font-size: 0.35rem;
    margin-top: 0.6rem
}

.m-c-icon{
    font-size: 0.35rem;
}

</style>
