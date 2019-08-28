<template>
  <div>
    <van-row class="m-header">
      <van-col span="2" style="text-align: right">
        <van-icon name="arrow-left" class="m-header-icon"  @click="goback"/>
      </van-col>
      <van-col span="16">常州孝道文化产业有限公司</van-col>
      <van-col span="6"></van-col>
    </van-row>
    
    <img src="../../../../static/img/lbf.png" class="m-img"/>

    <van-row style="font-size:0.3rem">
      <van-col span="3" style="text-align:center"><van-icon name="bullhorn-o" class="m-icon"/></van-col>
      <van-col span="18">置顶公告会在这里滚动通知，去看看...</van-col>
      <van-col span="3" style="color:#00a2ff">更多</van-col>
    </van-row>
    <hr class="hr">

    <h3 class="m-h">人事管理</h3>
    <van-row style="text-align:center;margin:0.3rem 0.5rem">
      <van-col span="6">
        <van-icon name="more-o" class="main-icon" @click="goa"/>
        <p @click="goa">审批</p>
      </van-col>
      <van-col span="6">
        <van-icon name="stop-circle-o" class="main-icon"/>
        <p>请假</p>
      </van-col>
      <van-col span="6">
        <van-icon name="music-o" class="main-icon"/>
        <p>出差</p>
      </van-col>
      <van-col span="6">
        <van-icon name="smile-o" class="main-icon"/>
        <p>外出</p>
      </van-col>
    </van-row>

    <van-row style="text-align:center;margin:0.3rem 0.5rem">
      <van-col span="6">
        <van-icon name="more-o" class="main-icon"/>
        <p>换班</p>
      </van-col>
      <van-col span="6">
        <van-icon name="stop-circle-o" class="main-icon"/>
        <p>加班</p>
      </van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="6">
        
      </van-col>
    </van-row>

    <h3 class="m-h">市场营销</h3>
    <van-row style="text-align:center;margin:0.3rem 0.5rem">
      <van-col span="6">
        <van-icon name="more-o" class="main-icon"/>
        <p>工作总结</p>
      </van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="6">
        
      </van-col>
    </van-row>

    


    <van-tabbar v-model="active">
      <van-tabbar-item>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? icon.message_active:icon.message_normal"
        ></van-icon>
        <span>消息</span>
      </van-tabbar-item>

      <van-tabbar-item>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? icon.ding_active:icon.ding_normal"
        ></van-icon>
        <span>duang</span>
      </van-tabbar-item>

      <van-tabbar-item replace to="/work">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? icon.work_active:icon.work_normal"
        ></van-icon>
        <span>工作</span>
      </van-tabbar-item>

      <van-tabbar-item replace to="/Structure">
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? icon.list_active:icon.list_normal"
        ></van-icon>
        <span>通讯录</span>
      </van-tabbar-item>

      <van-tabbar-item>
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? icon.signal_active:icon.signal_normal"
        ></van-icon>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      active: 2,
      icon: {
        message_normal: "icon_message",
        message_active: "icon_message_fill",
        ding_normal: "icon_synergy",
        ding_active: "icon_synergy_fill",
        work_normal: "icon_work",
        work_active: "icon_work_fill",
        signal_normal: "icon_signal",
        signal_active: "icon_signal_fill",
        list_normal: "icon_addresslist",
        list_active: "icon_addresslist_fil"
      }
    };
  },
  methods:{
    goa(){
      this.$router.push('/approval')
    },
    top(){
      window.scrollTo(0,0)
    },
    goback() {
      this.$router.push("/home");
    },
  },
  created(){
    this.top()
  }
};
</script>
<style scoped>
.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  
}

.m-header-icon {
  margin-top:0.3rem;
  font-size: 0.5rem;
  color: #00a2ff;
  
}

.m-icon {
  font-size: 0.5rem;
}

.m-img{
  width: 90%;
  border-radius: 0.1rem;
  margin:1.2rem 5% 0.2rem 5%
}

.hr{
  width:90%;
  margin:0.1rem 5%;
  border:0.01rem solid #ededed
}

.main-icon{
  font-size: 0.8rem
}

.m-h{
  margin:0.1rem 0.5rem;
  font-size: 0.4rem;
  font-weight: 600
}
</style>
