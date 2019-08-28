<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">版本更新</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <div class="s-bgs">
      <van-row style="text-align:center">
        <van-col span="8"></van-col>
        <van-col span="8">
          <img src="../../../../static/img/myimg.png" class="s-img" />
        </van-col>
        <van-col span="8"></van-col>
      </van-row>

      <van-row style="text-align:center">
        <van-col span="8"></van-col>
        <van-col span="8">
          <p class="s-p">常孝天下</p>
        </van-col>
        <van-col span="8"></van-col>
      </van-row>

      <van-row style="text-align:center">
        <van-col span="8"></van-col>
        <van-col span="8">
          <p class="s-pa">V1.0</p>
        </van-col>
        <van-col span="8"></van-col>
      </van-row>
    </div>
    <van-cell-group style="margin-top:0.2rem">
          <van-cell title="版本更新" value="已是最新版本" size="large"/>
      </van-cell-group>
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
    goback() {
      this.$router.back("/aboutus");
    }
  }
};
</script>

<style scoped>
.s-bg{
    background-color: #ededed;
    height: 100%;
    width: 100%
}

.s-bgs{
    background-color: white;
    width: 100%;
    padding-top:0.8rem;
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

.s-img {
  width: 75%;
}

.s-p{
    font-size:0.45rem;
    padding-top: 0.3rem
}

.s-pa{
    font-size:0.3rem;
    padding-top: 0.15rem;
    color: #bcbcbc
}
</style>
