<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon"  @click="goback"/>
      </van-col>
      
      <van-col span="20">如何设置审批人</van-col>
      <van-col span="2">
        <van-icon name="ellipsis" class="m-header-icon2"  />
      </van-col>
    </van-row>
    <img src="../../../../static/img/approval.png" style="margin-bottom:1.1rem"/>
    

    <div class="foot">
      <button class="btn">观看教学视频</button>
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
      checked:false,
    };
  },
  methods: {
    goback(){
        this.$router.push({
          path:'/generalapproval',
          query:{
            id:this.$route.query.id
          }
          })
    },
    top(){
      window.scrollTo(0,0)
    }
  },
  created() {
    this.top()
  }
};
</script>
<style scoped>
.m-bg{
    background-color: #ededed;
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
  text-align: center
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
  right: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.ss{
  font-size:0.35rem;
  padding-top:0.2rem;
  margin-left:0.3rem
}

.foot{
  height: 1.1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 0.02rem solid #ededed
}

.btn{
  background-color: #00a2ff;
  color: white;
  width: 96%;
  height: 0.8rem;
  margin:0.15rem 2%;
  line-height: 0.8rem;
  text-align: center
}
</style>
