<template>
  <div>
    <van-row class="m-header">
      <van-col span="3">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="2"></van-col> 
      <van-col span="14">审批</van-col>
      <van-col span="5">
        <div  style="color:#00a2ff;font-size:0.35rem;">帮助</div>
      </van-col>
    </van-row>
    <div style="margin-top:1rem;padding-top:0.2rem">
      <van-row style="text-align:center;margin:0.3rem 0.5rem">
        <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="stop-circle-o" class="main-icon"/>
        <p>我审批的</p>
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-icon name="music-o" class="main-icon" @click="gob"/>
        <p @click="gob">我发起的</p>
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-icon name="smile-o" class="main-icon" @click="goc"/>
        <p @click="goc">抄送我的</p>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
    </div>
    <div style="height:0.2rem;width:100%;background-color:#ededed;margin-top:0.2rem " ></div>
    <h3 class="m-h">通用审批</h3>

    
    <div v-for="(item,index) in pagemember" :key="index">
      <van-row style="text-align:center;margin:0.3rem 0.5rem 0.1rem 0.5rem">
        <van-col span="1"></van-col>
      <van-col span="6">
        <van-icon name="stop-circle-o" class="main-icon" @click="goa(item.id)"/>
        
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-row style="text-align:center;margin:0 0.5rem" >
        <van-col span="1"></van-col>
      <van-col span="6">
        <p @click="goa(item.id)" style="font-size:0.3rem">{{item.name}}</p>
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="2"></van-col>
      <van-col span="6">
        
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
    </div>
    

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
    gonext(){
      this.$router.push('/generalapproval')
    },
    goback(){
      this.$router.push('/work')
    },
    top(){
      window.scrollTo(0,0)
    },
    goa(id){
      this.$router.push({
        path:'/generalapproval',
        query:{
          id:id      
        }
      })
    },
    gob(){
      this.$router.push('/isend')
    },
    goc(){
      this.$router.push('/send')
    },
    god(){
      this.$router.push('/approvalofme')
    },
    getList() {
      let _this = this;
      let data = {
        token:this.GLOBAL.token
      };

      this.pagemember = [
        {
          id: 1,
          name: "通用审批",
          groupId: 1,
          icon: "",
          process: null,
          ccProcess: null,
          sort: 0,
          state: 1,
          ctime: "2019-07-22 09:32:56",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/approval/tempList", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data;
          console.log(this.pagemember);
        });
    }
  },
  created(){
    this.top(),
    this.getList();
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
  text-align: center
}

.m-header-icon {
  margin-top:0.3rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.main-icon{
  font-size: 0.8rem
}

.m-h{
  margin:0.2rem 0 0.3rem 0.4rem;
  font-size: 0.4rem;
  font-weight: 600
}
</style>
