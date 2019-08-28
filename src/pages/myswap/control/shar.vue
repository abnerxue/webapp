<template>
	<div class="shar_main">
		<van-row class="s-headeras" style="background:#222222;">
	      <van-col span="2">
	        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
	      </van-col>
	      <van-col span="20" style="text-align:center;color:#ffffff;">分时图</van-col>
	      <van-col span="2">
	      </van-col>
	    </van-row>
		<!--<div class="hello">
   			<chart ref="chart1" id="time_part"  :auto-resize="true"></chart>
 		</div>-->
 		<div class="jack">
   			<chart ref="chart2" id="time_cloumn"  :auto-resize="true"></chart>
 		</div>
		<div class="tabbar">
			 <div class="tabbar_consult2" @click="consult">
 				<center>
 					<img src="../../../../static/img/图文咨询.png"/><br />
 					<a>资讯</a>
 				</center>
 			</div>
 			<div class="tabbar_plate2" @click="plate">
 				<center>
 					<img src="../../../../static/img/book.png"/><br />
 					<a>盘口</a>
 				</center>
 			</div>
 			<div class="tabbar_shar2" @click="shar">
 				<center>
 					<img src="../../../../static/img/进度svg check.png"/><br />
 					<a>分时</a>
 				</center>
 			</div>
 			<div class="tabbar_large2" @click="large">
 				<center>
 					<img src="../../../../static/img/K线图.png"/><br />
 					<a>k线</a>
 				</center>
 			</div>
			 <div class="tabbar_transact2" @click="transact">
 				<center>
 					<img src="../../../../static/img/交易.png"/><br />
 					<a>交易</a>
 				</center>
 			</div>
 		</div>
 		<div class="pull">
 			<table border="" cellspacing="0" cellpadding="0">
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">卖</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td><th rowspan="3" style="font-size:1rem; color: #ffffff;">{{maths1}}</th></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">买</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">仓</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths1}}</a></td></tr>
 			</table>
 		</div>
	</div>
</template>

<script>
import echarts from "echarts";
export default{
	name:'plate_main',
	data(){
		return{
			scale:0,
			lastPrice:1.25,
			len:0,
			volumecolor1:[],
			minprice:0,
			maxprice:0,
			maths1:0,
			message:{
    			code:"",
    			type:""
    		},
    		
    		rData:[],
    		rcreat:[]
		}
	},
	mounted(){
//		this.charts()
		this.maths1=(Math.random()*1000).toFixed(2)
		this.getcon(this.$route.query.stage,'minute')
	},
	methods:{
		cloumn(){
			this.pillar=echarts.init(document.getElementById("time_cloumn"))
			this.datas=this.rData.reverse().map(function (item) {
					    return item[0];
					})
			this.data=this.rData.map(function (item) {
					    return [item[0],item[8]];
				})
			this.datatwo=this.rData.reverse().map(function (item) {
					    return [item[0],item[7]];
				})
				console.log(this.data.slice(0,this.len/2+2))
				console.log(this.data.slice(this.len/2),this.len)
				console.log("max="+this.data[109][1])
			for(let i=0;i<this.len;i++){
				if(this.scale<this.data[i][7]){
					console.log("max="+this.data[i][7])
				}
			}
			this.option2 = {
                // x轴配置
                grid:[
                    // 第一个grid
                    {
                            top:10,// 图表的外边距
                            height:250,// 图表的高度
                            left:'0',
                            width:'50%',//因为是左右各一个图表，使用百分比的方式显得更方便，
                        },
                        // 第二个grid，第二个图表是在第一个图表的下方，所以要把它定位到底部
                        {
                            top:270,//设置上方的外边距是第一个图表的高度再加10，使用top是方便我们调整下方grid的高度
                            left:'0',
                            width:'50%',// 宽度与第一个图表一个大
                            height:100
                        },
                        // 第三个grid，第三个图表是在第一个图表的右方，所以要把它定位到右方
                        {
                            top:10,// 图表的外边距
                            left:'50%',//设置右边图表的左边距是第一个图表的大小，达到定位右边的效果
                            width:'50%',// 宽度与第一个图表一个大
                            height:250
                        },
                        // 第四个grid，第四个图表是在第三个图表的下方，所以要把它定位到底部
                        {
                            top:270,//设置上方的外边距是第三个图表的高度再加10，使用top是方便我们调整下方grid的高度
                            left:'50%',//设置右边图表的左边距是第三个图表的大小，达到定位右边的效果
                            width:'50%',// 宽度与第一个图表一个大
                            height:100
                        }
                ],
                // 多个图表则会存在对个x轴y轴，所以这里的配置我们也换成数组的方式
                // x轴配置，
                xAxis:[
                        // 第一个grid的x轴属性
                        {
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
							boundaryGap:false,
                            type: 'time',
                            // x轴显示的数据
							// data: this.datas.slice(this.len/2,this.len)
							max:'dataMax',
                            min:'dataMin',
                            min:'dataMin',
							axisLabel: {
								fontSize:12,
								show: true,
								showMinLabel:false,
								color:'#888',
								formatter: function (value) {
									var a = echarts.format.formatTime('hh:mm', value);
									if(a == "13:00"){
										return "11:30/13:00";
									}
									if(a == "15:00"){
										return "15:00        ";
									}
									return a;
								}
						},
						},
						{
							gridIndex:2,
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
						{
                            // 告诉echarts，这个第四个grid的x轴
                            gridIndex:3,
                           boundaryGap:false,
                                // x轴的刻度
							axisTick:{show:false},
							// interval:volumeInterval,
							type: 'time',
                            // x轴显示的数据
							// data: this.datas.slice(this.len/2,this.len)
							max:'dataMax',
                            min:'dataMin',
                            min:'dataMin',
							axisLabel: {
                                    fontSize:12,
                                    show: true,
                                    showMinLabel:false,
                                    color:'#888',
                                    formatter: function (value) {
                                        var a = echarts.format.formatTime('hh:mm', value);
                                        if(a == "13:00"){
                                            return "11:30/13:00";
                                        }
                                        if(a == "15:00"){
                                            return "15:00        ";
                                        }
                                        return a;
                                    }
						},
						}
                    ],
                // y轴配置
                yAxis: [
                    // 第一个grid的y轴属性
                    {
						gridIndex:0,
						interval:0.5,
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
								color: function (value, index) {
                                    
                                    // 中间基准线的数值为黑色
                                    if(parseFloat(value).toFixed(2) == 1.25){
                                        return "black";
                                    }
                                    
                                    // 上涨区域的数字为红色
                                    if(value > 1.25){
                                        return "red";
                                    }
                                    
                                    // 下方下跌的数值为绿色
                                    if(value < 1.25){
                                        return "green";
                                    }
                                    
                                }
								// function () {
                                    
                                // }
                            },
                    },
                    // 第二个grid的y轴属性
                    {
						align:"right",
						gridIndex:1,
						interval:5,
						type: 'value',
						axisLabel:{
                                fontSize:10,
                                margin:0,
                                // y轴的数值向内显示
                                align:"left",
                                formatter: function (value, index) {
                                    return value.toFixed(2);
                                },
								color: function (value, index) {
                                    
                                    // 中间基准线的数值为黑色
                                    if(parseFloat(value).toFixed(2) == 1.25){
                                        return "black";
                                    }
                                    
                                    // 上涨区域的数字为红色
                                    if(value > 1.25){
                                        return "red";
                                    }
                                    
                                    // 下方下跌的数值为绿色
                                    if(value < 1.25){
                                        return "green";
                                    }
                                    
                                }
								// function () {
                                    
                                // }
                            },
					},
					 // 第三个grid的y轴属性
					{
						gridIndex:2,
						position:'right',
						splitNumber:9,
						axisTick:{show:false},
						interval:0.5,
						min:0,
						max:2.5,
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
                                fontSize:5,
                                margin:0,
                                // y轴的数值向内显示
                                align:"right",
                                formatter: function (value, index) {
                                    return value.toFixed(2);
                                },
								color:"red" 
								// function () {
                                    
                                // }
                            },
                    },
                    // 第四个grid的y轴属性
                    {
						interval:5,
						align:"right",
						gridIndex:3,
						axisTick:{show:false},
						position:'right',
						type: 'value',
						min:0,
						max:25,
						axisLabel:{
								fontSize:10,
								show:false,
                                margin:0,
                                // y轴的数值向内显示
                                align:"right",
                                formatter: function (value, index) {
                                    return value.toFixed(2);
                                },
								// color:"blue" 
								// function () {
                                    
                                // }
                            },
                    }
                ],
                // 数据可以通过xAxisIndex，yAxisIndex属性，来指定是哪个grid的数据
                series: [
					{
					xAxisIndex:0,
					yAxisIndex:0,
                    smooth:true,
					// 是否显示折线上的圆点
					symbol:'none',
					// 线条颜色
					lineStyle:{
						color:"#0481F8",
						width:1
					},
                    data: this.data.slice(0,this.len/2+1),
                    type: 'line'
				},
				{
                    xAxisIndex:1,
                    yAxisIndex:1,
                    data: this.datatwo.slice(0,this.len/2+1),
					type: 'bar',
					itemStyle:{
						normal: {
							color:this.volumecolor1.slice(0,this.len/2+1),
						}
					}
				},
				{
					xAxisIndex:2,
                    yAxisIndex:2,
                    smooth:true,
					// 是否显示折线上的圆点
					symbol:'none',
					// 线条颜色
					lineStyle:{
						color:"#0481F8",
						width:1
					},
                    data: this.data.slice(this.len/2,this.len),
                    type: 'line'
				},
				{
                    xAxisIndex:3,
                    yAxisIndex:3,
                    data: this.datatwo.slice(this.len/2,this.len),
					type: 'bar',
					itemStyle:{
						normal: {
							color:this.volumecolor1.slice(this.len/2,this.len),
						}
					}
				}
				]
            };
            this.pillar.setOption(this.option2)
			
		},
//		charts(){
//			this.part=echarts.init(document.getElementById("time_part"))
//			this.option1 = {
//              // x轴配置
//              xAxis: {
//                  type: 'category',
//                  // x轴显示的数据
//                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//              },
//              // y轴配置
//              yAxis: {
//                  type: 'value'
//              },  
//              series: [{
//                  data: [1, 5, 5, 8, 2, 9, 4],
//                  // line类型是折线图，bar类型是柱状图
//                  type: 'line'
//              }]
//          };
//          this.part.setOption(this.option1)
//		},
		onClickLeft() {
	      this.$router.push("/company");
	    },
		ceshi() {
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
	    getcon(code,type){
    		let _this = this
    		_this.message={
    			code:code,
    			type:type
    		}
	    	 this.$ajax.post('/cxt/currency/index',_this.$qs.stringify(_this.message),{
	          headers: _this.Base.initAjaxHeader(1, _this.message)
	        })
	        .then(res => {
	        	for(let value in res.data.data.K){
	        		_this.rcreat[value]=[
	        		res.data.data.K[value].ctime,
	        		res.data.data.K[value].openPrice.toString(),
	        		res.data.data.K[value].recyclePrice.toString(),
	        		res.data.data.K[value].amplitude.toString(),
	        		res.data.data.K[value].lifting.toString(),
	        		res.data.data.K[value].minPrice.toString(),
	        		res.data.data.K[value].maxPrice.toString(),
					res.data.data.K[value].dealCount.toString()/10000,
					res.data.data.K[value].nowPrice.toString(),
					"-"]
					this.len++
					if(value==0){
						this.volumecolor1.push("green")
					} else{
						if (res.data.data.K[value].dealCount.toString()/10000>=res.data.data.K[value-1].dealCount.toString()/10000){
							this.volumecolor1.push("green")
						}else{
							this.volumecolor1.push("red")
						}
					}
	        	}
	        	console.log("this.volumecolor1="+this.volumecolor1)
	        	_this.rData=_this.rcreat;
	        	this.cloumn()
	        });
	        
    	}
	}
	
}
</script>

<style>
/*#time_part{
	width: 100%;
	height: 100%;
}*/
/*.hello{
	width: 100%;
	height: 5rem;
}*/
.pull>table{
	width: 100%;
}
.pull td{
	width: 45%;
}
.pull th{
	width: 45%;
}
.pull{
	width: 100%;
	height: 11%;
	background: rgba(33,32,45,1);
	left:0px; 
	bottom:0px;
}
.jack{
	width: 100%;
	height: 10rem;
	/* margin-right: 5%; */
}
#time_cloumn{
	height: 100%;
	width: 100%;
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
	padding-top: 0.1rem;
	float: left;
}
.tabbar img{
	width: 20%;
}
.tabbar a{
	color: #9A9A9A;
}
.tabbar_shar2{
	background:#FF800E;
}
.tabbar_shar2 a{
	color: #ffffff;
}
.shar_main{
	overflow-x: hidden;
	width: 100%;
	height: 100%;
}
.s-headeras {
  height: 1rem;
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
.image{
	margin-top:-0.2rem;
}
</style>