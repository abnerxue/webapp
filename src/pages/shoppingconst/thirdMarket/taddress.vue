<template>
    <div>
           <van-nav-bar title="确认地址" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
     <van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  
  @add="onAdd"
  @edit="onEdit"
  @select="onSelect"
/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
        }
    },
    methods:{
      onSelect(item,index){
        console.log(item);
        sessionStorage.setItem('address_sel',JSON.stringify(item));
        //  this.$router.push('/torder');
         this.$router.push({
       path:'/torder',
       query:{
         id:this.$route.query.id,
       }
     })
      },
        onClickLeft(){
         this.$router.push('/torder')
        },
         onAdd() {
      this.$router.push('/detailaddress')
    },

    onEdit(item, index) {
     this.$router.push('/detailaddress')
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

