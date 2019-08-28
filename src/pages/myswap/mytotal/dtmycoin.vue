<template>
  <div>
    
    <van-nav-bar
      title="提现明细"
      left-arrow
      @click-left="onClickLeft"
      style="background-color:#ededed"
    />
    <hr>
    
   <!--  <div
      style="text-align:center; background-color:#ededed;padding:0.8rem 0;height:40%"
    >
      <div class="mm-p">
        <p>
          总收益（元）
          <span id="mm-s-a">{{tc.all}}</span>
        </p>
      </div>
      </div> -->
     <!--  <van-cell-group style=" padding:0.02rem 0.3rem;">
        <van-cell title="直接佣金" style="font-size:0.3rem" v-model='zj' />
        <van-cell v-for="(item,index) in tc.dirlist" :key="index" :title="item.ctime" :value="item.money" :label="item.message" icon=""/>
      </van-cell-group>
    
    <van-cell-group style=" padding:0.02rem 0.3rem;margin-top：0.5rem">
      <van-cell title="间接佣金" style="font-size:0.3rem" v-model="jj" />
      <van-cell v-for="(item,index) in tc.indlist" :key="index" :title="item.ctime" :value="item.money" :label="item.message"  icon=""/>
    </van-cell-group> -->
    <van-cell v-for="(item,index) in tc.dirlist" :key="index" :title="item.ctime" :value="item.money" :label="item.message" icon=""/>
    
     
    
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
     
      tc:'',
      zj:'',
      jj:'',
      token:'',
      dataList:'',
      
     
      
     
    };
  },

  created(){
       this.getDataList()
        

  },
  methods: {

    getDataList(){
      let data = {
        
        token:this.GLOBAL.token,
        stime:this.$route.query.startTime,
        etime:this.$route.query.endTime
      };
       console.log(data)
      let _this = this;
          this.tc = [{
            all:'',
           
dirmoney:'直接提成总额',
dirlist:'直接提成记录',
ctime:'时间',
money:'金额',
indmoney:'间接提成总额',
indlist:'间接提成记录',
ctime:'时间',
money:'金额'
         /*  zj:'',
          jj:'', */
            
        
          }];
          
      this.$ajax.post('/cxt/account/percentage/history', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data.data);
          this.tc=res.data.data
           this.zj=res.data.data.dirmoney
           this.jj=res.data.data.indmoney
          //  this.all=res.data.data.all 
        });
    },
   
    
    

    onClickLeft() {
      this.$router.push("/mybenefit");
    },
    
    
 
   
    
   
  }
};
</script>

<style scoped>
.van-nav-bar__title {
  color: black;
  font-size: 0.35rem;
  background-color: #ededed;
}

.van-nav-bar .van-icon {
  color: black;
  font-size: 0.4rem;
}
.bor-bottom {
  height: 1rem;
}
.mg {
  background-color: #f3f3f3;
}
.mm-header {
  background-color: #00a2ff;
}

.mm-img {
  width: 15%;
  height: 15%;
}

.mm-p {
  width: 100%;
  text-align: left;
  font-size: 0.4rem;
  margin: 0 0 0 1.5rem;
}

.mm-pp {
  width: 50%;
  font-size: 0.3rem;
  color: #9a9a9a;
  margin: 0.9rem 0 0.8rem 35%;
}

#mm-s-a {
  font-size: 0.5rem;
  color: black;
}

#mm-s-b {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

#mm-s-c {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

#mm-s-d {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}

.mm-p-a {
  font-size: 0.25rem;
  color: #9a9a9a;
  float: left;
}
.m-button-o {
  font-size: 0.35rem;
  margin: 0.3rem 10%;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 80%;
  border-radius: 0.1rem
}

</style>
 

 