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
      <van-col span="14">我审批的</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;">帮助</div>
      </van-col>
      
    </van-row>
    <div style="margin-top:1rem">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <div v-for="(item,index) in pagemember" :key="index" style="margin-top:0.2rem" @click="gonext(item.id)">
      <van-row class="main">
        <van-col span="6">
          <div class="round">
          {{item.username.slice(-1)}}
          </div>
        </van-col>
        <van-col span="14">
          <div class="a">{{item.username}}提交的{{item.approvalName}}</div>
          <div class="b">申请内容：{{item.str.contentOfApplication}}</div>
          <div class="b">申请详情：{{item.str.detailsOfApproval}}</div>
          <div class="c">{{item.statename}}</div>
          
        </van-col>
        <van-col span="4" class="b">{{item.ctime.slice(11,16)}}</van-col>
      </van-row>
    </div>
    </van-list>
    </div>
    <!-- <van-tabs v-model="active" color="#00a2ff" style="margin-top:1rem;">
        <van-tab title="全部">内容 1</van-tab>  
        <van-tab title="未读">内容 2</van-tab>
    </van-tabs> -->
  </div>
</template>
<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      active: 0,
      pagemember:[],
      page: 1,
      size: 20,
      finished: false,
      loading: false,
    };
  },
  methods: {
    gohow() {
      this.$router.push("/setapproval");
    },
    gohow2() {
      this.$router.push("/setchaosong");
    },
    gofirst() {
      this.$router.push("/work");
    },
    goback() {
      this.$router.push("/approval");
    },
    top() {
      window.scrollTo(0, 0);
    },
    onLoad() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        type:"0",
        page: this.page,
        size: this.size
      };
      this.$ajax
        .post("/cxt/oa/approval/ccApprovals", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          

          if (res.data.state === "000") {
            if (res.data.data.list.length > 0) {
              // this.pagemember=res.data.data.list
              for(let i = 0 ; i<res.data.data.list.length;i++){
                this.pagemember.push(res.data.data.list[i])
              }
              console.log( this.pagemember)
              // res.data.data.list.forEach(item => {
              //   this.pagemember.push(item);
                
              // });
            }
            if (this.pagemember.length != this.size * this.page) {
              this.finished = true;
              this.loading = false;
            } else {
              this.page++;
              this.loading = false;
            }
          }

          for(let i =0 ; i<this.pagemember.length;i++){
            if(this.pagemember[i].state==0){
            this.pagemember[i].statename="待审批"
          }else if(this.pagemember.state==1){
            this.pagemember[i].statename="审批通过"
          }else if(this.pagemember.state==2){
            this.pagemember[i].statename="拒绝"
          }else{
            this.pagemember[i].statename="撤回"
          }
          }

          for(let i =0 ; i<this.pagemember.length;i++){
            this.pagemember[i].str=JSON.parse(this.pagemember[i].content)
          }
        });
    },
    // getList() {
    //   let _this = this;
    //   let data = {
    //     token:this.GLOBAL.token,
    //     type:"0"
    //   };

    //   this.$ajax
    //     .post("/cxt/oa/approval/ccApprovals", _this.$qs.stringify(data), {
    //       headers: _this.Base.initAjaxHeader(1, data)
    //     })
    //     .then(res => {
    //       this.pagemember = res.data.data.list;
    //       // console.log(this.pagemember);
    //       for(let i =0 ; i<this.pagemember.length;i++){
    //         if(this.pagemember[i].state==0){
    //         this.pagemember[i].statename="待审批"
    //       }else if(this.pagemember.state==1){
    //         this.pagemember[i].statename="审批通过"
    //       }else if(this.pagemember.state==2){
    //         this.pagemember[i].statename="拒绝"
    //       }else{
    //         this.pagemember[i].statename="撤回"
    //       }
    //       }

    //       for(let i =0 ; i<this.pagemember.length;i++){
    //         this.pagemember[i].str=JSON.parse(this.pagemember[i].content)
    //       }
    //     });
    // },
    gonext(id){
      this.$router.push({
        path:"/details",
        query:{
          id:id
        }
      })
    }
  },
  created() {
    // this.getList();
    this.top();
  }
};
</script>
<style scoped>
.m-bg {
  /* background-color: #ededed; */
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
  top: 0.25rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.m-header-icon2 {
  position: absolute;
  top: 0.25rem;
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
  z-index: 3;
}

.btn {
  background-color: #00a2ff;
  color: white;
  width: 96%;
  height: 0.8rem;
  margin: 0.15rem 2%;
  line-height: 0.8rem;
  text-align: center;
}

.round{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.9rem;
  line-height: 0.9rem;
  background-color: #00a2ff;
  text-align: center;
  color: white;
  font-size: 0.35rem;
  margin: 0 auto
}
.main{
  background-color: #dff2fd;
  margin: 0.2rem 0 0.2rem 0;
  padding: 0.2rem 0 0.2rem 0;
  font-size:0.3rem
}
.a{
  font-size: 0.35rem;
  color: black;
  font-weight: 550
}

.b{
  color: #9a9a9a;
}

.c{
  color: #02b638
}
</style>
