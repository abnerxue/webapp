<template>
    <div>
           <van-nav-bar title="确认地址" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
     <van-address-list
  v-model="chosenAddressId"
  :list="barList"
  
  
  @add="onAdd"
  @edit="onEdit"
/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chosenAddressId: '1',
      barList: ""
     
        }
    },
    created(){
       this. getBar()
    },
    methods:{
      
       getBar(){
         console.log(777)
      let _this = this;
      let data = {
       token:this.GLOBAL.token,
       page:1,
       size:20
      };
      this.barList=[{
       
      }]

      this.$ajax.post('/cxt/market/third/address/list', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
             this.barList=res.data.data.list
             console.log(this.barList)
             
             for(let i=0;i<this.barList.length;i++){
               this.barList[i].address = this.barList[i].nation +' '+ this.barList[i].province +' '+ this.barList[i].city +' '+ this.barList[i].addr
             }
         
         
        });
    },
        onClickLeft(){
         this.$router.push('/personalmsg')
         console.log(this.listg)
        },
         onAdd() {
      this.$router.push('/myaddress')
    },

    onEdit(item, index) {
      this.$router.push('/myaddress')
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

