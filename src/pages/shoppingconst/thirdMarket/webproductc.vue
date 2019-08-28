<template>
  <div style="position:relative">
    <!-- <van-nav-bar title="一月康旅卡" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/> -->
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="onClickLeft"/>
      </van-col>
      <van-col span="20" style="text-align:center;width:white-space:nowrap; 
	text-overflow:ellipsis;

">{{page_data.name}}</van-col>
      <van-col span="2" ></van-col>
    </van-row>
    <!-- <img :src="parseArr(page_data.images)" /> -->
    
      <div class="swiper" >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in page_data.images" :key="index" >
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      </div>
    <div class="m-l" style="margin-top:1rem;">{{page_data.name}}</div>
    <div class="m-r">￥</div>
    <hr style="background: #ededed; border: none; height: 0.15rem; clear:both" />
    <div style="margin:0.8rem 0 0 0.6rem">
      <p class="m-pp">产品权益</p>
      <ul class="m-ul" >
        <li>一次性获赠{{page_data.rstock}}元产品</li>
        <li>可获得{{page_data.rscore}}个常孝通版通</li>
        <li>可获{{page_data.rstock}}积分用于三级市场消费</li>
        <li>一定额度一级版通批发配额资格</li>
      </ul>
    </div>
   <!--  <van-submit-bar :price="35000000" button-text="立即购买" @submit="onSubmit"  /> -->
    <div class="m-bottom">
      <div class="m-b-l"> ￥</div>
      <!-- <button class="m-b-r" @click="gonext(pagef_data.orderno,pagef_data.money)">立即购买</button> -->
      <button class="m-b-r" @click="gonext()">立即购买</button>
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
       usertoken:'',
        token:'',
     page_data:'',
     pagef_data:''
    }
  },
  created(){
    // console.log('商品详情id:'+this.$route.query.id);
    this.getDataList();
  
  },
  methods: {
    gonext(){
      this.$router.push('/jqqd')
    },
   /* gonext(){
     this.$router.push({
       path:'/torder',
       query:{
         id:this.page_data.id
       }
     })
    }, */
  
  /*    gonext(orderno,money){
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
     
  
      this.$ajax.post('/cxt/market/third/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
            
            if(res.data.state==='000'){
            this.pagef_data=res.data.data
            let a=this.pagef_data.orderno
            let b=this.pagef_data.money
             this.$router.push({
        path:"/webbuyt",
        query:{
         orderNo:a,
         money:b
        }
      })
            }else{
              Toast(res.data.msg)
            }
           
    
     
        });
    }, */
    getDataList(){
      var id = 1;
      let _this=this
      this.page_data={
             id:'',
            name:'',
            pid:'',
            state:'',
            img:'',
            images:'',
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
        usertoken:localStorage.getItem("token"),
        id:this.$route.query.id
      }
      this.$ajax.post('/cxt/market/third/product/'+data.id, _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.page_data=res.data.data;
          console.log( res.data.data.images )
          this.page_data.images = JSON.parse(res.data.data.images);
          
        });

    },
    parseArr(arr){
      let img = JSON.parse(arr);
      return img[0];
    },
    onClickLeft() {
      this.$router.push("Market");
      console.log(888)
    },
        
  }
};
</script>

<style scoped>

.swiper {
  width: 100%;
  height: 4.3rem;}
  .van-swipe {
    width: 100%;
    height: 100%;
  }
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
  list-style-type: none;
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
  background-image:"" ;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}
</style>

