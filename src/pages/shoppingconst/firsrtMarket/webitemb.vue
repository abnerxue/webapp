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
    <img :src="page_data.img" />
    <div class="m-l">{{page_data.name}}</div>
    <div class="m-r">￥{{page_data.money}}</div>
    <div class="m-rss" v-if='page_data.scorecost>0'>积分{{page_data.scorecost}}</div>
    <div  class="m-r" v-else></div>
    <div class="m-r" v-if='page_data.hasmprice=0'>会员价{{page_data.mprice}}</div>
    <div  class="m-r" v-else></div>
    <hr style="background: #ededed; border: none; height: 0.15rem; clear:both" />
    <div style="margin:0.8rem 0 0 0.6rem">
      <div v-if='this.$route.query.kind===5'><div v-html="page_data.des"></div></div>
      <div v-else><p class="m-pp">产品权益</p>
      <div v-html="page_data.des"></div></div>
      <div >
    <div style="overflow:hidden;margin-top:.1rem;margin-bottom:1.5rem;">
    <div style="display:flex;width:60%;float:right;margin-bottom:1.5rem">
        <div @click="num_plus()" style="flex:1;display:flex;
                align-items:center;
                justify-content:center;font-size:.6rem">+</div>
        <van-field v-model="num" center placeholder="" style="flex:1;text-align:center;font-size:.4rem"/>
        <div @click="num_minus()" style="flex:1;display:flex;
                align-items:center;
                justify-content:center;font-size:.6rem">-</div>
    </div>
    </div>
  </div>
      
    </div>
   <!--  <van-submit-bar :price="35000000" button-text="立即购买" @submit="onSubmit"  /> -->
    <div class="m-bottom">
      <div class="m-b-l"> ￥{{count()}}</div>
      <button class="m-b-r" @click="gonext(pagef_data.orderno,page_data.scorecost)">立即购买</button>
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
      num:1,
      id:'',
      token:'',
      page_data:'',
      pagef_data:'',
      totle_price:''
    }
  },
  created(){
    // console.log('商品详情id:'+this.$route.query.id);
    this.getDataList();
   
  },
  // 预编译

  methods: {
    count(){
  return this.num*this.page_data.money;
},
     num_plus(){
        // console.log(555);
        this.num++;
        this.totle_price = this.num*this.page_data.money;
      },
      num_minus(){
        // console.log(555);
        if(this.num<=0){
          return;
        }
        this.num--;
        this.totle_price = this.num*this.page_data.money;
      },
      gonext(scorecost){
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
             num:this.num
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/top/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
            if(res.data.state==='000'){
            this.pagef_data=res.data.data
            let a=this.pagef_data.orderno
            let b=this.pagef_data.money
             
             this.$router.push({
        path:"/webbuynew",
        query:{
         orderNo:a,
         money:b,
         scorecost:this.page_data.scorecost
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
.m-rss {
  float: right;
  color: #f3bc03;;
  margin-right: 0.4rem;
  font-size: 0.3rem;
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
  background: white;
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

