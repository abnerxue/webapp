<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">搜索结果</van-col>

      <van-col span="2"></van-col>
    </van-row>
    
    <div style="margin-top:0.2rem">
      <div v-for="(item,index) in pagemember" :key="index">
        <!-- 成员 -->

        <div class="a" @click="godetail(item.id,item.departmentName)">
          <van-row>
            <van-col span="1"></van-col>
            <van-col span="4">
              <div class="round">{{item.name.slice(-1)}}</div>      <!-- 蓝圈 -->
            </van-col>
            <van-col span="18">
              <div>{{item.name}}</div>
              <div class="b">{{item.title}}</div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>
        </div>

        <hr style="margin-top:0.15rem;margin-bottom:0.15rem" />
      </div>
    </div>

    <!-- <van-row style="margin-top:1.2rem;padding-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <div v-for="(item,index) in pagemember" :key="index">
          <div class="a">
            {{item.name}} &nbsp;&nbsp;
            <span class="b">{{item.phone}}</span>
          </div>
          <div class="b">{{item.title}}</div>
          <div class="b">{{item.bank_num}}</div>
          <hr>
        </div>
      </van-col>
      <van-col span="1"></van-col>
    </van-row> -->

  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      value: "",
      pagemember: [],
      id: "",
      name: ""
    };
  },
  methods: {
    goback() {
      this.$router.push({
        path:"/Structure",
        query:{
          pId:this.$route.query.pId,
          coname: this.$route.query.coname,
          }
          });
    },
    top() {
      window.scrollTo(0, 0);
    },
    godetail(id,departmentName) {
      this.$router.push({
        path: "/searchdetail",
        query: {
          id: id,
          coname: this.$route.query.coname,
          dptname:departmentName,
          pId:this.$route.query.pId
        }
      });
      
    },
    
    getm() {
      let _this = this;
      let data = {
        name: this.$route.query.name,
        coname: this.$route.query.coname,
        token: this.GLOBAL.token
      };

      console.log(data.name)

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
          ctime: "",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/dept/blurDept", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data.member;

          console.log( res.data.data)
        });
    },
    
  },
  created() {
    this.top();
    this.getm();
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
  padding-bottom: 1rem;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: #ededed;
  /* position: fixed;
  top: 0;
  z-index: 2;
  width: 100%; */
}

.m-header-icon {
  position: absolute;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color:#00a2ff
}

.line {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.a {
  font-size: 0.35rem;
  margin: 0.2rem 0.3rem 0.1rem 0.2rem;
  position: relative;
}

.b {
  font-size: 0.3rem;
  color: #9a9a9a;
  margin: 0 0.3rem 0.1rem 0;
}

.round {
  background-color: #00a2ff;
  color: white;
  border: 0.01rem solid #00a2ff;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 0.85rem;
  font-size: 0.35rem;
  line-height: 0.85rem;
  text-align: center;
  overflow: hidden;
}
</style>