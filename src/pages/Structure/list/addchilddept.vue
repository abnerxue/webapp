
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="5">
        <div @click="goback" style="color:#00a2ff;font-size:0.3rem;">取消</div>
      </van-col>
      <van-col span="14">添加子部门</van-col>
      <van-col span="5">
        <div @click="onSave" style="color:#00a2ff;font-size:0.3rem;">完成</div>
      </van-col>
    </van-row>
    
    <div style="margin-top:1rem;margin-bottom:-0.2rem">
      <van-field v-model="dptname" label="部门名称" placeholder="必填" style="font-size:0.3rem" />
      <van-field  label="上级部门" v-model="namea" style="font-size:0.3rem" :readonly="true" input-align="right"/>

    <div style="height:0.2rem;background-color:#ededed;width:100%;margin-top:0.2rem"></div>

    <van-cell-group style="margin-bottom:-0.2rem">
      <van-switch-cell v-model="checked" title="创建部门群" size="0.45rem"/>
    </van-cell-group>
    <div style="width:100%;margin-top:0.2rem">
      <p class="m-p">
        创建一个关联此部门的部门群，部门成员会被自动加入
      </p>
    </div>
  </div>
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
      dptname:'',
      coname:'',
      namea:'',
      id:'',
      checked:true
    };
  },
  methods: {
    goback() {
      this.$router.push({
        path: "/member",
            query: {
              dptname: this.namea,
              dptid: this.$route.query.dptid,
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
        namea: this.$route.query.dptname,
        dptid: this.$route.query.dptid,
        coname: this.$route.query.coname,
      };
      this.namea=this.$route.query.dptname
    },
    onSave() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.dptname,
        parentId:this.$route.query.dptid
      };
      console.log(data.name);

      this.$ajax
        .post("/cxt/oa/dept/insert", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
            console.log(res.data)
          Toast(res.data.data)
          this.$router.push({
            path: "/member",
            query: {
              dptname: this.namea,
              dptid: this.$route.query.dptid,
              coname: this.$route.query.coname,
              pId:this.$route.query.pId,
            }
          });
          
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
  background-color: white;
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
  background-color: white
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
.m-p{
  margin:0.1rem 0 0.1rem 0.2rem;
  color: #bcbcbc
}



</style>

