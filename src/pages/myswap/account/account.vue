<template>
  <div class="s-bgss">
      <van-row class="s-headerss">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconss" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">即时转账</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <!-- <van-nav-bar title="即时转账" left-arrow @click-left="onClickLeft" class="s-header" /> -->
    <van-cell-group style="margin:0.3rem 0 ">
      <van-field label="对方账户" label-width="2.5rem" label-align="center" v-model="value" placeholder="对方手机号" />
    </van-cell-group>
    <p class="s-pss">积分或常孝通将实时转入对方账户，无法退还</p>
    <van-button type="default" class="m-buttonss" @click="gomyaccount">下一步</van-button>
  </div>
</template>

<script>
import { Toast } from 'vant';
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
    gomyaccount(value){
      if(value===''){
        Toast('手机号不能为空')
      }else{
        this.$router.push({
          path:'/myaccount',
        query:{
           tel:this.value
           
        },
       
        }); 
      }
       
    }
  }
};
</script>

<style scoped>
.s-bgss{
    background-color: #ededed;
    height: 100%;
}


.s-pss{
    font-size: 0.25rem;
    margin-left: 0.5rem
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
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: white
}

.s-header-iconss {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
</style>
