<template>
  <div>
    <van-nav-bar
      v-model="s"
      title
      left-arrow
      @click-left="onClickLeft"
      style="background-color:#ededed"
    />

    <p class="s-p0">{{this.$route.query.levelName}}</p>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="18">
          <van-cell
            v-for="(item,index) in lists"
            :key="index"
            :title="item.name?item.name:'暂无信息'"
            :value="item.tel?item.tel:'暂无信息'"
            icon=''
          />
        </van-col>
        <van-col span="1"></van-col>
      </van-row>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPage: 0,
      pageNumber: 1,

      loading: false, //控制上拉加载的加载动画
      finished: false, //控制在页面往下移动到底部时是否调用接口获取数据
      isLoading: false, ///控制下拉刷新的加载动画
      nodata: false,
      value: "",
      s: "",
      lists: [],
      nodata_: false,
      loading: false,
      finished: false
    };
  },
  created() {
    //  this.getDataList()
    //  this.f()
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let data = {
          page: this.pageNumber, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
          size: 20,
          token: this.GLOBAL.token,
          level: this.$route.query.level,
          usertoken: localStorage.getItem("token")
        };
        console.log(data);
        let _this = this;
        this.uplists = [
          {
            id: "",
            tel: "",
            name: ""
          }
        ];

        this.$ajax
          .post("/cxt/relation/allSubs", _this.$qs.stringify(data), {
            headers: _this.Base.initAjaxHeader(1, data)
          })
          .then(res => {
            console.log(res.data.data.list);
            _this.uplists = res.data.data.list;
            
            let arr = _this.uplists;
            console.log(arr);
            if (arr && arr.length > 0) {
              _this.pageNumber++;
            } else {
              console.log("no_data!!");
              arr = [];
              _this.nodata_ = true;
            }

            _this.lists = _this.lists.concat(arr);
            // 加载状态结束
            console.log(_this.lists);
            this.loading = false;

            // 数据全部加载完成
          
            if (_this.nodata_) {
              this.finished = true;
            }
          });
      }, 500);
    },
    f() {
      this.s.title = this.$route.query.levelName;
      console.log(this.s.title);
    },
    onClickLeft() {
      this.$router.back("/mymessage");
    },
  /*   getDataList() {
      let data = {
        token: this.GLOBAL.token,
        level: this.$route.query.level
      };
      console.log(data);
      let _this = this;
      _this.lists = {
        id: "",
        tel: "",
        name: ""
      };
      //  console.log(localStorage.getItem('token'));
      this.$ajax
        .post("/cxt/relation/allSubs", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          _this.lists = res.data.data.list;
          console.log(_this.lists);
        });
    } */
  }
};
</script>

<style scoped>
element.style{
      font-size: 54.8px;
}
.van-nav-bar__title {
  color: black;
  font-size: 0.35rem;
  /* background-color: #ededed */
}

.van-nav-bar .van-icon {
  color: black;
  font-size: 0.4rem;
}
.s-img-c {
  width: 70%;
  margin: 0 0.15rem 0 0rem;
}

/* .s-p0 {
  color: #00a2ff;
  font-size: 0.4rem;
  margin: 1rem 0 0.1rem 0rem;
} */
</style>
