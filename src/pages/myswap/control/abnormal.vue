<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">异常账号统计</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="text-align:center;margin-top:0.3rem">
        <van-col span="8"><p class="s-pas">2018/06/21</p> </van-col>
        <van-col span="8"></van-col>
        <van-col span="8"><button class="s-btnas">选择日期</button></van-col>
    </van-row>
    <van-row style="margin-top:0.3rem ">
        <van-col span="12"><van-cell title="单笔数据异常账号" /></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"><van-cell value="03笔" /></van-col>
    </van-row>
    <van-row >
        <van-col span="14"><van-cell title="15123145672" /></van-col>
        <van-col span="4"><van-cell title="600" /></van-col>
        <van-col span="6"><van-cell value="14:21" is-link @click="gotrade"/></van-col>
    </van-row>
    <hr>
    <van-row style="margin-top:0.3rem ">
        <van-col span="12"><van-cell title="多笔数据异常账号" /></van-col>
        <van-col span="6"></van-col>
        <van-col span="6"><van-cell value="03笔" /></van-col>
    </van-row>
    <van-row >
        <van-col span="14"><van-cell title="15123145672" /></van-col>
        <van-col span="4"><van-cell title="600" /></van-col>
        <van-col span="6"><van-cell value="14:21" is-link /></van-col>
    </van-row>
    <hr>
     
    
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
      this.$router.back("/statistics");
    },
    gotrade(){
        this.$router.push("/trade");
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
