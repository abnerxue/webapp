<template>
  <div class="s-bgss">
      <van-row class="s-headerss">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconss" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">绑定上级</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <!-- <van-nav-bar title="即时转账" left-arrow @click-left="onClickLeft" class="s-header" /> -->
    <p class="s-p">请绑定您的上级</p>
    <van-cell-group style="margin:0.3rem 0 ">
      <van-field label="上级ID" label-width="2.5rem" label-align="center" v-model="value" placeholder="请输入上级ID/手机号" />
    </van-cell-group>
    
    <van-button type="default" class="m-buttonss">绑定</van-button>
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
    
  }
};
</script>

<style scoped>
.s-bgss{
    background-color: #ededed;
    height: 100%;
}


.s-p{
    font-size: 0.35rem;
    margin:0.5rem
}

.m-buttonss {
  font-size: 0.38rem;
  margin: 1rem 6%;
  color: white;
  background-color: #00a2ff;
  width: 88%;
  border: none;
  border-radius: 0.1rem
}

.s-headerss {
  height: 1rem;
  line-height: 1rem;
  color: white;
  font-size: 0.35rem;
  background-color: #00a2ff
}

.s-header-iconss {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
</style>
