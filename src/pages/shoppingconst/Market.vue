<template>
  <div>
    <div class="m-bg">
      <div>
            <!-- <div style="position:fixed;left:1.5rem;height:1.2rem;width:1rem;top:0;z-index:10000;" @click='search(value)'></div> -->
        <div style="position:fixed; top:0; z-index:9999 ; background-color:#ededed; width:100%">
          <p class="header-left">购物</p>
          <div style="position:relative;">
            <!-- <p class="header-left" @click='search(value)'>搜索</p> -->
            <van-search placeholder="请输入您想搜索的产品" v-model='value' right-icon="name:search" background="#ededed" @click='search(value)'/>
          </div>
        </div>
        <div style="clear:both; margin:1rem auto; background-color:white">
          <van-tabs color="#00a2ff" animated background="#ededed" sticky v-model="activeTab" @click="onClick"  class='abc'>
            <van-tab title="会员专场" name="a"  >
              <div  >
                <!-- <img :src="banner" /> -->
                <div class="swiper" >
      <van-swipe :autoplay="3000" >
        <van-swipe-item v-for="(img, index) in listbanner" :key="index" >
          <img v-lazy="img" />
        </van-swipe-item>
      </van-swipe>
      </div>
                <table class="m-table">
                  <tr v-for="(item,index) in dataList" :key="index">
                    <td style="width:50%;font-size:.3rem;">
                      <img :src="item.img" class="m-img" @click="goitemb(item.id,item.state,item.kind)"/>
                    </td>
                    <td style="width:50%;font-size:.3rem;">
                      <p class="m-p-one" @click="goitemb(item.id,item.state,item.kind)">{{item.name}}</p>
                      <!-- <p class="m-p-two" @click="goitemb(item.id,item.state)"></p>  -->
                       <!-- <p class="m-p-two">{{item.scorecost}}积分</p>  -->
                       <p v-if="item.scorepay>0" class="m-p-two">积分{{item.scorecost}}</p> 
                       <p v-else class="m-p-two"></p> 
                       
                      <p class="m-p-three" @click="goitemb(item.id,item.state,item.kind)">￥{{item.money}}</p>
                       <p v-if="item.hasmprice=0" class="m-p-two">会员价{{mprice}}</p> 
                       <p v-else class="m-p-two"></p> 
                      <button class="m-button" @click="goitemb(item.id,item.state,item.kind)">商品详情>></button>
                    </td>
                  </tr>
                </table>
              </div>
            </van-tab>
            <van-tab title="版通仓库" name="b" id='sx' >
              <div class="m-abg">
                <div class="m-sbg">
                  <table class="m-table">
                    <tr>
                      <td colspan="2" class="m-line-one"> 
                        总常孝通(个) 
                        <br />
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="m-line-two">{{cxt.all}}</span>&nbsp; &nbsp; &nbsp; <span  style='color:blue;' @click='dtcxt()'> 解锁详情</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="m-line-three">
                        可转常孝通(个)
                        <br />
                        <span>{{cxt.value}}</span>
                      </td>
                      <td class="m-line-three">
                        今日常孝通(元/个)
                        <br />
                        <span>{{cxt.price}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="m-line-three">
                        锁定常孝通(个)
                        <br />
                        <span>{{cxt.lock}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <van-button type="default" class="m-button-one" @click='gowebfrom'>转入文交所</van-button>
                      </td>
                      <td>
                        <van-button type="default" class="m-button-two" @click="gocompany">交易入口</van-button>
                      </td>
                    </tr>
                  </table>
                  <div class="m-pa">
                    <br />
                    <p>
                      常孝通6个月锁定期后每天按照2‰的比例释放
                      <br />若在三级市场购买超过2500元的产品
                      <br />则按照每天4‰的比例释放
                    </p>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="商城" name="c" id='sx'>                            <!-- 三级市场 -->
              <div>
                  <div class='swiper'>
                    <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(img, index) in listbanner" :key="index" >
          <img v-lazy="img" />
        </van-swipe-item>
      </van-swipe>
                  </div>

                

               

                <van-row   v-for="(item,index) in sj" :key="index"  style="margin-top:0.5rem;text-align:center">
                  <van-col span="2"></van-col>
                  <van-col span="10">
                    <img :src="item.img|parseArr" class="m-imgs">
                  </van-col>
                  <van-col span="11">
                      <p class="m-p-one" @click="goproductc(item.id)" >{{item.name}}</p>
                      <p class="m-p-four" @click="goproductc(item.id)"><br>送个版通</p>
                      <p class="m-p-three" @click="goproductc(item.id)">￥</p>
                      <button class="m-button" @click="goproductc(item.id)">{{item.dex}}</button>
                  </van-col>
                  <van-col span="1"></van-col>
                </van-row>

              

              </div>
               
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    
  

    
   <!--   <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in barList" :key="index" replace :to="item.key" :icon="item.img">{{item.name}}</van-tabbar-item>
    </van-tabbar>  -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
     
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  
</template>

<script>
import { Button } from 'vant';
import { NavBar } from 'vant';
import Vue from 'vue'
 import global_ from '../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
    import marketcss from './market.css'
export default {
  data() {
    return {
      cxt:'',
      jfjf:'',
      listbanner:[],
      banner:'',
      token:'',
      value:'',
      active: 2,
      activeName: "c",
      activeTab:0,
      dataList:'',
      datat:'',
      dt:'',
      sj:'',
      // list: [],
      loading: false,   //是否处于加载状态
      finished: false,  //是否已加载完所有数据
      isLoading: false,   //是否处于下拉刷新状态
      barList:""
    };
  },
  created(){
    this.getcxt()
    this.getbanner()
    this.getDataList();
    this.getDataT();
    this.getDT();
    this.top();
    // this.getBar()
  },
     mounted(){
      
         window.setToken = (b) => {
           window.setToken
            this.setToken(b)
        }
            let winHeight = document.documentElement.clientHeight                          //视口大小
            // document.getElementById('list-content').style.height = (winHeight - 46) +'px'  //调整上拉加载框高度
        },
        filters: {
          
    
parseArr: function (arr) {
  let arrs = JSON.parse(arr);
      return arrs[0];
　　　　}
　　},
  methods: {
    dtcxt(){
     this.$router.push('/mycxtdetail')
    },
     buycxt(){
        /* this.$router.push({
          path:'/webitemb',
          query:{
             id:5
          }
        }) */
        this.$router.push('/jqqd')
       },
    onClick(name, title) {
      // this.$toast(title+"===="+name);
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

      this.$ajax.post('/cxt/base/rootMenus', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.barList=res.data.data
             console.log(this.barList)
         
        });
    },
    
     getcxt(){
      let _this = this;
      let data = {
       token:this.GLOBAL.token
      };
      this.cxt={
         stock:'',
         price:'',
         value:'',
         lock:'',
         all:'',
         count:''
      }

      this.$ajax.post('/cxt/account/stock/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.cxt=res.data.data
             console.log(this.cxt)
         
        });
    },
     setToken(b){
    this.GLOBAL.token=b
     },
    top() {
      window.scrollTo(0, 0);
    },
    getbanner(){
      let data = {
         token:this.GLOBAL.token
      };
      
      let _this = this;
          this.banner = [{
            
          }];
          
      this.$ajax.post('/cxt/banner/market', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data.data);
          this.banner=res.data.data
          let listb=[]
          for(let i =0;i<this.banner.length;i++){
            listb.push(this.banner[i].img)
          }
          this.listbanner=listb
          console.log(listb)
        });
    },
    getDataList(){
      let data = {
         token:this.GLOBAL.token
      };
      
      let _this = this;
          this.dataList = [{
            scorepay:false,
            name:'',
            money:'',
            role:'',
            id:'',
            state:'',
            img:''
          }];
          
      this.$ajax.post('/cxt/market/top', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.dataList=res.data.data
          console.log(this.dataList)
         
          console.log(res.data.data)
        });
    },
    getDataT(){
          let data = {
              token:this.GLOBAL.token
          };
          let _this =this;
         
          this.datat=[{
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
          }];
          this.$ajax.post('/cxt/market/third/assort/0', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          
          this.datat=res.data.data;
         
         
         
          // console.log(res.data.data);
        });
    },
    getDT(){
              let data ={
                  token:this.GLOBAL.token
              };
              let _this=this;
              this.sj=[{
            id:'',
            name:'',
            pid:'',
            state:'',
            img:"",
            images:'',
            ctime:'',
            money:'',
            assortid:'',
            score:'',
            stock:'',
            rscore:'',
            rstock:'',
            des:'',
              }];
               this.$ajax.post('/cxt/market/third/product', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 

          this.sj=res.data.data.data//是这里

      
          console.log(this.sj)
         
       
        });
    },
    parseArr(arr){
      return JSON.parse(arr)[0];
    },
    gowebfrom() {
      this.$router.push("/jqqd");
    },
    goitema() {
      this.$router.push("/webitema");
    },
    goitemb(id,state,kind) {
      console.log("商品id:"+id);
       console.log("商品state:"+state);
      
      this.$router.push({
        path:"/webitemb",
        query:{
          id:id,
          kind:kind
        }
      });
    },
     goproductc(id,state) {
      /*  this.$router.push({
        path:"/webproductc",
        query:{
          id:id
        }
      }); */
      this.$router.push('/jqqd')
    },
    goproductd(assortid) {
      
      let _this=this
      let data = {
          token:this.GLOBAL.token,
        assortid:assortid
      }
    
     
     
        this.$ajax.post('/cxt/market/third/product', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.sj=res.data.data;
          
        });

       this.$router.push({
        path:"/webproductd",
        query:{
          assortid:assortid,
         
          name:name,
         
        }
      });
      
    },
    search(value){
        let _this=this
        let data={
            token:this.GLOBAL.token,
             name:_this.value
        }
        this.sc=[
          {
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
        ]
          
      
          this.$ajax.post('/cxt/market/third/product', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          // this.sc=res.data.data;
          this.sj=res.data.data.data//是这里
          this.activeTab = 2;
          
        });
      //   this.$router.push({
      //   path:"/webproductd",
      //   query:{
         
      //     name:name,
         
      //   }
      // });
    },
    gocompany(){
      this.$router.push('/company')
    }
    
  
  },
    
};
</script>

<style lang="scss" scoped>
.swiper {
     width: 100%;
     height: 3.6rem;
  .van-swipe{
    width: 100%;
    height: 100%;
    }
  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}
  .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
}
}
</style>
<style scoped>
.swiper {
  width: 100%;
  height: 3.3rem;}
  .van-swipe {
    width: 100%;
    height: 100%;
  }
 .van-tabs__nav van-tabs__nav--line.van-tabs__wrap van-hairline--top-bottom  .van-ellipsis .van-tab{
  font-size:0.9rem;
}
.van-tab {
  font-size:0.9rem!important;
}
.m-p-l-one{
  font-size:0.3rem;
  float: left;
  margin-left: 0.05rem
}
.m-p-r-one{
  font-size:0.15rem;
  float: right;
  margin-right: 0.1rem
}
.m-p-l-two{
  font-size:0.15rem;
  float: left;
  margin-left: 0.05rem;
  color: #bcbcbc
}
.m-p-r-two{
  font-size:0.3rem;
  float: right;
  margin-right: 0.1rem;
  color: #00a2ff;
}

.header-left {
  float: left;
  width: 12%;
  font-size: 0.4rem;
  margin: 0.3rem 0.2rem 0.3rem 0.3rem;
}

.m-abg {
  position: relative;
  background-image: url("../../../static/img/market-sec-bg.png");
  height: 6.5rem;
}
.m-sbg {
  position: absolute;
  background: white;
  height: 6.5rem;
  width: 80%;
  margin: 0.5rem 10%;
  box-shadow: 2px 2px 2px #dddcdc;
  border-radius: 5px;
}

.m-table {
  font-size:.3rem;
  width: 100%;
  text-align: center;
  margin: 0.1rem 0;
  height: 6rem;
}

.m-line-one {
  font-size: 0.3rem;
  margin-top: 0.4rem;
}

.m-line-two {
 
  font-size: 0.4rem;
}

.m-line-three {
  font-size: 0.3rem;
}

.m-button-one {
  font-size: 0.3rem;
  margin-bottom: 0;
  color: #00a2ff;
  background-color: #edf8ff;
  border: none;
  width: 2.4rem
}

.m-button-two {
  font-size: 0.3rem;
  margin-bottom: 0;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 2.4rem
}

.m-pa {
  text-align: center;
  color: #9a9a9a;
  font-size: 0.1rem;
}

.m-img-ss{
  margin-left: 0.2rem
}
.m-table{
  width: 90%;
  margin: 0.3rem auto
}

.m-img{
  margin: 0.2rem;
  width: 89%;
}

.m-imgs{
  margin-right: 0.15rem;
  width: 92%;
  display: block;
  padding:1% 0
}

.m-imga{
  width: 100%;
  border-radius: 0.1rem
}

.m-p-one{
  width:80%;
  font-size: 0.3rem;
  text-align: left;
  text-overflow:ellipsis;/*设置超出部分显示...*/

}

.m-p-two{
  font-size: 0.3rem;
  margin: 0.1rem auto;
  color: #f3bc03;
  text-align: left;
}

.m-p-three{
  font-size: 0.4rem;
  color: #00a2ff;
  float: left;
}

.m-p-four{
  font-size: 0.2rem;
  margin: 2% auto;
  color: #9a9a9a;
  text-align: left;
}

.m-button{
  float: right;
  color: #bcbcbc;
}
.m-icon-text{
  font-size: 0.3rem
}
.m-a{
  width: 40%;
  margin: 0.21rem 
}
.m-b{
  width: 40%;
  margin: 0.28rem
}
.m-c{
  width: 40%;
  margin: 0.22rem 
}
.m-d{
  width: 40%;
  margin: 0.19rem   
}
.m-e{
  width: 20%;
  margin: 0.20rem 
}
.m-f{
  width: 50%;
  margin: 0.29rem
}
.m-g{
  width: 43%;
  margin: 0.24rem
}
.m-h{
  width: 36%;
  margin: 0.2rem
}

.m-left{
  border-radius: 0.1rem;
  box-shadow: 1px 1px 2px 2px #dddcdc;
  height: 2.4rem;
  margin-left:0.55rem;
  margin-right:0.1rem;
  padding-bottom: 0.05rem
}

.m-right{
  border-radius: 0.1rem;
  box-shadow: 1px 1px 2px 2px #dddcdc;
  height: 2.4rem;
  margin-right:0.55rem;
  margin-left:0.1rem;
  margin-bottom:0.1rem;
  padding-bottom: 0.05rem
}

.m-bg{
  padding-bottom: 0.5rem;
  background-color: white
}
</style>

