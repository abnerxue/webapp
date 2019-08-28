<template>
  <div>
    <!-- <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="2">
        
      </van-col>
      <van-col span="14"></van-col>
      <van-col span="5">
        
      </van-col>
    </van-row> -->
    <img src="../../static/img/coming.png" style="position:relative"> 
    <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
   
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
     
    };
  },
  methods:{
      goback(){
          this.$router.back('/home')
      }
  }
  
 
};
</script>
<style scoped>
.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
}

.m-header-icon {
  position: absolute;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.6rem;
  color: #070707;
}



</style>
