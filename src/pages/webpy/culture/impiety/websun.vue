<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“孙”姓</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p-a">
              一、姓氏起源
          </p>
          <p class="m-p">
              1、出自姬姓。周文王有后代惠孙，其孙武仲亿取其祖父之字为姓，称孙姓。
          </p>
          <p class="m-p">
              2、出自芈姓。春秋初，楚王蚣冒之孙蒍贾，蒍贾之子蒍艾腊，也称孙叔敖，孙叔为其字，出任楚庄王的令尹，其子孙以其字为氏。
          </p>
          <p class="m-p">
             3、出自妫姓。周武王封商均后裔妫满于陈。公元前672年，陈完逃奔齐国，改陈氏为田氏。齐景公赐田完后代田书孙姓。
          </p>
          <p class="m-p">
             4、出自外姓和少数民族改姓。如荀子后裔在西汉时为避汉宣帝名讳，改为孙姓。
          </p>
          
        <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
                孙姓自商末周初立姓之后，活跃于河南与山东一带。春秋初，姬姓孙氏世袭卫国上卿，春秋末，孙氏卫国失宠，从河南北迁晋国。发源于山东的妫姓孙氏发展蓬勃，孙武之子因父功而被封富春侯于浙江富阳，
                形成孙氏著名郡望吴郡。秦汉以后，妫姓孙氏成为全国孙姓主力，发展至山西太原、浙江南部和湖北。三国时，孙坚父子在江南建立吴国，孙氏发展达到顶峰。时至唐宋，孙姓已遍布大江南北。明末清初，
                孙姓进入台湾。
          </p>
          <br>
        <img src="../../../../../static/img/jisi15.png">
          <br>
          <p class="m-p-a">
              三、郡望堂号
          </p>
          <p class="m-p-a">
              【郡望】
          </p>
          <p class="m-p-a">
             汲郡：晋置郡。此支孙氏，为孙氏世居之地，为晋名隐士孙登之族所在。
          </p>
          <p class="m-p-a">
              陈留郡：西汉置郡。治所在陈留。
          </p>
          <p class="m-p-a">
               乐安郡：东汉置郡。此支孙氏为兵家之圣孙武之族所在。
          </p>
          <p class="m-p-a">
              富春郡：秦置郡。此支孙氏为乐安孙氏之分支，其开基始祖为孙武次子孙明。
          </p>
          
          <p class="m-p-a">
              【堂号】
          </p>
          <p class="m-p-a">
              平治堂：孙叔敖把楚国治理得民富国强。
          </p>
          <p class="m-p-a">
               乐安堂：田书伐莒有功，被封于乐安。
          </p>
          <p class="m-p-a">
              富春堂：吴王封军事家孙武于富春，叫富春堂，和乐安堂同宗。
          </p>
          <p class="m-p-a">
              映雪堂：晋朝御史大夫孙康，幼时家贫，无油点灯，冬天下雪借雪光读书。
          </p>
          
          <p class="m-p-a">
              历史名人
          </p>
          <p class="m-p-a">
               孙阳：春秋秦国人，字伯乐，善相马。后世以“伯乐”形容人的识才之明。
          <p class="m-p-a">
              孙武：春秋末期齐国军事家，应用五行相生相克的原理，编撰了《孙子兵法》。
          </p>
          <p class="m-p-a">
              孙膑：战国时齐国军事家，孙武后裔。著有《孙膑兵法》。  
          </p>
          <p class="m-p-a">
               孙权：吴郡富春人（今杭州市富阳县），字仲谋，三国时吴国的建立者。
          </p>
          <p class="m-p-a">
                孙思邈：唐京兆华原人。世称“药王”，著有《千金要方》、《千金翼方》。
          </p>
          <p class="m-p-a">
                孙中山：广东香山人。名文，号逸仙，人称中山先生，领导辛亥革命，推翻清朝统治，建立中华民国。
          </p>
          
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
      this.$router.back("/webxgjz");
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
  padding-top: 0.2rem;
}

.m-p-a {
  font-size: 0.35rem;
  line-height: 0.6rem;
  padding-top: 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>

