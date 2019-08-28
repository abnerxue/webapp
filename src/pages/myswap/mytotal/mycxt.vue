<template>
  <div>
    <van-nav-bar title="我的常孝通" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />
    <div style="text-align:center;padding:0.6rem 0.5rem ">
      <div class="ma-p">
        <p>
          我的常孝通（个）
          <span style="color:#00a2ff;margin-left:38%" @click="godetail">常孝通明细</span>
        </p>
      </div>
      <div>
        <img src="../../../../static/img/myswap_l.png" class="mm-img" />
        <p class="mm-pm">
          <span id="mm-span-a">{{tc.all}}</span>&nbsp;&nbsp;&nbsp;常孝通
        </p>
      </div>
      <van-row style="margin-top:0.8rem">
        <van-col span="9">
          <p class="mm-p-a">今日常孝通</p>
        </van-col>
        <van-col span="15">
          <span id="mm-g-a">{{tc.price}}</span>
        </van-col>
      </van-row>
      <van-row style="margin:0.1rem 0 0.5rem 0">
        <van-col span="9">
          <p class="mm-p-a">今日常孝通总价值</p>
        </van-col>
        <van-col span="15">
          <span id="mm-g-b">{{tc.count}}</span>
        </van-col>
      </van-row>
      <van-button type="default" class="m-button-o" @click='gojqqd'>转常孝通</van-button>
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
    gojqqd(){
     this.$router.push('/jqqd')
    },
     getDataList(){
           
      let data = {
        token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = [{
          price:'',
         value:'',
          stock:'',
            
        
          }];
          
      this.$ajax.post('/cxt/account/stock/selfInfo', _this.$qs.stringify(data), {
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
      this.$router.push("/mycxtdetail");
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

.m-button-o {
  font-size: 0.35rem;
  margin: 0.3rem 0;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 100%;
  border-radius: 0.1rem
}

#mm-span-a {
  font-size: 0.45rem;
  color: black;
}

#mm-g-a {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

#mm-g-b {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

.mm-p-a {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}
</style>
 