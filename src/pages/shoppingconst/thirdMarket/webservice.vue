<template>
  <div class="m-main">
    <h1 class="m-h">三级市场</h1>
    <hr>
    <br><br><br><br><br><br>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-cell-group>
          <van-field
            label="支付宝"
            size="large"
          />

          <van-field
            label="微信"
            size="large"
          />
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <br>
    <van-row>
      <van-col span="8"></van-col>
      <van-col span="8">
        <button type="submit" class="m-button">提交</button>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
    <van-tabbar v-model="active">
       <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:2,
       images: [
       
      ]
    };
  }
};
</script>
<style scoped>
.m-h {
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: white;
}

.m-main {
  background: rgba(179, 178, 178, 0.555);
  height: 13rem;
}

.m-button {
  margin: 1.5rem auto;
  width: 100%;
  height: 0.8rem;
  font-size: 0.3rem;
  border-radius: 0.02rem;
  background-color: rgb(16, 109, 196);
  color: white;
  
}
</style>
