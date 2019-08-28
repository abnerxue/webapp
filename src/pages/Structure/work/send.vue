<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="2">
        <van-icon name="cross" class="m-header-icon2" @click="gofirst" />
      </van-col>
      <van-col span="14">抄送我的</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;">帮助</div>
      </van-col>
      
    </van-row>
    <!-- <van-tabs v-model="active" color="#00a2ff" style="margin-top:1rem;">
        <van-tab title="全部">内容 1</van-tab>  
        <van-tab title="未读">内容 2</van-tab>
    </van-tabs> -->
  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    gohow() {
      this.$router.push("/setapproval");
    },
    gohow2() {
      this.$router.push("/setchaosong");
    },
    gofirst() {
      this.$router.push("/work");
    },
    goback() {
      this.$router.push("/approval");
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      let _this = this;
      let data = {
        token:this.GLOBAL.token
      };

      this.pagemember = [
        {
          id: 2,
          name: "",
          email: "",
          phone: "",
          staff_no: "",
          title: "",
          bank_num: "",
          department_id: 25,
          department_incharge: 1,
          password: "",
          sex: 1,
          state: 0,
          des: "",
          sort: 0,
          ctime: "2019-07-17 13:08:35",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/approval/ccApprovals", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data.list;
          console.log(this.pagemember);
        });
    }
  },
  created() {
    this.getList();
    this.top();
  }
};
</script>
<style scoped>
.m-bg {
  /* background-color: #ededed; */
  height: 100%;
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
  text-align: center;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.m-header-icon2 {
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.ss {
  font-size: 0.32rem;
  padding-top: 0.2rem;
  margin-left: 0.3rem;
}

.foot {
  height: 1.1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index: 3;
}

.btn {
  background-color: #00a2ff;
  color: white;
  width: 96%;
  height: 0.8rem;
  margin: 0.15rem 2%;
  line-height: 0.8rem;
  text-align: center;
}
</style>
