<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goBack" />
      </van-col>
      <van-col span="20" style="text-align:center">提现</van-col>
    </van-row>
    <hr />

    <div class="content">
      <span>持卡人姓名</span>
      <input id="cname" type="text" placeholder="请输入持卡人姓名" />
      <hr />
      <span>银行卡号</span>
      <input id="bankcard" type="number" placeholder="请输入银行卡号" />
      <hr />
    </div>
    <van-button class="btn-request" type="info" @click="tx">提交</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import { Dialog } from "vant";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      item: ""
    };
  },
  created() {
    this.item = this.$route.query.item;
    if (process.env.NODE_ENV === "development") {
      // this.GLOBAL.token = "732719496337";
      // this.GLOBAL.systemName = "android";
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
      this.$router.back("/mygeneral");
    },
    tx() {
      let cname = document.getElementById("cname").value;
      let bankcard = document.getElementById("bankcard").value;
      if (this.isEmpty(cname) || this.isEmpty(bankcard)) {
        // mmp
        return;
      }

      let that = this;
      let data = {
        token: this.GLOBAL.token,
        cardno: this.item.cardno,
        cname: cname,
        bankcard: bankcard
      };
      this.$ajax
        .post("/cxt/account/card/draw", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            Toast("提现请求成功");
            this.$router.back("/mygeneral");
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
  background-color: #ededed;
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
.content {
  margin: 0.4rem;
}
.content span {
  font-size: 16px;
  color: #000;
  display: inline-block;
  padding: 0.1rem;
}
.content hr {
  margin-bottom: 0.3rem;
}
.btn-request {
  width: 50%;
  margin-top: 2rem;
  margin-left: 25%;
}
</style>
