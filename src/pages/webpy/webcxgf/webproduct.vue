<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">孝亲产品</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    
    <van-row class="m-row" style="padding-top:1.2rem">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../../static/img/pt1.png" style="margin:1.2rem auto">
        </van-col>
        <van-col span="14">
            <h5 class="m-h">往生莲位<br><span style="color:#9a9a9a;font-size:0.2rem; margin-left:0.2rem">延寿增福 福泽子孙</span></h5>
            <p class="m-pb">往生莲位（俗称牌位），排名前95个姓氏一姓一间，每姓平均只有约900尊往生莲位由水晶和琉璃雕刻而成，
                每尊牌位各有一尊精美的佛龛，灯光照射，辉煌祥和，水晶和琉璃都是佛教宝物，世间灵物。供奉于中华孝道园内先祖庙堂。
            </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../../static/img/pt2.png" style="margin:1.5rem auto">
        </van-col>
        <van-col span="14">
            <h5 class="m-h">延生禄位<br><span style="color:#9a9a9a;font-size:0.2rem; margin-left:0.15rem">开启心智 增长智慧 延长福寿</span></h5>
            <p class="m-pb">延生禄位由水晶和琉璃雕刻而成，水晶和琉璃都是佛教宝物，世间灵物，圆满一生一世。孩子面对人生的各种挑战，需要无形力量的加持。
                给孩子请供是父母对孩子一生一世最好的慈爱和福报。供奉于中华孝道园内江南石窟。
            </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <br>
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../../static/img/pt3.png" style="margin:1.3rem auto">
        </van-col>
        <van-col span="14">
            <h5 class="m-h">太湖观音<br><span style="color:#9a9a9a;font-size:0.2rem; margin-left:0.2rem">功德无量 造福子孙后代</span></h5>
            <p class="m-pb">太湖观音主尊是江南石窟内21.9米高准提观音圣像，准提观音是六道观音中长住人间道的伟大菩萨，坐于莲花之上，并有两位龙王支撑，
                感应极大，功德无量。准提观音背依江南石窟，坐拥太湖，尊称为太湖观音。供奉于功德主家中。
            </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
    <br>
    <van-row class="m-row">
        <van-col span="1"></van-col>
        <van-col span="8">
            <img src="../../../../static/img/pt4.png" style="margin:1.3rem auto">
        </van-col>
        <van-col span="14">
            <h5 class="m-h">妙音如来<br><span style="color:#9a9a9a;font-size:0.2rem; margin-left:0.2rem">自我修行 成就佛果</span></h5>
            <p class="m-pb">妙音如来是观世音菩萨未来世，是佛教中最高的莲花位，是学佛修行之人最好的归宿。迎请妙音如来，代表发心向佛，有佛祖加持，
                保佑今生吉祥如意，圆满人生，并将乘坐莲花到达佛国净土。供奉于中华孝道园内妙音宝塔。
            </p>
            
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
      this.$router.back("/webs");
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
  background-image: url("../../../../static/img/bg.png");
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

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-row {
  vertical-align: middle;
  margin-top: 0.2rem;
}

.m-h {
  margin-left:0.2rem;
  text-align: left;
  font-size: 0.35rem;
}

.m-pb {
  margin:0.3rem;
  font-size: 0.3rem;
  line-height: 0.45rem
}
.m-p-a {
  margin:0 0 0.4rem 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}

</style>
