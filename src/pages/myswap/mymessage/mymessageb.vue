<template>
  <div class="s-bg">
     <van-nav-bar title="我的信息" left-arrow @click-left="onClickLeft" style="background-color:#ededed; height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 10;
  
  width: 100%;"/>
    <img src="../../../../static/img/myimg.png" class="s-img" />
    <van-cell v-model="tel" class="s-cell" />
    <van-tabs v-model="active" animated color="#00a2ff">
      <van-tab title="我的产品">

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <div v-for="(item,i) in card" :key="i">
        <div class="list" @click="detail(item)">
          <span>{{item.ctime}}</span>
          <span>账号{{item.tel}}发出一卡通提现请求</span>
          <span class="lit-btn" v-if="item.state==0">待处理 请尽快处理</span>
          <span class="lit-btn" v-else>已处理</span>
        </div>
        <hr />
      </div> -->
        <van-cell v-for="(item,index) in card" :key="index" :title="item.pname" :value="item.money" :label="item.stime" icon=""/>
    </van-list>
    </van-tab>
    <van-tab title="我的组织">
         <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoadb">
        <div class="s-l"  v-for="(item,index) in rolelist.subs" :key="index">
            

           
              <van-row>
              <van-col span='17'>  <van-cell>
             
              {{item.levelName}}
            </van-cell></van-col>
              <van-col span='7'>
                 <button class="s-btn" @click="goa(item.level,item.levelName)">查看全部（<span>{{item.count}}</span>）</button>
            </van-col>
              
            </van-row><!-- <van-cell title="我的区域经理" value=" " size="large" label="185*****265"  is-link style="padding-top:0.3rem" icon='../../../../static/img/myimg.png'/> -->
               <van-cell  v-for="(items,indexs) in item.levelUsers" :key="indexs" :title="items.name" :value="items.tel" style="text-align:right">
               </van-cell>
        </div>
         </van-list>
    </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
export default {
  data() {
    return {
      card: [],
      page: 1,
      size: 20,
      finished: false,
      loading: false,
      showDialog: true
    };
  },
  created() {
    
    /* if (this.GLOBAL.systemName === "android") {
      window.android.setStatusBarColor("#ffffff");
    }
    if (this.GLOBAL.systemName === "ios") {
      window.webkit.messageHandlers.setStatusBarColor.postMessage("#ffffff");
    } */
  },
  mounted() {},
  methods: {
    isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    },
    goBack() {
      this.$router.back("/mytotal");
    },
    detail(item) {
      this.$router.push({
        path: "/txrequestdetail",
        query: {
          item: item
        }
      });
    },
    onLoad() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.$ajax
        .post("/cxt/market/top/deals", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data.list.length > 0) {
              res.data.data.list.subs.forEach(item => {
                that.cardb.push(item);
              });
            }
            if (that.card.length != that.size * that.page) {
              that.finished = true;
              that.loading = false;
            } else {
              that.page++;
              that.loading = false;
            }
          } else {
            Toast(JSON.stringify(res.data.msg));
          }
        });
    },
     onLoadb() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.rolelist=[{

         }]
      this.$ajax
        .post("/cxt/relation/selfChain", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if (res.data.state === "000") {
            if (res.data.data.list.length > 0) {
              res.data.data.list.forEach(item => {
                that.card.push(item);
              });
            }
            if (that.card.length != that.size * that.page) {
              that.finished = true;
              that.loading = false;
            } else {
              that.page++;
              that.loading = false;
            }
          } else {
            Toast(JSON.stringify(res.data.msg));
          }
        });
    }
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #fff;
  height: 100%;
}
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
}
.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
.list {
  padding-top: 0.3rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
}
.list span {
  padding-bottom: 0.2rem;
  display: block;
}
.lit-btn {
  color: #00a2ff;
  width: 100%;
  text-align: right;
}
</style>
