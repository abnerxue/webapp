<template>
  <div>
    <van-row class="ss-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="ss-header-icon" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center">转账</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <img src="../../../../static/img/myimg.png" class="ss-imgss" />
    <van-row>
      <van-col span="8"></van-col>
      <van-col span="8">
       <sapn>{{this.$route.query.tel}}</sapn>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="8">
        <van-dropdown-menu active-color="#00a2ff" style="color:#00a2ff">
          <van-dropdown-item v-model="value1" :options="option" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="12">
        <van-cell-group style="padding-bottom:0.04rem">
          <van-field v-model="value" label="个" size="large"/>
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <button class="ss-btnss" @click='caccount'>确认转账</button>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>
<script>
import { Toast } from 'vant';
import Vue from 'vue'
 import global_ from '../../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      value:"",
      value1: 0,
      option: [
        { text: "常孝通", value: 3 },
        { text: "积分", value: 2 },
        { text: "法币", value: 1 }
      ]
    };
  },
  methods: {
    caccount(value,value1){
        let data ={
                  token:this.GLOBAL.token,
                  type:this.value1,
                  tel:this.$route.query.tel,
                  money:this.value
              };
              
              let _this=this;
              this.sj=[{
            
              }];
               this.$ajax.post('/cxt/account/transfer', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => { 
               
         Toast(res.data.msg)
         
       
        });
    },
    onClickLeft() {
      this.$router.back("/account");
    }
  }
};
</script>
<style scoped>
.ss-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.ss-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.ss-imgss {
  width: 20%;
  margin: 10% 0 1% 40%;
}

.ss-btnss{
  background-color: #00a2ff;
  color: white;
  font-size: 0.35rem;
  padding: 0.2rem ;
  text-align: center;
  width:100%;
  margin-top: 1.5rem;
  border-radius: 0.1rem
}
</style>

