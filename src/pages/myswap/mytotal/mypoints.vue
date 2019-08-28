<template>
  <div>
    <van-nav-bar title="我的积分" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />
    <div style="text-align:center;padding:0.6rem 0.5rem ">
      <div class="ma-p">
        <p>
          我的积分（个）
          <span style="color:#00a2ff;margin-left:47%" @click="godetail">积分明细</span>
        </p>
      </div>
      <div>
        <img src="../../../../static/img/myswap_m.png" class="mm-img" />
        <p class="mm-pm">
          <span id="mm-span-z">{{tc.score}}</span>&nbsp;&nbsp;&nbsp;积分
        </p>
        <p class="mm-pe">可在商场进行消费</p>
      </div>
      <van-row style="margin-top:0.8rem">
        <van-col span="9">
          <p class="mm-p-a">总价值</p>
        </van-col>
        <van-col span="15">
          <span id="mm-g-z">{{tc.value}}</span>
        </van-col>
      </van-row>
    
      <van-row style="margin-top:0.1rem">
        <van-col span="9">
          <p class="mm-p-a">积分兑换法币比例≈</p>
        </van-col>
        <van-col span="15">
          <span class="mm-p-a">{{tc.rate}}</span>
        </van-col>
      </van-row>

      <van-row style="margin-top:0.1rem">
        <van-col span="9">
          <p class="mm-p-a">消费获得更多积分</p>
        </van-col>
        <van-col span="15">
          <span class="mm-p-b" @click="gomarket">去消费</span>
        </van-col>
      </van-row>
      <van-button type="default" class="m-button-z" @click="gomarket">积分购买</van-button>
      <p class="mm-pe" >去商城使用积分购买产品</p>
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
     tc:'',
       token:''
   }
  },
   created(){
     
    this.getDataList()
  },
  methods: {
     getDataList(){
           
      let data = {
       token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = [{
          score:'',
          rate:'',
          value:'',
            
        
          }];
          
      this.$ajax.post('/cxt/account/score/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
         console.log(res.data.data);
          this.tc=res.data.data
          
           console.log( this.tc);
          
        });
    },
    onClickLeft() {
      this.$router.back("/mytotal");
    },
    godetail(){
      this.$router.push("/mypointsdetail");
    },
    gomarket(){
      this.$router.push("/Market");
    }
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

.mm-img {
  width: 15%;
  height: 15%;
}

.ma-p {
  text-align: left;
  font-size: 0.3rem;
  margin-bottom: 0.5rem;
}

.mm-pm {
  font-size: 0.3rem;
  color: #9a9a9a;
  margin: 0.2rem 0 0 15%;
}

.mm-pd {
  font-size: 0.25rem;
  color: #00a2ff;
}

.mm-pe {
  font-size: 0.28rem;
  color: #9a9a9a;
  margin: 0.15rem 0 0.2rem 0;
}

.m-button-z {
  font-size: 0.35rem;
  margin: 0.6rem 0 0.1rem 0;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 100%;
  border-radius: 0.1rem
}

#mm-span-z {
  font-size: 0.45rem;
  color: black;
}

#mm-g-z {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

.mm-p-a {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

.mm-p-b {
  font-size: 0.25rem;
  color: #00a2ff;
  float: left;
}
</style>
 