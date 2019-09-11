<template>
  <div class="corporation">
    <van-row class="s-headeras" style="background:#222222;">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="18" style="color:#ffffff;">拍品汇总</van-col>
      <van-col span="2"><van-icon name="search" @click="gosearch"/></van-col>
      <van-col span="2"><van-icon name="star-o"/></van-col>
    </van-row>
    <table class="list_li" cellspacing="0" cellpadding="0">
      <tr>
        <th>名称</th>
        <th>最新</th>
        <th @click="list3=list3=='涨跌'?'涨幅%':'涨跌'">{{list3}}</th>
        <th>流拍量</th>
      </tr>
      <tr v-for="(init,index) in company_init" :key="index" @click="fff(init.code)">
        <td style="height: 0.6rem;">
          <a>{{init.name}}</a>
        </td>
        <td>
          <a>{{init.nowPrice}}</a>
        </td>
        <td>
          <a>{{init.liftRate}}%</a>
        </td>
        <td>
          <a>{{Math.round(init.itemCount/10000)}}万</a>
        </td>
        <hr />
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: "",
      company_init: [],
      list3: "涨跌"
    };
  },

  methods: {
    fff(e) {
      this.$router.push({ path: "/plate?stage=" + e });
    },
    init() {
      console.log(this.company_init);
    },
    onClickLeft() {
      // this.$router.push({path:'/large?stage='+this.mess})
      this.$router.push("/Market");
    },
    getcompany(code, type) {
      this.$ajax.post("/cxt/currency/list").then(res => {
        console.log(res.data.data);
        this.company_init = res.data.data;
      });
    },
    gosearch(){
      this.$router.push('/search')
    }
  },
  mounted() {
    this.getcompany();
  }
};
</script>

<style>
.list_li {
  width: 100%;
}
.list_li th {
  color: #aaaaaa;
  height: 0.6rem;
  background: #323233;
  font-size: 0.3rem
}
.list_li a {
  font-size: 0.3rem;
}
.list_li tr td:nth-child(1) {
  width: 39%;
}
.list_li tr td:nth-child(1) a {
  float: left;
  margin-left: 0.2rem;
  color: #ff800e;
}
.list_li tr td:nth-child(2) {
  width: 18%;
}
.list_li tr td:nth-child(2) a {
  float: right;
  margin-right: 0.3rem;
  color: red;
}
.list_li tr td:nth-child(3) {
  width: 18%;
}
.list_li tr td:nth-child(3) a {
  margin-right: 0.3rem;
  float: right;
  color: red;
}
.list_li tr td:nth-child(4) {
  width: 25%;
}
.list_li tr td:nth-child(4) a {
  float: right;
  margin-right: 0.4rem;
  color: #7d7e80;
}
.corporation {
  width: 100%;
  height: 100%;
  background: #222222;
}
.s-headeras {
  height: 8%;
  line-height: 1rem;
  color: #ffffff;
  font-size: 0.35rem;
  background-color: #ffffff;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
</style>