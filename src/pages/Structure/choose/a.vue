
<template>
  <div style=" overflow: hidden;">
    <van-row class="m-header">
      <van-col span="3">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="5">请选择</van-col>
      <van-col span="13"></van-col>
      <van-col span="3">
        <van-icon class="iconfont" class-prefix='icon' name='icon_addperson' />
      </van-col>
    </van-row>
    <!-- 搜索框 -->
    <van-row class="search">
      <van-col span="24" style="text-align:center"></van-col>
    <van-search placeholder="搜索" v-model="s"  shape="round"/>
    </van-row>

    <!-- <div style="height:0.2rem;background-color:#ededed;width:100%;position:fixed;top:3.8rem"></div> -->

    <!-- <van-row style="margin-top:4.2rem">
      <van-col span="2"></van-col>
      <van-col span="3">
        <van-icon name="cluster-o" class="b" />
      </van-col>
      <van-col span="19" style="font-size:0.35rem">总公司组织架构</van-col>
    </van-row>
    <hr style="margin:0.2rem 5%;width:90%" /> -->
    <div style="margin-top:2.5rem">
    <div v-for="(item,index) in pageData" :key="index" >
      <div @click="gochoosed(item.id,item.name)">
        <van-row>
          <van-col span="2"></van-col>
          <van-col span="20" style="font-size:0.35rem">{{item.name.slice(0,12)}}</van-col>
          <van-col span="2">
            <van-icon name="arrow" class="d" />
          </van-col>
        </van-row>
        <hr style="margin:0.2rem 5% 0.2rem 5%;width:90%" />
      </div>
    </div>
    </div>
    <!-- <div style="height:0.2rem;background-color:#ededed;width:100%"></div> -->


    <!-- <van-tabbar v-model="active">
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

    </van-tabbar> -->
    <!-- <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/Structure" icon="comment-circle-o">工作</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>-->
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
      pageData: "",
      temp_id: 0,
      temp_name: "",
      parents_list: "",
      root: false,
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

  created() {
    this.top();
    this.getList(0);
  },
  methods: {
    gochoosed(id, name) {
      this.$router.push({
        path: "/b",
        query: {
          pId: id,
          coname: name,
          id:this.$route.query.id
        }
      });
      console.log(id);
      console.log(name);
    },
    goback() {
      this.$router.push({
        path:'/content',
        query:{
          id:this.$route.query.id
        }
      });
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList(id, tag, name) {
      let _this = this;
      let data = {
        pId: id,
        token: this.GLOBAL.token
      };

      this.pageData = [
        {
          id: 7,
          name: "中华孝道园",
          des: "",
          parent_id: 0,
          sort: 0,
          state: 0,
          ctime: "2019-07-16 20:38:48",
          utime: null
        }
      ];

      this.$ajax
        .post("/cxt/oa/dept/detail", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pageData = res.data.data.dept;
          // if(res.data.data.parents&&res.data.data.parents.length>1){
          //   this.temp_id=res.data.data.parents[1].id;
          //   this.temp_name = res.data.data.parents[0].name;
          //   this.temp_name = '上一级';
          //   this.parents_list = res.data.data.parents;

          // }else if(res.data.data.parents&&res.data.data.parents.length==1){
          //   this.temp_id=0;
          //   this.temp_name = '总裁办';
          //   this.temp_name = '上一级';
          //   this.parents_list = res.data.data.parents;
          //   this.root = false;
          // }else{
          //   this.temp_id=0;
          //   this.temp_name = '  ';
          //   this.root = true;
          // }
          // console.log(this.parents_list);
          // if(tag){
          //   this.temp_id=id;
          //   this.temp_name = name;
          // }
        });
    },
    top() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.grey{
  height:0.2rem;
  background-color:#ededed;
  width:100%;
  position:fixed;
  top:3.8rem;
  z-index: 2
}
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
  color:#00a2ff
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: white;
  padding-bottom:0.2rem
}

.top {
  position: fixed;
  top: 2.3rem;
  z-index: 2;
  width: 100%;
  background-color: white;
  text-align: center;
  z-index: 5;
  padding-bottom: 0.4rem
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
  font-size: 0.4rem;
  margin: 0.3rem 0.3rem 0.3rem 1.3rem;
  position: relative;
}

.c {
  font-size: 0.5rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.1rem;
}
.b {
  font-size: 0.5rem;
}
.d {
  font-size: 0.45rem;
  color: #bcbcbc;
  position: absolute;
  right: 0.35rem;
}
</style>

