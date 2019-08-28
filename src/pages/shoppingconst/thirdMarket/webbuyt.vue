<template>
  <div style="position:relative">
    <van-nav-bar title="付款方式" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    
   
    <div class="m-r0">￥{{this.$route.query.money}}
        <van-cell-group class="m-zf0">
  <van-cell title="支付宝支付" icon="../../../../static/img/myswap_alipay1.png"  @click="zpay()" style='font-size:0.5rem;margin-top:0.4rem'/>
  <van-cell title="微信支付" icon="../../../../static/img/myswap_wechat1.png" @click="wpay()"  style='font-size:0.5rem;margin-top:0.4rem'/>
   <van-cell title="一卡通支付" icon="../../../../static/img/one.png"  @click="cardpay()" style='font-size:0.5rem;margin-top:0.4rem'/>
  <van-cell title="常孝通支付" icon="../../../../static/img/myswap_l2.png"  @click="cxtpay()" style='font-size:0.5rem;margin-top:0.4rem'/>
  <van-cell title="积分支付" icon="../../../../static/img/myswap_m2.png"  @click="scorepay()" style='font-size:0.5rem;margin-top:0.4rem'/>
  <van-cell title="法币支付" icon="../../../../static/img/myswap_k2.png"  @click="fbpay()" style='font-size:0.5rem;margin-top:0.4rem'/>
</van-cell-group>
    </div>
    
    
   
  </div>
</template>

<script>
import { Toast } from 'vant';
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
    // this.getDataList();
  },
  methods: {
    zpay(){
      let data = {
         token:this.GLOBAL.token
      }
     
     console.log(data)
      let _this = this;
          
         
      this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data.data)
          if(res.data.data.hasPayCode===true){
            // debugger;
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'z'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
        
           
        });
     /*  this.$router.push({
        path:'/pay',
        query:{
           orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
        }
      }) */
      /*  let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
         orderNo:this.$route.query.orderNo,
      
       paycode:this.value
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/top/pay/ali', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           if(res.data.state==="000"){
               let a=res.data.data
               console.log(res)
               this.pay(a)
               console.log(a)
          }else{
            Toast(res.data.msg)
          }
      
        }); */
    },
     wpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
      this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.data.hasPayCode===true){
            // debugger;
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'z'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
         /*  if(res.data.state==="000"){
             let f=res.data.data
           let   a=JSON.stringify(f)     
               this.payw(a)
               console.log(a)
          }else{
            Toast(res.data.msg)
          }
           */
        });
    },
    cxtpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
       this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.data.hasPayCode===true){
            // debugger;
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'3'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
          
        });
    },
     fbpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
       this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.data.hasPayCode===true){
            // debugger;
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'1'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
          
        });
    },
     cardpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
       this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.data.hasPayCode===true){
            // debugger;
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'6'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
          
        });
    },
     scorepay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
      this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data.data.hasPayCode)
          if(res.data.data.hasPayCode===true){
           
            this.$router.push({
              path:'/pays',//设了密码应该走这里啊
              query:{
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'2'
              }
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
          
        });
    },
    pay(a){
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
  
    alipayResult(string){
        let s=string.resultStatus;
        if(s==='9000'){
          Toast('购买成功')
          this.$router.push('/Market')
        }else{
           Toast('操作失败，请重新购买')
        }
    },

    getpayresult(){
       alipayResult(string)
    },
    zpay(){
       let _this=this
      this.page_data = {
         /* id:'',
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
            des:'', */
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/third/pay/ali', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
               let a=res.data.data
     console.log(res)
               this.pay(a)
        });
    },
       wpay(){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderNo:this.$route.query.orderNo
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/third/pay/wx', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
              let f=res.data.data
           let   a=JSON.stringify(f)     
               this.payw(a)
               console.log(a)
        });
    },
    getDataList(){
     
      let _this=this
       this.page_dataa = {
         amount: 0,
cmonth: 12,
ctime: null,
des: "个人普通会员卡",
id: 229,
lcoin: 0,
money: 1000,
orderno: "",
payNo: null,
product: 1,
score: 0,
smonth: 3,
state: 0,
stime: null,
stock: 10,
stocklock: 1,
type: 0,
uid: 59
      }   
      let data = {
        token:this.GLOBAL.token,
        id:this.$route.query.id
      };
     
  
      this.$ajax.post('/cxt/market/third/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data);
          this.page_data=res.data.data;
        });
    },
    onClickLeft() {
      this.$router.back("Market");
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
    font-size: 0.8rem
}
.m-l {
  float: left;
  margin: 0.2rem 0 0.2rem 0.4rem;
  font-size: 0.35rem;
}

.m-r0 {
  text-align:center;
  color: block;
  margin-right: 0.4rem;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.2rem 0.4rem 0.2rem 0;
  font-weight: 300
}
.m-zf0 {
  text-align:left;
  color:block;
  margin-right: 0.4rem;
  font-size: 0.5rem;
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
</style>

