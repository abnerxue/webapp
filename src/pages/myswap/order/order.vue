<template>
    <div>
     <van-nav-bar title="订单管理" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
      <van-tabs v-model="active" animated color="#00a2ff">
          <van-tab title='未发货'>
                <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem" >
         <div @click='gonext'>
       <van-card
  num="2"
  price="2.00"
  desc="常孝自营店"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">特惠</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">未发货</van-button>
  </div>
</van-card>
</div>
      </van-row>
        <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem">
         
       <van-card
  num="2"
  price="2.00"
  desc="常孝自营店"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">特惠</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">未发货</van-button>
  </div>
</van-card>
      </van-row>
        <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem">
         
       <van-card
  num="2"
  price="2.00"
  desc="常孝自营店"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">特惠</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">未发货</van-button>
  </div>
</van-card>
      </van-row>
          </van-tab>
            <van-tab title='已发货'>
              <van-row style="margin-top:0.8rem; padding:0.02rem 0.2rem;margin-bottom:0.5rem" >
         <div @click='goalready()'>
       <van-card
  num="2"
  price="2.00"
  desc="常孝自营店"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
>
  <div slot="tags">
    <van-tag plain type="danger">特惠</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </div>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">已发货</van-button>
  </div>
</van-card>
</div>
      </van-row>
            </van-tab>
      </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
        active:2
        }
    },
    methods:{
        onClickLeft() {
      this.$router.back("/myswap");
    },
    gonext(){
      this.$router.push('/dtorder')
    },
    goalready(){
     this.$router.push('/ardset')

    }
    }
}
</script>
<style scoped>
.van-nav-bar .van-icon {
    color: black;
    font-size: 0.4rem
}
</style>
