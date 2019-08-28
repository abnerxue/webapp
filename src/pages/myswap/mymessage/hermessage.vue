<template>
  <div class="s-bg">
    <van-nav-bar title="她的信息" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <img src="../../../../static/img/myimg.png" class="s-img" />
    <van-cell value="188****8888" class="s-cell" />
    <van-tabs v-model="active" animated color="#00a2ff">
      <van-tab title="她的产品">
        <van-cell value="一年康旅卡" class="left" />
        <van-cell value="2019-04-23" class="mid" />
        <van-cell value="￥1000" class="right" />
        <van-cell value="一年康旅卡" class="left" />
        <van-cell value="2019-04-23" class="mid" />
        <van-cell value="￥1000" class="right" />
      </van-tab>
      <van-tab title="她的组织">
        <div>
          <div class="s-l">
            <van-cell title="她的业务经理" value=" " size="large" label="185*****265" />
          </div>
          <div style="width:30%;float:right">
            <qriously :value="value1" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.2rem "/>
          </div>
        </div>
        <van-row style="text-align:right">
          <van-col span="7">
            <p class="s-p">VIP会员</p>
          </van-col>
          <van-col span="17">
            <button class="s-btn" @click="goa">查看全部（<span>04</span>）</button>
          </van-col>
        </van-row>
        
        <div style="clear:both">
          <div style="width:22%;float:left">
            <qriously :value="value2" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.4rem " @click="goc"/>
          </div>
          <div style="width:78%;float:right">
            <van-cell value="188****8888"  size="large"  is-link  style="padding-top:0.4rem" @click="god"/>
          </div>
        </div>
        <div style="clear:both">
          <div style="width:22%;float:left">
            <qriously :value="value3" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.4rem " />
          </div>
          <div style="width:78%;float:right">
            <van-cell value="188****8888"  size="large"  is-link style="padding-top:0.3rem"/>
          </div>
        </div>
        <van-row style="text-align:right;clear:both">
          <van-col span="7">
            <p class="s-p">普通会员</p>
          </van-col>
          <van-col span="17">
            <button class="s-btn" @click="gob">查看全部（<span>04</span>）</button>
          </van-col>
        </van-row>

        <div style="clear:both">
          <div style="width:22%;float:left">
            <qriously :value="value4" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.4rem "  />
          </div>
          <div style="width:78%;float:right">
            <van-cell value="188****8888"  size="large"  is-link style="padding-top:0.3rem"/>
          </div>
        </div>
        <div style="clear:both">
          <div style="width:22%;float:left">
            <qriously :value="value5" :size="size" :backgroundAlpha="backgroundAlpha" style="margin:0.1rem 0.1rem 0 0.4rem " />
          </div>
          <div style="width:78%;float:right">
            <van-cell value="188****8888"  size="large"  is-link style="padding-top:0.3rem"/>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      value: "",
      active: 2,
       // 可以自定义，必填项。
            value1: 'http://lxchuan12.github.io/',
            value2: 'http://lxchuan12.github.io/',
            value3: 'http://lxchuan12.github.io/',
            value4: 'http://lxchuan12.github.io/',
            value5: 'http://lxchuan12.github.io/',
            // 二维码大小 默认 100
            size: 50,
            // 背景透明度，默认透明 0 
            backgroundAlpha:1,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back("/mymessage");
    },
    goa(){
      this.$router.push("/vipmember");
    },
    gob(){
      this.$router.push("/commonmember");
    },
    goc(){
      this.$router.push("/codea");
    },
    god(){
      this.$router.push("/hermessage");
    }
  }
};
</script>
 
 <style scoped>
 .s-bg{
  padding-bottom: 1rem;
  background-color: white
}

.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.s-img {
  width: 20%;
  margin: 0.2rem 40% 0 40%;
}
.s-cell {
  padding-left:40%;
  padding-bottom: 0.3rem;
}
.left {
  float: left;
  width: 28%;
}
.mid {
  float: left;
  width: 47%;
}
.right {
  float: right;
  width: 25%;
}

.s-l {
  width: 70%;
  float: left;
}

.s-img-s {
  width: 50%;
  margin: 0.15rem 0.15rem 0.15rem 0.7rem;
}

.s-img-b {
  width: 70%;
  margin: 0 0.15rem 0 0.4rem;
}

.s-p{
  color: #00a2ff;
  font-size:0.4rem;
  
  margin: 0.1rem 0 0.1rem 0.3rem
}

.s-btn{
  color: #9a9a9a;
  margin: 0.25rem ;
  font-size:0.15rem 0.25rem;
}
</style>
 