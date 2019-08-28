<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">开户数值及转常孝通统计</van-col>
      <van-col span="2"></van-col>
    </van-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back("/statistics");
    }
  }
};
</script>

<style scoped>
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
</style>
