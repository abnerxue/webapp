<template>
  <div>
    <!-- <div>{{token}}</div> -->
    <van-nav-bar
      title="我的收益"
      left-arrow
      @click-left="onClickLeft"
      style="background-color:#ededed"
    />
    <hr>
    
    <div
      style="text-align:center; background-color:#ededed;padding:0.8rem 0;height:40%"
    >
      <div class="mm-p">
        <p>
          总收益（元）
          <span id="mm-s-a">{{tc.all}}</span>
        </p>
      </div>
      </div>
      <van-cell-group style=" padding:0.02rem 0.3rem;">
        <van-cell title="直接佣金" style="font-size:0.3rem" v-model='zj' />
      
      </van-cell-group>
    
    <van-cell-group style=" padding:0.02rem 0.3rem;margin-top：0.5rem">
      <van-cell title="间接佣金" style="font-size:0.3rem" v-model="jj" />
    
    </van-cell-group>
    <van-cell-group style=" padding:0.02rem 0.3rem;margin-top：0.5rem">
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
     
    <van-popup v-model="show">内容</van-popup>
          <van-button type="default" class="m-button-o" @click="approve">查询</van-button>
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
      currentDate1: new Date(),
      currentDate2: new Date(),
      tc:'',
      zj:'',
      jj:'',
      token:'',
      dataList:'',
      show1: false,
      show2: false,
      show: false,
      datapick: "false",
      startTime: "", //开始时间(yyyy-MM-dd HH:mm:ss)/入职日期(yyyy-MM-dd HH:mm:ss,时分秒固定为00:00:00)
      endTime: "" //结束时间(yyyy-MM-dd HH:mm:ss)
    };
  },

  created(){
       this.getDataList()
        

  },
  methods: {

    getDataList(){
      let data = {
        
        token:this.GLOBAL.token
      };
       console.log(data)
      let _this = this;
          this.tc = [{
            all:'',
          zj:'',
          jj:'',
            
        
          }];
          
      this.$ajax.post('/cxt/account/percentage/count', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.zj=res.data.data.zj
           this.jj=res.data.data.jj
           this.all=res.data.data.all
        });
    },
    offpicker1() {
      this.show1 = false;
    },
    offpicker2() {
      this.show2 = false;
    },
    choses() {
      console.log(this);
      if (!this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    openpicker1() {
      // this.$refs.picker1.open();
      this.show1 = true;
    },
    openpicker2() {
      // this.$refs.picker2.open();
      this.show2 = true;
    },

    onClickLeft() {
      this.$router.push("/myswap");
    },
    gomycoin() {
      this.$router.push("/mycoin");
    },
    gomycxt() {
      this.$router.push("/mycxt");
    },
    gomypoints() {
      this.$router.push("/mypoints");
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
    change1(e) {
      console.log(e.getValues());
    },
    change2(e) {
      console.log(e.getValues());
    },
    handleConfirm(time) {
      console.log(time);
      // this.startTime =  new Date(time).format("yyyy-MM-dd hh:mm");
    },
    handleConfirm2(time) {
      console.log(time);
      // this.endTime =  new Date(time).format("yyyy-MM-dd hh:mm");
    }
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
 

 