<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">{{this.$route.query.coname.slice(0,12)}}<span>...</span></van-col>
    </van-row>


    <van-row class="top">
      <!-- 头部返回 -->
      <van-col span="1"></van-col>
      <van-col span="7" style="color:#00a2ff;font-size:0.3rem">
        <span @click="goback">{{this.$route.query.coname.slice(0,6)}}...</span>
      </van-col>
      <van-col span="1">
        <van-icon name="arrow" class="icon" />
      </van-col>
      <van-col span="9" style="font-size:0.3rem;text-align:center">{{this.$route.query.dptname}}</van-col>
      <van-col span="1">
        
      </van-col>
      <van-col span="4" style="font-size:0.3rem"></van-col>
      <van-col span="1"></van-col>
    </van-row>
    <div style="height:0.2rem;width:100%;background-color:#ededed;margin-bottom:0.2rem ;top:1.8rem;z-index:2;position:fixed"></div>
    
      


    <div style="margin-top:1.9rem ;padding-top:0.15rem">
       
      <div v-for="(item,index) in pageData" :key="index">
        <div @click="gochildmember(item.id,item.name)">
          <div class="d" >
          {{item.name}} 
          <span class="b" ></span>
          <van-icon name="arrow" class="c"/>
        </div>
        <hr style="margin:0.2rem 5%;width:90%" />
        </div>
      </div>
    </div>
    <div style="height:0.2rem;width:100%;background-color:#ededed;margin:0.2rem 0" v-if="pageDatab.length!=0"></div>
      <div v-for="(item,index) in pagemember" :key="index">
        <!-- 成员 -->

        <div class="a" @click="godetail(item.id)">
          <van-row>
            <van-col span="1"></van-col>
            <van-col span="4">
              <div class="round">{{item.name.slice(-1)}}</div>      <!-- 蓝圈 -->
            </van-col>
            <van-col span="18">
              <div>{{item.name}}</div>
              <div class="b">{{item.title}}</div>
            </van-col>
            <van-col span="1"></van-col>
          </van-row>
        </div>

        <hr style="margin:0.15rem 5%;width:90%" />
      </div>
    
    <van-row v-if="pagemember.length==0&&pageDatab.length==0" style="margin-top:2.5rem;text-align:center">
      <van-col span="6"></van-col>
      <van-col span="12">
        <van-icon name="contact" class="mainicon"/>
        <p class="main-p1">暂无成员</p>
        <p class="main-p2">点击下方添加子部门和员工</p>
      </van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div style="position: fixed;bottom: 0;background-color:white;width:100%;z-index:5">
      <van-row style="text-align:center;width:100%">
      <van-col span="8">
        <button class="btn" @click="onAdd()">
        添加同事
      </button>
      </van-col>
      <van-col span="8">
        <button class="btn" @click="addb()">
        添加子部门
      </button>
      </van-col>
      <van-col span="8">
        <button class="btn" @click="editdept()">
        部门设置
      </button>
      </van-col>
    </van-row>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      s: "",
      pagemember: [],
      id: "",
      name: "",
      pId:"",
      dptname:'',
      pageDatab:[],
      pageData:[],
      dptid:''
    };
  },
  methods: {
    goback(){
      this.$router.push({
          path:"/department",
          query:{
              pId: this.$route.query.pId,
              coname: this.$route.query.coname,
          }
      });
    },
    top() {
      window.scrollTo(0, 0);
      let data={
        pId:this.$route.query.pId
      }
    },
    godetail(id) {
      this.$router.push({
        path: "/mmdetail",
        query: {
          id: id,//成员id
          coname: this.$route.query.coname,
          dptname:this.$route.query.dptname,
          pId: this.$route.query.pId,
          dptid: this.$route.query.dptid,
        }
      });
      
    },
    onAdd() {
      this.$router.push({
        path: "/add",
        query: {
          dptid: this.$route.query.dptid,
          dptname:this.$route.query.dptname,
          coname:this.$route.query.coname,
          pId: this.$route.query.pId
        }
      });
        
    },
    addb(){
      this.$router.push({
        path: "/addchilddept",
        query: {
          dptname: this.$route.query.dptname, 
          dptid: this.$route.query.dptid,
          coname:this.$route.query.coname,
          pId:this.$route.query.pId
        }
      });
    },
    editdept(){
      this.$router.push({
        path: "/editdept",
        query: {
          dptname: this.$route.query.dptname, 
          dptid: this.$route.query.dptid,
          coname:this.$route.query.coname,
          pId: this.$route.query.pId,
          uName:this.uName
        }
      });
    },
    getList() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.dptid,
        dptname: this.$route.query.dptname,
        
      };
      

      this.pagemember = [
        {
          id: 2,
          name: "",
          email: "",
          phone: "",
          staff_no: "",
          title: "",
          bank_num: "",
          department_id: 25,
          department_incharge: 1,
          password: "",
          sex: 1,
          state: 0,
          des: "",
          sort: 0,
          ctime: "2019-07-17 13:08:35",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/member/dept", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pagemember = res.data.data;
          let uName ="";
          for(let i =0;i<this.pagemember.length;i++){
            if(this.pagemember[i].department_incharge==1){
              this.uName =this.pagemember[i].name
            }
          }
      //     this.member_id= this.$route.query.id,
      //     this.state= this.$route.query.state
      //      for(var i =0 ;i<this.pagemember.length;i++){
      //   if(this.pagemember[i].id=this.member_id){
      //     this.pagemember[i].state=this.state
      //   }
      // }
       console.log(this.uName)
        });
        
    },

    getListb() {
      
      let _this = this;
      let data = {
        pId:this.$route.query.dptid,
        token: this.GLOBAL.token
      };
        console.log(data.pId)
      this.pageDatab = [
        {
          id: 19,
          name: "行政人事部",
          des: null,
          parent_id: 8,
          sort: 0,
          state: 0,
          ctime: "2019-07-16 20:40:56",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/dept/detail", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pageDatab = res.data.data.dept;
          
          //   for (let i = 0; i < this.pageDatab.length; i++) {
          //   let _this = this;
          //   let data = {
          //     token: this.GLOBAL.token,
          //     id: this.pageDatab[i].id
          //   };
          //   console.log(data.id);
            
          //   this.$ajax
          //     .post("/cxt/oa/member/dept2", _this.$qs.stringify(data), {
          //       headers: _this.Base.initAjaxHeader(1, data)
          //     })
          //     .then(res => {
          //       this.pagemember = res.data.data;
          //       this.pageDatab[i].des = this.pagemember.length
          //     });
              
          // };
          this.pageData=this.pageDatab
          
        });
        
    },
    gochildmember(id,name) {
      this.$router.push({
        path: "/childmember",
        query: {
          id: id,//子部门id
          coname: this.$route.query.coname,
          dptid:this.$route.query.dptid, //上级部门id
          dptname:this.$route.query.dptname,//上级部门名字
          name:name, //子部门名字
          pId: this.$route.query.pId //子公司id
        }
      });
        
    },
    
  },
  created() {
    this.top();
    this.getList();
    this.getListb()
    // this.onDelete()
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
  padding-bottom: 2rem;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  background-color: #ededed;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.search {
  background-color: white;
  width: 100%;
}

.btn {
  color: #00a2ff;
  background-color: white;
  border: none;
  font-size: 0.35rem;
  height: 1.2rem;
  line-height: 1.2rem;
  
}

.mainicon{
  font-size: 1.8rem;
  color: #9a9a9a
}

.main-p1{
  font-size: 0.4rem;
  color: #9a9a9a
}
.main-p2{
  font-size: 0.3rem;
  color: #9a9a9a;
  margin-top:0.2rem
}

.a {
  font-size: 0.35rem;
  margin: 0.2rem 0.3rem 0.1rem 0.2rem;
  position: relative;
}

.d {
  font-size: 0.4rem;
  margin: 0.15rem 0.3rem 0.15rem 0.4rem;
  position: relative;
}

.b {
  font-size: 0.3rem;
  color: #9a9a9a;
  margin: 0 0.3rem 0.1rem 0;
}
.c {
  font-size: 0.5rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.1rem;
}
.top{
  width: 100%;
  position:fixed;
  top:1rem;
  padding:0.2rem 0;
  background-color: white;
  z-index: 2;
}
.icon {
  font-size: 0.35rem;
  color: #bcbcbc;
  font-weight: bolder;
  position: absolute;
  top: 0.24rem;
}
.hr{
  width: 90%;
  position:fixed;
  top:1.7rem;
  background-color: white;
  z-index: 2;
  margin: 0 5%
}
.round {
  background-color: #00a2ff;
  color: white;
  border: 0.01rem solid #00a2ff;
  width: 0.85rem;
  height: 0.85rem;
  border-radius: 0.85rem;
  font-size: 0.35rem;
  line-height: 0.85rem;
  text-align: center;
  overflow: hidden;
}
</style>