<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">账户分笔成交详情</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="text-align:center;margin-top:0.3rem">
      <van-col span="2"></van-col>
      <van-col span="20">
        <form action="/">
          <van-search v-model="value" @search="onSearch" @cancel="onCancel" />
        </form>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="text-align:center;margin-top:0.3rem">
      <van-col span="8">
        <van-cell title="12345678910" />
      </van-col>
      <van-col span="8"></van-col>
      <van-col span="8">
        <button class="s-btnas">选择日期</button>
      </van-col>
    </van-row>

    <van-row style="margin-top:0.3rem;text-align:center ">
      <van-col span="8">
        <van-cell title="2018/03/21" />
      </van-col>
      <van-col span="6">
        <van-cell value="成交价" />
      </van-col>
      <van-col span="4">
        <van-cell value="数量" />
      </van-col>
      <van-col span="6">
        <van-cell value="03笔" />
      </van-col>
    </van-row>


    <van-row style="margin-top:0.3rem;text-align:center ">
      <van-col span="8">
        <van-cell title="12345678910" />
      </van-col>
      <van-col span="6">
        <van-cell value="16" />
      </van-col>
      <van-col span="4">
        <van-cell value="200" />
      </van-col>
      <van-col span="6">
        <van-cell value="12：20" />
      </van-col>
    </van-row>
    
    <hr />
  </div>
</template>

<script>
import { Search } from 'vant';
export default {
  data() {
    return {
      value: "",
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back("/abnormal");
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
