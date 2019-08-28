<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  @click='goback()'/><!-- 需要做跳转 -->
      </van-col>
      <van-col span="20" style="text-align:center">输入支付密码</van-col>
      <van-col span="2">
          <van-icon name="cross" class="s-header-icon"  />  <!-- 需要做跳转 -->
      </van-col>
    </van-row>
    <div style="text-align:center">
      <p class="s-p">
        请输入支付密码
      </p>
      <!-- 密码输入框 -->
      <van-password-input :value="value"  @focus="showKeyboard = true" />

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />

      <!-- <p class="ss-p">
          忘记密码？找回并完成支付
      </p> -->
    </div>
     <van-button type="default" class="m-button-m" @click="pay()">确定</van-button>
  </div>
</template>

<script>
import { Toast } from 'vant';
import Vue from 'vue'
import global_ from '../global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      username: "",
      idnum: "",
      telnum: "",
      code: "",
      value: "",
      showKeyboard: true
    };
  },
  created(){
    // this.sendcode()
    this.getDataList()
  },
  methods: {
      pays(a){
        console.log(a)
        console.log(typeof(a))
    if(this.GLOBAL.systemName==='android'){
        window.android.requestAlipay(a);
       
   
        
    
    }
    if(this.GLOBAL.systemName==='ios'){
      //  var obj = $(".test");
      //  obj.text(this.GLOBAL.systemName);
        console.log('ios')
       window.webkit.messageHandlers.requestAlipay.postMessage(a);
    }
    },
    cardpay(){
         let _this=this
          let data = {
        token:this.GLOBAL.token,
         orderno:this.$route.query.orderNo,
         cardno:this.$route.query.cardno,
       paycode:this.value
      }
      console.log(data)
      this.$ajax.post('/cxt/market/top/pay/card', _this.$qs.stringify(data),{
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           if(res.data.state==="000"){
             this.$router.push('/Market')
                Toast(res.data.msg)
          }else{
            Toast(res.data.msg)
          }
    });
    },
    scorepay(){
         let _this=this
          let data = {
        token:this.GLOBAL.token,
         orderno:this.$route.query.orderNo,
      
       paycode:this.value
      }
      this.$ajax.post('/cxt/market/top/pay/score', _this.$qs.stringify(data),{
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data)
           if(res.data.state==="000"){
              this.$router.push('/Market')
                Toast(res.data.msg)
          }else{
            Toast(res.data.msg)
          }
    });
    },
    zfb(){
         let _this=this
          let data = {
        token:this.GLOBAL.token,
         orderno:this.$route.query.orderNo,
      
       paycode:this.value
      }
      this.$ajax.post('/cxt/market/top/pay/ali', _this.$qs.stringify(data),{
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           if(res.data.state==="000"){
               let a=res.data.data
               console.log(res)
               this.pays(a)
               console.log(a)
               return
          }else{
            Toast(res.data.msg)
          }
    });
    },
      payw(a){
        let _this=this
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
        window.android.requestWX(a)
;
    }
    if(this.GLOBAL.systemName==='ios'){
      //  var obj = $(".test");
      //  obj.text(this.GLOBAL.systemName);
        console.log('ios')
       window.webkit.messageHandlers.requestWX.postMessage(a);
    }
    },
      wpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        paycode:this.value,
        token:this.GLOBAL.token,
        orderno:this.$route.query.orderNo
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/top/pay/wx', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.state==="000"){
             let f=res.data.data
           let   a=JSON.stringify(f)     
               this.payw(a)
               console.log(a)
          }else{
            Toast(res.data.msg)
          }
          
        });
    },
    pay(){
       let data={
         token:this.GLOBAL.token,
         paycode:this.value,
         paytype:this.$route.query.paytype,
         orderno:this.$route.query.orderNo,
      };
      console.log(data)
      let _this = this;
      
      this.$ajax.post('/cxt/user/checkPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data)
         if(res.data.state==='000'){
            console.log(this.$route.query.paytype)
                 if(this.$route.query.paytype==='z'){
                    this.zfb()
                 }
                 if(this.$route.query.paytype==='w'){
                   this.wpay()
                 }
                 if(this.$route.query.paytype==='6'){
                   this.cardpay()
                 }
                  if(this.$route.query.paytype==='2'){
                  this.scorepay()
                  
                 
                 }
         }else{
           Toast(res.data.msg)
         }
        });
    },
     getDataList(){
     
    },
     
    goback() {
      this.$router.back("/set");
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>

<style scoped>
.m-button-m {
  font-size: 0.38rem;
  margin: 1rem 0;
  color: white;
  background-color: #00a2ff;
  width: 100%;
  border: none;
}
.s-headeras {
  height: 0.9rem;
  line-height: 0.9rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-header-icon {
  position: absolute;
  top: 0.25rem;
  right: 0.2rem;
  font-size: 0.45rem;
}

.s-p {
  color: #9a9a9a;
  font-size: 0.4rem;
  margin: 0.7rem 0 1rem 0;
}

.ss-p {
  color: #00a2ff;
  font-size: 0.3rem;
  margin: 0.3rem 0 0 0.8rem;
  text-align: left
}

ul li{
  list-style: none;
}
</style>
