<template>
  <div class="draw">
    <van-row class="s-headeras" style="background:#222222;">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center;color:#ffffff;">k线</van-col>
      <van-col span="2" class="image">
        <img src="../../../../static/img/时间.png" @click="model=1" alt />
      </van-col>
    </van-row>
    <div class="hello" @click="ceshi">
      <chart ref="chart1" id="char" :auto-resize="true"></chart>
    </div>
    <div class="hello" @click="checkmacd">
      <chart ref="chart2" id="char2" :auto-resize="true"></chart>
    </div>
    <div class="tabbar">
      <div class="tabbar_consult" @click="consult">
        <center>
          <img src="../../../../static/img/btu_zixun_pre.png" />
          <br />
          <a>资讯</a>
        </center>
      </div>
      <div class="tabbar_plate" @click="plate">
        <center>
          <img src="../../../../static/img/btu_pankou_pre.png" />
          <br />
          <a>盘口</a>
        </center>
      </div>
      <div class="tabbar_shar" @click="shar">
        <center>
          <img src="../../../../static/img/btu_fenshi_pre.png" />
          <br />
          <a>分时</a>
        </center>
      </div>
      <div class="tabbar_large" @click="large">
        <center>
          <img src="../../../../static/img/btu_kxian_pre.png" />
          <br />
          <a>k线</a>
        </center>
      </div>
      <div class="tabbar_transact" @click="transact">
        <center>
          <img src="../../../../static/img/btu_jiaoyi.png" />
          <br />
          <a>交易</a>
        </center>
      </div>
    </div>

    <div class="pull">
      <table border cellspacing="0" cellpadding="0">
        <tr>
          <td>
            <a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">卖</a>
            <a
              style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;"
            >{{maths}}</a>
          </td>
          <th rowspan="3" style="font-size:1rem; color: #ffffff;">{{maths}}</th>
        </tr>
        <tr>
          <td>
            <a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">买</a>
            <a
              style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;"
            >{{maths}}</a>
          </td>
        </tr>
        <tr>
          <td>
            <a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">仓</a>
            <a
              style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;"
            >{{maths}}</a>
          </td>
        </tr>
      </table>
    </div>

    <div id="model" :style="{'display':model==1?'block':'none'}">
      <div class="model_none" @click="model=0"></div>
      <div class="model_bar">
        <center>
          <div :style="{'background':model_type==1?'orange':'#222222'}" @click="model_type=1">1分钟</div>
          <div :style="{'background':model_type==2?'orange':'#222222'}" @click="model_type=2">1小时</div>
          <div :style="{'background':model_type==3?'orange':'#222222'}" @click="model_type=3">1天</div>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *                           这是一份只有它能看懂的代码
 * 
 *               ii.                                         ;9ABH,
 *              SA391,                                    .r9GG35&G
 *              &#ii13Gh;                               i3X31i;:,rB1
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8
 *               :SB9s:,............................,,,.,,,SASh53h,1G.
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@H:       ...,,,,,,,:Gs
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA
 *      ,8X5;   .     .......                                       ,;iihS8Gi
 *         1831,                                                 .,;irrrrrs&@
 *           ;5A8r.                                            .:;iiiiirrss1H
 *             :X@H3s.......                                .,:;iii;iiiiirsrh
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
 */
import echarts from "echarts";
export default {
  name: "hello",
  data() {
    return {
      maths: 0,
      model_type: 0,
      value: "",
      rawDatas: {
        deshi: "ssss"
      },
      message: {
        code: "",
        type: ""
      },
      model: 0,
      creat: [],
      rawData: [],
      newdata: [],
      ma5: [],
      ma10: [],
      ma20: [],
      ma40: [],
      dea: [],
      dif: [],
      macd: [],
      type: "jdk"
    };
  },
  created() {},
  mounted() {
    this.maths = (Math.random() * 1000).toFixed(2);
    this.model_type = 3;
  },
  methods: {
    onload() {
      this.chart = echarts.init(document.getElementById("char"));
      this.datas = this.rawData.map(function(item) {
        return item[0];
      });
      this.data = this.rawData.map(function(item) {
        return [+item[3], +item[4], +item[2], +item[1]];
      });
      this.ma5 = this.calculateMA(5, this.data);
      this.ma10 = this.calculateMA(10, this.data);
      this.ma20 = this.calculateMA(20, this.data);
      this.ma40 = this.calculateMA(40, this.data);
      let that = this;
      this.options = {
        backgroundColor: "#21202D",
        legend: {
          //type:'scroll', // 左右滑动图例
          data: ["MA5", "MA10", "MA20", "MA40"],
          inactiveColor: "#777",
          textStyle: {
            color: "#fff"
          },
          formatter: function(name) {
            if (that.rawData.length > 0) {
              if (name === "MA5")
                return name + "：" + that.ma5[that.ma5.length - 1];
              if (name === "MA10")
                return name + "：" + that.ma10[that.ma10.length - 1];
              if (name === "MA20")
                return name + "：" + that.ma20[that.ma20.length - 1];
              if (name === "MA40")
                return name + "：" + that.ma40[that.ma40.length - 1];
            }
            return name;
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1
            }
          }
        },
        xAxis: {
          show: true,
          type: "category",
          data: this.datas,
          axisLine: { lineStyle: { color: "#8392A5" } }
        },
        yAxis: {
          show: true,
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false }
        },
        grid: {
          left: "7%",
          right: "1%",
          top: "15%",
          bottom: "14%"
        },
        dataZoom: [
          /*{
            textStyle: {
              color: "#8392A5"
            },
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            dataBackground: {
              areaStyle: {
                color: "#8392A5"
              },
              lineStyle: {
                opacity: 0.8,
                color: "#8392A5"
              }
            },
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
		  },*/
          {
            type: "inside",
            startValue: this.data.length - 25,
            endValue: this.data.length
          }
          /*{
            show: true,
            type: 'slider',
            y: '90%',
            start: 80,
            end: 100
        }*/
        ],
        animation: true,
        series: [
          {
            type: "candlestick",
            name: "日K",
            data: this.data,
            itemStyle: {
              normal: {
                color: "#FD1050",
                color0: "#3498DB",
                borderColor: "#FD1050",
                borderColor0: "#3498DB"
              }
            }
          },
          {
            name: "MA5",
            type: "line",
            data: this.ma5,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "MA10",
            type: "line",
            data: this.ma10,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "MA20",
            type: "line",
            data: this.ma20,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "MA40",
            type: "line",
            data: this.ma40,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      this.chart.setOption(this.options);
      this.showJDK();
    },
    getdata(code, type) {
      let _this = this;
      _this.message = {
        code: code,
        timeType: type
      };
      this.$ajax
        .post("cxt/currency/kLine", _this.$qs.stringify(_this.message), {
          headers: _this.Base.initAjaxHeader(1, _this.message)
        })
        .then(res => {
          console.log("K线数据网络请求结果");
          console.log(res.data);
          for (let value in res.data.data.priceList) {
            _this.creat[value] = [
              res.data.data.priceList[value].time,
              res.data.data.priceList[value].maxPrice.toString(),
              res.data.data.priceList[value].minPrice.toString(),
              res.data.data.priceList[value].startPrice.toString(),
              res.data.data.priceList[value].yesterday.toString(),
              res.data.data.priceList[value].j.toFixed(3).toString(),
              res.data.data.priceList[value].d.toFixed(3).toString(),
              res.data.data.priceList[value].k.toFixed(3).toString(),
              "-"
            ];
            _this.dea.push(res.data.data.priceList[value].dea.toFixed(2));
            _this.dif.push(res.data.data.priceList[value].dif.toFixed(2));
            _this.macd.push(res.data.data.priceList[value].macd.toFixed(2));
          }
          _this.rawData = _this.creat;
          this.onload();
        });
    },
    showJDK() {
      let that = this;
      this.chart2 = echarts.init(document.getElementById("char2"));
      this.options2 = {
        backgroundColor: "#21202D",
        legend: {
          data: ["J", "D", "K"],
          inactiveColor: "#777",
          textStyle: {
            color: "#fff"
          },
          formatter: function(name) {
            if (that.rawData.length > 0) {
              if (name === "J")
                return name + "：" + that.rawData[that.rawData.length - 1][5];
              if (name === "D")
                return name + "：" + that.rawData[that.rawData.length - 1][6];
              if (name === "K")
                return name + "：" + that.rawData[that.rawData.length - 1][7];
            }
            return name;
          }
        },
        /*tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1
            }
          }
		},*/
        xAxis: {
          show: true,
          type: "category",
          data: this.datas,
          axisLine: { lineStyle: { color: "#8392A5" } }
        },
        yAxis: {
          show: true,
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false }
        },
        grid: {
          left: "7%",
          right: "1%",
          top: "5%",
          bottom: "10%"
        },
        dataZoom: [
          {
            type: "inside",
            startValue: this.data.length - 25,
            endValue: this.data.length
          }
        ],
        animation: true,
        series: [
          {
            name: "J",
            type: "line",
            data: this.rawData.map(function(item) {
              return item[5];
            }),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "D",
            type: "line",
            data: this.rawData.map(function(item) {
              return item[6];
            }),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "K",
            type: "line",
            data: this.rawData.map(function(item) {
              return item[7];
            }),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      this.chart2.setOption(this.options2);
    },
    showMACD() {
      let that = this;
      this.chart2 = echarts.init(document.getElementById("char2"));
      this.options2 = {
        backgroundColor: "#21202D",
        legend: {
          data: ["DEA", "DIF", "MACD"],
          inactiveColor: "#777",
          textStyle: {
            color: "#fff"
          },
          formatter: function(name) {
            if (that.rawData.length > 0) {
              if (name === "DEA")
                return name + "：" + that.dea[that.dea.length - 1];
              if (name === "DIF")
                return name + "：" + that.dif[that.dif.length - 1];
              if (name === "MACD")
                return name + "：" + that.macd[that.macd.length - 1];
            }
            return name;
          }
        },
        /*tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "#376df4",
              width: 2,
              opacity: 1
            }
          }
		},*/
        xAxis: {
          show: true,
          type: "category",
          data: this.datas,
          axisLine: { lineStyle: { color: "#8392A5" } }
        },
        yAxis: {
          show: true,
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false }
        },
        grid: {
          left: "7%",
          right: "1%",
          top: "5%",
          bottom: "10%"
        },
        dataZoom: [
          {
            type: "inside",
            startValue: this.data.length - 25,
            endValue: this.data.length
          }
        ],
        animation: true,
        series: [
          {
            name: "DEA",
            type: "line",
            data: this.dea,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "DIF",
            type: "line",
            data: this.dif,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          },
          {
            name: "MACD",
            type: "line",
            data: this.macd,
            smooth: true,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            }
          }
        ]
      };
      this.chart2.setOption(this.options2);
    },
    checkmacd() {
      if (this.type === "jdk") {
        this.type = "macd";
        this.showMACD();
      } else if (this.type === "macd") {
        this.type = "jdk";
        this.showJDK();
      }
    },
    onClickLeft() {
      this.$router.back("/company");
    },
    ceshi() {},
    plate() {
      this.$router.push({ path: "/plate?stage=" + this.$route.query.stage });
    },
    shar() {
      this.$router.push({ path: "/shar?stage=" + this.$route.query.stage });
    },
    large() {
      this.$router.push({ path: "/large?stage=" + this.$route.query.stage });
    },
    consult() {
      this.$router.push({ path: "/consult?stage=" + this.$route.query.stage });
    },
    transact() {
      this.$router.push({ path: "/transact?stage=" + this.$route.query.stage });
    },
    calculateMA(dayCount, data) {
      var result = [];
      for (var i = 0, len = data.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data[i - j][1];
        }
        result.push((sum / dayCount).toFixed(2));
      }
      return result;
    }
  },
  computed: {},
  watch: {
    model_type: function(newval) {
      this.creat = [];
      this.rawData = [];
      this.onload();
      this.getdata(this.$route.query.stage, newval);
    }
  }
};
</script>

<style scoped>
.pull > table {
  width: 100%;
}
.pull td {
  width: 45%;
}
.pull th {
  width: 45%;
}
.pull {
  width: 100%;
  height: 11%;
  background: rgba(33, 32, 45, 1);
  left: 0px;
  bottom: 0px;
}
.tabbar {
  width: 100%;
  height: 7%;
  position: fixed;
  left: 0px;
  background: #323233;
  bottom: 0px;
}
.tabbar > div {
  width: 20%;
  height: 100%;
  float: left;
  padding-top: 0.1rem;
}
.tabbar img {
  width: 20%;
}
.tabbar a {
  color: #9a9a9a;
}
.tabbar_large {
  background: #ff800e;
}
.tabbar_large a {
  color: #ffffff;
}
.draw {
  position: relative;
  width: 100%;
  height: 100%;
}
.hello {
  height: 37%;
}
#model {
  position: absolute;
  width: 100%;
  overflow-y: hidden;
  height: 90%;
  background: rgba(0, 0, 0, 0.6);
  margin-top: -165.4%;
  z-index: 999;
}
#char {
  width: 100%;
  height: 100%;
}
#char2 {
  width: 100%;
  height: 100%;
}
.model_none {
  width: 100%;
  height: 90%;
}
.model_bar {
  width: 100%;
  height: 10%;
  color: #ffffff;
  background: #222222;
}
.model_bar div {
  width: 1.49rem;
  float: left;
  border-radius: 2px;
  height: 0.5rem;
  padding: 0.4rem;
  border: 0.1rem #000000 solid;
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
.image {
  margin-top: -0.2rem;
}
</style>
