<template>
  <div class="s-bg">
    <van-nav-bar title="提现" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <van-cell-group class="ss1">
      <van-cell
        title="提现到微信"
        is-link
        style="font-size:0.35rem"
        icon="../../../../static/img/myswap_wechat.png"
      />
    </van-cell-group>
    <van-cell-group class="ss">
      <van-cell  title="提现金额"  :border="false"/>
      <van-field  label="￥"  class="s-b" :border="false"/>
      <van-cell  value="可用余额4100元"  :border="false"/>
      
    </van-cell-group>
    <div style="text-align:center;padding:0.6rem 0.8rem 0.6rem 0.6rem">
      <van-button type="default" class="m-button-s">确定</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back("/wallet");
    }
  }
};
</script>
 <style scoped>
.s-bg{
  background-color: #ededed;
  height: 100%;
}

.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}

.ss1 {
  padding: 0.5rem 0 0.2rem 0.2rem;
}

.ss {
  padding: 0.15rem 0 0.2rem 0.2rem;
  margin-top: 0.2rem;
}

.m-button-s {
  font-size: 0.3rem;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 96%;
  margin-top: 0.4rem;
  border-radius: 0.1rem
}

.van-cell__left-icon {
    min-width: 1.5em;
    height: 0.8rem;
    font-size: 0.8rem;
    margin-top:-0.2rem
}

.s-b{
  font-size: 0.5rem
}

.van-cell__value--alone {
    color: #9a9a9a;
    text-align: left;
}
</style>
 