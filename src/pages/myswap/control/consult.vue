<template>
    <div class="consult">
        <van-row class="s-headeras" style="background:#222222;">
            <van-col span="2">
                <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
            </van-col>
            <van-col span="20" style="text-align:center;color:#ffffff;">资讯</van-col>
            <van-col span="2"></van-col>
        </van-row>
        <chart ref="chart1" id="char"  :auto-resize="true"></chart>
 		<div class="tabbar">
			 <div class="tabbar_consult" @click="consult">
 				<center>
 					<img src="../../../../static/img/图文咨询check.png"/><br />
 					<a>资讯</a>
 				</center>
 			</div>
 			<div class="tabbar_plate" @click="plate">
 				<center>
 					<img src="../../../../static/img/book.png"/><br />
 					<a>盘口</a>
 				</center>
 			</div>
 			<div class="tabbar_shar" @click="shar">
 				<center>
 					<img src="../../../../static/img/进度svg.png"/><br />
 					<a>分时</a>
 				</center>
 			</div>
 			<div class="tabbar_large" @click="large">
 				<center>
 					<img src="../../../../static/img/K线图.png"/><br />
 					<a>k线</a>
 				</center>
 			</div>
			 <div class="tabbar_transact" @click="transact">
 				<center>
 					<img src="../../../../static/img/交易.png"/><br />
 					<a>交易</a>
 				</center>
 			</div>
 		</div>
    </div>
</template>
<script>
    import echarts from "echarts";
    export default {
        data(){
            return{
                num:0,
                data:{
                        "last_close":"",
                        "items":{
                            "current":0,
                            "volume":0,
                            "avg_price":0,
                            "chg":-0.034,
                            "perent":0,
                            "timestamp":"",
                            "amount":4940033283.6,
                            "hight":500,
                            "low":600,
                            "macd":"null",
                            "kdj":"null",
                            "ratio":"null",
                            "capital":"null",
                            "volume_compare":{
                                "volume_sum":410851800,
                                "volume_sum_last":591364200
                            }
                        }
                },
                jsonData:'',            
                // data:JSON.parse(jsonData),
                grid1Data:[],  // 第一个grid的数据（折线图）
                grid2Data:[],// 第二个grid的数据（柱状图）
                grid3Data:[],// 第三个grid数据（折线图）
                grid4Data:[],// 第四个grid数据（柱状图）
                volumeColor1:[],  // 柱状图的颜色
                volumeColor2:[],// 柱状图的红绿规则比较麻烦，所以本次采用的规则则是根据价格的涨跌来区分
                UP_COLOR:"#E24528",
                DOWN_COLOR:"#009933",
                NORMAL_COLOR:"#33353C",
                priceMax:0,
                priceMin:0,
                priceInterval:0,
                volumeMax:0,
                volumeMin:0,
                volumeInterval:0,
                message:{
                    code:"",
                    type:""
                }
            }
        },
        mounted(){
            
             this.getdata("cxt","minute")
        },
        methods:{
            onClickLeft() {
                this.$router.push("/company");
            },
            plate(){
                this.$router.push({path:'/plate?stage='+this.$route.query.stage})
            },
            shar(){
                this.$router.push({path:'/shar?stage='+this.$route.query.stage})
            },
            large(){
                this.$router.push({path:'/large?stage='+this.$route.query.stage})
            },
            consult(){
                this.$router.push({path:'/consult?stage='+this.$route.query.stage})
            },
            transact(){
                this.$router.push({path:'/transact?stage='+this.$route.query.stage})
            },
            getdata(code,type){
                let _this = this
                _this.message={
                    code:code,
                    type:type
                }
                this.$ajax.post('/cxt/currency/index',_this.$qs.stringify(_this.message),{
                headers: _this.Base.initAjaxHeader(1, _this.message)
                })
                .then(res => {
                    this.num=0
                    for(let value in res.data.data.K){
                                _this.data[value]={
                                    "last_close":res.data.data.K[value].recyclePrice.toString(),
                                    "items":{
                                        "current":res.data.data.K[value].nowPrice.toString(),
                                        "volume":res.data.data.K[value].dealCount.toString(),
                                        "avg_price":res.data.data.K[value].nowPrice.toString(),
                                        "chg":-0.034,
                                        "perent":0,
                                        "timestamp":res.data.data.K[value].ctime.toString(),
                                        "amount":4940033283.6,
                                        "hight":500,
                                        "low":600,
                                        "macd":"null",
                                        "kdj":"null",
                                        "ratio":"null",
                                        "capital":"null",
                                        "volume_compare":{
                                            "volume_sum":410851800,
                                            "volume_sum_last":591364200
                                        }
                                    }
                        }
                        this.num++
                    // console.log(_this.data)
                    // this.lastPrice = this.data.data.last_close;
                    }
                    this.lastPrice = this.data[this.num-1].last_close;
                    this.initData()
	            }); 
        },
        color(params){
        　　 // params.dataIndex 柱子的下标
            return "#000";
        },
        initData(){
            console.log("1")
                for(var i in this.data){
                    // 上午的数据
                    if(i < 121){
                        if(this.data[i].items.current > this.priceMax){
                            this.priceMax = this.data[i].items.current;
                        }
                        if(this.data[i].items.current < this.priceMin || this.priceMin == 0){
                            this.priceMin = this.data[i].items.current;
                        }
                        // 左上方折线图
                        this.grid1Data.push([this.data[i].items.timestamp,this.data[i].items.current]);
                        
                        if(this.data[i].items.volume > this.volumeMax){
                            this.volumeMax = this.data[i].items.volume;
                        }
                        if(this.data[i].items.volume < this.volumeMin ){
                            this.volumeMin = this.data[i].items.volume;
                        }
                            
                            if(i == 0){
                                
                                if(this.data[i].items.current >= this.lastPrice){
                                    this.volumeColor1.push(this.UP_COLOR);
                                }else{
                                    this.volumeColor1.push(this.DOWN_COLOR);
                                }
                                
                            }else{
                                if(this.data[i].items.current >= this.data[i-1].items.current){
                                    this.volumeColor1.push(this.UP_COLOR);
                                }else{
                                    this.volumeColor1.push(this.DOWN_COLOR);
                                }
                                
                            }
                            
                        // 左下方柱状图
                        this.grid2Data.push([this.data[i].items.timestamp,this.data[i].items.volume]);
                        console.log("2")
                    }else if(i<this.num){// 下午的数据
                        if(this.data[i].items.current > this.priceMax){
                            this.priceMax = this.data[i].items.current;
                        }
                        if(this.data[i].items.current < this.priceMin || this.priceMin == 0){
                            this.priceMin = this.data[i].items.current;
                        }
                        // 右上方折线图
                        this.grid3Data.push([this.data[i].items.timestamp,this.data[i].items.current]);
                        
                        if(this.data[i].items.volume > this.volumeMax){
                            this.volumeMax = this.data[i].items.volume;
                        }
                        if(this.data[i].items.volume < this.volumeMin){
                            this.volumeMin = this.data[j].items[i].volume;
                        }
                        
                        if(this.data[i].items.current >= this.data[i-1].items.current){
                                this.volumeColor2.push(this.UP_COLOR);
                            }else{
                                this.volumeColor2.push(this.DOWN_COLOR);
                            }
                    
                        // 右下方柱状图
                        this.grid4Data.push([this.data[i].items.timestamp,this.data[i].items.volume]);
                        
                    }
            }
            
            // 重新计算价格的最大最小值，以达到对称的效果
            if((this.lastPrice - this.priceMax) * -1 > (this.lastPrice - this.priceMin)){
                this.priceMin = (this.lastPrice - ((this.lastPrice - this.priceMax)* -1));
            }else{
                this.priceMax =(this.lastPrice + (this.lastPrice - this.priceMin));
            }
            
            this.priceInterval = (this.priceMax - this.lastPrice) / 4;
            this.volumeInterval = this.volumeMax / 2;
            console.log("3")
            // console.log(this.data)
            // this.setOptions();
        },
        setOptions() {
            this.chart = echarts.init(document.getElementById("char"));
                this.option = {
                // grid
                grid:[
                    // 第一个grid
                    {
                        top:10,// 图表的外边距
                        height:200,// 图表的高度
                        left:'0',
                        width:'50%',//因为是左右各一个图表，使用百分比的方式显得更方便，
                    },
                    // 第二个grid，第二个图表是在第一个图表的下方，所以要把它定位到底部
                    {
                        top:210,//设置上方的外边距是第一个图表的高度再加10，使用top是方便我们调整下方grid的高度
                        left:'0',
                        width:'50%',// 宽度与第一个图表一个大
                        height:100
                    },
                    // 第三个grid，第三个图表是在第一个图表的右方，所以要把它定位到右方
                    // {
                    //     top:10,// 图表的外边距
                    //     left:'50%',//设置右边图表的左边距是第一个图表的大小，达到定位右边的效果
                    //     width:'50%',// 宽度与第一个图表一个大
                    //     height:200
                    // },
                    // // 第四个grid，第四个图表是在第三个图表的下方，所以要把它定位到底部
                    // {
                    //     top:210,//设置上方的外边距是第三个图表的高度再加10，使用top是方便我们调整下方grid的高度
                    //     left:'50%',//设置右边图表的左边距是第三个图表的大小，达到定位右边的效果
                    //     width:'50%',// 宽度与第一个图表一个大
                    //     height:100
                    // }
                ],
                // 多个图表则会存在对个x轴y轴，所以这里的配置我们也换成数组的方式
                // x轴配置，
                xAxis:[
                        // 第一个grid的x轴属性
                        {
                            
                            // 告诉echarts，这个第一个grid的x轴
                            gridIndex:0,
                            // 坐标轴是否留白
                            boundaryGap:false,
                            // x轴的刻度
                            axisTick:{show:false},
                            // x轴的刻度值
                            axisLabel:{show:false},
                            max:'dataMax',
                            min:'dataMin',
                            type: 'time',
                            axisLine:{
                                lineStyle:{
                                    color:"#ECEEF2"
                                }
                            },
                            splitLine:{
                                lineStyle:{
                                    color:"#ECEEF2",
                                // 设置线条喂风格为虚线
                                    type:"dashed"
                                }
                            },
                        },
                        // 第二个grid的x轴属性
                        {
                            // 告诉echarts，这个第一个grid的x轴
                            gridIndex:1,
                            // 坐标轴是否留白
                            boundaryGap:false,
                            // x轴的刻度
                            axisTick:{show:false},
                            max:'dataMax',
                            min:'dataMin',
                            type: 'time',
                            axisLabel: {
                                fontSize:12,
                                show: true,
                                color:'#888',
                                formatter: function (value) {
                                    var a = echarts.format.formatTime('hh:mm', value);
                                    if(a == "11:30"){
                                        return "";
                                    }
                                    if(a == "09:30"){
                                        return "        09:30";
                                    }
                                    return a;
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:"#ECEEF2"
                                }
                            },
                            splitLine:{
                                lineStyle:{
                                    color:"#ECEEF2",
                                // 设置线条喂风格为虚线
                                    type:"dashed"
                                }
                            },
                        },
                        // 第三个grid的x轴属性
                        // {
                        //     // 告诉echarts，这个第一个grid的x轴
                        //     gridIndex:2,
                        //     // 坐标轴是否留白
                        //     boundaryGap:false,
                        //     // x轴的刻度
                        //     axisTick:{show:false},
                        //     // x轴的刻度值
                        //     axisLabel:{show:false},
                        //     type: 'time',
                        //     max:'dataMax',
                        //     min:'dataMin',
                        //     axisLine:{
                        //         lineStyle:{
                        //             color:"#ECEEF2"
                        //         }
                        //     },
                        //     splitLine:{
                        //         lineStyle:{
                        //             color:"#ECEEF2",
                        //         // 设置线条喂风格为虚线
                        //             type:"dashed"
                        //         }
                        //     },
                        // },
                        // // 第四个grid的x轴属性
                        // {
                        //     // 告诉echarts，这个第一个grid的x轴
                        //     gridIndex:3,
                        //     // 坐标轴是否留白
                        //     boundaryGap:false,
                        //     // x轴的刻度
                        //     axisTick:{show:false},
                        //     type: 'time',
                        //     max:'dataMax',
                        //     min:'dataMin',
                        //     axisLabel: {
                        //         fontSize:12,
                        //         show: true,
                        //         showMinLabel:false,
                        //         color:'#888',
                        //         formatter: function (value) {
                        //             var a = echarts.format.formatTime('hh:mm', value);
                        //             if(a == "13:00"){
                        //                 return "11:30/13:00";
                        //             }
                        //             if(a == "15:00"){
                        //                 return "15:00        ";
                        //             }
                        //             return a;
                        //         }
                        //     },
                        //     axisLine:{
                        //         lineStyle:{
                        //             color:"#ECEEF2"
                        //         }
                        //     },
                        //     splitLine:{
                        //         lineStyle:{
                        //             color:"#ECEEF2",
                        //         // 设置线条喂风格为虚线
                        //             type:"dashed"
                        //         }
                        //     },
                        // }
                    ],
                // y轴配置
                yAxis: [
                    // 第一个grid的y轴属性
                    {    
                        // 去掉刻度值旁边的指示线
                        axisTick:{show:false},
                        splitNumber:9,
                        gridIndex:0,
                        interval:this.priceInterval,
                        max:this.priceMax,
                        min:this.priceMin,
                        splitLine:{
                            lineStyle:{
                                color:"#ECEEF2",
                                // 设置线条喂风格为虚线
                                type:"dashed",
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ECEEF2"
                            }
                        },
                        axisLabel:{
                            fontSize:10,
                            margin:0,
                            // y轴的数值向内显示
                            align:"left",
                            formatter: function (value, index) {
                                return value.toFixed(2);
                            },
                            color: "red"
                        },
                    },
                    // 第二个grid的y轴属性
                    {
                        // 去掉刻度值旁边的指示线
                        axisTick:{show:false},
                        splitNumber:3,
                        gridIndex:1,
                        interval:this.volumeInterval,
                        max:this.volumeMax,
                        min:0,
                        splitLine:{
                            lineStyle:{
                                color:"#ECEEF2",
                                // 设置线条喂风格为虚线
                                type:"dashed"
                            }
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ECEEF2"
                            }
                        },
                        axisLabel:{
                            //设置显示坐标轴的数值为不显示
                            show:false
                        },
                    },
                    // 第三个grid的y轴属性
                    // {
                    //     // 去掉刻度值旁边的指示线
                    //     axisTick:{show:false},
                    //     splitNumber:9,
                    //     position:'right',
                    //     gridIndex:2,
                    //     interval:this.priceInterval,
                    //     max:this.priceMax,
                    //     min:this.priceMin,
                    //     splitLine:{
                    //         lineStyle:{
                    //             color:"#ECEEF2",
                    //             // 设置线条喂风格为虚线
                    //             type:"dashed"
                    //         }
                    //     },
                    //     axisLine:{
                    //         lineStyle:{
                    //             color:"#ECEEF2"
                    //         }
                    //     },
                    //     axisLabel:{
                    //         fontSize:10,
                    //         margin:0,
                    //         // y轴的数值向内显示
                    //         align:"right",
                    //         formatter: function (value, index) {
                    //             var persent = (value - lastPrice) / lastPrice;
                    //             persent = (persent < 0) ? persent * -1 : persent;
                    //             persent = persent * 100;
        
                    //             return persent.toFixed(2) + '%';
                    //         },
                    //         color: "red"
                    //     },
                    // },
                    // // 第四个grid的y轴属性
                    // {
                    //     // 去掉刻度值旁边的指示线
                    //     axisTick:{show:false},
                    //     splitNumber:3,
                    //     position:'right',
                    //     gridIndex:3,
                    //     interval:this.volumeInterval,
                    //     max:this.volumeMax,
                    //     min:0,
                    //     axisLabel:{
                    //         //设置显示坐标轴的数值为不显示
                    //         show:false
                    //     },
                    //     splitLine:{
                    //         lineStyle:{
                    //             color:"#ECEEF2",
                    //             // 设置线条喂风格为虚线
                    //             type:"dashed"
                    //         }
                    //     },
                    //     axisLine:{
                    //         lineStyle:{
                    //             color:"#ECEEF2"
                    //         }
                    //     },
                    // }
                ],
                // 数据可以通过xAxisIndex，yAxisIndex属性，来指定是哪个grid的数据
                series: [
                    // 第一个图表的数据
                    {
                        // 平滑曲线
                        smooth:true,
                        // 是否显示折线上的圆点
                        symbol:'none',
                        // 线条颜色
                        lineStyle:{
                            color:"#0481F8",
                            width:1
                        },
                        xAxisIndex:0,
                        yAxisIndex:0,
                        data: this.grid1Data,
                        type: 'line',
                    },
                        // 第二个图表的数据
                    {
                        xAxisIndex:1,
                        yAxisIndex:1,
                        // 柱状图柱子宽度
                        barWidth:1,
                        data: this.grid2Data,
                        type: 'bar',
                        // 设置柱状图颜色
                        itemStyle:{
                            normal: {
                                color: function (params) {
                                    return red
                                }
                                // color: function (params) {
                                //     return this.volumeColor1[params.dataIndex];
                                // }
                            }
                        }
                    },
                        // 第三个图表的数据
                    // {
                    //     // 平滑曲线
                    //     smooth:true,
                    //     // 是否显示折线上的圆点
                    //     symbol:'none',
                    //     // 线条颜色
                    //     lineStyle:{
                    //         color:"#0481F8",
                    //         width:1
                    //     },
                    //     xAxisIndex:2,
                    //     yAxisIndex:2,
                    //     data: this.grid3Data,
                    //     type: 'line',
                    // },
                    //     // 第四个图表的数据
                    // {
                    //     xAxisIndex:3,
                    //     yAxisIndex:3,
                    //     // 柱状图柱子宽度
                    //     barWidth:1,
                    //     data: this.grid4Data,
                    //     type: 'bar',
                    //     // 设置柱状图颜色
                    //     itemStyle:{
                    //         normal: {
                    //             color: function (params) {
                    //                 return red
                    //             }
                    //             // color: function (params) {
                    //             //     return this.volumeColor2[params.dataIndex];
                    //             // }
                    //         }
                    //     }
                    // }
                ]
            };
                this.chart.setOption(this.options)
        },
        }
    }
</script>
<style scoped>
.consult{
    width: 100%;
    height: 100%;
}
.tabbar{
	width: 100%;
	height: 7%;
	position:fixed; 
	left:0px; 
	background: #323233;
	bottom:0px;
}
.tabbar>div{
	width: 20%;
	height: 100%;
	float: left;
    padding-top: 0.1rem;
}
.tabbar img{
	width: 20%;
}
.tabbar a{
	color: #9A9A9A;
}
.tabbar_consult{
	background:#FF800E;
}
.tabbar_consulu a{
	color: #ffffff;
}

.s-headeras {
  height: 8%;
  line-height: 1rem;
  color: #ffffff;
  font-size: 0.35rem;
  background-color:#ffffff;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
</style>