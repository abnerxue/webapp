<template>
    <div>
     <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <van-row class='ads'><van-col span='2'></van-col>
    <van-col span='18'><van-cell title="张长弓"   value="江苏省常州市" size="large" label="13688888888"  /></van-col>
    <!-- <van-col span='4'><van-icon name="arrow" class="m-header-icon" @click="godtads()"/></van-col> -->
    </van-row>  
     <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem">
     <hr>   
     <van-cell-group>
  <van-field v-model="ktdd" placeholder="快递订单号" />
  <van-field v-model="kdgs" placeholder="快递公司" />
</van-cell-group>
       <van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
      </van-row>
    <van-row>
      <p>订单详情</p>
      <van-cell-group>
        <van-cell title='订单编号' value='888888'/>
         <van-cell title='支付宝交易号' value='888888'/>
          <van-cell title='创建时间' value='2019-8-8'/>
           <van-cell title='付款时间' value='2019-8-8'/>
      </van-cell-group>
    </van-row>
      <van-button type="default" class="m-button-o" @click="approve">发货</van-button>
    </div>
</template>
<script>
import { AddressList } from 'vant';
import { Toast } from 'vant';
import Vue from 'vue'
 import global_ from '../../global'//引用文件
    Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
Vue.use(AddressList);
export default {
    data(){
        return{
              
        }
    },
    methods:{
      onSubmit(){
        this.$router.push(
          {
            path:'/webbuyt',
            query:{
              money:this.price
            }
          }
        )
      },
      onClickLeft(){
       this.$router.back('/webproductc')
      },
        onClickRight() {
      this.$router.back("/detailaddress");
    },
      onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    godtads(){
      this.$router.push('/taddress')
    }
    }
}
</script>
<style scoped>
.m-button-o {
  font-size: 0.35rem;
  margin: 0.3rem 10%;
  color: white;
  background-color: #00a2ff;
  border: none;
  width: 80%;
  border-radius: 0.1rem
}
.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.ads{
    position: relative; 
}
.m-header-icon {
  position: absolute;
  color:aqua;
  top: 0.3rem;
 right: 0.2rem;
  font-size: 0.5rem;
}
</style>
