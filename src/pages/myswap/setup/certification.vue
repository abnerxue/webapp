<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goBack" />
      </van-col>
      <van-col span="20" style="text-align:center">实名认证</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <template v-if="this.idStatus == 3">
      <div class="whitebg">
        <van-image class="s-id-success-img" src="../../../../static/img/icon_authentication.png"></van-image>
        <span class="s-id-success-txt">已通过实名认证</span>
      </div>
        <div class="whitebg" style="margin-top: 0.25rem;">
          <span class="s-id-text">真实姓名</span>
          <span class="s-id-text" style="float: right;">{{idInfo.idname}}</span>
        </div>
        <div class="whitebg" style="margin-top: 1px;">
          <span class="s-id-text">身份证号码</span>
          <span class="s-id-text" style="float: right;">{{idInfo.idcard}}</span>
        </div>
    </template>
    <template v-else>
      <!-- <img class="s-idCard-img" :src="idCardMain" /> -->
      <van-button class="s-idCard" @click="upIDCardMain" id="img-idCard-main">{{idCardMainText}}</van-button>
      <!-- <img class="s-idCard-img" :src="idCardBack" /> -->
      <van-button class="s-idCard" @click="upIDCardBack" id="img-idCard-back">{{idCardBackText}}</van-button>
      <!-- <button class="s-btns" @click="rz">实名认证</button> -->
    </template>
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
      idCardMain: "",
      idCardBack: "",
      idCardMainText: "点击上传身份证正面照片",
      idCardBackText: "点击上传身份证背面照片",
      idStatus: 0,
      idInfo: []
    };
  },
  created() {
    if (process.env.NODE_ENV === "development") {
      // this.GLOBAL.token = "3013343114726107134";
      // this.GLOBAL.systemName = "android";
    }
    window.uploadFileResult = result => {
      this.uploadFileResult(result);
    };
  },
  mounted() {
    let that = this;
    let data = {
      token: this.GLOBAL.token
    };
    this.$ajax
      .post("/cxt/user/authState", that.$qs.stringify(data), {
        headers: that.Base.initAjaxHeader(1, data)
      })
      .then(res => {
        if (res.data.state === "000") {
          let state = res.data.data.state;
          that.idStatus = state;
          switch (state) {
            case 2:
              Toast("正在审核中，请耐心等待");
              break;
            case 3:
              that.idInfo = res.data.data;
              break;
            case 4:
              Toast("请重新上传");
              break;
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
      this.$router.back("/set");
    },
    upIDCardMain() {
      if (this.idStatus == 2 || this.idStatus == 3) {
        Toast("正在审核中，请耐心等待");
        return;
      }
      if (this.GLOBAL.systemName === "android") {
        window.android.requestUploadPictureFromGallery("IDCardMain");
      }
      if (this.GLOBAL.systemName === "ios") {
        window.webkit.messageHandlers.requestUploadPictureFromGallery.postMessage(
          "IDCardMain"
        );
      }
    },
    upIDCardBack() {
      if (this.idStatus == 2 || this.idStatus == 3) {
        Toast("正在审核中，请耐心等待");
        return;
      }
      if (this.GLOBAL.systemName === "android") {
        window.android.requestUploadPictureFromGallery("IDCardBack");
      }
      if (this.GLOBAL.systemName === "ios") {
        window.webkit.messageHandlers.requestUploadPictureFromGallery.postMessage(
          "IDCardBack"
        );
      }
    },
    uploadFileResult(result) {
      let json = JSON.parse(result);
      if (json.state === "000") {
        if (json.data.indexOf("IDCardMain") == 0) {
          this.idCardMain = json.data;
          this.idCardMainText = "已上传";
        }
        if (json.data.indexOf("IDCardBack") == 0) {
          this.idCardBack = json.data;
          this.idCardBackText = "已上传";
        }
      } else {
        Toast(json.msg);
      }

      if (!this.isEmpty(this.idCardMain) && !this.isEmpty(this.idCardBack)) {
        let that = this;
        let data = {
          front: this.idCardMain,
          back: this.idCardBack,
          token: this.GLOBAL.token
        };
        this.$ajax
          .post("/cxt/user/authImg", that.$qs.stringify(data), {
            headers: that.Base.initAjaxHeader(1, data)
          })
          .then(res => {
            if (res.data.state === "000") {
              Toast("上传成功!");
              that.idStatus = 2;
            } else {
              Toast(JSON.stringify(res.data.msg));
            }
          });
      }
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
.whitebg {
  background-color: white;
}
.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
.s-idCard {
  color: white;
  margin: 0.1rem 5%;
  background: #00a2ff;
  width: 90%;
  height: 1rem;
}
.s-idCard-img {
  margin: 0.1rem 5%;
  width: 90%;
}
.s-btns {
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  width: 80%;
  margin: 0.8rem 10%;
  padding: 0.2rem 0;
  border-radius: 0.1rem;
}
.s-id-success-img {
  margin-top: 5%;
  margin-left: 35%;
  width: 30%;
}
.s-id-success-txt {
  display: block;
  font-size: 0.6rem;
  color: #00a2ff;
  width: 100%;
  margin-top: 3%;
  padding-bottom: 0.4rem;
  text-align: center;
}
.s-id-text{
  font-size: 0.3rem;
  display: inline-block;
  padding: 0.3rem;
}
</style>
