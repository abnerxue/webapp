<template>
  <div class="s-f">
    <van-nav-bar title="二维码" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />

    <div class="s-s">
      <div class="s-d-1">
        <img src="../../../../static/img/myimg.png" class="s-img-1">
        <van-cell value="188****8888" size="large" class="s-right" />
      </div>
      <div class="s-d-2">
        <img src="../../../../static/img/code.png" class="s-img-2">
      </div>
      
    </div>
    <p style="position:absolute;top:68%;left:33%">长按二维码进行识别转账</p>
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
      this.$router.back("/mymessage");
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

.s-f {
  position: relative;
  background-color: #f8f5f5d5;
  height: 100%;
}

.s-s {
  position: absolute;
  top: 15%;
  background-color: white;
  height: 50%;
  width: 80%;
  margin: 0 10%;
}

.s-img-1{
  width: 30%;
  float: left;
}
.s-img-2{
  width: 100%;
  clear: both
}
.s-d-1{
  margin:0.4rem;
  height: 25%;
}

.s-d-2{
  margin:0.6rem 1.2rem 0.4rem 1.2rem;
  height: 70%;
  clear: both
}

.s-right{
  float: right;
  width: 70%;
  margin-top: 0.35rem
}
</style>
