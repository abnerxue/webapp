<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">常孝文化股份</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <hr class="m-hr" />
    <div class="swiper">
        <van-swipe :autoplay="3000" style="margin-top:1rem">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
    </div>
    
    <hr style="background: #a09e9e; border: none; height: 0.2rem;" />
    
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <h6 class="m-hz">企业介绍</h6>
        <p class="m-ps">
          常州孝道文化产业股份有限公司位于常州太湖湾省级度假区，江苏省常州市武进区雪堰镇环太湖路101号，
          定位幸福产业，以文化作为载体，致力于"文化+旅游"、"文化+大健康"、"文化+体育"、"化文+养生养老"、
          "文化+特色乡村"的开发与经营。
        </p>
        <p class="m-ps">
          旗下有国家AAAA级景区中华孝道园、常州一心大健康产业有限公司、常州孝
          行天下文化传播有限公司、常州怀南汇商务服务有限公司和上海连根文化传播有限公司等，公司在长三角地区
          有多个直营事业部和分支机构。
        </p>
        <p class="m-ps">
          公司秉承“感恩、传承、标杆、奉献”的核心价值观，以“体制创新、机制创
          新、商业模式创新”为发展理念，做大做强企业。未来几年在全国合作发展100·20个研、学、旅、康养体验
          基地，在发展会员旅居养生的基础上布局长三角居家养老服务体和大健康及规划医养结合的康养中心，努力
          成为文化传承、旅居体验、特色生态乡村、健康养生养老的综合服务体。<span style="color:#00a2ff; margin-left:0.3rem" @click="gofora">更多...</span>
        </p>
            
        <h6 class="m-hz">企业文化</h6>
        <p class="m-pss">
          企业理念:让孝成为一种信仰 
        </p>
        <p class="m-pss">
          企业使命:树立孝行标杆，传承孝道精神 
        </p>
        <p class="m-pss">
          企业愿景:给社会一个道德支点，给员工一个温馨家园 
        </p>
        <p class="m-pss">
          企业核心价值:利益祖先，利益当代，利益子孙 
        </p>
        <p class="m-pss">
          企业核心价值观:感恩、传承、标杆、奉献  <span style="color:#00a2ff; margin-left:0.3rem" @click="goforc">更多...</span>
        </p>
        <h6 class="m-hz">孝亲产品</h6>
        <p class="m-ps">
          <ul>
            <li>往生莲位</li>
            <li>延生禄位</li>
            <li>太湖观音</li>
            <li>妙音如来</li>
            <li><span style="color:#00a2ff" @click="goford">更多详情...</span></li>
          </ul>
          
        </p>
        <h6 class="m-hz">企业荣誉</h6>
        <p class="m-ps">
           国家级荣誉<span style="color:#00a2ff; margin-left:0.5rem" @click="goforb">更多荣誉...</span>
           <img src="../../../static/img/honor-a.png" style="margin:0.1rem 0.3rem ">
        </p>
        <h6 class="m-hz">加入我们</h6>
        <p class="m-ps">
           总部市场营运总监、省级市场营运总监、城市市场营运总监、产品创意与商务总监 <span style="color:#00a2ff; margin-left:0.5rem" @click="gofore">寻找合伙人...</span>
        </p>   
        <h6 class="m-hz">联系我们</h6>
        <p class="m-ps">
           联系地址：常州市武进区雪堰镇环太湖路101号
        </p> 
        <p class="m-ps">
           联系电话：0519-86692018 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0519-83590865
        </p> 
        <p class="m-ps">
           企业邮箱：rjzd@rjzd.cn
        </p> 
        <br><br><br><br><br><br>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <!-- <van-row type="flex" justify="center" style="text-align:center">
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="gofora"/>
        <p class="m-icon-text" @click="gofora">企业介绍</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="goforb"/>
        <p class="m-icon-text" @click="goforb">公司荣誉</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="goforc"/>
        <p class="m-icon-text" @click="goforc">企业文化</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-row type="flex" justify="center" style="text-align:center">
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="goford"/>
        <p class="m-icon-text" @click="goford">孝亲产品</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="gofore"/>
        <p class="m-icon-text" @click="gofore">加入我们</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="location-o" class="m-icon" @click="goforf"/>
        <p class="m-icon-text" @click="goforf">联系我们</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr style="background: #a09e9e; border: none; height: 0.2rem; margin-top:0.5rem" /> -->
    
    <!-- <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        
        <p class="m-pa">
          常州孝道文化产业股份有限公司位于常州太湖湾省级度假区，江苏省常州市武进区雪堰镇环太湖路101号，
          定位幸福产业，以文化作为载体，致力于"文化+旅游"、"文化+大健康"、"文化+体育"、"化文+养生养老"、
          "文化+特色乡村"的开发与经营。
        </p>
        <p class="m-pa">
          旗下有国家AAAA级景区中华孝道园、常州一心大健康产业有限公司、常州孝
          行天下文化传播有限公司、常州怀南汇商务服务有限公司和上海连根文化传播有限公司等，公司在长三角地区
          有多个直营事业部和分支机构。
        </p>
        <p class="m-pa">
          公司秉承“感恩、传承、标杆、奉献”的核心价值观，以“体制创新、机制创
          新、商业模式创新”为发展理念，做大做强企业。未来几年在全国合作发展100·20个研、学、旅、康养体验
          基地，在发展会员旅居养生的基础上布局长三角居家养老服务体和大健康及规划医养结合的康养中心，努力
          成为文化传承、旅居体验、特色生态乡村、健康养生养老的综合服务体。
        </p>
        <br><br><br><br><br><br><br><br>
      </van-col>
      <van-col span="2"></van-col>
    </van-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      images: [
     
        "../../../static/img/lbb.png",
        "../../../static/img/lbc.png",
        "../../../static/img/lbe.png",
   
      ]
    };
  },
  methods: {
    goback() {
      this.$router.back("/webhome");
    },
    gofora(){
      this.$router.push("/webjieshao");
    },
    goforb(){
      this.$router.push("/webhonor");
    },
    goforc(){
      this.$router.push("/webculture");
    },
    goford(){
      this.$router.push("/webproduct");
    },
    gofore(){
      this.$router.push("/weba");
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

<style lang="scss" scoped>
.swiper {
     width: 100%;
     height: 3.6rem;
  .van-swipe{
    width: 100%;
    height: 100%;
    }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}
  .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
}
}
</style>

<style scoped>
.m-bg {
  background-image: url("../../../static/img/bg.png");
  padding-bottom: 1rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-image: url("../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-img {
  width: 100%;
}

.m-ps {
  text-indent: 2em;
  margin-top: 0.1rem;
  font-size: 0.35rem;
  line-height: 0.6rem;
}

.m-pss {
  margin-top: 0.1rem;
  text-indent: 1em;
  font-size: 0.35rem;
  line-height: 0.6rem
}

.m-icon {
  font-size: 0.5rem;
  padding: 0.4rem 0 0 0;
}

.m-icon-text {
  font-size: 0.3rem;
}

.m-hz{
  margin-top: 0.1rem;
  font-size: 0.4rem
}

ul li{
  list-style-position: inside;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
