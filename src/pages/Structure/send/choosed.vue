
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="21">请选择</van-col>
    </van-row>

    <div style="padding-top:1.2rem">
      <div v-for="(item,index) in pageDatab" :key="index">
        <div @click="gomember(item.id,item.name)">
          <div class="a" >
          {{item.name}} 
          <!-- <span class="b"  v-bind="getNum(item.id)">({{item.id}})</span> -->
          <van-icon name="arrow" class="c"/>
        </div>
        <hr style="margin:0.2rem 5%;width:90%" />
        </div>
      </div>
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
      active: 3,
      n: "",
      value: "",
      pageDatab: [],
      temp_id: 0,
      temp_name: "",
      parents_list: "",
      root: false,
      pagemember:[],
     
    };
  },

  created() {
    this.top();
    this.getList();
  },
  methods: {
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      
      let _this = this;
      let data = {
        pId:this.$route.query.pId, //子公司id
        token: this.GLOBAL.token
      };
        
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
          
            console.log(res.data.data.dept)
          //   if(res.data.data.parents&&res.data.data.parents.length>1){
          //     this.temp_id=res.data.data.parents[1].id;
          //     this.temp_name = res.data.data.parents[0].name;
          //     this.temp_name = '上一级';
          //     this.parents_list = res.data.data.parents;
          //   }else if(res.data.data.parents&&res.data.data.parents.length==1){
          //     this.temp_id=0;
          //     this.temp_name = '总裁办';
          //     this.temp_name = '上一级';
          //     this.parents_list = res.data.data.parents;
          //     this.root = false;
          //   }else{
          //     this.temp_id=0;
          //     this.temp_name = '  ';
          //     this.root = true;
          //   }
          //   console.log(this.parents_list);
          // if(tag){
          //   this.temp_id=id;
          //   this.temp_name = name;
          // }
        });
        
    },
    
    gomember(id,name) {
      this.$router.push({
        path: "/choosef",
        query: {
          dptid: id,
          coname: this.$route.query.coname,
          pId:this.$route.query.pId, //子公司id
          dptname:name,
          id:this.$route.query.id
        }
      });
        
    },
    goback() {
      this.$router.push({
        path:"/choose",
        query:{
          pId:this.$route.query.pId,
          coname:this.$route.query.coname //改
        }
      });
    },
    top() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.p {
  position: absolute;
  right: 1rem;
  bottom: 0rem;
  font-size: 0.3rem;
}
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
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
  color: #00a2ff;
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: white;
}

#title {
  z-index: 2;
  width: 100%;
  background-color: white;
  text-align: left;
  margin-left: 0.5rem;
  padding-bottom: 0.2rem;
}

.line {
  position: fixed;
  top: 2.3rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.a {
  font-size: 0.35rem;
  margin:0.2rem 0.3rem 0.2rem 0.4rem;
  position: relative;
}
.b{
  color:#bcbcbc
}
.c {
  font-size: 0.45rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.05rem;
}

.d {
  font-size: 0.5rem;
  color: #00a2ff;
}

.btn {
  color: #00a2ff;
  background-color: white;
  border: none;
  font-size: 0.35rem;
  height: 1.2rem;
  line-height: 1.2rem;
  
}


</style>

