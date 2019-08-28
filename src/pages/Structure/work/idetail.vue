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
      <van-col span="14">{{this.$route.query.approvalName}}</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;">更多</div>
      </van-col>
    </van-row>
    
    <div style="margin-top:1rem">
      <van-row class="main">
        <van-col span="6">
          <div class="round">
          {{this.$route.query.username.slice(-1)}}
          </div>
        </van-col>
        <van-col span="14">
          <div class="a">{{this.$route.query.username}}</div>
          <div class="b">{{this.statename}}</div>
        </van-col>
        <van-col span="4" class="b"></van-col>
      </van-row>
    </div>
    <hr>
    <div style="margin:0.15rem 0 0.15rem 0.2rem">
      <van-row style="margin-bottom:0.15rem">
        <van-col span="6" class="b">审批编号</van-col>
        <van-col span="18" class="c">{{this.$route.query.approvalSn}}</van-col>
      </van-row>

      <van-row style="margin-bottom:0.15rem">
        <van-col span="6" class="b">所在部门</van-col>
        <van-col span="18" class="c">{{this.$route.query.department}}</van-col>
      </van-row>

      <van-row style="margin-bottom:0.2rem">
        <van-col span="6" class="b">申请内容</van-col>
        <van-col span="18" class="c">{{this.str}}</van-col>
      </van-row>
    </div>
    <div class="grey"></div>
    <div style="margin-top:0.2rem">
      <van-row>
        <van-col span="6">
          <div class="round">
            {{this.$route.query.username.slice(-1)}}
          </div>
        </van-col>
        <van-col span="11" class="aa">我&nbsp;&nbsp;发起申请</van-col>
        <van-col span="3" class="d">{{this.$route.query.ctime.slice(5,10)}}</van-col>
        <van-col span="4" class="d">{{this.$route.query.ctime.slice(11,16)}}</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      statename:'',
      detailsOfApproval:'',
      content:'',
      str:''
    };
  },
  methods: {
    gofirst() {
      this.$router.push("/work");
    },
    goback() {
      this.$router.push("/isend");
    },
    top(){
      window.scrollTo(0,0)
      let state = this.$route.query.state;
      let content = JSON.parse(this.$route.query.content);
      this.str = content.detailsOfApproval
      
      if(state==0){
            this.statename="待审批"
          }else if(state==1){
            this.statename="审批通过"
          }else if(state==2){
            this.statename="拒绝"
          }else{
            this.statename="撤回"
          }
    },
    
  },
  created() {
    // this.getList();
    this.top()
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

.round{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.9rem;
  line-height: 0.9rem;
  background-color: #00a2ff;
  text-align: center;
  color: white;
  font-size: 0.35rem;
  margin: 0 auto
}
.main{
  /* background-color: #dff2fd; */
  margin-top: 0.2rem ;
  padding: 0.2rem 0 0.2rem 0;
  font-size:0.3rem
}
.a{
  font-size: 0.35rem;
  color: black;
}

.b{
  color: #9a9a9a;
  font-size: 0.35rem
}

.c{
  font-size: 0.3rem;
  color: black;
}

.d{
  color: #9a9a9a;
  font-size: 0.3rem;
  height: 0.9rem;
  line-height: 0.9rem
}

.grey{
  background-color: #e7e7e7;
  height: 0.3rem;
  width: 100%;
}
.aa{
  font-size: 0.35rem;
  color: black;
  height: 0.9rem;
  line-height: 0.9rem
}
</style>
