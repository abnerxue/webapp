<template>
  <div class='myswap'>
    <div class="m-header-a" >
      <van-row >
        <van-col span="1"></van-col>
        <van-col span="6" class="m-p0">我的</van-col>
        <van-col span="14" style="text-align:right">
          <van-icon name="scan" class="m-micon"  @click='s'/>
        </van-col>
        <van-col span="3"></van-col>
      </van-row>

      <van-row>
        <van-col span="1"></van-col>
        <van-col span="6">
          <div class="m-tou">
            <img :src="tc.img" class="m-imga" />
          </div>
        </van-col>
        <van-col span="10">
          <van-cell v-model="tel" size="large"  style="color:white; background-color:#00a2ff;margin-top:10%;height:1.2rem" :border="false" />
          <van-cell v-model="r"  size="large"  style="color:white; background-color:#00a2ff;margin-top:-0.35rem;padding-top:0.1rem" :border="false"/>
        </van-col>
        <van-col span="7">
          
        </van-col>
      
      </van-row>
    </div>
    <div style="background-color:#ededed;padding-top:0.2rem;margin-top:43%">
      <van-cell-group style=" padding:0.02rem 0.2rem">
        <!-- <van-cell
          title="一卡通管理"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/one.png"
          @click="gocard"
        /> -->
        <van-cell
          title="总资产"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_a.png"
          @click="gomytotal"
        />
        <van-cell
          title="我的收益"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_b.png"
          @click="gobenefit"
        />
        
       <!--  <van-cell
          title="即时转账"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_d.png"
          @click="goaccount"
        /> -->
      </van-cell-group>

      <van-cell-group style="margin-top:0.2rem; padding:0.02rem 0.2rem">
        <van-cell
          title="商城订单"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_b.png"
          @click="gomall"
        />
        <van-cell
          title="我的信息"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_c.png"
          @click="gomymessage"
        />
        <van-cell
          title="扫一扫"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_h.png"
           @click='s'
        />
       <!--  <van-cell
          title="通知消息"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_e.png"
          @click="gomessage"
        /> -->
         
        <van-cell
          title="邀请编码"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_f.png"
          @click="gocode"
        />
      </van-cell-group>

      <van-cell-group style="margin-top:0.2rem; padding:0.02rem 0.2rem;margin-bottom:0.2rem">
        <van-cell
          title="关于我们"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_i.png"
          @click="gous"
        />
        <van-cell
          title="设置"
          is-link
          style="font-size:0.3rem"
          icon="../../../static/img/myswap_j.png"
          @click="goset"
        />
          
        
        
      </van-cell-group>
      <van-cell-group style="margin-top:0.1rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem">
         
         <van-cell v-for="(item,index) in rolelist" :key="index" :title='item.name' replace :to="item.key" :icon="item.img"  is-link
          style="font-size:0.3rem"/>
      </van-cell-group>
    </div>
  <!-- <div class="testp">能进ios么？</div> -->

    
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
            var console = {};
            console.log = function(message){window.webkit.messageHandlers['logger'].postMessage(message)
            };
        </script>
<script>
import { Toast } from 'vant';
import Vue from 'vue'
import global_ from '../global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      token:'',
      r:'',
      tel:'',
      active: 3,
      tc:'',
      barList:'',
      rolelist:''
    };
  },
  created(){
    this.setcolor();
      this.top();
    this.getDataList()
     window.scanResult = b => {
      this.scanResult(b);
    };
      
      this.getrole()
  },

  mounted(){
    
  },
   filters: {
          
    
parseArr: function (arr) {
  let arrs = JSON.parse(arr);
      return arrs[0];
　　　　}
　　},
  methods: {
     getBar(){
      let _this = this;
      let data = {
       token:this.GLOBAL.token
      };
      this.barList=[{
       
      }]

      this.$ajax.post('/cxt/base/rootMenus', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.barList=res.data.data
             console.log(this.barList)
         
        });
    },
    getrole(){
          let data = {
         token:this.GLOBAL.token,
         pid:5
      };
     console.log(data)
     
      let _this = this;
         this.rolelist={
           key:'',
           img:'',
           name:'',
           id:''
         }
         
      this.$ajax.post('/cxt/menu/sublist', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
        
         this.rolelist=res.data.data
         console.log(this.rolelist)
           
        });
    },
    parseArra(arr){
      console.log(arr)
      return JSON.parse(arr);
    },
      getBar(){
      let _this = this;
      let data = {
       token:this.GLOBAL.token
      };
      this.barList=[{
       
      }]

      this.$ajax.get('/cxt/base/rootMenus', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.barList=res.data.data
             console.log(this.barList)
         
        });
    },
     setcolor(){
      console.log(this.GLOBAL.systemName);
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.setStatusBarColor("#00a2ff");
      
    }
    if(this.GLOBAL.systemName==='ios'){
     
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#00a2ff");
    }
    },
     setcolerb(){
        
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.setStatusBarColor("#ededed");
    }
    if(this.GLOBAL.systemName==='ios'){
      
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#ededed");
    }
    },
   /*  setcolor() {
     
      window.android.setStatusBarColor("#00a2ff");
    }, */
    /* setcolerb(){
      setStatusBarFontColor('WHITE');
      setStatusBarColor('#BCBCBC');

    },
      setcoler(){
      setStatusBarFontColor("WHITE");
      setStatusBarColor('#BCBCBC');

    }, */
    
      
     
    s(){
        
    if(this.GLOBAL.systemName==='android'){
      
        window.android.scanQR()
      
    }
    if(this.GLOBAL.systemName==='ios'){
       
        console.log('ios')
       window.webkit.messageHandlers.scanQR.postMessage("");
    
    }
    },
    scanResult(b){
           let data = {
         token:this.GLOBAL.token,
         code:b,
      };
     console.log(data.code)
     
      let _this = this;
         
         
      this.$ajax.post('/cxt/relation/bind', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          Toast('绑定成功')
          // this.tf=res.data.data
         
          var obj = $(".testp");
        obj.text('扫成功');
        
           
        });
      
    },
    getDataList(){

      let data = {
         token:this.GLOBAL.token
      };
     
     console.log(data)
      let _this = this;
          this.tc =[{
          role:'',
          tel:'',
          img:'',
            
        
          }] 
         
      this.$ajax.post('/cxt/user/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
           this.r=res.data.data.role
           console.log(this.tc.img)
        
           
        });
    },
    gomytotal() {
      this.$router.push("/mytotal");
    },
    goforme(){
      this.$router.push("/personal");
    },
    gomymessage() {
      this.$router.push("/mymessage");
    },
    goaccount() {
      this.$router.push("/account");
    },
    goctrlload() {
      this.$router.push("/statistics");
    },
    gopricing() {
      this.$router.push("/pricing");
    },
    gomessage() {
      this.$router.push("/message");
    },
    gocode(){
      this.$router.push("/invitecode");
    },
    gous(){
      this.$router.push("/aboutus");
    },
    goset(){
      this.$router.push("/set");
    },
    gobenefit(){
      this.$router.push("/mybenefit");
    },
      gomall(){
      this.$router.push("/mall");
    },
     goorder(){
      this.$router.push("/mallmanage");
    },
    
    gobind(){
     
    },
    gocard(){
        this.$router.push("/txrequest");
    },
    top() {
      window.scrollTo(0, 0);
    }
  },
   destroyed(){
      this.setcolerb()
  }
};
</script>
<style scoped>
.myswap{
  padding-bottom:2rem;
}
.m-header-a {
  background-color: #00a2ff;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  position:fixed;
  top:0;
  width: 100%;
  z-index: 2
}

.m-imga {
  width: 95%;
  margin: 0.03rem 0 0.3rem 0.03rem;
}

.m-p0 {
  color: white;
  font-size: 0.4rem;
}

.m-micon {
  font-size: 0.5rem;
  color: white;
}

.m-tou {
   border-radius: 50%;

  
  border: 0.01rem solid #00a2ff;
  background-color: #00a2ff;
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.4rem 0 0.5rem 0.3rem;
}
  .m-tou img{
        width:1.2rem;
        height:1.2rem;
        border-radius: 50%;
    }
.m-iconss{
  margin:0.7rem 0 0.5rem 1.8rem;
  color: white;
  font-size: 0.5rem
}

.van-cell__left-icon {
    min-width: 1.8em;
    height: 0.5rem;
    font-size: 0.4rem;
    margin-top: 0.01rem
}

.van-cell__value--alone {
    color: white;
    text-align: left;
    font-size: 0.32rem;
}
.van-cell__value {
    position: relative;
    overflow: hidden;
    color: white;
    font-size: 0.32rem;
    vertical-align: middle;
}
</style>

