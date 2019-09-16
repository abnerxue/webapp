<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">{{this.$route.query.coname}}</van-col>
    </van-row>


    <van-row class="top">
      <!-- 头部返回 -->
      <van-col span="1"></van-col>
      <van-col span="6" style="color:#00a2ff;font-size:0.3rem">
        <span @click="goa">{{this.$route.query.coname.slice(2,8)}}</span>
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" class="icon" />
      </van-col>
      <van-col span="6" style="color:#00a2ff;font-size:0.3rem">
          <span @click="gob">{{this.$route.query.dptname}}</span>
      </van-col>
      <van-col span="2">
        <van-icon name="arrow" class="icon" />
      </van-col>
      <van-col span="6" style="font-size:0.3rem">{{this.$route.query.name}}</van-col>
      <van-col span="1"></van-col>
    </van-row>
    <div style="height:0.2rem;width:100%;background-color:#ededed;margin-bottom:0.2rem ;top:1.8rem;z-index:2;position:fixed"></div>
    

    <div style="margin-top:1.8rem ;padding-top:0.15rem">
      <div v-for="(item,index) in pagemember" :key="index">
        <!-- 成员 -->

        <div class="a" @click="gofirst(item.id,item.name)">
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
    </div>
    <van-row v-if="pagemember.length==0" style="margin-top:2.5rem;text-align:center">
      <van-col span="6"></van-col>
      <van-col span="12">
        <van-icon name="contact" class="mainicon"/>
        <p class="main-p1">暂无成员</p>
        
      </van-col>
      <van-col span="6"></van-col>
    </van-row>
    
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
      dptid:""
    };
  },
  methods: {
    goa(){
      this.$router.push({
          path:"/department",
          query:{
              pId: this.$route.query.pId,
              coname: this.$route.query.coname,
          }
      });
    },
    gob(){
      this.$router.back("/member");
    },
    goback() {
      this.$router.back("member");
    },
    top() {
      window.scrollTo(0, 0);
    },
    
    onAdd() {
      this.$router.push({
        path: "/add",
        query: {
          id: this.$route.query.id, //子部门id
          name:this.$route.query.name, //子部门名字
          coname:this.$route.query.coname,
          pId:this.$route.query.pId
        }
      });
        
    },
    addb(){
      this.$router.push({
        path: "/addchilddept",
        query: {
          name: this.$route.query.name, 
          id: this.$route.query.id,
          coname:this.$route.query.coname,
          pId:this.$route.query.pId
        }
      });
    },
    goeditchilddept(id,name){
      this.$router.push({
        path: "/editchilddept",
        query: {
          name: this.$route.query.name, //子部门name
          id: this.$route.query.id,     //子部门id
          coname:this.$route.query.coname,
          pId:this.$route.query.pId,
          dptid:this.$route.query.dptid, //上级部门id
          dptname:this.$route.query.dptname,//上级部门名字
          uId:id,   //部门主管id
          uName:name,
        }
      });
    },
    getList() {
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.cid,
        name: this.$route.query.name,
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
      //     this.member_id= this.$route.query.id,
      //     this.state= this.$route.query.state
      //      for(var i =0 ;i<this.pagemember.length;i++){
      //   if(this.pagemember[i].id=this.member_id){
      //     this.pagemember[i].state=this.state
      //   }
      // }
       console.log(this.pagemember)
        });
        
    },
    gofirst(id,name) {
      let list_name = sessionStorage.getItem('tag');
      if(list_name ==1){
        list_name = 'select_list_';
      }else{
        list_name = 'select_list';
      }
      if(!sessionStorage.getItem(list_name)){
        sessionStorage.setItem(list_name,JSON.stringify([
            {
            uId:id,
            uName:name,
            // coname: this.$route.query.coname,
            // dptname:this.$route.query.dptname,
            // pId: this.$route.query.pId,
            // dptid: this.$route.query.dptid,
            id:this.$route.query.id
          }
        ]));
      }else{
        let lists = JSON.parse(sessionStorage.getItem(list_name));
        lists.push({
          uId:id,
          uName:name,
          // coname: this.$route.query.coname,
          // dptname:this.$route.query.dptname,
          // pId: this.$route.query.pId,
          // dptid: this.$route.query.dptid,
          id:this.$route.query.id
        });
    //     let r = lists.filter(function (element, index, self) {
    //       // console.log(self.indexOf(element.uId) +"=========="+index);
    //       // console.log(element.uId +"==="+ self[index].uId);
    //       if(element.uId === self[index].uId){
    //         // element.uId === self[index].uId
    //         console.log(self.indexOf(element));
    // 　　　　return self.indexOf(element) === index;
    //       }
    // 　　}); 
    let obj = {};

let peon = lists.reduce((cur,next) => {
    obj[next.uId] ? "" : obj[next.uId] = true && cur.push(next);
    return cur;
},[]) //设置cur默认类型为数组，并且初始值为空的数组
console.log(peon);
    // let set = new Set(lists);
    // console.log(set);
        sessionStorage.setItem(list_name,JSON.stringify(peon));
      }
      this.$router.push({
        path: "/generalapproval",
        query: {
          uId:id,
          uName:name,
          // coname: this.$route.query.coname,
          // dptname:this.$route.query.dptname,
          // pId: this.$route.query.pId,
          // dptid: this.$route.query.dptid,
          id:this.$route.query.id
        }
      });
      
    },

    
    
  },
  created() {
    this.top();
    this.getList();
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
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.25rem;
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