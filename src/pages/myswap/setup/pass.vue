<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">实名认证</van-col>
      <van-col span="2"></van-col>
    </van-row>
    
    <div class="s-bgs">
      <img src="../../../../static/img/icon_authentication.png" class="s-img">
      <p class="s-p">待认证</p>
    </div>
    <van-cell-group style="margin-top:0.2rem">
      <van-cell title="真实姓名"  value="李**" size="large"/>
      <van-cell  title="身份证号码" value="3205**********2013" size="large"/>
    </van-cell-group>


  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      idnum:"",
      telnum:"",
      code:""
    };
  },
  methods: {
    goback() {
      this.$router.back("/set");
    },
    
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  width: 100%;
}

.s-bgs {
  background-color: white;
  width: 100%;
  text-align: center;
  padding-bottom: 1rem
}


.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-img{
    width: 30%;
    margin-top: 1rem
}

.s-p{
    color: #00a2ff;
    font-size: 0.5rem;
    margin-top: 0.5rem;
}
</style>
