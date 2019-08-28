<template>
  <div class="s-bg">
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">修改手机号</van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-cell-group>
      <van-field v-model="oldnum" type="tel" label="原手机号" placeholder="请输入原手机号码" />

      <!-- <van-field v-model="oldcode" type="number" label="验证码" placeholder="输入原手机验证码">
        <van-button slot="button" size="small" type="primary" class="s-btn">发送验证码</van-button>
      </van-field> -->
       <van-field v-model="oldcode" type="number" label="验证码" placeholder="输入原手机验证码">
         <van-button slot="button" size="small" class="mm-btn-actives"  @click="sendCodes" >
                    <span class="word-times"></span>
                    <a class="resends">获取验证码</a>  </van-button>
      </van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-field v-model="newnum" type="tel" label="新手机号" placeholder="请输入新手机号码" />

       <van-field v-model="newcode" type="number" label="验证码" placeholder="输入新手机验证码">
         <van-button slot="button" size="small" class="mm-btn-active"  @click="sendCode" >
                    <span class="word-time"></span>
                    <a class="resend">获取验证码</a>  </van-button>
      </van-field>
    </van-cell-group>

    <button class="s-btns" @click='savenewtel'>保存</button>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      oldnum: "",
      newnum: "",
      oldcode: "",
      newcode: "",
      telnum:''
    };
  },
  methods: {
    sendCodes(){
      console.log(777)
        let self = this;
             let telreg=/^[1][0-9]{10}$/;
            let myreg=/^[\S]{6,20}$/;
            if(!telreg.test(self.oldnum)){
                Toast('手机号格式错误！');
                return
            } 
            
         var countdown=60; 
        function sendemail(){
            var obj = $(".mm-btn-actives");
            settime(obj);
        }
        function settime(obj) { //发送验证码倒计时
            if (countdown == 0) { 
                obj.attr('disabled',false); 
                //obj.removeattr("disabled"); 
                obj.text("没有收到验证码?  重新发送 ");
                 obj.css("border-color","#00a2ff");
                  obj.css("color","#00a2ff");
                $(".resends").text("    重新发送");
                countdown = 60; 
                return;
            } else { 
                obj.attr('disabled',true);
               obj.css("border-color","#bcbcbc");
                  obj.css("color","#bcbcbc");
                obj.text("重新发送    (" + countdown + ")");
                 $(".resends").text("");
              
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
                tel:this.oldnum,
                type:'oldPhone',
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
     sendCode(){
       console.log(888)
        let self = this;
             let telreg=/^[1][0-9]{10}$/;
            let myreg=/^[\S]{6,20}$/;
            if(!telreg.test(self.newnum)){
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
                  token:this.GLOBAL.token,
                //    pageNum : this.pageNum,
                tel:this.newnum,
                type:'newPhone',
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
    savenewtel(){
      let _this = this;
      let data = {
       token:this.GLOBAL.token,
       ntel:this.newnum,
       ncode:this.newcode,
       otel:this.oldnum,
       ocode:this.oldcode
      };
      this.barList=[{
       
      }]

      this.$ajax.post('/cxt/system/changeTel', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
            Toast(res.data.msg)
            console.log(res.data.msg)
         
        });
    },
    goback() {
      this.$router.back("/set");
    },
    
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  height: 100%;
  width: 100%;
}

.s-headeras {
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

.s-btn {
  color: #00a2ff;
  background-color: white;
  border: 0.01rem solid #00a2ff;
  border-radius: 0.1rem;
}

.s-btns{
    background-color: #00a2ff;
    color: white;
    font-size: 0.35rem;
    width: 80%;
    margin: 1.2rem 10%;
    padding:0.2rem 0;
    border-radius: 0.1rem
}
</style>
