<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goBack" />
      </van-col>
      <van-col span="20" style="text-align:center">提现申请</van-col>
    </van-row>
    <hr />

    <span style="font-size: 16px;padding: 5%; display:block;">常孝一卡通提现申请</span>
    <div class="detail">
      <span>账户</span>
      <span>{{req.tel}}</span>
      <span>姓名</span>
      <span>{{req.cname}}</span>
      <span>性质</span>
      <span>{{card.drawType}}</span>
      <span>有效期至</span>
      <span>{{card.drawday}}</span>
      <!-- <span>本金</span>
      <span>这是啥</span>-->
      <span>余额</span>
      <span>{{card.money}}</span>
      <span>违约金</span>
      <span>{{card.omoney}}</span>
      <span>需退还</span>
      <span>{{card.money-card.omoney}}</span>
      <span>退还方式</span>
      <span>银行卡</span>
      <span>银行卡号</span>
      <span>{{req.bankcard}}</span>
      <span>提交日期</span>
      <span>{{item.ctime}}</span>
      <span>状态</span>
      <span>{{req.state}}</span>
      <span>处理日期</span>
      <span>{{req.etime}}</span>
    </div>
    <div v-if="req.state==0 || req.state=='待处理'">
      <van-button @click="en" type="info" style="width:40%; margin-left:30%; margin-top:1rem;">处理</van-button>
      <span
        style="display:block; width:100%;text-align: center; color:#999; margin-top:0.3rem;"
      >请您尽快处理</span>
    </div>
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
      item: "",
      card: "",
      req: ""
    };
  },
  created() {
    this.item = this.$route.query.item;
    if (process.env.NODE_ENV === "development") {
      this.GLOBAL.token = "732719496337";
      // this.GLOBAL.systemName = "android";
    }
  },
  mounted() {
    let that = this;
    let data = {
      token: this.GLOBAL.token,
      id: this.item.id
    };
    this.$ajax
      .post("/cxt/system/cardDrawItem", that.$qs.stringify(data), {
        headers: that.Base.initAjaxHeader(1, data)
      })
      .then(res => {
        if (res.data.state === "000") {
          that.card = res.data.data.card;
          that.req = res.data.data.req;
          if (that.card.drawType == 0) {
            that.card.drawType = "到期提现";
          } else {
            that.card.drawType = "未到期提现";
          }
          if (that.req.state == 0) {
            that.req.state = "待处理";
          } else {
            that.req.state = "已处理";
          }
          if (that.isEmpty(that.req.etime)) {
            that.req.etime = "暂无";
          }
        } else {
          Toast(JSON.stringify(res.data.msg));
        }
      });
  },
  methods: {
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    },
    goBack() {
      this.$router.back("/txrequest");
    },
    en() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        cardno: this.item.cardno,
        state: 1
      };
      this.$ajax
        .post("/cxt/system/cardDrawRes", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            Toast("处理完成");
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
  background-color: #ffffff;
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
.detail span {
  display: block;
  font-size: 16px;
  padding-top: 0.15rem;
}
.detail :nth-child(2n) {
  margin-top: -0.6rem;
  width: 95%;
  text-align: right;
}
.detail :nth-child(2n + 1) {
  margin-left: 5%;
}
</style>
