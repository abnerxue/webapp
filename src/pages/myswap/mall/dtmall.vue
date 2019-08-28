<template>
  <div id="body">
    <van-nav-bar
      title="订单详情"
      left-arrow
      @click-left="onClickLeft"
      style="background-color:#00a2ff;"
    />
    <span v-if="detail.order.state==0" class="order-state">待付款</span>
    <span v-if="detail.order.state==1" class="order-state">支付中</span>
    <span v-if="detail.order.state==2" class="order-state">支付失败</span>
    <span v-if="detail.order.state==3" class="order-state">支付成功</span>
    <span v-if="detail.order.state==4" class="order-state">已发货</span>
    <span v-if="detail.order.state==5" class="order-state">已收货</span>
    <div class="userinfo">
      <span class="uname">{{detail.addr.name}}</span>
      <span class="tel">{{detail.addr.tel}}</span>
      <span
        class="address"
      >{{detail.addr.province}} {{detail.addr.city}} {{detail.addr.region}} {{detail.addr.addr}}</span>
    </div>
    <hr />
    <div class="kd">
      <span class="kname">{{detail.order.sname}}</span>
      <span class="kno">快递单号：{{detail.order.sno}}</span>
    </div>
    <div class="order">
      <img class="order-img" src="../../../../static/img/myimg.png" />
      <span class="txt-name">常孝自营店</span>
      <img class="product-img" :src="detail.product.photo" />
      <span class="txt-title">{{item.productName}}</span>
      <span class="txt-address">送{{detail.product.givestock}}个常孝通</span>
      <span class="txt-price">¥{{detail.order.money}}</span>
      <span class="txt-num">x{{detail.order.number}}</span>
      <span
        class="txt-total"
      >共{{detail.order.number}}件商品 合计：¥{{detail.order.money*detail.order.number}}</span>
    </div>
    <div id="oederinfo">
      <span>订单编号：{{detail.order.orderno}}</span>
      <span>交易编号：{{detail.order.payno}}</span>
      <span>创建时间：{{detail.order.ctime}}</span>
      <span>付款时间：{{detail.order.stime}}</span>
      <span>发货时间：{{detail.order.ptime}}</span>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      item: "",
      detail: ""
    };
  },
  created() {
    this.item = this.$route.query.item;
    if (process.env.NODE_ENV === "development") {
      this.GLOBAL.token = "7514607733891472492";
      //   this.GLOBAL.systemName = "android";
    }
    if (this.GLOBAL.systemName === "android") {
      window.android.setStatusBarColor("#00a2ff");
    }
    if (this.GLOBAL.systemName === "ios") {
      window.webkit.messageHandlers.setStatusBarColor.postMessage("#00a2ff");
    }

    let that = this;
    let data = {
      token: this.GLOBAL.token,
      id: this.item.id
    };
    this.$ajax
      .post("/cxt/market/third/selfDetail", that.$qs.stringify(data), {
        headers: that.Base.initAjaxHeader(1, data)
      })
      .then(res => {
        if (res.data.state === "000") {
          that.detail = res.data.data;
          if (that.detail.addr == null) {
            that.detail.addr = {};
          }
        } else {
          Toast(JSON.stringify(res.data.msg));
        }
      });
  },
  methods: {
    onClickLeft() {
      this.$router.back("/mall");
    }
  }
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: white;
  font-size: 0.4rem;
}
.van-nav-bar__title {
  color: white;
}
#body {
  background-color: #efefef;
}
.order-state {
  width: 94.8%;
  display: block;
  color: white;
  padding: 2.6%;
  font-size: 0.3rem;
  background-color: #00a2ff;
}
.userinfo {
  background-color: white;
  padding-bottom: 0.2rem;
  padding-left: 0.6rem;
  padding-top: 0.2rem;
}
.uname {
  color: #999;
}
.tel {
  color: #999;
}
.address {
  display: block;
}
.kd {
  background-color: white;
  padding-bottom: 0.2rem;
  padding-left: 0.6rem;
  padding-top: 0.2rem;
}
.kno {
  display: block;
  color: #999;
}
.order {
  background-color: white;
  margin-top: 0.5rem;
}
.order-img {
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  width: 0.6rem;
  height: 0.6rem;
}
.txt-name {
  position: relative;
  left: 0.1rem;
  top: -0.25rem;
}
.product-img {
  display: block;
  width: 1.8rem;
  height: 1.08rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
.txt-title {
  display: inline-block;
  white-space: nowrap; /*强制不换行*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /*换成点点点*/
  width: 50%;
  position: relative;
  left: 2.2rem;
  top: -1rem;
}
.txt-address {
  color: #999;
  position: relative;
  left: -1.6rem;
  top: -0.6rem;
}
.txt-price {
  display: block;
  float: right;
  right: 0.2rem;
  position: relative;
  top: -1rem;
}
.txt-num {
  color: #999;
  display: block;
  float: right;
  position: relative;
  top: -0.6rem;
  right: -0.4rem;
}
.txt-total {
  position: relative;
  display: block;
  float: right;
  right: 0.2rem;
  top: -0.4rem;
}
#oederinfo {
  margin-top: 0.4rem;
  background-color: white;
}
#oederinfo span {
  display: block;
  color: #999;
  padding-left: 0.2rem;
  padding-top: 0.1rem;
}
</style>
