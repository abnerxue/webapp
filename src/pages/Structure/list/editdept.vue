
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="5">
        <div @click="goback" style="color:#00a2ff;font-size:0.3rem;">取消</div>
      </van-col>
      <van-col span="14">部门设置</van-col>
      <van-col span="5">
        <div @click="onSave" style="color:#00a2ff;font-size:0.3rem;">完成</div>
      </van-col>
    </van-row>

    <van-cell-group style="margin-top:1.2rem;">
      <van-field v-model="dptname" label="部门名称" style="font-size:0.3rem" :readonly="true" />
      <van-field v-model="uName" label="部门主管" style="font-size:0.3rem" right-icon="arrow" :readonly="true" @click="gochoose"/>
      <van-field v-model="coname" label="上级部门" style="font-size:0.3rem" input-align="right" right-icon="ellipsis"/>
    </van-cell-group>

    <van-cell-group style="margin-bottom:-0.2rem;margin-top:0.2rem">
      <van-field label="部门群" style="font-size:0.3rem" :readonly="true" />
      <van-switch-cell v-model="checked1" title="该群包含子部门员工" size="0.4rem" />
    </van-cell-group>
    <div style="width:100%;margin-top:0.2rem;">
      <p class="m-p">开启后，本部门下的子部门员工将被加入该部门群。</p>

      <p class="m-p">权限设置</p>
    </div>
    <van-cell-group style="margin-bottom:-0.2rem">
      <van-switch-cell v-model="checked2" title="隐藏本部门" size="0.4rem" />
    </van-cell-group>
    <div style="width:100%;margin-top:0.2rem;">
      <p class="m-p">隐藏后别人从通讯录中无法看到本部门</p>
    </div>

    <van-cell-group style="margin-bottom:-0.2rem">
      <van-switch-cell v-model="checked3" title="本部门的员工仅可见员工自己" size="0.4rem" />
    </van-cell-group>
    <div style="width:100%;margin-top:0.2rem;">
      <p class="m-p">开启后，本部门员工默认只能看到员工自己，看不到企业其他任何人。使用场景如：供应商之间相互看不见，且不可见企业通讯录，但是可见指定的员工。</p>
    </div>

    <button class="btn" @click="del">删除部门</button>
    <van-dialog
      v-model="show2"
      message="确定删除该部门？（如果删除该部门，则部门群的聊天信息和文件都会删除）"
      show-Confirm-Button
      show-cancel-button
      @confirm="onDelete"
    ></van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
import { Toast } from "vant";
export default {
  data() {
    return {
      dptname: "",
      coname: "",
      id: "",
      uName:'',
      checked1: true,
      checked2: true,
      checked3: true,
      show2: false,
    };
  },
  methods: {
    goback() {
      this.$router.push({
           path: "/member",
            query: {
              dptid: this.$route.query.dptid,
              dptname: this.$route.query.dptname,
              coname: this.$route.query.coname,
              pId:this.$route.query.pId,
              
            }
      });
      },
    top() {
      window.scrollTo(0, 0);
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        coname: this.$route.query.coname,
        dptid: this.$route.query.dptid,
        dptname: this.$route.query.dptname, 
        pId:this.$route.query.pId,
        uName:this.$route.query.uName
      };
      this.coname = this.$route.query.coname.slice(2,8);
      this.dptname = this.$route.query.dptname;
      this.uName = this.$route.query.uName
    },
    gochoose(){
      this.$router.push({
        path:"chooseb",
        query:{
          coname: this.$route.query.coname,
          pId:this.$route.query.pId, //子公司id
          dptid: this.$route.query.dptid,
          dptname: this.$route.query.dptname, 
        }
      })
    },
    onSave() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.dptname,
        parentId: this.$route.query.pId,
        uId:this.$route.query.uId
      };
      console.log(data.name);
      
      this.$ajax
        .post("/cxt/oa/dept/update", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.$router.push({
            path: "/member",
            query: {
              dptid: this.$route.query.dptid,
              dptname: this.$route.query.dptname,
              coname: this.$route.query.coname,
              pId:this.$route.query.pId,
              
            }
          });
        });
    },
    del() {
      this.show2 = true;
    },
    onDelete(){
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.dptid,
        state:1
      };
      

      this.$ajax
        .post("/cxt/oa/dept/update", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.$router.push({
            path:'/department',
            query:{
              pId: this.$route.query.pId,
              name: this.$route.query.name,
              coname: this.$route.query.coname,
            }
          })
        });
    },
    onInput(checked) {
      Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？"
      }).then(() => {
        this.checked = checked;
      });
    }
  },
  created() {
    this.top();
  }
};
</script>

<style scoped>
.m-bg {
  background-color: #ededed;
  height: 100%;
  overflow: hidden;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  background-color: white;
}

.m-icon {
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
  font-size: 0.5rem;
  color: #9a9a9a;
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
}

.line {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.list {
  font-size: 0.35rem;
  text-align: center;
  width: 100%;
}

.btn-a {
  color: white;
  background-color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  font-size: 0.35rem;
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
}
.m-p {
  margin: 0.15rem 0 0.15rem 0.2rem;
  color: #bcbcbc;
}

.van-cell__value {
  position: absolute;
  right: 5%;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
}

.btn {
  width: 100%;
  text-align: center;
  padding: 0.25rem 0;
  background-color: white;
  color: black;
  font-size: 0.32rem;
}
</style>

