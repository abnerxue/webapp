<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">佛家的语言和礼仪</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="m-p">
          进寺门前要端正衣冠收摄身心。进入寺院后，先礼佛。再去拜见出家师父。在佛殿、经堂看到佛像，不论是木雕、铜铸、纸绘、绸、绢画，皆需衣着整齐，向佛菩萨像恭敬顶礼。若有急务亦须问讯，以示尊敬。
        </p>
        <p class="m-p">
          居士不可在大殿正中央的拜垫上拜佛，因为这是住持或主法和尚礼佛专用的，可在大殿东西两单礼拜。佛具三明、六通、十力、四无畏、十八不共法，众生起心动念，佛无一不知，因此只要心怀诚敬，无需执著拜佛方所。
        </p>
        
        <p class="m-p">
          拜佛时动作不缓不急、内存虔敬、外现恭谨。不可看似恭敬，内怀我慢，或为求修行之名，诈现威仪。合掌手势为双手平举当胸．五指合并向上．以能见无名指尖为度，掌心要空，不可贴紧。
        </p>
        <p class="m-p">
          拜佛时要五体投地，不可翘臀。双手翻掌，手心向上托起，观想接佛足，双脚、额头都要着地。拜佛时心中念偈颂赞叹佛的功德：“天上天下无如佛．十方世界亦无比，世间所有我尽见，一切无有如佛者”，偈颂念
          一遍或三遍皆可，接着念咒语“缚日腊，斛”三遍。礼拜后可以瞻仰佛像，心中默念赞佛偈：“法王无上尊．三界无伦匹，天人之导师，四生之慈父。我今得皈依，能灭三祗业。称扬若赞叹。亿劫莫能尽。”若不会
          念偈颂和咒语，那么礼佛时心里观想：“我现在礼拜十方三世无量诸佛”，这样也是可以的。
       
        <p class="m-p">
          不论佛殿内供有多少尊佛像，通常礼佛三拜即可，个人修行则听其意愿。若殿内大众已立时，合掌问讯后随众站立即可，不必礼拜。
        </p>
        <p class="m-p">
          若出家众正在礼佛，居士不得在法师前面礼，亦不得与法师并排礼，应当在法师后面礼佛。有人礼佛时，不得从其前直穿而过。
        </p>
        <p class="m-p">
          问讯不是点一下头，一定要弯腰到九十度或稍弱．也不可过低。
        </p>
        <p class="m-p">
          鲜花、水果、时蔬供佛一定要洁净，对如何摆供不知情的，可以请殿堂的香灯师父代劳。供佛的花要用花瓶插好．水果也要洗干净。
        </p>
       
        <p class="m-p">
            燃香供佛需如法，很多人一进寺院就烧一大把香到处去插，好象有任何一个香炉没插到就不安心。其实大可不必如此。上香时在大殿前的大香炉中点一炷或三炷香就行了。上香的方法：上香时，用大拇指、食
            指将香夹住，余三指合拢，双手将香平举至眉齐，观想佛菩萨显现在我们的眼前，接受香供养。如果人很多．将香直竖向上，以免烧到他人。若上三支香，则将第一支香插在香炉中间，默念“供养佛”，第二支香
            插右边默念“供养法”，第三支插左边，默念“供养僧”。上完香后合掌，默念“供养一切众生，愿此香华云，遍满十方界，供养一切佛，尊法诸贤圣”。点香时若香枝起火焰．不可用口吹熄火，应用手掌煽熄。将
            香插好后问讯即可，不必一再点头作揖。
        </p>
        
        <img src="../../../../../static/img/lf11.png" />
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
