<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">制定锁定期</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="margin-top:0.5rem;text-align:center;border:none;">
      <van-col span="2"></van-col>
      <van-col span="6">
        <p class="s-pas">当前价格</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <p class="s-pas">当前锁定期</p>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <p class="s-pas">当前释放比例</p>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="margin-top:0.2rem;text-align:center;font-size:.35rem">
      <van-col span="2"></van-col>
      <van-col span="6">
        <van-cell-group :border="false">{{this.listo.price}}</van-cell-group>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-cell-group :border="false">{{this.listo.month}}个月</van-cell-group>
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="6">
        <van-cell-group :border="false">{{this.listo.rate}}</van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <!-- 开始时间 -->
    <van-row style="text-align:left;font-size:.3rem;margin-top:0.5rem">
      <van-col span="1"></van-col>
      <van-col span="21">
        <van-cell
        style="font-size:.3rem"
        title="开始时间"
        v-model="startTime"
        @click="openpicker1"
      />
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-popup position="bottom" v-model="show1" id="p1">
      <van-datetime-picker
        ref="picker1"
        v-model="currentDate1"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="confirm1"
        
        @cancel="offpicker1"
      ></van-datetime-picker>
    </van-popup>
    <!-- 价格 -->
    <van-row style="text-align:left">
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="s-pas">制定常孝通价格</p>
        <van-row>
          <van-col span="20">
            <van-cell-group :border="false">
              <van-field style="font-size:.35rem" v-model="p" />
            </van-cell-group>
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="2" style="font-size:.35rem;margin-top:0.15rem">元</van-col>
        </van-row>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <!-- 锁定期 -->
    <van-row style="text-align:left;margin-top:0.2rem">
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="s-pas">制定常孝通锁定期</p>
        <van-row>
          <van-col span="19">
            <van-cell-group :border="false">
              <van-field style="font-size:.35rem" v-model="m" />
            </van-cell-group>
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="3" style="font-size:.35rem;margin-top:0.15rem">个月</van-col>
        </van-row>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <!-- 释放比例 -->
    <van-row style="text-align:left;margin-top:0.2rem">
      <van-col span="2"></van-col>
      <van-col span="20">
        <p class="s-pas">制定常孝通释放比例</p>
        <van-cell-group :border="false">
          <van-field style="font-size:.35rem" v-model="n" />
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    

    <div class="s-contain">
      <button class="s-btn" @click="confirms()">确定</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      minDate: new Date(),
      maxDate: new Date(2020, 10, 1),
      show1: false,
      startTime: "请选择",
      d: "",
      p: "",
      m:'',
      n:'',
      listo: "",
      currentDate1:''
    };
  },
  created() {
    this.getDataList();
  },
  methods: {
    handleConfirm(time) {
      console.log(time);
      // this.startTime =  new Date(time).format("yyyy-MM-dd hh:mm");
    },
    confirm1(val) {
      console.log(val);
      this.startTime =
        "" +
        val.getFullYear() +
        "-" +
        (val.getMonth() + 1) +
        "-" +
        val.getDate() +
        "";
      // console.log(this.startTime);
      this.show1 = false;
      //  this.startTime =  new Date(val).getTime().format("yyyy-MM-dd hh:mm");
    },
    openpicker1() {
      // this.$refs.picker1.open();
      this.show1 = true;
    },
    offpicker1() {
      this.show1 = false;
    },
    goback() {
      this.$router.push("/myswap");
    },
    confirms() {
      let data = {
        token: this.GLOBAL.token,
        price: this.p,
        rate:this.n,
        month:this.m,
        eday: this.startTime
      };
      console.log(data);

      let _this = this;
      this.lists = [
        {
          title: "",
          message: "",
          ctime: ""
        }
      ];

      this.$ajax
        .post("/cxt/system/priceManager", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          Toast(res.data.msg);
          /*   this.p.title=res.data.title,
          this.p.value=res.data.message,
          this.p.label=res.data.ctime */
          console.log(res.data);
          this.getDataList();
        });
    },
    getDataList() {
      let data = {
        token: this.GLOBAL.token
      };

      let _this = this;
      this.listo = "";

      this.$ajax
        .post("/cxt/system/cxtInfo", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          console.log(res.data);
          if (res.data.state === "000") {
            this.listo = res.data.data;
            console.log(this.listo);
          } else {
            Toast(res.data.msg);
          }
        });
    }
  }
};
</script>

<style scoped>
.s-headeras {
  /* position:fixed; */
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-contain {
  width: 100%;
  height: 20%;
}
.s-btn {
  width: 90%;
  color: white;
  background-color: #00a2ff;
  margin: 1.5rem 5%;
  font-size: 0.4rem;
  padding: 0.2rem 0;
}

.s-pas {
  color: #bcbcbc;
  font-size: 0.3rem;
}

.s-btnas {
  background-color: #ededed;
  padding: 0.15rem 0.35rem;
  font-size: 0.2rem;
  border-radius: 0.3rem;
}
</style>
