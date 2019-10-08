<template>
  <div>
     <van-row class="m-header">
      <van-col span="2" style="text-align: right">
        <van-icon name="arrow-left" class="m-header-icon"  @click="goback"/>
      </van-col>
      <van-col span="16">常州孝道文化产业有限公司</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <!-- <div id="container" class="mymap"></div> -->
    <div style="margin-top:2rem">
      <van-row class="main">
        <van-col span="6">
          <div class="round">
          <!-- {{(this.pagemember.username||'').slice(-1) }} -->
          欧彤彤
          </div>
        </van-col>
        <van-col span="14">
          <div class="a">  欧彤彤</div>
          <!-- <div class="b">  欧彤彤</div> -->
        </van-col>
        <van-col span="4" class="b"></van-col>
      </van-row>
    </div>
    <hr>
   
     <div>
       <span class="address-record1"></span> <span class="describe1">上班时间{{}}</span>
          
     </div>
     <div>  <span class="address-record1"></span> <span class="describe1">上班时间{{}}</span></div>
    <!-- <div class="address">
      <div class="address-record">
        <span class="address-record-status">正常</span>
      </div >
        
    </div> -->

    <!-- <div class="describe">
      <span class="describe-one">备注</span>
      <span class="describe-two">选填</span>
    
    </div> -->
      <!-- <img class="describe-three" src="../assets/camera.png"> -->
     <div>
        <div class="footer">
      <div class="footer-time" id="Date"></div>
      <div class="footer-status">&nbsp&nbsp打卡</div>
     
    </div>
     <div class = "local">
      <span>我的位置</span>
      <span class="local-one">（在</span>
      <span class="local-two">考勤范围</span>
      <span class="local-one">内）</span>
      <!-- <span class="local-two">我要反馈</span> -->
    </div>
     </div>
   
     
  </div>
</template>

<script>
    // import AMap from 'AMap'
    export default {
      mounted(){
        // this.loadmap();
      },
      methods: {
            goback() {
      this.$router.push("/work");
    },
      /*   loadmap(){
          let map = new AMap.Map('container', {
            center: [42.6824353984,129.2431640625],
            zoom: 5
          });
          var marker = new AMap.Marker({
            position: [42.6824353984,129.2431640625],
            map:map,
          });
          var content="<div class='pro'><img class='pro-pit' src='../static/singel.png'>已进入考勤范围</div>";
          map.plugin('AMap.AdvancedInfoWindow',function(){
            var infowindow = new AMap.AdvancedInfoWindow({
              content:content,
              offset: new AMap.Pixel(0, -31)
            });
            infowindow.open(map,new AMap.LngLat(42.6824353984,129.2431640625));
          })
        } */
      },
      created: function () {
        setInterval(function () {
          var date = new Date();
          var h = date.getHours();
          var m = date.getMinutes();
          var s = date.getSeconds();
          if (h < 10) {h = '0' + h};
          if (m < 10) {m = '0' + m};
          if (s < 10) {s = '0' + s};
          var d = document.getElementById('Date');
          if(d){
          d.innerHTML = h + ':' + m + ':' + s}}, 1000)
      }
    }
</script>

<style>
.main{
  /* background-color: #dff2fd; */
  margin-top: 0.2rem ;
  padding: 0.2rem 0 0.2rem 0;
  font-size:0.3rem
}
.a{
  font-size: 0.35rem;
  color: black;
}

.b{
  color: #9a9a9a;
  font-size: 0.35rem
}
  *{
    margin:0;
    padding:0;
  }
  .header{
    text-align: center;
    border-bottom:1px solid #d5d5d5;
    line-height: 64px;
    background: #f7f7f7;
  }
  .header-title{
    height: 10px;
    font-size:18px;
    font-weight:bold;
  }
  .header-left{
    float:left;
    color:#26a0f5;
    margin-left:12px;
    font-size:12px;
    font-weight:bold;
  }
  .header-right{
    float:right;
    color:#26a0f5;
    margin-right:12px;
    font-size:12px;
    font-weight:bold;
  }
  .mymap{
    height: 386px;
  }
  .local{
      margin-top:0rem;
    line-height: 44px;
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    padding-left:15px;
  }
  .local-one{
    font-size: 12px;
    color: #999999;
  }
  .local-two{
    font-size: 12px;
    color: #27a6ff;
  }

  .address{
    padding-right: 26px;
    font-size: 13px;
    color: #999999;
    text-align: left;
    margin-left: 15px;
  }
  .address-record1{
    float: left;
    width: 10px;
    height:10px;
    margin-top:0.3rem;
    margin-left:0.3rem;
    text-align: center;
    background: #26a0f5;
    border: solid #26a0f5;
    border-radius:50%;
    
  }
  .address-record-status{
    color: #fff;
    font-size: 12px;
  }

  .describe{
    margin-top: 15px;
    border-top:1px solid #d9d9d9;
    border-bottom:1px solid #d9d9d9;
    margin-left: 15px;
    text-align:  left;
    font-size: 16px;
    line-height: 45px;
  }
  .describe1{
  
    
    margin-left: 15px;
    text-align:  left;
    font-size: 16px;
    line-height: 45px;
  }
  .describe-one{
    color:#333333;
  }
  .describe-two{
    color:#999999;
  }
  .describe-three{
    float: right;
    margin-right: 15px;
    width: 24px;
    margin-top: 12px;
  }

  .footer{
    margin-top: 28px;
    line-height: 40px;
    background: #27a6ff;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
  }
  .footer-time{
    float:left;
    width:50%;
    color:#ffffff;
    font-size:17px;
    text-align:right;
  }
  .footer-status{
    /* border-radius: 50%; */
    color:#ffffff;
    font-size:17px;
    text-align:left
  }
  .pro{
    text-align:right;
    background: #26a0f5;
    color:#ffffff;
    width:134px;
    line-height:37px;
    font-size: 14px;
    padding-right:8px
  }
  .pro-pit{
    position:absolute;
    top:12px;
    left:9px;
  }
  .amap-info-combo{
    display:none;
  }
  .amap-adcombo-close{
    display:none;
  }
  .amap-combo-sharp{
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid #26a0f5;
  }
  .m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  
}

.m-header-icon {
  margin-top:0.25rem;
  font-size: 0.5rem;
  color: #00a2ff;
  
}

.m-icon {
  font-size: 0.5rem;
}
</style>
