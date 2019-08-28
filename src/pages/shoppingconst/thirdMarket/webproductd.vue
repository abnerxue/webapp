<template>
  <div style="position:relative">
    <!-- <van-nav-bar title="阳山水蜜桃" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/> -->
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="onClickLeft"/>
      </van-col>
      <van-col span="20" style="text-align:center">{{page_data.name}}</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <img src="../../../../static/img/market-product9.png" />
    <div class="m-l">{{page_data.name}}</div>
    <div class="m-r">￥{{page_data.money}}</div>
    <hr style="background: #ededed; border: none; height: 0.15rem; clear:both" />
    <div style="margin:0.2rem 0 0 0.6rem">
      <p class="m-pp">产品权益</p>
      <ul class="m-ul">
        <li>{{page_data.des}}</li>
        <li>{{page_data.rscore}}</li>
      </ul>
    </div>

    <div style="margin:0.2rem 0 0 0.6rem">
      <p class="m-pp">{{page_data.des}}</p>
      
    </div>
    <img src="../../../../static/img/market-product9.png"  style="position:fixed;bottom:7.8%;width:100%"/>
   <!--  <van-submit-bar :price="35000000" button-text="立即购买" @submit="onSubmit"  /> -->
    <div class="m-bottom">
      <div class="m-b-l"> ￥{{page_data.money}}</div>
      <button class="m-b-r" @click="gobuy(page_data.id)">立即购买</button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data(){
      return{
          token:''
      }
  },
  created(){
       this.getDataList();
  },
  methods: {
    gobuy(id){
      let _this=this
         let data={
           id:id,
             token:this.GLOBAL.token,
         }
         console.log(id)
     
       this.$ajax.post('/cxt/market/top/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.page_data=res.data.data;
        });
         this.$router.push({
           path:'/webbuy',
           query:{
             id:id,
             
           }
         })
        
         console.log()
      // this.$router.push("webbuy");
    },
    onClickLeft() {
      this.$router.back("Market");
    },
     getDataList(){
     
      let _this=this
      this.page_data={
             id:'',
            name:'',
            pid:'',
            state:'',
            img:'',
            ctime:'',
            money:'',
            assortid:'',
            score:'',
            stock:'',
            rscore:'',
            rstock:'',
            des:'',
      }
      let data = {
          token:this.GLOBAL.token,
        assortid:this.$route.query.assortid,
        name:this.$route.query.name,
      }
      // this.$ajax.post('/cxt/market/third/product', _this.$qs.stringify(data), {
this.$ajax.post('/cxt/market/third/assort/'+_this.$route.query.assortid, _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.page_data=res.data.data;
        });

    },
  }
};
</script>

<style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.m-l {
  float: left;
  margin: 0.2rem 0 0.2rem 0.4rem;
  font-size: 0.35rem;
}

.m-r {
  float: right;
  color: #00a2ff;
  margin-right: 0.4rem;
  font-size: 0.4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  font-weight: 300
}

.m-pp {
  font-size: 0.35rem;
}

.m-ul {
  margin-top: 0.25rem;
  color: #9a9a9a;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

.m-bottom{
  height: 8%;
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
}

.m-b-l{
  float: left;
  font-size: 0.45rem;
  color: #00a2ff;
  height: 80%;
  position: absolute;
  left: 0.4rem;
  bottom: 0;
  font-weight: 300
}

.m-b-r{
  float: right;
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  height: 100%;
  width: 40%;
  margin-right: 0
}
</style><style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.m-l {
  float: left;
  margin: 0.2rem 0 0.2rem 0.4rem;
  font-size: 0.35rem;
}

.m-r {
  float: right;
  color: #00a2ff;
  margin-right: 0.4rem;
  font-size: 0.4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  font-weight: 300
}

.m-pp {
  font-size: 0.35rem;
}

.m-ul {
  margin-top: 0.25rem;
  color: #9a9a9a;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

.m-bottom{
  height: 8%;
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
}

.m-b-l{
  float: left;
  font-size: 0.45rem;
  color: #00a2ff;
  height: 80%;
  position: absolute;
  left: 0.4rem;
  bottom: 0;
  font-weight: 300
}

.m-b-r{
  float: right;
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  height: 100%;
  width: 40%;
  margin-right: 0
}
</style><style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.m-l {
  float: left;
  margin: 0.2rem 0 0.2rem 0.4rem;
  font-size: 0.35rem;
}

.m-r {
  float: right;
  color: #00a2ff;
  margin-right: 0.4rem;
  font-size: 0.4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  font-weight: 300
}

.m-pp {
  font-size: 0.35rem;
}

.m-ul {
  margin-top: 0.25rem;
  color: #9a9a9a;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}

.m-bottom{
  height: 8%;
  position: fixed;
  bottom: 0;
  margin-bottom: 0;
  width: 100%;
}

.m-b-l{
  float: left;
  font-size: 0.45rem;
  color: #00a2ff;
  height: 80%;
  position: absolute;
  left: 0.4rem;
  bottom: 0;
  font-weight: 300
}

.m-b-r{
  float: right;
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  height: 100%;
  width: 40%;
  margin-right: 0
}
.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: '';
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}
</style>

