<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goBack" />
      </van-col>
      <van-col span="20" style="text-align:center">请选择支付的一卡通</van-col>
    </van-row>
    <hr />

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,i) in card" :key="i" class="c-card">
        <span style>常孝一卡通 {{item.cardno}}</span>
        <span style="float:right;">有效期：{{item.drawday}}</span>
        <span style="margin-top: 0.1rem;display:block;">
          余额：
          <span class="c-card-money">¥{{item.money}}</span>
        </span>
        <span
          style="margin-top: 0.1rem;display:block;"
        >按余额每日赠送{{Math.floor(item.money/100)*item.score}}个积分</span>
        <van-button hidden style="border-width:0px;" size="small"></van-button>
        <van-button @click="cardpay(item.cardno)" class="c-card-tixian" plain type="primary" size="small">此卡支付</van-button>
      </div>
    </van-list>
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
      // this.GLOBAL.token = "732719496337";
      // this.GLOBAL.systemName = "android";
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
    cardpay(cardno){
       let _this=this
      this.page_data = {
        
      }    
      let data = {
        token:this.GLOBAL.token,
        orderno:this.$route.query.orderNo
      };
     console.log(data)
  
       this.$ajax.post('/cxt/user/hasPayCode', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          if(res.data.data.hasPayCode===true){
            
            this.$router.push({
              path:'/pay',//设了密码应该走这里啊
              query:{
                cardno:cardno,
                 orderNo:this.$route.query.orderNo,
           money:this.$route.query.money,
           paytype:'6'
              }
              
            })
          }else{
            // debugger;
            Toast('请先设置支付密码')
             this.$router.push('/resetpay')
          }
          
        });
    },
    tx(item) {
      if(item.state != 0){
        Toast("当前不可提现!");
        return;
      }
      let that = this;
      let title = "";
      let content = "";
      let d = {
        cardno: item.cardno,
        token: this.GLOBAL.token
      };
      this.$ajax
        .post("/cxt/account/card/drawCheck", that.$qs.stringify(d), {
          headers: that.Base.initAjaxHeader(1, d)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data == -1) {
              title = "提现";
              content = "您是否确认提现\n提现后资金将由7个工作日到账";
            }
            if (res.data.data > 0) {
              title = "未到期提现";
              content =
                "您的常孝一卡通还未到期\n有效期至" +
                item.drawday +
                "\n未到期提现需要扣除15%，即" +
                res.data.data +
                "元\n您是否确认提现\n提现后资金将由7个工作日到账";
            }
            Dialog.confirm({
              title: title,
              message: content
            })
              .then(() => {
                // TODO 跳转到提现页面
                this.$router.push({ 
                    path: "/generaltx", 
                    query: {
                        item:item
                    } 
                });
              })
              .catch(() => {
                // on mmp
              });
          } else {
            Toast(JSON.stringify(res.data.msg));
          }
        });
    },
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
    onLoad() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.$ajax
        .post("/cxt/account/card/list", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data.list.length > 0) {
              res.data.data.list.forEach(item => {
                that.card.push(item);
                console.log( that.card)
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
.c-card {
  margin: 0.6rem 5%;
  background-color: white;
  display: block;
  width: 86%;
  padding: 2%;
  border-radius: 0.2rem;
  border-color: #ccc;
  border-width: 1px;
  border-style: solid;
}
.c-card-money {
  color: #00a2ff;
  font-size: 0.35rem;
}
.c-card-tixian {
  border-color: #00a2ff;
  color: #00a2ff;
  float: right;
}
</style>
