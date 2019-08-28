<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">交通路线</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row style="margin-top:1rem">
        <van-col span="2"></van-col>
        <van-col span="20">
            <h5 class="m-ha">常州地区公交路线</h5>
            <ul>
                <li> 1、市区南→武进大道（洛阳方向）→s232省道→渎边收费站→x317（分百路）→中华孝道园</li><br>
                <li> 2、市区东→青洋路高架→s232省道→渎边收费站→x317（分百路）→中华孝道园</li><br>
                <li> 3、市区西→外环高架→s232省道→渎边收费站→x317（分百路）→中华孝道园</li><br>
            </ul>
        </van-col>
        <van-col span="2"></van-col>
    </van-row>
    <br><br>
    <van-row>
        <van-col span="2"></van-col>
        <van-col span="20">
            <h5 class="m-ha">苏南地区自驾路线</h5>
            <ul>
                <li>1、无锡：沪宁高速→锡宜高速（阳山出口下）→s342→s232→渎边收费站→x317（分百路）→中华孝道园</li><br>
                <li>2、杭州：宁杭高速→锡宜高速（漕桥出口下）→s342→s232→渎边收费站→x317（分百路） →中华孝道园</li><br>
                <li>3、南京：宁杭高速→锡宜高速（漕桥出口下）→s342→s232→渎边收费站→x317（分百路） →中华孝道园</li><br>
                <li>4、镇江：沪宁高速→沿江高速（戚墅堰出口）→s232→渎边收费站→x317（分百路） →中华孝道园</li><br>
                <li>5、上海：沪宁高速→锡宜高速（阳山出口下）→s342→s232→渎边收费站→x317（分百路） →中华孝道园</li><br>
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

.m-ha{
    font-size: 0.4rem;
    margin:0.2rem 0 ;
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

</style>
