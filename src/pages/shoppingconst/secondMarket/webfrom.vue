<template>
  <div>
    <van-nav-bar title="文交所信息" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <div class="m-top">
      可转常孝通&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>10,000</span>
    </div>
    <div class="m-mid">转出常孝通</div>
    <van-cell-group>
      <van-field   label="个" value="" class="m-cell"/>
    </van-cell-group>
    <div class="m-mid">文交所账户</div>
    <van-cell-group>
      <van-field   class="m-cell"/>
    </van-cell-group>
    <van-button type="default" class="m-button-l">确认转出</van-button>
    <p>若您还<span style="color:#00a2ff">没有深圳文交所账号</span></p>
    <p>请前往<span style="color:#00a2ff">深圳文交所</span>APP进行注册</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:""
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back("/Market");
    }
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
.m-top {
  margin: 0.8rem 0 0.8rem 0.6rem;
  font-size: 0.3rem;
  color: #9a9a9a;
}

.m-mid {
  margin: 0.3rem 0 0.3rem 0.6rem;
  font-size: 0.3rem;
}

.m-cell {
  margin: 0 0.3rem 0 0.3rem;
  font-size: 0.4rem;
}
.m-button-l {
  font-size: 0.3rem;
  margin: 0.3rem 8% 0 8%;
  color: white;
  background-color: #00a2ff;
  width: 84%;
  border: none;
  border-radius: 0.1rem
}

p{
  margin: 0.1rem 8% 0 8%;
  color: #9a9a9a
}
</style>
