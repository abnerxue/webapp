<template>
  <div>
    <van-nav-bar title="VIP会员" left-arrow @click-left="onClickLeft" style="background-color:#ededed" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="s-p0">普通会员</p>
        <div style="clear:both">
          <div style="width:20%;float:left;margin-top:0.2rem">
            <img src="../../../../static/img/code.png" class="s-img-c" />
          </div>
          <div style="width:80%;float:right;margin-top:0.2rem">
            <van-cell value="188****8888" size="large" is-link />
            <hr style="width:100%">
          </div>
        </div>
        
        <div style="clear:both">
          <div style="width:20%;float:left;margin-top:0.2rem">
            <img src="../../../../static/img/code.png" class="s-img-c" />
          </div>
          <div style="width:80%;float:right;margin-top:0.2rem">
            <van-cell value="188****8888" size="large" is-link />
            <hr style="width:100%;">
          </div>
        </div>
        <div style="clear:both">
          <div style="width:20%;float:left;margin-top:0.2rem">
            <img src="../../../../static/img/code.png" class="s-img-c" />
          </div>
          <div style="width:80%;float:right;margin-top:0.2rem">
            <van-cell value="188****8888" size="large" is-link />
            <hr style="width:100%">
          </div>
        </div>
        <div style="clear:both">
          <div style="width:20%;float:left;margin-top:0.2rem">
            <img src="../../../../static/img/code.png" class="s-img-c" />
          </div>
          <div style="width:80%;float:right;margin-top:0.2rem">
            <van-cell value="188****8888" size="large" is-link />
            <hr style="width:100%">
          </div>
        </div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
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
.s-img-c {
  width: 70%;
  margin: 0 0.15rem 0 0rem;
}

.s-p0 {
  color: #00a2ff;
  font-size: 0.4rem;
  margin: 1rem 0 0.1rem 0rem;
}
</style>
