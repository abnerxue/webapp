<template>
  <div>
    <div class="header" @click="gosecond">
      退出
    </div>
    <van-row style="text-align:center">
      <van-col span="8"></van-col>
      <van-col span="8">
        <img src="../../../../static/img/icon_fail.png" style="width:80%">
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

    <van-row style="text-align:center;margin-top:0.2rem">
      <van-col span="8"></van-col>
      <van-col span="8">
        <p class="fail">转出失败</p>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>


    
    <button class="btn" @click="gosecond">重新转出</button>
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

.fail{
  color: #9a9a9a;
  font-size: 0.4rem;
  margin-top: 0.2rem
}

.btn{
  color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  width: 90%;
  margin:1.2rem 5%;
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
