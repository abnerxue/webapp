<template>
  <div class="a-bg">
    <div class="a-sbg1">
      <p class="a-sbg1-p">用户登录</p>
    </div>
    <div class="a-sbg2">
      <van-cell-group>
        <van-field v-model="value" label="用户名:" label-align="center" label-width="1.6rem"/>
      </van-cell-group>
    </div>
    <div class="a-sbg3">
        <van-field v-model="value" label="输入验证码:" label-align="center" label-width="1.8rem" class="a-sbg3-left"/>
        <button class="a-sbg3-right">获取验证码</button>
    </div>
    <div class="a-sbg4">
        <button class="a-sbg4-btn" @click="goa">登录</button>
    </div>
    <div class="a-sbg5">    
        <p class="a-left">忘记密码</p>        <!-- 没有做路由 -->              
        <p class="a-right">还没有账号，去注册</p>  <!-- 没有做路由 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:""
    };
  },
  methods: {
      goa(){
          this.$router.back('/cstatistics')
      }
  }
};
</script>

<style scoped>
.a-bg {
  background-color: #ededed;
  position: relative;
  height: 100%;
}
.a-sbg1 {
  background-color: white;
  position: absolute;
  top: 23%;
  left: 10%;
  width: 80%;
  height: 10%;
  border: 0.05rem solid #bcbcbc;
}

.a-sbg1-p {
  font-size: 0.4rem;
  text-align: center;
  margin-top: 6%;
}

.a-sbg2 {
  background-color: white;
  position: absolute;
  top: 33%;
  left: 10%;
  margin-top: 0.4rem;
  width: 80%;
  height: 8%;
  border: 0.05rem solid #bcbcbc;
}
.a-sbg3 {
  background-color: white;
  position: absolute;
  top: 44%;
  left: 10%;
  margin-top: 0.4rem;
  width: 80%;
  height: 8%;
  border: 0.05rem solid #bcbcbc;
}

.a-sbg3-left{
    float: left;
    width: 68%
}

.a-sbg3-right{
    float: right;
    width: 32%;
    border-left: 0.05rem solid #bcbcbc;
    height: 100%;
    font-size: 0.25rem
}

.a-sbg4 {
  background-color: white;
  position: absolute;
  top: 58%;
  left: 10%;
  width: 80%;
  height: 10%;
  border: 0.05rem solid #bcbcbc;
}

.a-sbg4-btn{
    height: 100%;
    width: 100%;
    font-size: 0.4rem
}

.a-sbg5 {
  position: absolute;
  top: 70%;
  left: 10%;
  width: 80%;
  height: 5%;
}
.a-left{
    float: left;
}

.a-right{
    float: right;
    padding-left: 14%
}
</style>
