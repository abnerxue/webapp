<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">制定批发常孝通价格</van-col>
      <van-col span="2"></van-col>
    </van-row>
     <van-row style="margin-top:0.5rem;text-align:left;border:none;">
      <van-col span="2"></van-col>
      <van-col span="12"><p class="s-pas">当前批发常孝通价格(单价)</p></van-col>
      <van-col span="10"></van-col>
    </van-row>
    <van-row style="margin:0.5rem 0 0 .5rem;text-align:left;font-size:.5rem">
    
       <van-col span="2">￥</van-col>
      <van-col span="20">
        <van-cell-group :border="false" >
         {{this.listo}}
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    

    <van-row style="margin-top:0.5rem;text-align:left">
      <van-col span="2"></van-col>
      <van-col span="12"><p class="s-pas">制定批发常孝通价格(单价)</p></van-col>
      <van-col span="10"></van-col>
    </van-row>
     <van-row style="text-align:left;font-size:.5rem">
    <van-cell style="font-size:.5rem" title="开始时间"  value="请选择" v-model="startTime" @click="openpicker1" />
    
    </van-row>
    <van-row style="text-align:left;font-size:120px;">
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-cell-group>
          <van-field style="font-size:.6rem" v-model="p" label="￥" />
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-popup position="bottom" v-model="show1" id="p1">
      <van-datetime-picker
        ref="picker1"
        v-model="currentDate1"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm1"
        @change="change1"
        @cancel="offpicker1"
      ></van-datetime-picker>
    </van-popup>

    <div class="s-contain">
        <button class="s-btn" @click='confirms()'>确定</button>
    </div>
        
     
  </div>
</template>

<script>
import { Toast } from 'vant'; 
export default {
  data() {
    return {
      minDate: new Date(),
      maxDate: new Date(2020, 10, 1),
       show1: false,
        startTime: "",
      d: "",
      p:'',
      listo:''
    };
  },
  created(){
     this.getDataList()
  },
  methods: {
     handleConfirm(time) {
      console.log(time);
      // this.startTime =  new Date(time).format("yyyy-MM-dd hh:mm");
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
      openpicker1() {
      // this.$refs.picker1.open();
      this.show1 = true;
    },
    goback(){
      this.$router.push('/myswap')
    },
    confirms(){

      let data = {
         token:this.GLOBAL.token,
         price:this.p,
         eday:this.startTime
      };
     console.log( data)
     
      let _this = this;
          this.lists =[{
         
         title:'',
         message:'',
         ctime:''
            
        
          }] 
         
      this.$ajax.post('/cxt/system/priceFix', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          Toast(res.data.msg)
        /*   this.p.title=res.data.title,
          this.p.value=res.data.message,
          this.p.label=res.data.ctime */
          console.log(res.data)
         
         
        
           
        });
    },
     getDataList(){

      let data = {
         token:this.GLOBAL.token,
        
      };
     
     
      let _this = this;
          this.listo =''
         
      this.$ajax.post('/cxt/system/priceNow', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data)
          if(res.data.state==='000'){
              this.listo=res.data.data
              console.log(this.listo)
          }else{
            Toast(res.data.msg)
          }
         
         
         
        
           
        });
    },
  },
  

};
</script>

<style scoped>
.s-headeras {
  /* position:fixed; */
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

.s-contain{
    width: 100%;
    height: 20%;
    
}
.s-btn{
    width: 90%;
    color: white;
    background-color: #00a2ff;
    margin:1.5rem 5%;
    font-size: 0.4rem;
    padding: 0.2rem 0
}

.s-pas{
  color: #bcbcbc;
  font-size: 0.3rem
}

.s-btnas{
  background-color: #ededed;
  padding: 0.15rem 0.35rem;
  font-size: 0.2rem;
  border-radius: 0.3rem
}
</style>
