<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">风控统计</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-cell-group>
      <van-cell title="大单数量统计"  size="large" @click="golarge"/>
      <van-cell title="异常账号统计"  size="large" @click="goabnormal"/>
      <van-cell title="交易量价格统计"  size="large" @click="goprice"/>
      <van-cell title="开户数值及转常孝通统计"  size="large" @click="goamount"/>
      <van-cell title="账号分笔成交查询"  size="large"/>
     
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
    onClickLeft() {
      this.$router.back("/myswap");
    },
    golarge(){
        this.$router.push("/clarge");
    },
    goabnormal(){
        this.$router.push("/cabnormal");
    },
    goprice(){
        this.$router.push("/cprice");
    },
    goamount(){
        this.$router.push("/camount");
    },
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
