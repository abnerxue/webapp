<template>
	<div class="plate_main">
		<van-row class="s-headeras" style="background:#222222;">
	      <van-col span="2">
	        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
	      </van-col>
	      <van-col span="20" style="text-align:center;color:#ffffff;">盘口</van-col>
	      <van-col span="2">
	      </van-col>
	    </van-row>

	    <div class="container">
			<van-tabs color="#ffffff"  animated background="#222222" swipeable="true" title-inactive-color="#ffffff" line-height="0.05rem" line-width="3.5rem" title-active-color="#ffffff" sticky v-model="activeTab" @click="onClick"  class="demo">
				<van-tab title='盘口' >
						<!-- <table>
							<tr>
								<th @click="pic=1" :class="{'mystyle':pic==1}">盘口</th>
								<th @click="pic=2" :class="{'mystyle':pic==2}">成交明细</th>
							</tr>				   
						</table> -->
					<div class="foot">
						<table cellspacing="0" :class="{play:pic==2}" cellpadding="0">
							<tr>
								<td rowspan="2">卖价<a>{{pData[pData.length-1].nowPrice}}</a></td>
								<td rowspan="2">卖量<a>{{pData[pData.length-1].nowPrice}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">买价<a>{{pData[pData.length-1].nowPrice}}</a></td>
								<td rowspan="2">买量<a>{{pData[pData.length-1].nowPrice}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">最新<a>{{pData[pData.length-1].nowPrice}}</a></td>
								<td rowspan="2">涨跌<a>{{pData[pData.length-1].nowPrice}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">开盘<a>{{pData[pData.length-1].openPrice}}</a></td>
								<td rowspan="2">成交量<a>{{pData[pData.length-1].dealCount}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">最高<a>{{pData[pData.length-1].maxPrice}}</a></td>
								<td rowspan="2">持仓量<a>{{pData[pData.length-1].dealCount}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">最低<a>{{pData[pData.length-1].minPrice}}</a></td>
								<td rowspan="2">日增仓<a>{{pData[pData.length-1].nowPrice}}</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">均价<a>{{pData[pData.length-1].nowPrice}}</a></td>
								<!-- <td rowspan="2">外盘<a>{{pData[pData.length-1].nowPrice}}</a></td> -->
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">昨结<a>{{pData[pData.length-2].recyclePrice}}</a></td>
								<td rowspan="3">涨停<a>{{pData[pData.length-1].amplitude}}%</a></td>
							</tr>
							<tr>

							</tr>
							<tr>
								<td rowspan="2">昨收<a>{{pData[pData.length-2].recyclePrice}}</a></td>
								
							</tr>
							<tr>
								<td rowspan="3">跌停<a>{{pData[pData.length-1].nowPrice}}</a></td>
							</tr>
							<tr>
								<td rowspan="2">杠杆<a>--</a></td>
							</tr>
							<tr>

							</tr>
						</table>
					</div>
				</van-tab>	
				<van-tab colo title=" 成交明细">
					<div class="body">
						<div class="thead">
							<center>
								<div style="width: 25%;">时间</div>
								<div style="width: 25%;">价位</div>
								<div style="width: 20%;">现手</div>
								<div style="width: 15%;">增仓</div>
								<div style="width: 15%;">开平</div>
							</center>
						</div>
						<table class="tab" cellspacing="0" cellpadding="0" >
							<tr v-for="(index,i) in data" :key="i">
								<td><a>{{index.title1}}</a></td>
								<td><a>{{index.title2}}</a></td>
								<td><a>{{index.title3}}</a></td>
								<td><a>{{index.title4}}</a></td>
								<td><a>{{index.title5}}</a></td>
							</tr>
						</table>
					</div>
				</van-tab>
			</van-tabs>
	    </div>
		<!-- <div class="tabbar">
			 <div class="tabbar_consult1" @click="consult">
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
 		</div> -->
 	<van-tabbar v-model="active" class="active_tab" >
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      replace :to="item.key"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
	</div>
</template>

<script>
export default{
	name:'plate_main',
	data(){
		return{
			pic:1,
			plate_init:[],
			pData:[],
			arr:[],
			data:[
				{
					title1:"ni",
					title2:"ni",
					title3:"ni",
					title4:"ni",
					title5:"ni"
				},
				{
					title1:"ni",
					title2:"ni",
					title3:"ni",
					title4:"ni",
					title5:"ni"
				},
				{
					title1:"ni",
					title2:"ni",
					title3:"ni",
					title4:"ni",
					title5:"ni"
				}
			],
			currIndex: 0,
      active: 0,
      tabbars: [
        // {
        //   name: "zixun",
        //   title: "资讯",
        //   normal: require("../../../../static/img/btu_zixun_nor.png"),
        //   active: require("../../../../static/img/btu_zixun_pre.png"),
        //   key:'/consult?stage='+ this.$route.query.stage
        // },
        {
          name: "pankou",
          title: "盘口",
          normal: require("../../../../static/img/btu_pankou_nor.png"),
          active: require("../../../../static/img/btu_pankou_pre.png"),
          key:'/plate?stage='+this.$route.query.stage
        },
        {
          name: "fenshi",
          title: "分时",
          normal: require("../../../../static/img/btu_fenshi_nor.png"),
          active: require("../../../../static/img/btu_fenshi_pre.png"),
          key:'/shar?stage='+this.$route.query.stage
        },
        {
          name: "kxian",
          title: "K线",
          normal: require("../../../../static/img/btu_kxian_nor.png"),
          active: require("../../../../static/img/btu_kxian_pre.png"),
          key:'/large?stage='+this.$route.query.stage
        },
        {
          name: "trade",
          title: "交易",
          normal: require("../../../../static/img/btu_jiaoyi_nor.png"),
          active: require("../../../../static/img/btu_jiaoyi_pre.png"),
          key:'/transact?stage='+this.$route.query.stage
        }
      ],
		}
	},
	mounted(){
		this.plate_getdata(this.$route.query.stage,'day')
	},
	methods:{
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
	    plate_getdata(code,type){
    		let _this = this
    		_this.arr={
    			code:code,
    			type:type
    		}
	    	 this.$ajax.post('/cxt/currency/index',_this.$qs.stringify(_this.arr),{
	          	headers: _this.Base.initAjaxHeader(1, _this.arr)
		      }).then(res => {
		        	_this.pData=res.data.data.K;
		        });
    	},
	}
	
}
</script>

<style scoped>

.tab{
	width: 95%;
}
.tab tr{
	width: 100%;
	height: 5%;
}

.tab tr td a{
	float: right;
	color: #ffffff;
}
.tab tr td:nth-child(1){
	width: 15%;
}
.tab tr td:nth-child(2){
	width: 20%;
}
.tab tr td:nth-child(3){
	width: 17%;
}
.tab tr td:nth-child(4){
	width: 15%;
}
.tab tr td:nth-child(5){
	width: 10%;
}
.thead div{
	float: left;
}
.body{
	width: 100%;
	height:100%;
	background: #222222;
	color:#ffffff;
}
.demo{
	height: 100%;
	width: 100%;
	background:#222222;
}
.play{
	display: none;
}
.foot table{
	width: 100%;
	height: 100%;
}
.foot{
	width: 100%;
	height: 100%;
}
.foot td{
	width: 50%;
	height: 1rem;
	border: 1px rgba(216,76,41,0.4) solid;
	color: #ffffff;
	padding-left: 5%;
}
.foot td a{
	color: #ffffff;
	float: right;
	margin-right: 0.5rem;
}
.mystyle{
	background:chocolate;
	border-bottom:1px red solid;
	/*color: #ffffff;*/
}
.container{
	width: 100%;
	height: 86%;

}

.navbar{
	width: 100%;
	height: 8.5%;
	background: #222222;
}
.navbar table{
	width: 100%;
	height:100%;
	border: none;
}
.navbar table tr th{
	width: 50%;
	color: #ffffff;
	height:100%;
	border-bottom: 1px #222222 solid;
	/*background: #222222;*/
	
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
.tabbar_plate1{
	background:#FF800E;
}
.tabbar_plate1 a{
	color: #ffffff;
}
.plate_main{
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
.active_tab img {
  width: 26px;
  height: 26px;
}
.van-tabbar-item {
  background-color:#282828
}

.van-tabbar-item--active {
  color:white;
  background-color:#e96300
}
</style>