<template>
    <div class="consult">
        <van-row class="s-headeras" style="background:#222222;">
            <van-col span="2">
                <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
            </van-col>
            <van-col span="20" style="text-align:center;color:#ffffff;">选择开户公司</van-col>
            <van-col span="2"></van-col>
        </van-row>
        <van-tabs class="cad" v-model="active" type="card"  color="#222222">
            <van-tab title="国内期货">
                <van-tabs color="#222222"  animated swipeable="true"  sticky >
                    <van-tab title="实盘交易">标签 1</van-tab>
                    <van-tab title="模拟交易">标签 2</van-tab>
                </van-tabs>
            </van-tab>
            <van-tab title="外盘期货">
                <van-tabs color="#222222"  animated swipeable="true"  sticky >
                    <van-tab title="实盘交易">标签 1</van-tab>
                    <van-tab title="模拟交易">标签 2</van-tab>
                </van-tabs>
            </van-tab>
        </van-tabs>
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
            onClickLeft() {
                this.$router.push({path:'/transact?stage='+"aaa"});
            }
        }
    }
</script>
<style scoped>
.cad{
    margin-top: -0.6rem;
}
.consult{
    width: 100%;
    height: 100%;
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