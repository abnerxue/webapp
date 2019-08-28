<template>
  <div>
    <van-nav-bar title="设置密码" left-arrow @click-left="onClickLeft" class="s-header" />
    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-cell-group style="margin-top:1rem">
          <van-field
            v-model="password"
            type="password"
            label="设置密码"
            label-width="1.35rem"
            placeholder="密码由6-12位数字和字母形式组成"
           
          />
          <van-field
            v-model="confirmpassword"
            type="password"
            label="确认密码"
            label-width="1.35rem"
            placeholder="密码由6-12位数字和字母形式组成"
           
          />    
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
 import Vue from 'vue'
 import global_ from '../global'//引用文件
 
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
 import { Button } from 'vant';
import { NavBar } from 'vant';
 import { Toast } from 'vant';
export default {
  data() {
    return {
      token:'',
      password: "",
      confirmpassword:""
    };
  },
  methods:{
      onClickLeft(){
          this.$router.push('/registe')
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
                  // type:
                //    pageNum : this.pageNum,
                password:_this.password,
                
                };
            this.$ajax.post('/cxt/base/setPassword',_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   if(res.data.state === '000') {
                      this.$router.push("/load");
                      Toast(res.data.msg);
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
 