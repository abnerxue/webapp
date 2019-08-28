<template>
  <div>
    <van-nav-bar title="密码错误" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <img src="../../../static/img/psderror.png" class="s-imgss">
        <p class="s-pss">您已3次密码失误</p>
        <p class="s-pss">请于24小时后，重新尝试</p>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
    
  </div>
</template>
 <script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
      /* onClickLeft(){
          this.$router.back('/load')
      } */
  }
};
</script>
 
 <style scoped>
 .van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.s-header {
  background-color: #ededed;
}
 .s-imgss{
     width: 23%;
     margin: 1.3rem 37% 1.1rem 37%;
    
 }

.s-pss{
    text-align: center;
    font-size: 0.5rem;
    margin-top: 0.2rem
}
</style>
 
