<template>
  <div>
    <div class="header" @click="gosecond">
      完成
    </div>
    <van-row style="text-align:center">
      <van-col span="8"></van-col>
      <van-col span="8">
        <img src="../../../../static/img/icon_success.png" style="width:80%">
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

    <van-row style="text-align:center;margin-top:0.2rem">
      <van-col span="8"></van-col>
      <van-col span="8">
        <p class="success">转出成功</p>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

    <van-row style="text-align:center;margin-top:0.1rem">
      <van-col span="9"></van-col>
      <van-col span="2">
        <p class="left">个</p>
      </van-col>
      <van-col span="4">
        <van-cell value="888" style="font-size:0.5rem;margin-top:0.1rem;text-align:left ; padding-left:0"/>
      </van-col>
      <van-col span="9"></van-col>
    </van-row>

    <van-cell title="转出文交所账户" value="18312312203" :border="false" style="font-size:0.3rem;margin:0.4rem 5%;width:90%;color:#bcbcbc"/>
    <button class="btn" @click="gosecond">继续转出</button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    gosecond(){
      this.$router.push('/Market')
    }
  }

};
</script>
<style scoped>
.header{
  color: #00a2ff;
  height: 5%;
  font-size: 0.35rem;
  text-align: right;
  padding:  0.3rem
}

.success{
  color: #00a2ff;
  font-size: 0.4rem;
  margin-top: 0.2rem
}

.btn{
  color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  width: 90%;
  margin:0.1rem 5%;
  padding: 0.15rem ;
  font-size: 0.35rem
}

.left{
  font-size: 0.3rem;
  color: #9a9a9a;
  margin-top: 0.35rem;
  text-align: right
}

.van-cell__value {
    position: relative;
    overflow: hidden;
    color: black;
    text-align: right;
    vertical-align: middle;
}
</style>
