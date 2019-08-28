<template>
  <div>
    <van-nav-bar title="提现方式" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />
    <div style="background-color:#ededed">
      <van-cell-group style="margin-bottom:0.1rem; padding:0.02rem 0.2rem">
        <van-cell
          title="提现到微信"
          style="font-size:0.3rem"
          icon="../../../../static/img/myswap_wechat.png"
          size="large"
          @click="gowechat"
        />
      </van-cell-group>

      <van-cell-group style="margin-bottom:0.1rem; padding:0.02rem 0.2rem">
        <van-cell
          title="提现到支付宝"
          style="font-size:0.3rem"
          icon="../../../../static/img/myswap_alipay.png"
          size="large"
          @click="goalipay"
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        onClickLeft(){
          this.$router.back('/mycoin')
        },
        goalipay(){
          this.$router.push('/alipay')
        },
        gowechat(){
          this.$router.push('/wechat')
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

.van-cell__left-icon {
    min-width: 1.5em;
    height: 0.5rem;
    font-size: 0.5rem;
    margin-top: 0.01rem
}
</style>
 