<template>
  <div class="draw">
    <van-row class="s-headeras" style="background:#222222;">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="20" style="text-align:center;color:#ffffff;">k线</van-col>
      <van-col span="2" class="image">
      	<img src="../../../../static/img/时间.png" @click="model=1" alt="" />
      </van-col>
    </van-row>
    <div class="hello" @click="ceshi">
   		<chart ref="chart1" id="char"  :auto-resize="true"></chart>
 		</div>
 		<div class="tabbar">
			 <div class="tabbar_consult" @click="consult">
 				<center>
 					<img src="../../../../static/img/图文咨询.png"/><br />
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
 					<img src="../../../../static/img/K线图check.png"/><br />
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
 		
 		<div class="pull">
 			<table border="" cellspacing="0" cellpadding="0">
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">卖</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths}}</a></td><th rowspan="3" style="font-size:1rem; color: #ffffff;">{{maths}}</th></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">买</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths}}</a></td></tr>
 				<tr><td><a style="font-size: 0.2rem; margin-left: 0.2rem; color: #ffffff; font-weight: bold;">仓</a><a style="font-size: 0.2rem; margin-left: 0.2rem; color:red; font-weight: bold;">{{maths}}</a></td></tr>
 			</table>
 		</div>
 		
 		<div id="model" :style="{'display':model==1?'block':'none'}">
 			<div class="model_none" @click="model=0"></div>
 			<div class="model_bar">
	 			<center>
	 				<div :style="{'background':model_type=='minute'?'orange':'#222222'}" @click="model_type='minute'">15m</div>
	 				<div :style="{'background':model_type=='hour'?'orange':'#222222'}" @click="model_type='hour'">1h</div>
	 				<div :style="{'background':model_type=='day'?'orange':'#222222'}" @click="model_type='day'">1天</div>
	 			</center>
 			</div>
 		</div>
 		
  </div>
</template>

<script>
	import echarts from "echarts";
	export default {
		name: 'hello',
    data(){
      return {
      	maths:0,
      	model_type:"day",
        value: "",
        rawDatas:{
        	deshi:"ssss"
        },
	    	message:{
	    		code:"",
	    		type:""
	    	},
	    	model:0,
	    	creat : [],
	    	rawData : [],
        newdata:[]
	    };
    },
    created(){
    	console.log(this.$route.query.stage)
    	this.getdata(this.$route.query.stage,'day')
    	//		rawData[0][0] 日期
			//  	rawData[0][1]	开盘价
			//  	rawData[0][2]	收盘价
			//  	rawData[0][] 
			//  	rawData[0][]
			//  	rawData[0][5]	最低价
			//  	rawData[0][6] 最高价
   },
   mounted(){
   	this.maths=(Math.random()*1000).toFixed(2)
   },
   methods: {
    	onload() {
	    	this.chart = echarts.init(document.getElementById("char"));
	    	this.datas=this.rawData.reverse().map(function (item) {
					    return item[0];
					})
	    	this.data=this.rawData.reverse().map(function (item) {
					    return [+item[1], +item[2], +item[5], +item[6]];
					});
					this.options = {
				    backgroundColor: '#21202D',
				    legend: {
				        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
				        inactiveColor: '#777',
				        textStyle: {
				            color: '#fff'
				        }
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            animation: false,
				            type: 'cross',
				            lineStyle: {
				                color: '#376df4',
				                width: 2,
				                opacity: 1
				            }
				        }
				    },
				    xAxis: {
				        type: 'category',
				        data: this.datas,
				        axisLine: { lineStyle: { color: '#8392A5' } }
				    },
				    yAxis: {
				        scale: true,
				        axisLine: { lineStyle: { color: '#8392A5' } },
				        splitLine: { show: false }
				    },
				    grid: {
				        bottom: 80
				    },
				    dataZoom: [{
				        textStyle: {
				            color: '#8392A5'
				        },
				        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				        handleSize: '80%',
				        dataBackground: {
				            areaStyle: {
				                color: '#8392A5'
				            },
				            lineStyle: {
				                opacity: 0.8,
				                color: '#8392A5'
				            }
				        },
				        handleStyle: {
				            color: '#fff',
				            shadowBlur: 3,
				            shadowColor: 'rgba(0, 0, 0, 0.6)',
				            shadowOffsetX: 2,
				            shadowOffsetY: 2
				        }
				    }, {
				        type: 'inside'
				    }],
				    animation: false,
				    series: [
				        {
				            type: 'candlestick',
				            name: '日K',
				            data: this.data,
				            itemStyle: {
				                normal: {
				                    color: '#FD1050',
				                    color0: '#0CF49B',
				                    borderColor: '#FD1050',
				                    borderColor0: '#0CF49B'
				                }
				            }
				        },
				        {
				            name: 'MA5',
				            type: 'line',
				            data: this.calculateMA(5, this.data),
				            smooth: true,
				            showSymbol: false,
				            lineStyle: {
				                normal: {
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'MA10',
				            type: 'line',
				            data: this.calculateMA(10, this.data),
				            smooth: true,
				            showSymbol: false,
				            lineStyle: {
				                normal: {
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'MA20',
				            type: 'line',
				            data: this.calculateMA(20, this.data),
				            smooth: true,
				            showSymbol: false,
				            lineStyle: {
				                normal: {
				                    width: 1
				                }
				            }
				        },
				        {
				            name: 'MA30',
				            type: 'line',
				            data: this.calculateMA(30, this.data),
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
				this.chart.setOption(this.options)
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
	        	for(let value in res.data.data.K){
	        		_this.creat[value]=[
	        		res.data.data.K[value].ctime,
	        		res.data.data.K[value].openPrice.toString(),
	        		res.data.data.K[value].recyclePrice.toString(),
	        		res.data.data.K[value].amplitude.toString(),
	        		res.data.data.K[value].lifting.toString(),
	        		res.data.data.K[value].minPrice.toString(),
	        		res.data.data.K[value].maxPrice.toString(),
	        		res.data.data.K[value].dealCount.toString(),
	        		"-"]
	        	}
	        	_this.rawData=_this.creat;
	        	this.onload()
	        }); 
    	},
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
    calculateMA(dayCount, data) {
			    var result = [];
			    for (var i = 0, len = data.length; i < len; i++) {
			        if (i < dayCount) {
			            result.push('-');
			            continue;
			        }
			        var sum = 0;
			        for (var j = 0; j < dayCount; j++) {
			            sum += data[i - j][1];
			        }
			        result.push(sum / dayCount);
			    }
			    return result;
			}
   },
   computed:{
   },
   watch:{
   	'model_type':function(newval){
   		this.creat=[]
   		this.rawData=[]
   		this.onload()
   			this.getdata('cxt',newval)
   	}
   }
  }
</script>

<style scoped>
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
.tabbar_large{
	background:#FF800E;
}
.tabbar_large a{
	color: #ffffff;
}
.draw{
	position: relative;
	width:100%;
	height:100%;
}
.hello{
	height: 74%;
}
#model{
	position: absolute;
	width: 100%;
	overflow-y: hidden;
	height: 100%;
	background: rgba(0,0,0,0.3);
	margin-top:-165.4%;
	z-index: 999;
}
#char{
	width: 100%;
	height: 100%;
	/*height: 100%;*/
}
.model_none{
	width: 100%;
	height: 90%;
}
.model_bar{
	width: 100%;
	height: 10%;
	color: #ffffff;
	background:#222222;
}
.model_bar div{
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
