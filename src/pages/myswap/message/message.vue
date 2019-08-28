<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">通知消息</van-col>
      <van-col span="2"></van-col>
    </van-row> 
    <div id="mescroll" class="mescroll">  
        <!-- //id可以改,而"mescroll"的class不能删 -->
   <mescroll-vue ref="mescroll" :up="mescrollUp"  @init="mescrollInit">
      <!-- <van-cell v-for="(item,index) in lists" :key="index" :title="item.title" :value="item.ctime" :label="item.message" icon="../../../../static/img/icon_bell.png"/> -->
      <van-cell v-for="(item,index) in lists" :key="index" :title="item.title" :value="item.ctime" :label="item.message" icon=""/>
			    </mescroll-vue>
          <div id="xxid"></div>
  
</div>
    
  </div>
</template>

<script>
  import { Toast } from 'vant'; 
import { PullRefresh,List  } from 'vant';
import MescrollVue from 'mescroll.js/mescroll.vue'
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  components: {
			    MescrollVue // 注册mescroll组件
			  },
  data() {
    return {
      token:"",
      mescroll: null, // mescroll实例对象
			     
			      mescrollUp: { // 上拉加载的配置.
			        callback: this.upCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
			        //以下是一些常用的配置,当然不写也可以的.
				page: {
					num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					size: 20 //每页数据条数,默认10
				},
				htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
						// /* 	避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
						// 	这就是为什么无更多数据有时候不显示的原因 */
				toTop: {
					//回到顶部按钮
					src: "./static/img/mescroll-totop.png", //图片路径,默认null,支持网络图
					offset: 1000 //列表滚动1000px才显示回到顶部按钮
				},
				empty: {
					//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
					warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
					icon: "./static/img/mescroll-empty.png", //图标,默认null,支持网络图
					tip: "暂无相关数据~" //提示
				}
            },
            mescrollDown:{
              // 上拉加载的配置.
			        callback: this.downCallback, // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
              //以下是一些常用的配置,当然不写也可以的.
              use: true, //是否初始化下拉刷新; 默认true
        auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
        autoShowLoading: true, //如果在初始化完毕之后自动执行下拉回调,是否显示下拉刷新进度; 默认false
        isLock: false, //是否锁定下拉,默认false;
        isBoth: false, //下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认false,两者不可同时触发;
        offset: 60, //触发刷新的距离,默认80
        outOffsetRate: 0.2, //超过指定距离范围外时,改变下拉区域高度比例;小于1,越往下拉高度变化越小;
        // mustToTop: !isIOS, //是否列表必须滑动到顶部才能下拉;因为列表回弹效果(-webkit-overflow-scrolling:touch)是iOS专属样式,所以iOS默认false,其他为true;
        hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.min.css
        warpClass: "mescroll-downwarp", //容器,装载布局内容,参见mescroll.min.css
        resetClass: "mescroll-downwarp-reset", //高度重置的动画,参见mescroll.min.css
        htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新</p>', //布局内容
        inited: function(mescroll, downwarp) {
          console.log("down --> inited");
          //初始化完毕的回调,可缓存dom
          mescroll.downTipDom = downwarp.getElementsByClassName("downwarp-tip")[0];
          mescroll.downProgressDom = downwarp.getElementsByClassName("downwarp-progress")[0];
        },
        inOffset: function(mescroll) {
          console.log("down --> inOffset");
          //进入指定距离offset范围内那一刻的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "下拉刷新";
          if(mescroll.downProgressDom) mescroll.downProgressDom.classList.remove("mescroll-rotate");
        },
        outOffset: function(mescroll) {
          console.log("down --> outOffset");
          //下拉超过指定距离offset那一刻的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "释放更新";
        },
        onMoving: function(mescroll, rate, downHight) {
          //下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离offset的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
          console.log("down --> onMoving --> mescroll.optDown.offset="+mescroll.optDown.offset+", downHight="+downHight+", rate="+rate);
          if(mescroll.downProgressDom) {
            var progress = 360 * rate;
            mescroll.downProgressDom.style.webkitTransform = "rotate(" + progress + "deg)";
            mescroll.downProgressDom.style.transform = "rotate(" + progress + "deg)";
          }
        },
        beforeLoading: function(mescroll, downwarp) {
          console.log("down --> beforeLoading");
          //准备触发下拉刷新的回调
          return false; //如果要完全自定义下拉刷新,那么return true,此时将不再执行showLoading(),callback();
        },
        showLoading: function(mescroll) {
          console.log("down --> showLoading");
          //触发下拉刷新的回调
          if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "加载中 ...";
          if(mescroll.downProgressDom) mescroll.downProgressDom.classList.add("mescroll-rotate");
        }
      // },
				// page: {
				// 	num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
				// 	size: 10 //每页数据条数,默认10
				// },
				// htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
				// noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
				// 		// /* 	避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
				// 		// 	这就是为什么无更多数据有时候不显示的原因 */
				// toTop: {
				// 	//回到顶部按钮
				// 	src: "./static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
				// 	offset: 1000 //列表滚动1000px才显示回到顶部按钮
				// },
				// empty: {
				// 	//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
				// 	warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
				// 	icon: "./static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
				// 	tip: "暂无相关数据~" //提示
				// }
            },
			      dataList: [], // 列表数据
      lists:[{
      title:'',
      ctime:'',
      message:''
      },],
    
     deviceList: [],//用于存放加载的数据
            totalPage: 0,
            pageNumber: 0,
            loading: false,//控制上拉加载的加载动画
            finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
            isLoading: false, ///控制下拉刷新的加载动画
            nodata:false
    };
  },
   created(){
   
    this.getDataList()
  },
  methods: {
    mescrollInit (mescroll) {
			      this.mescroll = mescroll  // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
          },
      
			    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
			  
          // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
           downCallback (mescroll) {
            console.log(mescroll);
               let data ={
                  token:this.GLOBAL.token,
                  	page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					          size: 20
              };
              let _this=this;
              this.downlists=[{
                title:'',
               message:'',
                ctime:''
              }];
               this.$ajax.post('/cxt/notice/list', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
              _this.downlists=res.data.data.list;
              
               let arr = _this.downlists
               if(arr.length>0){
                 _this.pageNumber++;
               }else{
                 _this.nodata = true;
               }
			  
              if(_this.nodata){
			        _this.$nextTick(() => {
              // console.log(mescroll);
			          mescroll.endSuccess(arr.length,true);
			        })
                return
              }
              console.log(arr);
              _this.lists = _this.lists.concat(arr)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        _this.$nextTick(() => {
              // console.log(mescroll);
			          mescroll.endSuccess(arr.length,true);
			        })
        
        });
			      
			    },
			    upCallback (page,mescroll) {
               let data ={
                  token:this.GLOBAL.token,
                  	page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					          pagesize: 10
              };
              let _this=this;
              this.uplists=[{
                title:'',
               message:'',
                ctime:''
              }];
               this.$ajax.post('/cxt/notice/list', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
              _this.uplists=res.data.data.list;
              
               let arr = _this.uplists
               if(arr.length>0){
                 _this.pageNumber++;
               }else{
                 _this.nodata = true;
               }
			      
              if(_this.nodata){
                 mescroll.endSuccess(arr.length,true);
                 return;
              }
              console.log(arr);
              _this.lists = _this.lists.concat(arr)
			        // 数据渲染成功后,隐藏下拉刷新的状态
			        _this.$nextTick(() => {
              // console.log(mescroll);
			          mescroll.endSuccess(arr.length,true);
			        })
        
        });
			   
			    },
   
    goback(){
      this.$router.back('/myswap')
    },
     getDataList(){

      let data = {
         token:this.GLOBAL.token,
         page:1,
         pagesize:10
      };
     
     
      let _this = this;
          this.lists =[{
         
         title:'',
         message:'',
         ctime:''
            
        
          }] 
         
      this.$ajax.post('/cxt/notice/list', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          this.lists=res.data.data.list
          console.log(res.data.data)
         
        
           
        });
    },
  }
};
</script>

<style scoped>
/*通过fixed固定mescroll的高度*/
			  .mescroll {
			    position: fixed;
			    top: 44px;
			    bottom: 0;
			    height: auto;
			  }
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-img-s{
    width: 45%;
    margin:0.5rem 0 0 0.5rem
}

.van-cell__left-icon {
    min-width: 1.5em;
    height: 0.7rem;
    font-size: 0.6rem;
    margin-top: 0.2rem
}
</style>
