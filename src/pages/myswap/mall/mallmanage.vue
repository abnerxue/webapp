<template>
  <div>
    <van-nav-bar
      title="商城订单管理"
      left-arrow
      @click-left="onClickLeft"
      style="background-color:#ededed"
    />
    <van-tabs>
      <van-tab title="未发货">
        <van-list
          style="background: #efefef;padding:0.3rem"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-row
            v-for="(item,i) in card"
            :key="i"
            style="margin-bottom:0.5rem;padding:0.2rem;background:#fff;"
            class="item"
          >
            <div @click="detail(item)">
              <img style="width:0.6rem;height:0.6rem" src="../../../../static/img/myimg.png" />
              <span class="txt-name">常孝自营店</span>
              <img style="width:1.8rem;height:1.08rem;margin-top:-0.2rem;" :src="item.addrName" />
              <span class="txt-title">{{item.productName}}</span>
              <span class="txt-price">¥{{item.money}}</span>
              <span class="txt-num">x{{item.number}}</span>
              <span class="txt-total">共{{item.number}}件商品 合计：¥{{item.money*item.number}}</span>
              <span v-if="item.state==0" class="txt-state">待付款</span>
              <span v-if="item.state==1" class="txt-state">支付中</span>
              <span v-if="item.state==2" class="txt-state">支付失败</span>
              <span v-if="item.state==3" class="txt-state">支付成功</span>
              <span v-if="item.state==4" class="txt-state">已发货</span>
              <span v-if="item.state==5" class="txt-state">已收货</span>
            </div>
          </van-row>
        </van-list>
      </van-tab>
      <van-tab title="已发货">
        <van-list
          style="background: #efefef;padding:0.3rem"
          v-model="loading2"
          :finished="finished2"
          finished-text="没有更多了"
          @load="onLoad2"
        >
          <van-row
            v-for="(item,i) in card2"
            :key="i"
            style="margin-bottom:0.5rem;padding:0.2rem;background:#fff;"
            class="item"
          >
            <div @click="detail2(item)">
              <img style="width:0.6rem;height:0.6rem" src="../../../../static/img/myimg.png" />
              <span class="txt-name">常孝自营店</span>
              <img style="width:1.8rem;height:1.08rem;margin-top:-0.2rem;" :src="item.addrName" />
              <span class="txt-title">{{item.productName}}</span>
              <span class="txt-price">¥{{item.money}}</span>
              <span class="txt-num">x{{item.number}}</span>
              <span class="txt-total">共{{item.number}}件商品 合计：¥{{item.money*item.number}}</span>
              <span v-if="item.state==0" class="txt-state">待付款</span>
              <span v-if="item.state==1" class="txt-state">支付中</span>
              <span v-if="item.state==2" class="txt-state">支付失败</span>
              <span v-if="item.state==3" class="txt-state">支付成功</span>
              <span v-if="item.state==4" class="txt-state">已发货</span>
              <span v-if="item.state==5" class="txt-state">已收货</span>
            </div>
          </van-row>
        </van-list>
      </van-tab>
    </van-tabs>
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
      page: 1,
      size: 20,
      finished: false,
      loading: false,
      card: [],
      page2: 1,
      size2: 20,
      finished2: false,
      loading2: false,
      card2: []
    };
  },
  created() {
    if (process.env.NODE_ENV === "development") {
      this.GLOBAL.token = "7514607733891472492";
      //   this.GLOBAL.systemName = "android";
    }
    if (this.GLOBAL.systemName === "android") {
      window.android.setStatusBarColor("#efefef");
    }
    if (this.GLOBAL.systemName === "ios") {
      window.webkit.messageHandlers.setStatusBarColor.postMessage("#efefef");
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back("/myswap");
    },
    onLoad() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.$ajax
        .post("/cxt/market/third/payedOrders", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data.list == null) {
              that.finished = true;
              that.loading = false;
            }
            if (res.data.data.list.length > 0) {
              res.data.data.list.forEach(item => {
                that.card.push(item);
              });
            }
            if (that.card.length != that.size * that.page) {
              that.finished = true;
              that.loading = false;
            } else {
              that.page++;
              that.loading = false;
            }
          } else {
            Toast(JSON.stringify(res.data.msg));
          }
        });
    },
    onLoad2() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page2,
        size: this.size2,
        state:4,
      };
      this.$ajax
        .post("/cxt/market/third/payedOrders", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data.list == null) {
              that.finished2 = true;
              that.loading2 = false;
            }
            if (res.data.data.list.length > 0) {
              res.data.data.list.forEach(item => {
                that.card2.push(item);
              });
            }
            if (that.card2.length != that.size2 * that.page2) {
              that.finished2 = true;
              that.loading2 = false;
            } else {
              that.page2++;
              that.loading2 = false;
            }
          } else {
            Toast(JSON.stringify(res.data.msg));
          }
        });
    },
    detail2(item) {
      this.$router.push({
        path: "/dtmall3",
        query: {
          item: item
        }
      });
    },
    detail(item) {
      this.$router.push({
        path: "/dtmall2",
        query: {
          item: item
        }
      });
    }
  }
};
</script>
<style scoped>
.van-nav-bar .van-icon {
  color: black;
  font-size: 0.4rem;
}
.item {
  border-radius: 0.2rem;
}
.item img {
  display: block;
}
.txt-name {
  position: relative;
  left: 0.7rem;
  top: -0.55rem;
}
.txt-title {
  display: inline-block;
  white-space: nowrap; /*强制不换行*/
  overflow: hidden; /*超出部分隐藏*/
  text-overflow: ellipsis; /*换成点点点*/
  width: 50%;
  position: relative;
  left: 2rem;
  top: -1rem;
}
.txt-address {
  font-size: 0.06rem;
  color: #ffffffff;
  position: relative;
  left: 0.7rem;
  top: -0.6rem;
}
.txt-price {
  display: block;
  float: right;
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
  right: -0rem;
}
.txt-state {
  display: block;
  float: right;
  margin-top: 0.5rem;
  position: relative;
  right: -2.4rem;
  color: #00a2ff;
}
</style>
