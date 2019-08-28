<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  @click="goback"/><!-- 需要做跳转 -->
      </van-col>
      <van-col span="20" style="text-align:center">身份验证</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <div style="text-align:center">
      <p class="s-p">
        本次操作需要短信确认，请输入
        <span style="color:black" id="myNumber">
          <br />{{tc.tel}}
        </span>收到的短信验证码
      </p>
      <!-- 密码输入框 -->
      <!-- <van-password-input :value="value"  @focus="showKeyboard = false" /> -->
      <van-field v-model='value' placeholder="请输入验证码"></van-field>
      <!-- 数字键盘 -->
      <!-- <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        
      /> -->
       <button class="s-btn" @click="setout">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tc:"",
      username: "",
      idnum: "",
      telnum: "",
      code: "",
      value: "",
      showKeyboard: true
    };
  },
  methods: {
    setout(){
      this.$router.push({
        path:'resetpay',
        query:{
          vcode:this.value
        }
      })
    },
    goback(){
      this.$router.back('/set')
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    getDataList(){
      let data={

      };
      let _this = this;
      this.tc={
        tel:'',
      };
      this.$ajax.post('/cxt/user/getInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          // console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
        });
    },
  sendcode(){
    let _this = this;                     
                let data = {
                  token:this.GLOBAL.token,
                //    pageNum : this.pageNum,
                tel: this.tel,
                // type:'newPhone',
                ctime:''
                };                    

                this.$ajax.post('/cxt/system/check',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   
                   console.log(res.data.data);
               });
  }
  },
  created(){
    this.getDataList()
    this.sendcode()
  }
};
</script>

<style scoped>
.s-btn{
    background-color: #00a2ff;
    color: white;
    font-size: 0.35rem;
    width: 80%;
    margin: 1.2rem 10%;
    padding:0.2rem 0;
    border-radius: 0.1rem
}
.s-headeras {
  height: 0.9rem;
  line-height: 0.9rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-p {
  color: #9a9a9a;
  font-size: 0.35rem;
  margin: 0.7rem 0 1.2rem 0;
}

ul li{
  list-style: none;
}
</style>
