<template>
  <div class="s-bg">
    <van-nav-bar title="我的信息" left-arrow @click-left="onClickLeft" style="background-color:#ededed; height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 10;
  
  width: 100%;"/>
    <img src="../../../../static/img/myimg.png" class="s-img" />
    <van-cell v-model="tel" class="s-cell" />
    <van-tabs v-model="active" animated color="#00a2ff">
      <van-tab title="我的产品">
       
       

  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>

  <van-cell v-for="(item,index) in listss" :key="index" :title="item.pname" :value="item.money" :label="item.stime" icon=""/>
</van-list>
<!-- </div> -->
      </van-tab>
      <van-tab title="我的组织">
        
  
  
          <div class="s-l"  v-for="(item,index) in rolelist.subs" :key="index">
            

           
              <van-row>
              <van-col span='17'>  <van-cell>
             
              {{item.levelName}}
            </van-cell></van-col>
              <van-col span='7'>
                 <button class="s-btn" @click="goa(item.level,item.levelName)">查看全部（<span>{{item.count}}</span>）</button>
            </van-col>
              
            </van-row>
               <van-cell  v-for="(items,indexs) in item.levelUsers" :key="indexs" :title="items.name" :value="items.tel" style="text-align:right">
               </van-cell>
           
    
             
        
          
           
            
          </div>
  
        
        
        
      </van-tab>
    </van-tabs>
  </div>
</template>
 <script>
 import { Toast } from 'vant'; 
import { PullRefresh,List  } from 'vant';
import MescrollVue from 'mescroll.js/mescroll.vue'
import Vue from 'vue'
 import global_ from '../../global'//引用文件
Vue.use(List);
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
   components: {
			    MescrollVue // 注册mescroll组件
			  },
  data() {
    return {
      usertoken:'',
      rolelist:[],
      lists_:'',
      list:[],
       token:"",
       
       loading: false,
      finished: false,

      
       loading_: false,
      finished_: false,

            nodata_:false,
      
        
			      dataList: [], // 列表数据
      
      listss:[],
    
     deviceList: [],//用于存放加载的数据
            totalPage: 0,
            pageNumber: 1,
            pageNumber_:0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false, ///控制下拉刷新的加载动画
            nodata:false,
       token:'',
      tel: "",
      active: 2,
       // 可以自定义，必填项。
            value1: '../../../../static/img/myimg.png',
            value2: '../../../../static/img/myimg.png',
            value3: '../../../../static/img/myimg.png',
            value4: '../../../../static/img/myimg.png',
            value5: 'http://lxchuan12.github.io/',
            // 二维码大小 默认 100
            size: 50,
            // 背景透明度，默认透明 0 
            backgroundAlpha:1,
    };
  },
  created(){
   
    // this.getDataList()
     this.getDataListm()
     this.getrelationlist()
  },
  
    
  methods: {
     onLoad() {
        setTimeout(() => {
      console.log('adaw');
      // 异步更新数据
     let data ={
                   token:this.GLOBAL.token,
                  // usertoken: localStorage.getItem('token'),
                  	page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					          size: 20
              };
              console.log(data.page)
              let _this=this;
              this.uplists=[{
                 pname:'',
                 stime:'',
                 money:''
              }];
               this.$ajax.post('/cxt/market/top/deals', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
          if (res.data.state === "000"){
            if (res.data.data.list.length > 0) {
              for(let i = 0 ; i<res.data.data.list.length;i++){
                _this.listss.push(res.data.data.list[i])
              }
               
               if (_this.listss.length != this.size * this.page) {
                 console.log(this.page)
              _this.finished = true;
              _this.loading = false;
            } else {
              _this.page++;
              _this.loading = false;
            }
               /* if(arr&&arr.length>0){
                 _this.pageNumber++;
               }else{
               console.log('no_data!!');
               arr = [];
                 _this.nodata = true;
               }
			      
        
              _this.listss = _this.listss.concat(arr)
              // 加载状态结束
              this.loading = false; */

              // 数据全部加载完成
              // if (this.list.length >= 40) {
                if (_this.nodata) {
                this.finished = true;
              }
          }
          }   
        });

     }, 500);
    },
    onLoad_() {
      console.log('adaw');
      // 异步更新数据
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }


               let data = {
          token:this.GLOBAL.token,
       
      };
     console.log(data.code)
     
      let _this = this;
        //  this.rolelist=[{

        //  }]
         console.log(this.rolelist)
      this.$ajax.post('/cxt/relation/selfChain', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
        
        //  this.rolelist=res.data.data
let arr = res.data.data.subs;
        // this.rolelist=res.data.data
    // console.log(this.rolelist);
    // let arr = _this.uplists
               console.log(arr);
               if(arr&&arr.length>0){
                 _this.pageNumber_++;
               }else{
               console.log('no_data!!');
               arr = [];
                 _this.nodata_ = true;
               }
			      
        
              _this.rolelist = _this.rolelist.concat(arr)
              // 加载状态结束
         console.log( _this.rolelist)
              this.loading_ = false;

              // 数据全部加载完成
              // if (this.list.length >= 40) {
                if (_this.nodata_) {
                this.finished_ = true;
              }
           
        });
               

      }, 500);
    },
   
    mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
          },
       
			 
           getrelationlist(){
          let data = {
          token:this.GLOBAL.token,
       
      };
     console.log(data.code)
     
      let _this = this;
         this.rolelist=[{

         }]
         console.log(this.rolelist)
      this.$ajax.post('/cxt/relation/selfChain', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
        
        //  this.rolelist=res.data.data

        this.rolelist=res.data.data
    console.log(this.rolelist)
           
        });
    },
   getDataListm(){

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
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
           this.r=res.data.data.role
           console.log(this.tc)
        
           
        });
    },
    getDataList(){
      let data = {
        //  token:this.GLOBAL.token,
        token: localStorage.getItem('token'),
         page:0,
         size:''
      };
      let _this = this;
          this.lists = {
         pname:'666666',
         stime:'666',
         money:'66'
            
        
          };
         console.log(localStorage.getItem('token'));
      this.$ajax.get('/cxt/market/top/deals', _this.$qs.stringify({
        token: localStorage.getItem('token'),
         page:0,
         size:20
      }), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
         
         this.lists=res.data.data
        console.log(this.lists)
           
        });
    },
    onClickLeft() {
      this.$router.back("/myswap");
    },
    goa(level,levelName){
      this.$router.push({
        path:'/vipmember',
        query:{
         level:level,
         name:levelName
        }
       
      }); console.log(query)

    },
    gob(){
      this.$router.push("/commonmember");
    },
    goc(){
      this.$router.push("/codea");
    },
    god(){
      this.$router.push("/hermessage");
    }
  }
};
</script>
 
 <style scoped>
 /* .mescroll{
   margin-bottom:2rem;
 } */
 .s-bg{
  padding-bottom: 1rem;
  background-color: white
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
.s-img {
  width: 20%;
  margin: 1.2rem 40% 0.5rem 40%;
}
.s-cell {
  padding-left:40%;
  padding-bottom: 0.3rem;
}
.left {
  float: left;
  width: 28%;
}
.mid {
  float: left;
  width: 47%;
}
.right {
  float: right;
  width: 25%;
}

.s-l {
  width: 100%;
  float: left;
}

.s-img-s {
  width: 50%;
  margin: 0.15rem 0.15rem 0.15rem 0.7rem;
}

.s-img-b {
  width: 70%;
  margin: 0 0.15rem 0 0.4rem;
}

.s-p{
  color: #00a2ff;
  font-size:0.4rem;
  
  margin: 0.1rem 0 0.1rem 0.3rem
}

.s-btn{
  color: #9a9a9a;
  margin: 0.25rem ;
  font-size:0.15rem 0.25rem;
}
</style>
 