<template>
    <div>
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <van-nav-bar title="总资产" left-arrow @click-left="onClickLeft" class="mm-header"/>
        <div style="text-align:center;padding:0.6rem 0.8rem 0.6rem 0.6rem; background-color:#ededed">
            <div class="mm-p">
                <p>总资产（元）</p>
            </div>
            <!-- <van-list v-model="loading" :finished="finished" @load="onLoad"> -->
               <van-list  >
            <div>
                <img src="../../../../static/img/myswap_a.png" class="mm-img">
                <p class="mm-pp">
                    <span id="mm-s-a">{{tc.all}}</span>&nbsp;&nbsp;&nbsp;总资产（元）</p>
            </div>
            <van-row>
                <van-col span="8">
                    <p class="mm-p-a">法币</p>
                </van-col>
                <van-col span="16">
                    <span id="mm-s-b">{{tc.money}}</span> 
                </van-col>
            </van-row>
            <van-row style="margin-top:0.1rem">
                <van-col span="8">
                    <p class="mm-p-a">常孝通价值</p>
                </van-col>
                <van-col span="16">
                    <span id="mm-s-c">{{tc.stock}}</span> 
                </van-col>
            </van-row>
            <van-row style="margin-top:0.1rem">
                <van-col span="8">
                    <p class="mm-p-a">我的积分</p>
                </van-col>
                <van-col span="16">
                    <span id="mm-s-d">{{tc.score}}</span> 
                </van-col>
            </van-row> 
            <van-row style="margin-top:0.1rem">
                <van-col span="8">
                    <p class="mm-p-a">我的一卡通</p>
                </van-col>
                <van-col span="16">
                    <span id="mm-s-d">{{tc.card}}</span> 
                </van-col>
            </van-row>
            </van-list>
        <!-- <div class="qw">666</div> -->
        </div>
        <!-- </van-pull-refresh> -->
        <van-cell-group style=" padding:0.02rem 0.2rem">
            <van-cell title="我的法币" is-link style="font-size:0.3rem" icon="../../../static/img/myswap_k.png" @click="gomycoin"/>
            <van-cell title="我的常孝通" is-link style="font-size:0.3rem"  icon="../../../static/img/myswap_l.png" @click="gomycxt"/>
            <van-cell title="我的积分" is-link style="font-size:0.3rem"  icon="../../../static/img/myswap_m.png" @click="gomypoints"/>
             <van-cell title="我的一卡通" is-link style="font-size:0.3rem"  icon="../../../static/img/one.png" @click="gomycard"/>
        </van-cell-group>
    </div>
</template>
<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
  /*  import { Toast } from 'vant'; 
import { PullRefresh,List  } from 'vant'; */
 
export default {
    data(){
        return{
            f:'',
            tc:'',
            token:'',
        /*  deviceList: [],//用于存放加载的数据
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false, *///控制下拉刷新的加载动画

        }
    },
    created(){
        this.setcolors();
        this.getDataList();
        
    },
   
    methods: {
         setcolors(){
     
    if(this.GLOBAL.systemName==='android'){
        console.log(this.GLOBAL.systemName);
         var obj = $(".qw");
        obj.text(this.GLOBAL.systemName);
        console.log('android')
       window.android.setStatusBarColor("#00a2ff");
    }
    if(this.GLOBAL.systemName==='ios'){
       var obj = $(".test");
       obj.text('ios');
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#00a2ff");
    }
    },
    setcolert(){
         var obj = $(".qw");
        obj.text(this.GLOBAL.systemName);
    if(this.GLOBAL.systemName==='android'){
        console.log('android')
       window.android.setStatusBarColor("#ededed");
    }
    if(this.GLOBAL.systemName==='ios'){
      //  var obj = $(".test");
      //  obj.text(this.GLOBAL.systemName);
        console.log('ios')
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#ededed");
    }
    },
        /*   setcoler(){
      setStatusBarFontColor("WHITE");
      setStatusBarColor('#BCBCBC');

    }, */
         getDataList(){
           
      let data = {
         
       token:this.GLOBAL.token
      };
      
   
    console.log(data)
      let _this = this;
          this.tc = [{
          money:'',
          score:'',
          stock:'',
           all:'' 
        
          }];
          
      this.$ajax.post('/cxt/user/getBalance', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
      
          this.tc=res.data.data
          
         
          
        });
    },
       onClickLeft(){
           this.$router.back('/myswap')
       },
       gomycoin(){
           this.$router.push('/mycoin')
       },
       gomycxt(){
           this.$router.push('/mycxt')
       },
       gomypoints(){
           this.$router.push('/mypoints')
       },
       gomycard(){
           this.$router.push('/mygeneral')
       },
        /* init() {

            let data = {
                 token:this.GLOBAL.token
            };
            let self = this;
            this.$ajax.post('/cxt/user/getBalance', self.$qs.stringify(data), {
          headers: self.Base.initAjaxHeader(1, data)
        }).then(res => {
            if(res.data.state==='001'){
                console.log(res.data.msg);
                self.isLoading = false; //关闭下拉刷新效果
            }else{
                
                // self.deviceList = res.data.info.list;
                // self.totalPage = res.data.info.totalPage;
                self.tc = res.data.data;
                console.log('awdd');
                self.isLoading = false; //关闭下拉刷新效果
            }
            });
        },
 */

         //下拉刷新
       /*  onRefresh() {
            let self = this;
            setTimeout(() => {
                self.totalPage = 0;
                self.pageNumber = 0;
                self.init(); //加载数据
            }, 500);
        }, */
        //页面初始化之后会触发一次，在页面往下加载的过程中会多次调用【上拉加载】
      /*   onLoad() {
            let self = this;
            setTimeout(() => {
                let data = {
                     token:this.GLOBAL.token
                };
                this.$ajax.post('/cxt/user/getBalance', self.$qs.stringify(data), {
          headers: self.Base.initAjaxHeader(1, data)
        }).then(res => {
            console.log(res);
            if(res.data.state==='001'){
                console.log(res.msg);
                    self.loading = false;
                        self.finished = true;
            }else{
                
                    self.tc = res.data.data;
                    // self.deviceList = self.deviceList.concat(re.info.list);
                    self.loading = false;
                    
                        self.finished = true;
                     self.pageNumber++;
                    if (self.pageNumber >= self.totalPage) {
                        self.finished = true;
                    }
            }
                });
            }, 500);
        } */
    },
     
    destroyed(){
      this.setcolert()
  }
}
    

</script>
 <style scoped>
 .mm-header{
     background-color:#00a2ff;
 }
 .van-nav-bar__title {
 color:white;
 font-size: 0.35rem
 }

 .van-nav-bar .van-icon {
    color: white;
    font-size: 0.4rem
}

.mm-img{
    width: 15%;
    height: 15%
}

.mm-p{
    text-align: left;
    font-size: 0.3rem;
    margin-bottom: 0.2rem
}

.mm-pp{
    font-size: 0.3rem;
    color: #9a9a9a;
    margin: 0.2rem 0 0.8rem 35%
}

#mm-s-a{
    font-size: 0.5rem;
    color:black;
}

#mm-s-b{
    font-size: 0.25rem;
    color: #9a9a9a;
    float: left;
}

#mm-s-c{
    font-size: 0.25rem;
    color: #9a9a9a;
    float: left;
}

#mm-s-d{
    font-size: 0.25rem;
    color: #9a9a9a;
    float: left;
}

.mm-p-a{
    font-size: 0.25rem;
    color: #9a9a9a;
    float: left;
}

.van-cell__left-icon {
    min-width: 1.5em;
    height: 0.5rem;
    font-size: 0.4rem;
    margin-top: 0.01rem
}
</style>
 