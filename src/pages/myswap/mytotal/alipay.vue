<template>
    <div >
        <van-nav-bar title="管理支付宝" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
        <van-cell-group class="ss">
        <van-field v-model="value" label="支付宝账号" placeholder="请输入支付宝账号" />
      </van-cell-group>
      <div  style="text-align:center;padding:0.6rem 0.8rem 0.6rem 0.6rem">
          <van-button type="default" class="m-button-s">确定</van-button>
      </div>
      
    </div>
</template>
<script>
export default {
    data(){
        return {
            value:""
        }
    },
    methods:{
        onClickLeft(){
            this.$router.back('/wallet')
        }
    }
}
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

.ss{
    padding:0.5rem 0 0.1rem 0.2rem;
}

 .m-button-s {
  font-size: 0.3rem;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 96%;
  margin-top: 0.4rem;
  border-radius: 0.1rem
}
 </style>
 