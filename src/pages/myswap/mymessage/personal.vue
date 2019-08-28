<template>
  <div>
    <van-row class="ss-header-mm">
      <van-col span="2">
        <van-icon name="arrow-left" class="ss-header-icon-mm" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">个人资料</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="height:30%;background-color: #00a2ff ; color:white">
        <van-col span="4" class="ss-mm">级别</van-col>
        <van-col span="6"><van-cell title="VIP会员" class="ss-cell-mm"/></van-col>
        <van-col span="10">
            <div class="ss-tou-mm">
            <img src="../../../../static/img/myimg.png" class="ss-img-mm" />
          </div>
        </van-col>
    </van-row>
    <van-row style="margin-top:0.5rem">
        <van-col span="2"></van-col>
        <van-col span="12" class="ss-mm-ss">
            用户ID
        </van-col>
        <van-col span="8">
            <van-cell value="188****8888" class=""/>
        </van-col>
        <van-col span="2"></van-col>
    </van-row>
    <van-row>
        <van-col span="2"></van-col>
        <van-col span="20">
            <button class="ss-btnss" @click='quit'>退出登录</button>
        </van-col>
        <van-col span="2"></van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
        value:"",
         token:''
    };
  },
  methods: {
    quit(){
           let _this = this;                     
                 let data = {
                  token:this.GLOBAL.token
                };                    
 
                this.$ajax.post('/base/logout',_this.$qs.stringify(),{
                    headers: _this.Base.initAjaxHeader(1)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                  if(res.data.state == '000') {
                           this.$router.push('/load')
                   }
                 
                  else{
                     Toast(res.data.data);
                  }
               
                  
                   console.log(res.data.data);
               });
    },
      onClickLeft(){
          this.$router.back('/myswap')
      }
  }
};
</script>

<style scoped>


.ss-header-mm {
  height: 1rem;
  line-height: 1rem;
  color:white;
  font-size: 0.35rem;
  background-color: #00a2ff;
}

.ss-header-icon-mm {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.ss-tou-mm {
  border-radius: 1.2rem;
  border: 0.01rem solid white;
  background-color: white;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.4rem 0 0.5rem 1.9rem;
}

.ss-img-mm {
  width: 95%;
  margin: 0.03rem 0 0 0.03rem;
}

.ss-mm{
    font-size:0.4rem;
    margin: 0.5rem 0 0 0.5rem
}

.ss-mm-ss{
    font-size:0.4rem;
    margin-top: 0.15rem
}

.ss-cell-mm{
    background-color: #00a2ff; 
    margin-top: 0.35rem;
    color: white
}

.ss-btnss{
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  padding: 0.2rem ;
  text-align: center;
  width:100%;
  margin-top: 1.5rem
}
</style>

