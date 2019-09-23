<template>
  <div>
    <van-row class="m-header">
      <van-col span="3">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="14">{{this.$route.query.name}}</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;"></div>
      </van-col>
    </van-row>
    <van-cell-group style="margin-top:1rem">
      <van-field v-model="content" type="textarea" placeholder="请输入审批意见" rows="10" autosize />
    </van-cell-group>
    <div class="footer">
        <div style="margin:0.2rem 0.3rem">
            <van-icon name="star-o" class="m-icon" @click="goa"/>
            <van-icon name="star-o" class="m-icon"/>
            <van-icon name="star-o" class="m-icon"/>
        </div>
        <hr>
        <br>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"/>
            <span style="font-size:0.3rem">审批意见通过聊天转发给</span>
        </div>
        <button class="btn" @click="onsubmit">
            提交
        </button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
import { Toast } from 'vant';
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      active: 2,
      content: ""
    };
  },
  methods: {//oa系统
    goback() {
      this.$router.push({
          path:"/details",
          query:{
              id:this.$route.query.id
          }
      });
    },
    onsubmit(){
      let _this=this
      let data = {
        token:this.GLOBAL.token,
        id:this.$route.query.id,
        state:this.$route.query.state
      }
      console.log(data)
      this.$ajax.post("/cxt/oa/approval/commit", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          console.log(res.data)
          Toast(res.data.msg)
          this.$router.push('/approvalofme')
        });
    },
    goa(){
      this.$router.push({
        path:"/a",
        query:{
          id:this.$route.query.id
        }
      })
    }
    
  }
};
</script>
<style scoped>
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
  margin-top: 0.25rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.btn {
  background-color: #00a2ff;
  color: white;
  width: 96%;
  height: 0.9rem;
  margin: 0.15rem 2%;
  line-height: 0.9rem;
  text-align: center;
  font-size: 0.35rem
}
.footer{
    position: fixed;
    bottom: 0;
    width: 100%
}

.m-icon{
    font-size: 0.5rem
}
</style>
