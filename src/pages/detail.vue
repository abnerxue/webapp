<template>
  <div class="index">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/detail" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <div class='list_box'>
        <div class="c_c container">一级市场</div>
    </div>
    <div class='list_box'>
        <div class="c_c container">二级市场</div>
    </div>
    <div class='list_box'>
        <div class="c_c container">三级市场</div>
    </div>
  </div>
</template>

<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper';
  import 'swiper/dist/css/swiper.css';
  // import popCom from '@/components/popout';
  export default {
    data() {
      return {
        active: 1,
        images:[
          'http://img3.imgtn.bdimg.com/it/u=138386839,3644713076&fm=26&gp=0.jpg',
          'http://img1.imgtn.bdimg.com/it/u=3234073102,998570001&fm=26&gp=0.jpg'
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
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
        return this.$refs.mySwiper.swiper
      }
    },
    created() {
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
    methods: {
      toCalendar() {
        this.$router.push({
          name: 'calendar',
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
          if ((window.screen.height + sTop) >= (document.body.clientHeight) && !this.isLoading) {
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
        let h = document.getElementById('getH').offsetHeight;
        var marqueetimer = setInterval(function () {
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

        this.$ajax.get(this.apiPath.index, _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
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
          name: 'PlatformDetail',
          params: {
            id: id
          }
        });
      },
      //跳转分类列表
      goClassification(type) {
        this.$router.push({
          name: 'Classification',
          params: {
            class: type
          }
        });
      },
      //banner跳转到第三方平台
      bannerHref(url) {
        if (url.length > 0) {
          this.Base.interactiveWithApp('openNewWindow', {
            url: url,
            title: '',
            startColor: "#6A5CF6",
            endColor: "#8BE2F1",
            backUrl: '回到'
          }).then(data => {
            if (data == 'wap') {
              console.log('openNewWindow', 'wap');
              this.Base.setIframePageInfo(this, {
                url: url,
                title: ''
              });
            } else {
              console.log('openNewWindow', data);
            }
          });
        }
      },
      //banner跳转
      bannerLink(img) {
        this.$router.push({
          name: 'detail'
        });
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
      getUserInfo(item) {
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
      },
      toLoan() {
        this.$router.push({
          name: 'Loan'
        });
      }
    },
    beforeRouteEnter(to, from, next) {
      if (localStorage.getItem('scrollTop')) {
        setTimeout(_ => {
          window.scrollTo(0, localStorage.getItem('scrollTop') - 0);
          localStorage.removeItem('scrollTop');
        }, 100);
      }
      next();
    },
    beforeRouteLeave(to, from, next) {
      //去详情页之前记录当前页面滚动位置
      if (to.name == 'PlatformDetail') {
        var sTop = document.documentElement.scrollTop || document.body.scrollTop;
        localStorage.setItem('scrollTop', sTop);
      }
      next();
    }
  }

</script>

<style lang="scss" scoped>

    .c_c{
        display:flex;justify-content: center;align-items: Center;
    }
  .index {
    // padding-top:4.54rem;
    background: #fff;
    padding-bottom: 2rem;
    // padding-bottom:.97rem;
    // padding-top: .3rem;
    height: 100%;
    // box-sizing: border-box;
    .list_box{
        width: 80%;height:0.1rem;
        box-sizing: border-box;
        padding: .1rem .1rem;
        .container{
            width: 100%;height:100%;
            border: 1px solid #ccc;
        }
    }
    .swiper-container {
      height: 9rem;
      width: 90%;
      margin: 0 auto;
    }

    .active_tab {
      color: #222222;
      border-bottom: 5px solid #FF800E;
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
      border-radius: .1rem;
      height: 5.3rem;
      // background:url(../assets/loading.gif) center center no-repeat;
      background-size: .32rem .32rem;

      // margin-top:1.285rem;
      .swiper-container {
        height: 7.3rem;
      }

      .swiper-slide {
        height: 7.3rem;
      }

      .swiper-pagination {
        bottom: .1rem;
      }

    }

    .floor2 {

      //平台分类
      .fire_box {
        position: relative;
      }

      .fire {
        position: absolute;
        top: .1rem;
        right: .18rem;
        ;
        width: .46rem;
        height: .3rem;
      }

      .class {
        width: 6.96rem;
        border-bottom: 1px solid #EDEDED;
        margin: auto;

        dl {
          float: left;
          width: 1.435rem;
          padding-top: .23rem;
          padding-bottom: .35rem;

          dt {
            width: .9rem;
            height: .95rem;
            margin: auto;
            border-radius: .1rem;
            overflow: hideen;
          }

          dd {
            text-align: center;
          }
        }

        dl:nth-child(2) {
          padding-left: .4rem;
        }

        dl:nth-child(3) {
          padding-left: .4rem;
          padding-right: .4rem;
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
          height: .7rem;
          padding: 0 .3rem;
          display: flex;
          align-items: center;

          div:nth-child(1) {
            width: 1.27rem;
            height: .3rem;
            // background:url(../assets/tips1.png) no-repeat;
            background-size: 1.27rem .3rem;
            margin-right: .06rem;
          }

          div:nth-child(2) {
            height: 27px;
            width: 5.6rem;
            overflow: hidden;

            ul {
              li {
                line-height: 27px;
                height: 27px;
                padding-left: .15rem;
                overflow: hidden;
                color: #3E475D;
                font-size: .26rem;
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
      padding-bottom: .1rem;
      border-top: .2rem solid #f5f5f5;

      .title {
        height: .88rem;
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
          font-size: .32rem;
        }

        span:nth-child(2) {
          font-size: .28rem;
          color: #a8aab2;
          margin-left: auto;
          padding-right: .25rem;
          // background:url(../assets/my_arrow.png) right center no-repeat;
          background-size: .12rem .22rem;
        }
      }

      .getMore {
        text-align: center;
      }
    }

    .screen_bg {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .5);
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
          padding-left: .3rem;

          li {
            border-bottom: 1px solid #e6e6e6;
            line-height: .88rem;
            font-weight: 400;
          }

          li:last-child {
            border: none;
          }

          li.cur {
            color: #507DEF;
          }
        }
      }

      //贷款类型
      .dklx {
        padding-bottom: .3rem;

        a {
          float: left;
          width: 2.05rem;
          line-height: .66rem;
          text-align: center;
          border: 1px solid #e6e6e6;
          border-radius: .08rem;
          margin: .3rem 0 0 .3rem;
        }

        a.cur {
          border-color: #507DEF;
          color: #507DEF;
        }
      }
    }
  }

</style>
<style scoped>
  .banner .swiper-pagination .swiper-pagination-bullet {
    /* background:url(../assets/swiper-pagination-bulle.png); */
    width: .09rem;
    height: .04rem;
    opacity: 1;
    background-size: .09rem .04rem;
  }

  .banner .swiper-pagination .swiper-pagination-bullet-active {
    width: .12rem;
    height: .12rem;
    border-radius: 50%;
    /* background:url(../assets/swiper-pagination-bullet-active.png); */
    background-size: .12rem .12rem;
    position: relative;
    top: .05rem;
  }

</style>
