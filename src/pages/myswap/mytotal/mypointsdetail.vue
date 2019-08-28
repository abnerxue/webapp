<template>
    <div>
        <van-nav-bar title="积分明细" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
        <!-- <van-cell  value="2019-05"  style="padding-left:0.45rem ;font-size:0.2rem ;color:#bcbcbc" :border="false"/> -->
      <!--   <van-row>
            <van-col span="5">
                <van-cell  value="05-01"  style="padding-left:0.45rem" :border="false"/>
            </van-col>
            <van-col span="14">
                <van-cell  value="消费得到的积分"  :border="false"/>
            </van-col>
            <van-col span="5">
                <van-cell  title="+200" :border="false"/>
            </van-col>
        </van-row> -->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <van-cell v-for='(item,i) in card' :key='i' :title='item.ctime' :value="item.money"/>
     <!--  <div v-for="(item,i) in card" :key="i">
        <div class="list" @click="detail(item)">
          <span>{{item.ctime}}</span>
          <span>账号{{item.tel}}发出一卡通提现请求</span>
          <span class="lit-btn" v-if="item.state==0">待处理 请尽快处理</span>
          <span class="lit-btn" v-else>已处理</span>
        </div>
        <hr />
      </div> -->
    </van-list>
        <hr class="m-hr">
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:"",
            card: [],
      page: 1,
      size: 20,
      finished: false,
      loading: false,
      showDialog: true
        }
    },
    methods:{
        isEmpty(obj) {
      if (typeof obj == "undefined" || obj == null || obj == "") {
        return true;
      } else {
        return false;
      }
    },
    onLoad() {
      let that = this;
      let data = {
        token: this.GLOBAL.token,
        page: this.page,
        size: this.size
      };
      this.card=[{}]
      this.$ajax
        .post("/cxt/account/score/history", that.$qs.stringify(data), {
          headers: that.Base.initAjaxHeader(1, data)
        })
        .then(res => {
            console.log(res.data.data.list)
          if (res.data.state === "000") {
              this.card=res.data.data.list
                console.log(this.card)
            if (res.data.data.list.length > 0) {
               /*  this.card=res.data.data.list
                console.log(this.card) */
             /*  res.data.data.list.forEach(item => {
                that.card.push(item);
              }); */

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
        onClickLeft(){
            this.$router.back('/mypoints')
        }
    }
}
</script>
<style scoped>
.van-nav-bar__title {
    color:black;
    font-size: 0.35rem;
    background-color: #ededed
}

.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}

.van-cell__value--alone {
    color: #9a9a9a;
    text-align: left;
}

.m-hr{
    width: 90%;
    margin: 0 5%;
    border: 0.01rem solid #ededed
}
</style>
 