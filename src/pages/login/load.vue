<template>
  <div>
    <div class="mm-pbs">
      <p>用户登录</p>
    </div>
    <img src="../../../static/img/co-logo-name.png" class="mm-imgas" />
    <div>
      <van-tabs v-model="active" color="#00a2ff">
        <van-tab title="验证码登录">
          <van-row>
            <van-col span="2"></van-col>
            <van-col span="20">
              <van-cell-group>
                <van-field v-model="value" center placeholder="请输入手机号" />
                <van-field v-model="sms" center  placeholder="请输入验证码">
                 <van-button slot="button" size="small" class="mm-btn-active"  @click="sendCode" >
                    <span class="word-time"></span>
                    <a class="resend">获取验证码</a>  </van-button>
                </van-field>
              </van-cell-group>
              <van-button type="default" class="m-button-m" @click="loadm">登录</van-button>
               <p style="color:#00a2ff;margin-top:0.2rem; font-size:0.25rem; float:right" @click="goregiste">注册</p>
            </van-col>
            <van-col span="2"></van-col>
          </van-row>
        </van-tab>
        <van-tab title="密码登录">
          <van-row>
            <van-col span="2"></van-col>
            <van-col span="20">
              <van-cell-group>
                <van-field v-model="value" center placeholder="请输入手机号" left-icon="../../../../static/img/load-phonenum.png"/>
                <!-- <van-field v-model="smsm" center  placeholder="请输入密码" left-icon="../../../../static/img/load-password.png"/> -->
                 <van-field
          v-model="smsm"
          clearable
          type="password"
          
          left-icon="../../../../static/img/load-password.png"
          placeholder="请输入密码"
          
          
        />

                <!-- <van-password-input
                                :value="smsm"
                                 info="密码为 6 位数字"
                                   focus="showKeyboard = false"
                                   /> -->
              </van-cell-group>
               <van-button type="default" class="m-button-m" @click="loads">登录</van-button>
              <p style="color:#00a2ff;margin-top:0.2rem; font-size:0.25rem; float:left" @click="gocheck">忘记密码？</p>
             
            </van-col>
            <van-col span="2"></van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
 import global_ from '../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
import { Toast } from 'vant';
export default {
  data(){
    return{
       time:60,//验证码倒计时时间
      isTimeout:false,//验证码倒计时标识
      btnStr:'获取验证码',
      value:"",
      sms:"",
      smsm:'',
      active:"2",
      state:Number,
      sms:"",
      active:"2",
      token:''

    }
  },
  mounted(){
        window.setToken = (b) => {
            this.setToken(b)
        }
       
  },
  methods:{
     setToken(b){
    this.GLOBAL.token=b
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
            var obj = $(".mm-btn-active");
            settime(obj);
        }
        function settime(obj) { //发送验证码倒计时
            if (countdown == 0) { 
                obj.attr('disabled',false); 
                //obj.removeattr("disabled"); 
                obj.text("没有收到验证码?  重新发送 ");
                 obj.css("border-color","#00a2ff");
                  obj.css("color","#00a2ff");
                $(".resend").text("    重新发送");
                countdown = 60; 
                return;
            } else { 
                obj.attr('disabled',true);
               obj.css("border-color","#bcbcbc");
                  obj.css("color","#bcbcbc");
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
                type:'login',
                ctime:''
                };                    

                this.$ajax.post('/cxt/base/vcode',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   
                   console.log(res.data.data);
               });
            
  },
    loadm(){
        let _this = this;                     
                let data = {
               
                tel:_this.value,
                validation:_this.sms,
                type:'vcode',
                ctime:''
                };    
                this.dl=[{
                
                }]                

                this.$ajax.post('/cxt/base/login',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                 
                  if(res.data.state == '000') {
                         this.GLOBAL.token=res.data.data.token
                      console.log( this.GLOBAL.token)
                     this.GLOBAL.systemName='888'
                           this.$router.push('/home')
                          
                          Toast(res.data.msg);
                          
                           
                   }
                 
                  else{
                     Toast(res.data.msg);
                  }
               
                  
                   console.log(res.data.data);
               });
        },
        loads(){
          let _this = this;                     
                let data = {
                //    pageNum : this.pageNum,
                tel:_this.value,
                validation:_this.smsm,
                type:'password',
                ctime:''
                };
                console.log(data)
                this.$ajax.post('/cxt/base/login',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   console.log(res.data.msg);
                   if(res.data.state == '000') {
                      this.GLOBAL.token=res.data.data.token
                      console.log( this.GLOBAL.token)
                     this.GLOBAL.systemName='888'
                           this.$router.push('/home')
                           Toast(res.data.msg);
                          //  localStorage.setItem('token',res.data.data.token);
                            // this.GLOBAL.token='3013343114726107134'
                            // window.android.setToken(res.data.data.token);
                            // console.log('token:'+localStorage.getItem('token'));
                           
                            
                   }
                 
                  else{
                     Toast(res.data.msg);
                  }
                
                   console.log(res.data.data);
               });
        },
    goregiste(){
      this.$router.push('/registe')
    },
    gocheck(){
      this.$router.push('/identify')
    },
    gonext(){
      this.$router.push('/webhome')
    }
  }
};
</script>

<style scoped>
.mm-pbs {
  text-align: left;
  font-size: 0.35rem;
  padding: 0.5rem 0 0.3rem 0.5rem;
}

.mm-imgas {
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

.m-button-m {
  font-size: 0.35rem;
  margin-top: 0.6rem ;
  color: white;
  background-color: #00a2ff;
  width: 100%;
  border: none;
}
</style>

