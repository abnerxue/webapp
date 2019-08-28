<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">设置</van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-cell-group style="margin-top:0.2rem">
      <van-cell title="个人信息" value="" size="large" is-link @click="gomsg"/>
      <img :src="tc.img" class="s-img">
      <van-cell title="修改手机号" v-model="tel" size="large" is-link @click="gonum"/>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-cell title="实名认证" value="" size="large" is-link @click="gorz"/>
      <van-cell title="设置支付密码" value="" size="large" is-link @click="goyz"/>
      <van-cell title="账户与密码安全" value="" size="large" is-link @click="goyzs"/>
    </van-cell-group>

    <!-- <van-cell-group style="margin-top:0.2rem">
      <van-cell title="清除缓存" value="103.45MB" size="large" is-link/>
    </van-cell-group> -->
     

    <button class="s-btn" @click="setout">注销登录</button>
  </div>
</template>

<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      value: "",
       tel:'',
        token:''
    };
  },
   created(){
    
    this.getDataList()
  },
  methods: {
    setout(){
      
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.exit();
    }
    if(this.GLOBAL.systemName==='ios'){
      //  var obj = $(".test");
      //  obj.text(this.GLOBAL.systemName);
        console.log('ios')
       window.webkit.messageHandlers.exit.postMessage("");
    }
    },
     getDataList(){
      let data = {
         token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = {
          role:'',
          tel:'',
          img:'',
            
        
          };
         
      this.$ajax.post('/cxt/user/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
          
        
           
        });
    },
    goout(){
       window.android.exit();
    },
    goback() {
      this.$router.push("/myswap");
    },
    gomsg(){
        this.$router.push("/personalmsg");
    },
    gonum(){
        this.$router.push("/changetelnum");
    },
    gorz(){
        this.$router.push("/certification");
    },
    goyz(){
        this.$router.push("/resetpay");
    },
    goyzs(){
        this.$router.push("/resetpassa");
    },
     goads(){
        this.$router.push("/dtads");
    },
     
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  height: 100%;
  width: 100%;
  position: relative;
}

.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: white;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-btn{
    color: red;
    width: 100%;
    padding: 0.25rem 0;
    font-size: 0.3rem;
    background-color: white;
    margin-top: 0.2rem
}

.s-img{
  border-radius:100%;
    position: absolute;
    z-index: 2;
    width: 8.5%;
    height:30%;
    right: 10%;
    top:13%
}
</style>
