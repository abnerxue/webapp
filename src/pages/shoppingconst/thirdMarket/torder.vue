<template>
    <div>
     <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
    <!-- <van-row class='ads'><van-col span='2'></van-col> -->
    <!-- <van-col span='18'>
      <van-cell  v-model='address_select' title=""  is-link arrow-direction="" value="" size="" label=""  />
      
   
      </van-col> -->
      <van-cell style="text-align:center;padding:.5rem  0;font-size:.3rem;height:2rem;" > <div style="padding:0 .5rem;" v-html="address_select"></div> &nbsp;  <van-icon name="arrow" class="m-header-icon" @click="godtads()"/></van-cell>
    <!-- <van-col span='4'><van-icon name="arrow" class="m-header-icon" @click="godtads()"/></van-col></van-row>   -->
     <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem">
         
       <van-card
  :num="num"
  :price="num*price"
  :desc="page_data.prod.des?page_data.prod.des:'暂无信息'"  
  :title="page_data.prod.name"
  :thumb="page_data.prod.logo_img"
>
  <div slot="tags">
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
  
  <div slot="footer">
    <div style="overflow:hidden;margin-top:.5rem;">
    <div style="display:flex;width:30%;float:right;">
        <div @click="num_plus()" style="flex:1;display:flex;
                align-items:center;
                justify-content:center;">+</div>
        <van-field v-model="num" center placeholder="" style="flex:1;text-align:center;"/>
        <div @click="num_minus()" style="flex:1;display:flex;
                align-items:center;
                justify-content:center;">-</div>
    </div>
    </div>
  </div>
</van-card>
      </van-row>
     <van-submit-bar
  :price="count()"
  button-text="提交订单"
  @submit="onSubmit(price)"
/>
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
              num:1,
              totle_price:0,
              price:6.00,
              list:[],
              page_data:'',
              address_select:''
        }
    },
    created(){
      this.totle_price = this.num*this.price;
      console.log(this.totle_price+"-----");

    },
    mounted(){
      this.address_select = JSON.parse(sessionStorage.getItem('address_sel'));
      this.address_select = this.address_select?this.address_select:'';
      if(this.address_select){
        this.address_select = this.address_select.name+' '+this.address_select.tel+'<div>'+ this.address_select.address+'</div>';
      }else{
        this.address_select = '请添加地址';
      }
      this.getDataList();
    },
    methods:{
      get_img(){
        // return JSON.parse(this.page_data.prod.img)[0];
      },
       getDataList(){
     
      let _this=this
      this.page_data={
           prod:'',
               name:'',
               money:'',
          addr:'',
               province:'',
               city:'',
               region:'',
               addr:'',
              name:'',
              tel:''
      }
      
      let data = {
          usertoken:this.GLOBAL.token,
         token:this.GLOBAL.token,
        product:this.$route.query.id
      }
      this.$ajax.post('/cxt/market/third/dir/addWant', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data.data);
          this.page_data=res.data.data;
          this.page_data.prod.logo_img = JSON.parse(res.data.data.prod.images)[0];
          this.page_data.addr = this.page_data.addr?this.page_data.addr:'暂无地址信息';
          // this.page_data.images = JSON.parse(res.data.data.images);
        });

    },
           count(){
               return this.num*this.price*100;
            },
      num_plus(){
        
        this.num++;
        this.totle_price = this.num*this.price;
      },
      num_minus(){
        // console.log(555);
        if(this.num<=0){
          return;
        }
        this.num--;
        this.totle_price = this.num*this.price;
      },
      onSubmit(){
          
         let _this=this
      this.pagef_data = {
          id:'',
address:'',
type:'',
des:'',
number:''
      }    
      let data = {
       id:this.$route.query.id,
             token:this.GLOBAL.token,
             num:this.num
      };
     console.log(data)
  
      this.$ajax.post('/cxt/market/third/order', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
            if(res.data.state==='000'){
            this.pagef_data=res.data.data
            let a=this.pagef_data.orderno
            let b=this.pagef_data.money
           
             this.$router.push({
        path:"/webbuyt",
        query:{
         orderNo:a,
         money:b
        }
      })
            }else{
               console.log(res.data.state)
              Toast(res.data.msg)
            }
           
    
      
        });
     
        /* this.$router.push(
          {
            path:'/webbuyt',
            query:{
              money:this.price
            }
          }
        ) */
      },
      onClickLeft(){
       this.$router.push('/Market')
      },
        onClickRight() {
      this.$router.back("/detailaddress");
    },
      onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    godtads(){
      // this.$router.push('/')
      this.$router.push({
       path:'/taddress',
       query:{
         id:this.$route.query.id,
       }
     })
    }
    }
}
</script>
<style scoped>
.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
.ads{
    position: relative; 
}
.m-header-icon {
  margin-left:0.8rem;
  position: absolute;
  color:aqua;
  top: 0.3rem;
 right: 0.2rem;
  font-size: 0.5rem;
}
</style>
