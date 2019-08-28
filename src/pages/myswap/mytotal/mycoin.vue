<template>
    <div>
        <van-nav-bar title="我的法币" left-arrow @click-left="onClickLeft" class="mm-header"/>
        <div style="text-align:center;padding:0.6rem 0.8rem 0.3rem 0.6rem; background-color:#ededed">
            <div class="mm-p">
                <p>我的法币</p>
            </div>
            <div>
                <img src="../../../../static/img/myswap_k.png" class="mm-img">
                <p class="mm-pm">
                    <span id="mm-sp-a">{{tc.money}}</span>&nbsp;&nbsp;&nbsp;法币
                </p>
                <!-- <p class="mm-pd" @click="gomycoindetail">提现明细</p> -->
            </div>
            <!-- <van-button type="default" class="m-button-c" @click="gowallet">提现</van-button> -->
        </div>  
        <!-- <div style="text-align:center;padding:0.6rem 0.8rem 0.3rem 0.6rem; background-color:#ededed"> -->
            <!-- <div style="text-align:left; background-color:#ededed">
            <van-cell-group style=" margin-top：0.5rem">
    <van-cell title="开始时间" value="请选择" v-model="startTime" @click="openpicker1" />
    <van-cell title="结束时间" value="请选择" v-model="endTime" @click="openpicker2" />
    </van-cell-group>
    <van-popup position="bottom" v-model="show1" id="p1">
      <van-datetime-picker
        ref="picker1"
        v-model="currentDate1"
        type="date"
        @confirm="confirm1"
        @change="change1"
        @cancel="offpicker1"
      ></van-datetime-picker>
    </van-popup>
    <van-popup position="bottom" v-model="show2" id="p2">
      <van-datetime-picker
        ref="picker2"
        v-model="currentDate2"
        type="date"
        @confirm="confirm2"
        @change="change2"
        @cancel="offpicker2"
      ></van-datetime-picker>
    </van-popup>
            
           
        </div>   -->
       <!--  <div style='text-align:center;'>
            <van-button type="default" class="m-button-c"   @click="approve ">提现明细查询</van-button>
            </div>  -->
         
    </div>
</template>
<script>
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
    data() {
    return{
        currentDate1: new Date(),
      currentDate2: new Date(),
     
      zj:'',
      jj:'',
      token:'',
      dataList:'',
      show1: false,
      show2: false,
      show: false,
      datapick: "false",
      startTime: "", //开始时间(yyyy-MM-dd HH:mm:ss)/入职日期(yyyy-MM-dd HH:mm:ss,时分秒固定为00:00:00)
      endTime: "", //结束时间(yyyy-MM-dd HH:mm:ss)
      tc:'',
        token:''
    }
},
 created(){
     
    this.getDataList()
  },
    methods:{
          confirm1(val) {
      console.log(val);
      this.startTime =
        "" +
        val.getFullYear() +
        "-" +
        (val.getMonth()+1) +
        "-" +
        val.getDate() +
        ""
      // console.log(this.startTime);
      this.show1 = false;
        //  this.startTime =  new Date(val).getTime().format("yyyy-MM-dd hh:mm");
    },
    confirm2(val) {
      console.log(val);
      this.endTime =
        "" +
        val.getFullYear() +
        "-" +
        (val.getMonth()+1) +
        "-" +
        val.getDate() +
        "" 
      console.log(this.endTime);
      this.show2 = false;
      //   this.endTime =  new Date(val).getTime().format("yyyy-MM-dd hh:mm");
    },
         approve() {
       let startTime=this.startTime
      let  endTime=this.endTime
      let t1=(new Date(startTime)).getTime();

      console.log((new Date(startTime)).getTime());
     let t2=(new Date(endTime)).getTime();
      console.log((new Date(endTime)).getTime());
     let d=t1-t2;
    console.log(d);
     
     if(t1> t2){
        Toast('开始时间不能大于结束时间');
        return;
     }
       if( t2=== t1){
        Toast('开始时间不能和结束时间相同');
        return;
     }  
     this.$router.push({
       path:'/dtbenefit',
       query:{
         startTime:startTime,
         endTime:endTime
       }
      
     })

      
    },
        openpicker1() {
      // this.$refs.picker1.open();
      this.show1 = true;
    },
    openpicker2() {
      // this.$refs.picker2.open();
      this.show2 = true;
    },
          getDataList(){
      let data = {
        token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = {
          role:'',
          tel:'',
          img:'',
            
        
          };
         
      this.$ajax.post('/cxt/user/getBalance', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data.data);
          this.tc=res.data.data
        
        
           
        });
    },
       onClickLeft(){
           this.$router.back('/mytotal')
       },
       gomycoindetail(){
           this.$router.push('/mycoindetail')
       },
       gowallet(){
           this.$router.push('/wallet')
       }
    }
}
</script>
 <style scoped>
 .mm-header{
     background-color:#00a2ff;
 }
 .van-nav-bar__title {
 color:white;
 font-size: 0.35rem
 }

 .van-nav-bar .van-icon {
    color: white;
    font-size: 0.4rem
}

.mm-img{
    width: 15%;
    height: 15%
}

.mm-p{
    text-align: left;
    font-size: 0.3rem;
    margin-bottom: 0.2rem
}

.mm-pm{
    font-size: 0.3rem;
    color: #9a9a9a;
    margin: 0.2rem 0 0 15%
}
 .mm-pd{
    font-size: 0.3rem;
    color: #00a2ff;
    margin: 0.3rem 0 0.2rem 0
}

 .m-button-c {
     text-align: center;
  font-size: 0.3rem;
  margin: 0.3rem 0 0.15rem 0;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 35%;
  border-radius: 0.1rem
}

#mm-sp-a{
    font-size: 0.45rem;
    color:black;
}



</style>
 