<template>
  <div class="index">
     <!-- <van-row class="ss-header">
<van-col span="2">
</van-col>
<van-col span="20" style="text-align:center">网站</van-col>
<van-col span="2"></van-col>
</van-row> -->
    <div class="swiper" >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <hr style="background: #a09e9e; border: none; height: 0.2rem;" />
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in barList" :key="index" replace :to="item.key" :icon="item.img">{{item.name}}</van-tabbar-item>
    </van-tabbar>  -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
     
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar> 
    <div class="m-bg-a">  <!-- 此处放flash -->
      <!-- <video src="http://47.103.100.232:8085/fwtkhtml/27106ba440f6e93e3918cbcbf270ded7.mp4"  autoplay='autoplay' controls="controls" height="100%" width="100%" webkit-playsinline></video> -->
        <video src="https://app.cxtx.info/fwtkhtml/27106ba440f6e93e3918cbcbf270ded7.mp4"  autoplay='autoplay' controls="controls" height="100%" width="100%" webkit-playsinline></video>
    </div>
    <div class="m-bg-b">
     
          <div class="list_box">
            <div class="c_c container" @click="goxdy">
              <p class="m-p">蓼莪山旅游</p>
            </div>
          </div>


          <div class="list_box">
            <div class="c_c container" @click="goxdsquere">
              <p class="m-p">孝行天下</p>
            </div>
          </div>
      
      
          <div class="list_box">
            <div class="c_c container" @click="gocxt">
              <p class="m-p">常孝股份</p>
            </div>
          </div>
      
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import Vue from 'vue'
 import global_ from '../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
// import popCom from '@/components/popout';
export default {
  data() {
    return {
      active: 1,
      images: [
        "../../../static/img/lbb.png",
        "../../../static/img/lbe.png",
        "../../../static/img/lbd.png",
        "../../../static/img/lba.png",
        "../../../static/img/lbf.png",
        "../../../static/img/lbc.png"
      ],
      // barList:''
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.setcoler()
    // window.addEventListener('scroll', this.scrollBottom);
    // let sourceCode = this.$route.params.sourceCode;
    // if(sourceCode == 'ios_qianjinjin') {
    //     localStorage.setItem('sourceCode_qianjinjin',sourceCode);
    // } else if(sourceCode == 'ios_renrendai'){
    //     localStorage.setItem('sourceCode_renrendai',sourceCode);
    // }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.top()
      this.getBar();
    // document.body.scrollTop = 200+'px';
    // console.log(111);
  },
  beforeMount() {
    // this.getList();
    // //通过token获取用户默认信息
    // if(localStorage.getItem('_token')) {
    //     this.Base.interactiveWithApp('getCertifyInfo',{
    //         token : localStorage.getItem('_token'),
    //         certifyInfo : ['locationInfo','deviceInfo','allInstallAppInfo']
    //     }).then(data=>{
    //         if(data == 'wap') {
    //             console.log('getCertifyInfo','wap');
    //         } else {
    //             console.log('getCertifyInfo',data);
    //         }
    //     });
    // }
  },
   filters: {
          
    
parseArr: function (arr) {
  let arrs = JSON.parse(arr);
      return arrs[0];
　　　　}
　　},
  methods: {
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
    setcoler(){
             console.log(this.GLOBAL.systemName)
    if(this.GLOBAL.systemName==='android'){
       
       window.android.setStatusBarColor("#ededed");
    }
    if(this.GLOBAL.systemName==='ios'){
  
       window.webkit.messageHandlers.setStatusBarColor.postMessage("#ededed");
    }
      // setStatusBarFontColor(BLACK);
      // setStatusBarColor(GRAY);

    },
    top() {
      window.scrollTo(0, 0);
    },
    goxdy() {
      this.$router.push("/webhost");
    },
    goxdsquere() {
      this.$router.push("/webcxt");
    },
    gocxt() {
      this.$router.push("/webs");
    },
    toCalendar() {
      this.$router.push({
        name: "calendar"
      });
    },
    tabSwitch() {
      if (this.tab_ == 1) {
        this.tab_ = 2;
      } else {
        this.tab_ = 1;
      }
    },
    //滚动底部方法
    scrollBottom() {
      var sTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.pageNum <= this.totalPage) {
        if (
          window.screen.height + sTop >= document.body.clientHeight &&
          !this.isLoading
        ) {
          this.isLoading = true;
          this.getList();
        } else {
          this.isShowListTips = true;
        }
      }
    },
    //滚动公告
    showMarquee(_this, num) {
      _this.carouseList.push(_this.carouseList[0]);
      var max = _this.carouseList.length;
      var that = _this;
      let h = document.getElementById("getH").offsetHeight;
      var marqueetimer = setInterval(function() {
        num++;
        if (num >= max) {
          num = 0;
        }
        that.num = num * h;
      }, 3000);
    },
    //获取列表数据
    getList() {
      let _this = this;
      let data = {
        pageNum: this.pageNum,
        type: this.type
      };

      this.$ajax
        .get(this.apiPath.index, _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.bannerList = res.data.data;
          this.bannerList_ = res.data.data;
          console.log(res.data.data);
          // let result = res.data;
          // if(result.status == 0 || result.status == -100 || result.status == -9) {
          //     //首页只展示十条数据，不用分页
          //     //_this.totalPage = result.result.pageEntity.totalPage;
          //     _this.bannerList = result.result.bannerList;
          //     _this.carouseList = result.result.carouseList;
          //     _this.showMarquee(_this,0);
          //     if(_this.pageNum > _this.totalPage) {

          //     } else {
          //         _this.listData = [ ..._this.listData, ...result.result.list ];
          //     }
          //     _this.pageNum += 1;
          // } else {
          //     _this.$msg({ content : result.msg });
          // }
          // _this.isShowLoading = false;
          // _this.isLoading = false;
          // //解决一个问题，ios返回莫名出现遮罩层
          // window.scrollTo(0,1);
          // window.scrollTo(0,0);
        });
    },
    //跳转平台详情页面
    goPlatformDetail(id) {
      this.$router.push({
        name: "PlatformDetail",
        params: {
          id: id
        }
      });
    },
    //跳转分类列表
    goClassification(type) {
      this.$router.push({
        name: "Classification",
        params: {
          class: type
        }
      });
    },
    //banner跳转到第三方平台
    bannerHref(url) {
      /*  if (url.length > 0) {
          this.Base.interactiveWithApp('openNewWindow', {
            url: url,
            title: '人人贷款',
            startColor: "#6A5CF6",
            endColor: "#8BE2F1",
            backUrl: '回到人人贷款'
          }).then(data => {
            if (data == 'wap') {
              console.log('openNewWindow', 'wap');
              this.Base.setIframePageInfo(this, {
                url: url,
                title: '人人贷款'
              });
            } else {
              console.log('openNewWindow', data);
            }
          });
        } */
    },
    //banner跳转
    bannerLink(img) {
      /*  this.$router.push({
          name: 'detail'
        }); */
      // this.getUserInfo().then(data=>{
      //     let obj = {
      //         bannerId : img.bannerId
      //     };
      //     //有登录态判断
      //     if(data == 0) {
      //         let _this = this;
      //         _this.$ajax.post(_this.apiPath.bannerPv,_this.$qs.stringify(obj),{
      //             headers : this.Base.initAjaxHeader(1,obj)
      //         }).then(res=>{
      //             if(res.data.status == 0) {
      //                 //type 1 活动页面；2 第三方平台页面
      //                 let type = img.type;
      //                 if(type == 1) {
      //                     location.href = img.url;
      //                 } else if(type == 2) {
      //                    _this.bannerHref(img.url);
      //                 }
      //             } else {
      //                 _this.$msg({ content : res.msg });
      //             }
      //         });
      //     }
      // });
    },
    /*  getUserInfo(item) {
        if (!localStorage.getItem('_token')) {
          this.$router.push({
            name: 'Login'
          });
          return;
        }
        //统计浏览足迹
        //this.userOperate(item.platformNo);
        let _this = this;
        return new Promise((resolve, reject) => {
          this.$ajax.post(_this.apiPath.user, _this.$qs.stringify({}), {
            headers: _this.Base.initAjaxHeader(1, {})
          }).then(res => {
            let result = res.data;
            resolve(result.status);
            if (result.status == 0) {} else if (result.status == '-9') {
              _this.$router.push({
                name: 'AuthBase'
              });
            } else if (result.status == '-100') {
              _this.$msg({
                content: result.msg
              });
              setTimeout(_ => {
                _this.$router.push({
                  name: 'Login'
                });
              }, 1800);
            } else {
              _this.$msg({
                content: result.msg
              });
            }
          });
        });
      }, */
    toLoan() {
      this.$router.push({
        name: "Loan"
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("scrollTop")) {
      setTimeout(_ => {
        window.scrollTo(0, localStorage.getItem("scrollTop") - 0);
        localStorage.removeItem("scrollTop");
      }, 100);
    }
    next();
  },
  beforeRouteLeave(to, from, next) {
    //去详情页之前记录当前页面滚动位置
    if (to.name == "PlatformDetail") {
      var sTop = document.documentElement.scrollTop || document.body.scrollTop;
      localStorage.setItem("scrollTop", sTop);
    }
    next();
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 4rem;
  .van-swipe {
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

.c_c {
  display: flex;
  justify-content: center;
  align-items: Center;
}
.index {
  // padding-top:4.54rem;
  background: #fff;
  // padding-bottom: 2rem;
  // padding-bottom:.97rem;
  // padding-top: .3rem;
  height: 100%;
  // box-sizing: border-box;
  .list_box {
    width: 29.3%;
    height:1.2rem;
    box-sizing: border-box;
    padding: 0.1rem 0.1rem;
    float: left;
    margin-left: 3%;
    

    .container {
      /* width: 100%; */
      height: 100%;
      border: 1px solid #ccc;
      border-radius: 0.1rem;
      background-image: url("../../../static/img/bg-y.png");
    }
  }
  .swiper-container {
    height: 9rem;
    width: 90%;
    margin: 0 auto;
  }

  .active_tab {
    color: #222222;
    border-bottom: 5px solid #ff800e;
  }

  .swiper-slide {
    height: 9rem;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }

  .banner {
    // position:fixed;
    // top:1.3rem;
    // width:100%;
    // left:0;
    // z-index:100;
    width: 90%;
    margin: 0 auto;
    border: 1px solid #e5e5e5;
    border-radius: 0.1rem;
    height: 7.3rem;
    // background:url(../assets/loading.gif) center center no-repeat;
    background-size: 0.32rem 0.32rem;

    // margin-top:1.285rem;
    .swiper-container {
      height: 7.3rem;
    }

    .swiper-slide {
      height: 7.3rem;
    }

    .swiper-pagination {
      bottom: 0.1rem;
    }
  }

  .floor2 {
    //平台分类
    .fire_box {
      position: relative;
    }

    .fire {
      position: absolute;
      top: 0.1rem;
      right: 0.18rem;
      width: 0.46rem;
      height: 0.3rem;
    }

    .class {
      width: 6.96rem;
      border-bottom: 1px solid #ededed;
      margin: auto;

      dl {
        float: left;
        width: 1.435rem;
        padding-top: 0.23rem;
        padding-bottom: 0.35rem;

        dt {
          width: 0.9rem;
          height: 0.95rem;
          margin: auto;
          border-radius: 0.1rem;
          overflow: hideen;
        }

        dd {
          text-align: center;
        }
      }

      dl:nth-child(2) {
        padding-left: 0.4rem;
      }

      dl:nth-child(3) {
        padding-left: 0.4rem;
        padding-right: 0.4rem;
      }
    }

    //消息提示
    .tips {
      // top:4rem;
      // width:100%;
      // left:0;
      background: #fff;
      z-index: 20;

      .notices {
        height: 0.7rem;
        padding: 0 0.3rem;
        display: flex;
        align-items: center;

        div:nth-child(1) {
          width: 1.27rem;
          height: 0.3rem;
          // background:url(../assets/tips1.png) no-repeat;
          background-size: 1.27rem 0.3rem;
          margin-right: 0.06rem;
        }

        div:nth-child(2) {
          height: 27px;
          width: 5.6rem;
          overflow: hidden;

          ul {
            li {
              line-height: 27px;
              height: 27px;
              padding-left: 0.15rem;
              overflow: hidden;
              color: #3e475d;
              font-size: 0.26rem;
            }
          }
        }

        .marquee_list {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        .marquee_top {
          transition: top 0.5s;
        }
      }
    }
  }

  .list {
    padding-bottom: 0.1rem;
    border-top: 0.2rem solid #f5f5f5;

    .title {
      height: 0.88rem;
      width: 6.9rem;
      margin: auto;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

      // span:nth-child(1){
      //     width:.08rem;
      //     height:.25rem;
      //     background:#527BEC;
      // }
      span:nth-child(1) {
        font-size: 0.32rem;
      }

      span:nth-child(2) {
        font-size: 0.28rem;
        color: #a8aab2;
        margin-left: auto;
        padding-right: 0.25rem;
        // background:url(../assets/my_arrow.png) right center no-repeat;
        background-size: 0.12rem 0.22rem;
      }
    }

    .getMore {
      text-align: center;
    }
  }

  .screen_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 51;
    top: 0;
    bottom: 0;

    .contain {
      background: #fff;
      width: 100%;
      top: 2.08rem;
      left: 0;
      position: absolute;
    }

    //推荐排序
    .tjpx {
      ul {
        padding-left: 0.3rem;

        li {
          border-bottom: 1px solid #e6e6e6;
          line-height: 0.88rem;
          font-weight: 400;
        }

        li:last-child {
          border: none;
        }

        li.cur {
          color: #507def;
        }
      }
    }

    //贷款类型
    .dklx {
      padding-bottom: 0.3rem;

      a {
        float: left;
        width: 2.05rem;
        line-height: 0.66rem;
        text-align: center;
        border: 1px solid #e6e6e6;
        border-radius: 0.08rem;
        margin: 0.3rem 0 0 0.3rem;
      }

      a.cur {
        border-color: #507def;
        color: #507def;
      }
    }
  }
}
</style>
<style scoped>
.m-p {
  font-size: 0.25rem;
  font-weight: bolder;
}
.m-bg-a {
  background-image: url("../../../static/img/bg.png");
  height: 4rem;
  padding-bottom: 0.1rem;
  padding-top: 0.5rem;
  
  margin: 0.2rem 0.3rem 0.1rem 0.3rem
}
.m-bg-b {
  background-image: url("../../../static/img/bg.png");
  padding-bottom: 1rem;
  padding-top: 0.2rem;
}
.banner .swiper-pagination .swiper-pagination-bullet {
  /* background:url(../assets/swiper-pagination-bulle.png); */
  width: 0.09rem;
  height: 0.04rem;
  opacity: 1;
  background-size: 0.09rem 0.04rem;
}

.banner .swiper-pagination .swiper-pagination-bullet-active {
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  /* background:url(../assets/swiper-pagination-bullet-active.png); */
  background-size: 0.12rem 0.12rem;
  position: relative;
  top: 0.05rem;
}
.ss-header {
height: 1rem;
line-height: 1rem;
color: rgb(7, 7, 7);
font-size: 0.35rem;
background-color: #ededed;
position: fixed;
top: 0;
z-index: 1;
width: 100%
}

.ss-header-icon {
position: absolute;
top: 0.3rem;
left: 0.2rem;
font-size: 0.45rem;
}
</style>
