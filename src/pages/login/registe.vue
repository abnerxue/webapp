<template>
  <div class="mm-bg">
    <div class="mm-pb">
      <p>用户注册</p>
    </div>
    <img src="../../../static/img/co-logo-name.png" class="mm-imga" />

    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入手机号" />
          <van-field v-model="sms" center clearable placeholder="请输入验证码">
            <van-button slot="button" size="small" class="mm-btn-active"  @click="sendCode" v-if="!isTimeout">
                    <span class="word-time"></span>
                    <a class="resend">获取验证码</a>  </van-button>
          </van-field>
        </van-cell-group>
         <van-button type="default" class="m-button-ls" @click="registerFun">注册</van-button>
        <p class="m-ps">
          已有账户直接
          <span style="color:#00a2ff" @click="goload">登录</span>
        </p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data(){
    return{
      value:"",
      sms:""
    }
  },
  mounted(){
        window.setToken = (b) => {
            this.setToken(b)
        }
       
  },
  methods: {
     countDown(){
			let self = this;
            this.isTimeout=true;
            this.timer=setInterval(function(){
                if(self.time>0 && self.time <=60 && self.isTimeout){
                    self.time--;
                }else{
                    clearInterval(self.timer);
                    self.btnStr='重新获取';
                    self.isTimeout=false;
                    self.time=60;
                }
			},1000)
		},
    sendCode(){
        let self = this;
            let telreg=/^[1][0-9]{10}$/;
            let myreg=/^[\S]{6,20}$/;
            if(!telreg.test(self.value)){
                Toast('手机号格式错误！');
                return
            }
            
         var countdown=60; 
        function sendemail(){
            var obj = $(".word-time");
            settime(obj);
        }
        function settime(obj) { //发送验证码倒计时
            if (countdown == 0) { 
                obj.attr('disabled',false); 
                //obj.removeattr("disabled"); 
                obj.text("没有收到验证码?    ");
                $(".resend").text("    重新发送");
                countdown = 60; 
                return;
            } else { 
                obj.attr('disabled',true);
                obj.text("重新发送    (" + countdown + ")");
                 $(".resend").text("");
                countdown--; 
            } 
            setTimeout(function() { 
                settime(obj);
            },1000); 
        }
        sendemail();
        $(".next-btn").prop("disabled",true);//禁用
               
     //获取列表数据    
                let _this = this;                     
                let data = {
                //    pageNum : this.pageNum,
                tel:_this.value,
                type:'register',
                ctime:''
                };                    

                this.$ajax.post('/cxt/base/vcode',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   Toast(res.data.data);
                   console.log(res.data.data);
               });
            
  },
   
     registerFun(){
    
     //获取列表数据    
                let _this = this;                     
                let data = {
                //    pageNum : this.pageNum,
                tel:_this.value,
              
                vcode:_this.sms
                };                    

                this.$ajax.post('/cxt/base/signUp',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   if(res.data.state == '000') {
                      this.$router.push("/home");
                   }
                 
                  else{
                     Toast(res.data.data);
                  }
               
                   console.log(res.data.data);
                    
               });
            
  },
    goload() {
      this.$router.push("/load");
    },
    gonext() {
      this.$router.push("/register");
    }
  }
};
</script>

<style scoped>

.mm-pb {
  text-align: left;
  font-size: 0.35rem;
  padding: 0.5rem 0 0.3rem 0.5rem;
}

.mm-imga {
  width: 37%;
  margin-bottom: 1.5rem;
  margin-left: 31%
}

.mm-btn-active {
  color: #00a2ff;
  border: 0.01rem solid #00a2ff;
}

.mm-btn-disabled {
  color: #edf8ff;
  border: 0.01rem solid #edf8ff;
}

.m-button-ls {
  font-size: 0.35rem;
  margin-top: 0.6rem;
  color: white;
  background-color: #00a2ff;
  width: 100%;
  border: none;
}

.m-ps {
  text-align: left;
  margin-top: 0.2rem;
  font-size: 0.25rem;
}
</style>

