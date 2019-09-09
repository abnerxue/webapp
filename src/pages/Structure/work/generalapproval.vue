<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="2">
        <van-icon name="cross" class="m-header-icon2" @click="gofirst" />
      </van-col>
      <van-col span="14">{{pageData.name}}</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;">帮助</div>
      </van-col>
    </van-row>

    <!-- <div style="margin-top:1rem;width:100%">
      <div v-for="(item,index) in list" :key="index">
        <div  class="main">

        </div>
        {{item.name}}
      </div>
    </div> -->

    <van-cell-group style="margin-top:1.2rem">
      <van-field label="申请内容" placeholder="请输入申请内容" v-model="title">
        <van-icon class="iconfont" class-prefix="icon" name="jiufuqianbaoicon14" slot="left-icon" />
      </van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-field label="审批详情" :border="false">
        <van-icon class="iconfont" class-prefix="icon" name="jiufuqianbaoicon14" slot="left-icon" />
      </van-field>
      <van-field placeholder="请输入审批详情" type="textarea" v-model="detail"></van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-field label="图片" :border="false" />
      <van-field placeholder="图片 后期修改" type="textarea">
        <van-icon name="plus" slot="left-icon" />
      </van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <van-field label="附件" :border="false" />
      <van-field placeholder="附件 后期修改" type="textarea">
        <van-icon name="plus" slot="left-icon" />
      </van-field>
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem">
      <div class="ss">
        <van-icon class="iconfont" class-prefix="icon" name="jiufuqianbaoicon14" />&nbsp;审批人
        <span style="font-size:0.12rem;color:#bcbcbc">&nbsp;流程未设置</span>
        <span style="font-size:0.12rem;color:#1989fa" @click="gohow">&nbsp;&nbsp;如何设置</span>
      </div>
      <!-- 选审批人 -->
      <div class="container">
        
        <div class="contain" v-for="(selitem,index) in sel_list_" :key="index">
          <div class="cross"><van-icon name="cross" @click="onDelete(selitem.uName)"/></div>
          <div class="round2">{{selitem.uName.slice(-2)}}</div>
          <van-icon class="iconfont right" class-prefix='icon' name='jiantou'/>
        </div>
        
        <!-- 加号 -->
        <div class="round"><van-icon name="plus" class="m-plus" @click="gochoose(1)"/>a</div>
      </div>
      <van-switch-cell v-model="checked" title="通过聊天发送给审批人" size="0.4rem" />
    </van-cell-group>

    <van-cell-group style="margin-top:0.2rem;margin-bottom:1.3rem;padding-bottom:0.3rem">
      <div class="ss">
        <van-icon class="iconfont" class-prefix="icon" name="jiufuqianbaoicon14" />&nbsp;抄送人
        <span style="font-size:0.12rem;color:#bcbcbc">&nbsp;审批通过后，通知抄送人</span>
        <span style="font-size:0.12rem;color:#1989fa" @click="gohow2">&nbsp;&nbsp;如何设置</span>
      </div>
      <!-- 选抄送人 -->
      <div class="container">
        <div class="contain2" v-for="(selitem,indexs) in sel_list" :key="indexs">
          <div class="cross2"><van-icon name="cross" @click="onDeleteb(selitem.uName)"/></div>
          <div class="round2">{{selitem.uName.slice(-2)}}</div>
        </div>
        
        <!-- 加号 -->
        <div class="round"><van-icon name="plus" class="m-plus" @click="gochoose(2)"/>a</div>
      </div>
    </van-cell-group>

    <div class="foot">
      <button class="btn" @click="onSubmit">提交</button>
    </div>
    <van-dialog
  v-model="show"
  message="提交成功！"
  show-confirm-button
  @confirm="onConfirm"/>

  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      checked: false,
      pageData:'',
      list:[],
      show:false,
      uName:'',
      uId:'',
      title:'',
      detail:'',
      content:'',
      sel_list:[],
      sel_list_:[],
      select_list:'',
      select_list_:'',
      list_id:[],
      list_id_:[],
      userIds:'',
      ccUserIds:''
    };
  },
  methods: {
    // top(){
    //   window.scrollTo(0,0);
    //   let data={
    //     uId:this.$route.query.uId,
    //     uName:this.$route.query.name,
    //   }
    // },
    gohow() {
      this.$router.push({
        path:"/setapproval",
        query:{
          id:this.$route.query.id
        }
        });
    },
    gohow2() {
      this.$router.push({
        path:"/setchaosong",
        query:{
          id:this.$route.query.id
        }
        });
    },
    gofirst() {
      this.$router.push("/work");
      sessionStorage.removeItem('select_list_');
      sessionStorage.removeItem('select_list');
      sessionStorage.removeItem('title');
      sessionStorage.removeItem('detail');
    },
    goback() {
      this.$router.push("/approval");
      sessionStorage.removeItem('select_list_');
      sessionStorage.removeItem('select_list');
      sessionStorage.removeItem('title');
      sessionStorage.removeItem('detail')
    },
    gochoose(tag){
      sessionStorage.setItem('tag',tag);
      sessionStorage.setItem('title',JSON.stringify(this.title));
      sessionStorage.setItem('detail',JSON.stringify(this.detail));
      this.$router.push({
        path:'/choose',
        query:{
          id:this.$route.query.id
        }
        });
    },
    getInfo(){
      if(sessionStorage.getItem('title')){
        this.title=JSON.parse(sessionStorage.getItem('title'))
      };
      if(sessionStorage.getItem('detail')){
        this.detail=JSON.parse(sessionStorage.getItem('detail'))
      }
    },
    getList(){
      let _this=this;
      let data = {
        id:this.$route.query.id,
        token:this.GLOBAL.token
      };

      this.pageData={
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
      
      this.$ajax.post("cxt/oa/approval/temp",_this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res=>{
          this.pageData=res.data.data;
          //  console.log(this.pageData);
          this.list=JSON.parse(this.pageData.rule);
          console.log(this.list);
        })
    },
    popup(){
      this.show=true;
    },
    onConfirm(){
      
        this.$router.push({
          path:"approval"
        });
      sessionStorage.removeItem('select_list_');
      sessionStorage.removeItem('select_list');
      sessionStorage.removeItem('title');
      sessionStorage.removeItem('detail');
    },
    onDelete(uName){
        // let num = this.sel_list_.indexOf(key);
        // console.log(num);
        
        let num = ""
        for(let i = 0; i< this.sel_list_.length;i++){
          if(this.sel_list_[i].uName==uName){
            num = i
          }
        }
        console.log(num)
        this.sel_list_.splice(num  , 1);
        // console.log(this.sel_list_)
        sessionStorage.setItem('select_list_',JSON.stringify(this.sel_list_));
        // this.reload()
    },
    onDeleteb(uName){
        // let num = this.sel_list_.indexOf(key);
        // console.log(num);
        
        let num = ""
        for(let i = 0; i< this.sel_list.length;i++){
          if(this.sel_list[i].uName==uName){
            num = i
          }
        }
        console.log(num)
        this.sel_list.splice(num  , 1);
        console.log(this.sel_list_)
        sessionStorage.setItem('select_list',JSON.stringify(this.sel_list));
    },
    getSelect(){
      let list = JSON.parse(sessionStorage.getItem('select_list'))?JSON.parse(sessionStorage.getItem('select_list')):'';
      let list_ = JSON.parse(sessionStorage.getItem('select_list_'))?JSON.parse(sessionStorage.getItem('select_list_')):'';
      this.sel_list = list;
      this.sel_list_ = list_;
      // console.log(this.sel_list_)
      for(let i = 0;i<this.sel_list_.length;i++){
        this.list_id_.push(this.sel_list_[i].uId)
      };
      for(let i = 0;i<this.sel_list.length;i++){
        this.list_id.push(this.sel_list[i].uId)
      }
      console.log(this.list_id)
      this.userIds=this.list_id_.toString();
      this.ccUserIds=this.list_id.toString();
    },
    onSubmit(){
      this.show=true;
      let _this = this;
      let data={
        tempId:this.$route.query.id,
        content:{"detailsOfApproval":this.detail,"contentOfApplication":this.title},
        userIds:this.userIds,
        ccUserIds:this.ccUserIds
      }

      $.ajax({
        type:'post',
        url:'cxt/oa/approval/submit',
        headers:{
          Accept:'application/json;charset=utf-8',
          token:this.GLOBAL.token
        },
        data:JSON.stringify(data),
        contentType:'application/json',
        dataType:'json',
        success:function(data){
          console.log('ok');
        },
        error:function(){
          console.log(error)
        }
      })
      
      // this.$ajax.post("cxt/oa/approval/submit",_this.$qs.stringify(data), {
      //     headers: _this.Base.initAjaxHeader(1, data)
      //   })
      //   .then(res=>{

      //   })
    }

  },
  created() {
    this.getList();
    // this.top();
    this.getSelect();
    this.getInfo()
  },

};
</script>
<style scoped>
.m-bg {
  background-color: #ededed;
  height: 100%;
}
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
  text-align: center;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.m-header-icon2 {
  position: absolute;
  top: 0.3rem;
  left: 1rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.ss {
  font-size: 0.32rem;
  padding-top: 0.2rem;
  margin-left: 0.3rem;
}

.foot {
  height: 1.1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  z-index:6;
}

.btn {
  background-color: #00a2ff;
  color: white;
  width: 96%;
  height: 0.9rem;
  margin: 0.15rem 2%;
  line-height: 0.9rem;
  text-align: center;
}

.round{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.9rem;
  line-height: 0.9rem;
  background-color: #ededed;
  text-align: center;
  display: inline-block;
  position: relative;
  color:#ededed
}
.m-plus{
  font-size: 0.5rem;
  position: absolute;
  top:21%;
  left:21%;
  color: #9a9a9a
}
.round2{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.9rem;
  line-height: 0.9rem;
  background-color: #00a2ff;
  text-align: center;
  color: white;
  font-size: 0.3rem
}
.contain{
  width: 1.4rem;
  height: 0.9rem;
  position: relative;
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem
}
.contain2{
  width: 1rem;
  height: 0.9rem;
  position: relative;
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem
}
.cross2{
  position: absolute;
  top:-0.05rem;
  right: 0.05rem;
  font-size: 0.04rem;
  z-index:5;
  background-color:black;
  color: white;
  width:0.35rem;
  height:0.35rem;
  border-radius: 0.35rem;
  text-align: center
}
.right{
  position: absolute;
  left: 1.1rem;
  top:0.3rem
}
.cross{
  position: absolute;
  top:-0.05rem;
  right: 0.45rem;
  font-size: 0.04rem;
  z-index:5;
  background-color:black;
  color: white;
  width:0.35rem;
  height:0.35rem;
  border-radius: 0.35rem;
  text-align: center
}
.container{
  width:90%;
  margin: 0.3rem 5%;
  padding-bottom: 0.3rem
}



.main{
  margin: 0.3rem 0 0.1rem 0.3rem;
  font-size: 0.3rem
}
</style>
