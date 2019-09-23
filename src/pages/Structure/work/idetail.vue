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
      <van-col span="14">{{this.pagemember.approvalName}}</van-col>
      <van-col span="5">
        <div style="color:#00a2ff;font-size:0.35rem;">更多</div>
      </van-col>
    </van-row>
    
    <div style="margin-top:1rem">
      <van-row class="main">
        <van-col span="6">
          <div class="round">
          {{(this.pagemember.username||'').slice(-1)}}
          </div>
        </van-col>
        <van-col span="14">
          <div class="a">{{this.pagemember.username}}</div>
          <div class="b">{{this.statename}}</div>
        </van-col>
        <van-col span="4" class="b"></van-col>
      </van-row>
    </div>
    <hr>
    <div style="margin:0.15rem 0 0.15rem 0.2rem">
      <van-row style="margin-bottom:0.15rem">
        <van-col span="6" class="b">审批编号</van-col>
        <van-col span="18" class="c">{{this.pagemember.approvalSn}}</van-col>
      </van-row>

      <van-row style="margin-bottom:0.15rem">
        <van-col span="6" class="b">所在部门</van-col>
        <van-col span="18" class="c">{{this.pagemember.department}}</van-col>
      </van-row>

      <van-row style="margin-bottom:0.2rem">
        <van-col span="6" class="b">申请内容</van-col>
        <van-col span="18" class="c">{{this.str.detailsOfApproval}}</van-col>
      </van-row>

      <van-row style="margin-bottom:0.2rem">
        <van-col span="6" class="b">图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片</van-col>
        <van-col span="18" class="c">
          <span v-for="(item,index) in pagemember.images" :key="index">
            <img :src="item" style="width:0.9rem;height:0.9rem;overflow:hidden;margin-right:0.25rem" @click="preview(pagemember.images,index)">
          </span>
        </van-col>
      </van-row>
    </div>
    <div class="grey"></div>
    <div style="margin-top:0.2rem">
      <van-row>
        <van-col span="6">
          <div class="round">
            {{(this.pagemember.username||'').slice(-1)}}
          </div>
        </van-col>
        <van-col span="11" class="aa">我&nbsp;&nbsp;发起申请</van-col>
        <van-col span="3" class="d"></van-col>
        <van-col span="4" class="d"></van-col>
      </van-row>
      <div v-for="(item,index) in pagemember.process" :key="index" style="margin-top:0.3rem">
        <van-row>
        <van-col span="6">
          <div class="round">
            {{(item.username||'').slice(-1)}}
          </div>
        </van-col>
        <van-col span="11" class="aa">
            {{item.username}}&nbsp;&nbsp;<span style="color: #02b638">{{item.statename}}</span>
        </van-col>
        <van-col span="3" class="d">{{(item.ctime||'').slice(5,10)}}</van-col>
        <van-col span="4" class="d">{{(item.ctime||'').slice(11,16)}}</van-col>
      </van-row>

      <van-row>
        <van-col span="6"></van-col>
        <van-col span="11" style="font-size:0.4rem;color:black">
            {{item.content}}
        </van-col>
        <van-col span="7"></van-col>
      </van-row>
      </div>
    </div>
    <br><br>
    <div class="grey"></div>
    <div class="foot">
      <van-row style="text-align:center">
          <van-col span="3"></van-col>
          <van-col span="6">
              <van-icon name="close"  class="icon" @click="gocb"/>
              <p style="font-size:0.25rem">催办</p>
          </van-col>
          <van-col span="6">
              <van-icon name="close" @click="backout" class="icon"/>
              <p style="font-size:0.25rem">撤销</p>
          </van-col>
          <van-col span="6">
              <van-icon name="close" class="icon"/>
              <p style="font-size:0.25rem">更多</p>
          </van-col>
          <van-col span="3"></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from 'vant';
import { ImagePreview } from 'vant';
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      statename:'',
      detailsOfApproval:'',
      content:'',
      str:'',
      pagemember:''
    };
  },
  methods: {
     backout(){
      let _this=this
      let data = {
        token:this.GLOBAL.token,
        id:this.$route.query.id
      }
      this.$ajax.post("/cxt/oa/approval/cancel", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          Toast(res.data.msg)
       
        });
    },
     gocb(){
      let _this=this
      let data = {
        token:this.GLOBAL.token,
        id:this.$route.query.id
      }
      this.$ajax.post("/cxt/oa/approval/urge", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
        console.log(res.data.data)
          Toast(res.data.data)
       
        });
    },
    gofirst() {
      this.$router.push("/work");
    },
    goback() {
      this.$router.push("/isend");
    },
    top(){
      window.scrollTo(0,0)
    },
    getList(){
      let _this=this
      let data = {
        id:this.$route.query.id,
        token:this.GLOBAL.token
      }
      this.$ajax.post("/cxt/oa/approval/index", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data;
          console.log(this.pagemember);
          /* if(this.pagemember.state==0){
            this.statename="待审批"
          }else if(this.pagemember.state==1){
            this.statename="审批通过"
          }else if(this.pagemember.state==2){
            this.statename="拒绝"
          }else{
            this.statename="撤回"
          } */
          this.str = JSON.parse(this.pagemember.content)
          
          /* for(let i = 0; i<this.pagemember.process.length;i++){
            if(this.pagemember.process[i].state==0){
              this.pagemember.process[i].statename=""
            }else if(this.pagemember.process[i].state==1){
              this.pagemember.process[i].statename="待审批"
            }else{
              this.pagemember.process[i].statename="审批通过"
            }
          } */
        });
        
    },
    preview(images,index){
        ImagePreview({
          images:images,
          showIndex:false,
          loop:false,
          startPosition:index
      })
    }
    
  },
  created() {
    this.getList();
    this.top()
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
  /* background-color: #dff2fd; */
  margin-top: 0.2rem ;
  padding: 0.2rem 0 0.2rem 0;
  font-size:0.3rem
}
.a{
  font-size: 0.35rem;
  color: black;
}

.b{
  color: #9a9a9a;
  font-size: 0.35rem
}

.c{
  font-size: 0.3rem;
  color: black;
}

.d{
  color: #9a9a9a;
  font-size: 0.3rem;
  height: 0.9rem;
  line-height: 0.9rem
}

.grey{
  background-color: #e7e7e7;
  height: 0.3rem;
  width: 100%;
}
.aa{
  font-size: 0.35rem;
  color: black;
  height: 0.9rem;
  line-height: 0.9rem
}
.bb{
  color: #9a9a9a;
  font-size: 0.15rem
}
.ccround{
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 0.9rem;
  line-height: 0.9rem;
  background-color: #00a2ff;
  text-align: center;
  color: white;
  font-size: 0.35rem;
  margin: 0.2rem;
  
}
.contain{
  width:1.3rem;
  padding: 0.2rem ;
  display: inline-block;
  text-align: center;
}
.foot{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.1rem;
    padding-top:0.3rem
}
.icon{
    font-size:0.5rem
}
</style>
