
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">{{this.$route.query.coname.slice(0,12)}}<span>...</span></van-col>
    </van-row>

    <van-row class="search">
      <van-col span="24" style="text-align:center">
        <van-search shape="round" placeholder="搜索" v-model="s" @search="search(s)" />
      </van-col>
    </van-row>

    <div style="padding-top:2.2rem">
      <div v-for="(item,index) in pageData" :key="index">
        <div @click="gomember(item.id,item.name)">
          <div class="a">
            {{item.name}}
            <span class="b">（{{item.custs}}）</span> 
            <van-icon name="arrow" class="c" />
          </div>
          <hr style="margin:0.2rem 5%;width:90%" />
        </div>
      </div>
    </div>
    <div
      style="height:0.2rem;background-color:#ededed;width:100%;position: fixed;bottom:1.2rem;z-index:3"
    ></div>
    <van-row
      style="position: fixed;bottom: 0;text-align:center;width:100%;z-index:3;background-color:white"
    >
      <van-col span="12">
        <button class="btn" @click="onAdd()">添加同事</button>
      </van-col>
      <van-col span="12">
        <button class="btn" @click="addDept()">添加新部门</button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      s: "",
      active: 3,
      n: "",
      value: "",
      pageDatab: [],
      temp_id: 0,
      temp_name: "",
      parents_list: "",
      root: false,
      pagemember: [],
      pageData:[]
    };
  },

  created() {
    this.top();
    this.getList();
  },
  methods: {
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      let _this = this;
      let data = {
        pId: this.$route.query.pId, //子公司id
        token: this.GLOBAL.token
      };

      this.pageDatab = [
        {
          id: 19,
          name: "行政人事部",
          des: null,
          parent_id: 8,
          sort: 0,
          state: 0,
          ctime: "2019-07-16 20:40:56",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/dept/detail", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pageDatab = res.data.data.dept;

            console.log(res.data.data.dept);
          
          for (let i = 0; i < this.pageDatab.length; i++) {
            let _this = this;
            let data = {
              token: this.GLOBAL.token,
              id: this.pageDatab[i].id
            };
            // console.log(data.id);
            
            // this.$ajax
            //   .post("/cxt/oa/member/dept", _this.$qs.stringify(data), {
            //     headers: _this.Base.initAjaxHeader(1, data)
            //   })
            //   .then(res => {
            //     this.pagemember = res.data.data;
            //     this.pageDatab[i].des = this.pagemember.length
            //   });
              
          };
          this.pageData=this.pageDatab
        });

    },

    onAdd() {
      this.$router.push({
        path: "/adde",
        query: {
          coname: this.$route.query.coname,
          pId: this.$route.query.pId //子公司id
        }
      });
    },
    
    gomember(id, name) {
      this.$router.push({
        path: "/member",
        query: {
          dptid: id,
          coname: this.$route.query.coname,
          pId: this.$route.query.pId, //子公司id
          dptname: name
        }
      });
    },
    addDept() {
      this.$router.push({
        path: "/adddept",
        query: {
          coname: this.$route.query.coname,
          pId: this.$route.query.pId
        }
      });
    },
    search(s) {
      this.$router.push({
        path: "/search",
        query: {
          name: this.s,
          coname: this.$route.query.coname,
          pId: this.$route.query.pId
        }
      });
    },
    goback() {
      this.$router.push("/Structure");
    },
    top() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.p {
  position: absolute;
  right: 1rem;
  bottom: 0rem;
  font-size: 0.3rem;
}
.m-bg {
  background-color: white;
  padding-bottom: 2rem;
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
  position: absolute;
  top: 0rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: white;
}

#title {
  z-index: 2;
  width: 100%;
  background-color: white;
  text-align: left;
  margin-left: 0.5rem;
  padding-bottom: 0.2rem;
}

.line {
  position: fixed;
  top: 2.3rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.a {
  font-size: 0.35rem;
  margin: 0.2rem 0.3rem 0.2rem 0.4rem;
  position: relative;
}
.b {
  color: #bcbcbc;
}
.c {
  font-size: 0.45rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.05rem;
}

.d {
  font-size: 0.5rem;
  color: #00a2ff;
}

.btn {
  color: #00a2ff;
  background-color: white;
  border: none;
  font-size: 0.35rem;
  height: 1.2rem;
  line-height: 1.2rem;
  z-index: 3;
}
</style>

