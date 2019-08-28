<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">孝行天下文化</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <div class="swiper">
    <van-swipe :autoplay="3000"  style="margin-top:1rem">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    </div>
    <hr style="background: #a09e9e; border: none; height: 0.2rem;">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <h5 class="m-h-ss">发行机构</h5>
        <p class="m-p-ss">
          常州孝行天下文化传播有限公司作为常州孝道文化产业股份有限公司（以下简称常孝股份）的全资子公司，将其文化、旅游、大健康等产业的产权数字化，
          并将同归数字化形式发行、推广、应用及服务。
        </p>
        <img src="../../../static/img/bantong.png" class="m-img-ss">
        <h5 class="m-h-ss">深圳文交所</h5>
        <p class="m-p-ss">
          深圳文化产权交易所（以下简称深圳文交所）是2009年由中央领导亲自倡导，在中宣部等中央部委的直接策划和支持下城里的两家国家级文化产权交易所之一，于
          2010年4月正式注册成立，2012年11月，由国务院部级联席会议审批验收通过。
        </p>
        <p class="m-p-ss">
          深圳文交所以国家赋予的文化+金融先行先试的政策为向导，以国家关于创新驱动和构建多层次资本资本市场的战略为出发点，以构建中国文化产业专属的要素交易市场为立足点；涵盖
          文化产权中的股权、资产、无形资产和版权全要素；覆盖文化企业资产处置、资本融通、股权交易、产品流通全产业链；囊括登记托管、招标发布、募集发行、挂牌交易、公开拍卖全交易手段；整合柜台交易
          、线下撮合、层级路演和线上交易全平台服务；建成立足深圳、面向全国、影响国际的国家级文化产权交易和投融资综合服务平台。
        </p>
        <h5 class="m-h-ss">项目意义</h5>
        <p class="m-p-ss">
          常州孝行天下文化传播有限公司通过发行常孝通，实现企业资产产权数字通证化，借助资本、技术和制度的力量，赋能常孝股份加快上市战略的实现；赋能中华孝道园坚定文化自信，
          传播、弘扬、践行孝道文化。
        </p>
        <h5 class="m-h-ss">常孝通价值与十年发展战略</h5>
        <p class="m-p-ss">
          <ul>
            <li>在全国复制不少于<span>10</span>个中华孝道园的文旅景区</li>
            <li>发展不少于<span>100</span>家文化生态康养基地</li>
            <li>发展<span>1000</span>家合伙人推行网点</li>
            <li>发展<span>10000</span>家常孝通版通应用场景</li>
            <li>发展<span>100000</span>个常孝通版通应用家庭</li>
            <li>发展<span>1000000</span>个会员成为常孝通版通忠诚的参与者、投资者、使用者</li>
          </ul>
        </p>
        <h5 class="m-h-ss">加入我们</h5>
        <p class="m-p-ss">
           总部市场营运总监、省级市场营运总监、城市市场营运总监、产品创意与商务总监 <span style="color:#00a2ff; margin-left:0.5rem" @click="gofore">寻找合伙人...</span>
        </p> 
        <br><br><br><br><br><br><br><br>
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
      images: [
        "../../../static/img/lbf.png",
        "../../../static/img/lbd.png",
        "../../../static/img/lba.png",
      ]
    };
  },
  methods: {
    goback() {
      this.$router.back("/webhome");
    },
    gofore(){
      this.$router.push("/webc");
    },
    top(){
      window.scrollTo(0,0)
    }
  },
  created(){
    this.top()
  }
}
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

.m-img-ss {
  width: 60%;
  margin: 0.2rem 20%
}

.m-h-ss {
  padding-top: 0.2rem;
  font-size: 0.4rem;
}

.m-p-ss {
  text-indent: 2em;
  margin-top: 0.1rem;
  font-size: 0.35rem;
  line-height: 0.6rem
}


ul li{
  list-style-position: inside
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
