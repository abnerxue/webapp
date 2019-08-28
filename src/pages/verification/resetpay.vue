<template>
  <div>
    <van-nav-bar title="设置支付密码" left-arrow @click-left="onClickLeft" class="s-header" />
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group style="margin-top:1rem">
          <van-field
            v-model="password"
            type="password"
            label="设置支付密码"
            label-width="1.9rem"
            placeholder="密码由6位数字组成"
           
          />
          <van-field
            v-model="confirmpassword"
            type="password"
            label="确认支付密码"
            label-width="1.9rem"
            placeholder="密码由6位数字组成"
           
          />  
            <van-field
            v-model="code"
            type="password"
            label="短信验证码"
            label-width="1.9rem"
            placeholder="请输入短信验证码"
           
          >   <van-button slot="button" size="small" class="mm-btn-active"  @click="sendCode" >
                    <span class="word-time"></span>
                    <a class="resend">获取验证码</a>  </van-button></van-field>   
           <!-- right-icon="../../../../static/img/register-success.png" -->
        </van-cell-group>
        <van-button type="default" class="m-button-m" @click="forgetpassword()">确定</van-button>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <!-- <div style="margin-top:1rem">
      <div style="width:28%;float:left">
        <p class="m-p-d">设置密码</p>
      </div>
      <div style="width:72%;float:right">
        <van-cell-group>
          <van-field v-model="value" placeholder="密码由6-12位数字和字母形式组成" />
        </van-cell-group>
      </div>
    </div>

    <div style="margin-top:0.5rem ; clear:both">
      <div style="width:28%;float:left">
        <p class="m-p-d">确认密码</p>
      </div>
      <div style="width:72%;float:right">
        <van-cell-group>
          <van-field v-model="value" placeholder="密码由6-12位数字和字母形式组成" />
        </van-cell-group>
      </div>
    </div>-->
    
  </div>
</template>
 <script>
 import { Button } from 'vant';
import { NavBar } from 'vant';
 import { Toast } from 'vant';
import Vue from 'vue'
import global_ from '../global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
export default {
  data() {
    return {
      password: "",
      confirmpassword:""
    };
  },
  methods:{
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
     sendCode(){
        let self = this;
            
            
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
                  token:this.GLOBAL.token,
                //    pageNum : this.pageNum,
                tel: this.tel,
                // type:'newPhone',
                ctime:''
                };                    

                this.$ajax.post('/cxt/system/check',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                 if(res.data.state==='000'){

                 }else{
                   Toast('请重新获取验证码')
                 }
                   
                   console.log(res.data.data);
               });
            
  },
      onClickLeft(){
          this.$router.push('/set')
      },
       forgetpassword(name){
            let self = this;
          
            
            if(self.password!==self.confirmpassword){
                Toast('两次密码输入不一致!');
                return
            }
                //获取列表数据    
                let _this = this;                     
                let data = {
                  token:this.GLOBAL.token,
                    type:1,
                vcode:_this.code,
                password:_this.password,
                
                };
                console.log(data)
            this.$ajax.post('/cxt/system/setPass',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   if(res.data.state == '000') {
                      this.$router.push("/set");
                      Toast(res.data.data);
                   }
                 
                  else{
                     Toast(res.data.msg);
                  }
                    
               
               });
            
        }
  }
};
</script>
 
 <style  scoped>
.s-header {
  background-color: #ededed;
}

.m-p-d {
  font-size: 0.38rem;
  margin: 0.2rem 0 0.2rem 0.3rem;
}

.m-button-m {
  font-size: 0.38rem;
  margin: 1rem 0;
  color: white;
  background-color: #00a2ff;
  width: 100%;
  border: none;
}

</style>
 