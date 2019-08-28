<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goBack" />
      </van-col>
      <van-col span="20" style="text-align:center">提现申请</van-col>
    </van-row>
    <hr />

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,i) in card" :key="i">
        <div class="list" @click="detail(item)">
          <span>{{item.ctime}}</span>
          <span>账号{{item.tel}}发出一卡通提现请求</span>
          <span class="lit-btn" v-if="item.state==0">待处理 请尽快处理</span>
          <span class="lit-btn" v-else>已处理</span>
        </div>
        <hr />
      </div>
    </van-list>
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import global_ from "../../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      card: [],
      page: 1,
      size: 20,
      finished: false,
      loading: false,
      showDialog: true
    };
  },
  created() {
    if (process.env.NODE_ENV === "development") {
      this.GLOBAL.token = "732719496337";
    //   this.GLOBAL.systemName = "android";
    }
    if (this.GLOBAL.systemName === "android") {
      window.android.setStatusBarColor("#ffffff");
    }
    if (this.GLOBAL.systemName === "ios") {
      window.webkit.messageHandlers.setStatusBarColor.postMessage("#ffffff");
    }
  },
  mounted() {},
  methods: {
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    },
    goBack() {
      this.$router.back("/mytotal");
    },
    detail(item) {
      this.$router.push({
        path: "/txrequestdetail",
        query: {
          item: item
        }
      });
    },
    onLoad() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.$ajax
        .post("/cxt/system/cardDrawList", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
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
    }
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #fff;
  height: 100%;
}
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
}
.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
.list {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}
.list span {
  padding-bottom: 0.2rem;
  display: block;
}
.lit-btn {
  color: #00a2ff;
  width: 100%;
  text-align: right;
}
</style>
