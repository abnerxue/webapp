<template>
  <div style="position:relative">
    <!-- <van-nav-bar title="一月康旅卡" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/> -->
     <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="onClickLeft"/>
      </van-col>
      <van-col span="20" style="text-align:center">{{page_data.name}}</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <img src="../../static/img/market-product1.png" />
    <div class="m-l">{{page_data.name}}</div>
    <div class="m-r">￥{{page_data.money}}</div>
    <hr style="background: #ededed; border: none; height: 0.15rem; clear:both" />
    <div style="margin:0.8rem 0 0 0.6rem">
      <p class="m-pp">产品权益</p>
      <ul class="m-ul">
        <li>一次性获赠12万元产二幺回复品</li>
        <li>可获得{{page_data.rstock}}个常孝通版通</li>
        <li>可获{{page_data.rscore}}积分用于三级市场消费</li>
        <li>一定额度一级版通批77888发配额资格</li>
      </ul>
    </div>
   <!--  <van-submit-bar :price="35000000" button-text="立即购买" @submit="onSubmit"  /> -->
    <div class="m-bottom">
      <div class="m-b-l"> ￥{{page_data.money}}</div>
      <button class="m-b-r" @click="gonext()">立即购买</button>
    </div>
    <van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
  </div>
</template>

<script>
import { Sku } from 'vant';

Vue.use(Sku);
import { Toast } from 'vant';
import Vue from 'vue'
 import global_ from './global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data(){
    return{
          show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },
      id:'',
      token:'',
      page_data:'',
      pagef_data:''
    }
  },
  created(){
    // console.log('商品详情id:'+this.$route.query.id);
    this.getDataList();
   
  },
  // 预编译

  methods: {
      gonext(){
         let _this=this
      this.pagef_data = {
           amount: 0,
cmonth:12,
ctime: null,
des: "个人普通会员卡",
id: 329,
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
uid: 59,
msg: "success",
state: ""
      }    
      let data = {
       id:this.$route.query.id,
             token:this.GLOBAL.token,
      };
     
  
      this.$ajax.post('/cxt/market/top/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
            if(res.data.state==='000'){
            this.pagef_data=res.data.data
            let a=this.pagef_data.orderno
            let b=this.pagef_data.money
           
             this.$router.push({
        path:"/webbuy",
        query:{
         orderNo:a,
         money:b
        }
      })
            }else{
               console.log(res.data.state)
              Toast(res.data.msg)
            }
           
    
      
        });
      },
        getDataList(){
          
      let _this=this
      this.page_data = {
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
        id:this.$route.query.id
      };
     
  
      this.$ajax.post('/cxt/market/top/index', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data.data);
          this.page_data=res.data.data;
           
        });
    },
    onClickLeft() {
      this.$router.back("Market");
    },
    
    },

  
    
  
    
  }

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
.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-image: ;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}
</style>

