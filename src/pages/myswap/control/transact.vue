<template>
    <div class="consult">
        <van-row class="s-headeras" style="background:#222222;">
            <van-col span="2">
                <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
            </van-col>
            <van-col span="20" style="text-align:center;color:#ffffff;">交易</van-col>
            <van-col span="2"></van-col>
        </van-row>

        <van-cell-group class="op">
            <van-field
                v-model="username"
                clearable
                label="开户公司"
                right-icon="search"
                placeholder="请选择开户公司"
                readonly="true"
                @click="partner"
                value="oo"
            />
            <van-field
                clearable
                label="资金账户"
                placeholder="请输入资金账户"
            />
            <van-field
                v-model="password"
                type="password"
                label="登录密码"
                placeholder="请输入密码"
            />
        </van-cell-group>
        <center><van-button style="margin-top:0.1rem;width:90%;" icon="../../../../static/img/gopartner.png" type="default">登录交易</van-button></center>
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
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{
            partner(){
                this.$router.push("/partner");
            },
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
.tabbar_transact{
	background:#FF800E;
}
.tabbar_transact a{
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