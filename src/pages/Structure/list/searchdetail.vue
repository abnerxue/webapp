<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="18">{{this.$route.query.coname.slice(0,12)}}<span>...</span></van-col>
      <van-col span="2">
        <van-icon name="ellipsis" class="m-header-right-icon" @click="writeMessageShow=true" />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <div class="wmassageMask" v-show="writeMessageShow" @click="writeMessageFun($event)">
      <div class="corner"></div>
      <div class="messageMaskContent" ref="msk">
        <div @click="change(memberdetail.id)">
          <van-row>
            <van-col span="6">
              <van-cell icon="edit" style="color:#00a2ff;float:left" />
            </van-col>
            <van-col span="1"></van-col>
            <van-col span="17" style="text-align:left">
              <van-cell title="编辑" />
            </van-col>
          </van-row>
        </div>
        <div @click="del">
          <van-row>
            <van-col span="6">
              <van-cell icon="delete" style="color:#00a2ff;float:left" />
            </van-col>
            <van-col span="1"></van-col>
            <van-col span="17" style="text-align:left">
              <van-cell title="删除" />
            </van-col>
          </van-row>
          <van-dialog v-model="show1" message="确认删除？" show-Confirm-Button @confirm="onDelete"></van-dialog>
        </div>
      </div>
    </div>

    <div>
      <div class="m-top">
        <van-row style="text-align:center">
          <van-col span="8"></van-col>
          <van-col span="8">{{this.$route.query.dptname}}</van-col>
          <van-col span="8"></van-col>
        </van-row>
      </div>
      <div class="top">
        <van-row style="text-align:center">
          <van-col span="8"></van-col>
          <van-col span="8">{{memberdetail.name}}</van-col>
          <van-col span="8"></van-col>
        </van-row>
      </div>
    </div>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">职务</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.title}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <hr />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">姓名</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.name}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <hr />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">电话</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem">{{memberdetail.phone}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <hr />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">工作年限</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem"></van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <hr />
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="margin-top:0.2rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:#9a9a9a;font-size:0.35rem">简历</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22" style="color:black;font-size:0.38rem"></van-col>
      <van-col span="1"></van-col>
    </van-row>
    <van-row style="margin-top:0.1rem">
      <van-col span="1"></van-col>
      <van-col span="22">
        <hr />
      </van-col>
      <van-col span="1"></van-col>
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
      memberdetail: "",
      id: "",
      name: "",
      writeMessageShow: false,
      show1:false
    };
  },
  methods: {
    
    writeMessageFun(ev) {
      if (!this.$refs.msk.contains(ev.target)) {
        this.writeMessageShow = false;
      }
    },
    goback() {
      this.$router.push({
          path:'/department',
          query:{
              coname: this.$route.query.coname,
              pId: this.$route.query.pId,
          }
      });
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.id,
        
      };
      console.log(data.id);
      this.memberdetail = {
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
      };
      this.$ajax
        .post("/cxt/oa/member/info", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.memberdetail = res.data.data;
          
        });
    },
    change() {
      this.$router.push({
        path:'/edit',
        query:{
          id: this.$route.query.id,//成员id
          coname: this.$route.query.coname,
          dptname:this.$route.query.dptname,
          pId: this.$route.query.pId,
          dptid: this.$route.query.dptid,
        }
      })
    },
    del(){
      this.show1=true
    },
    onDelete(){
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.id, //成员id
        state:1
      };
     

      this.$ajax
        .post("/cxt/oa/member/update", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.$router.push({
            path:'/member',
            query:{
              dptname:this.$route.query.dptname,
              dptid: this.$route.query.dptid,
              coname: this.$route.query.coname,
              pId: this.$route.query.pId,
            }
          })
        });
    },
  },
  created() {
    this.top();
    this.getList();
    
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
  padding-bottom: 1rem;
  position: relative;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: white;
  font-size: 0.4rem;
  background-color: #00a2ff;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: white;
}

.m-top {
  height: 1rem;
  line-height: 1rem;
  color: black;
  font-size: 0.4rem;
  background-color: #00a2ff;
}
.top {
  height: 1.4rem;
  line-height: 1.4rem;
  color: black;
  font-size: 0.4rem;
  background-color: #00a2ff;
}

.m-header-right-icon {
  position: absolute;
  top: 0.25rem;
  font-size: 0.5rem;
  color: white;
}
.wmassageMask {
  background-color: #0707078a;
  z-index: 5;
  width: 100%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
}
.messageMaskContent {
  background-color: white;
  z-index: 6;
  width: 30%;
  position: absolute;
  top: 1.2rem;
  right: 0.1rem;
  border: 0.05rem solid white;
  border-radius: 0.15rem;
}

.corner {
  width: 0px; /*  宽高设置为0，很重要，否则达不到效果 */
  height: 0px;
  border: 0.2rem solid white;
  border-top-color: transparent; /* 设置透明背景色 */
  border-left-color: transparent;
  border-right-color: transparent;
  position: absolute;
  right: 0.5rem;
  top: 0.79rem;
}
</style>