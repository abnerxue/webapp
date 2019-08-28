<template>
    <div>
        <van-nav-bar title="编辑地址" left-arrow @click-left="onClickLeft" style="background-color:#ededed"/>
      <van-address-edit
  :area-list="areaList"
  v-model='address'
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
 
/>
<!--  @change-detail="onChangeDetail" -->
    </div>
</template>
<script>
import { AddressEdit } from 'vant';
import areaList from '../../../assets/js/area'
// Vue.use(AddressEdit);
export default {
    data() {
    return {
      areaList,
      searchResult: [],
      address:''
    }
  },
  methods:{
      onClickLeft(){
        this.$router.push('/taddress')
      },
       onSave(content) {
      let _this=this
      this.page_data = {
           
      }    
      let data = {
        token:this.GLOBAL.token,
        addr:content.addressDetail,
        tel:content.tel,
name:content.name,
province:content.province,
city:content.city,
code:content.postalCode  ,
region:content.areaCode,
def:content.isDefault              
// 是否默认 0 非默认，1 默认
      };
     
  console.log(content)
      this.$ajax.post('/cxt/market/third/address/add', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
          console.log(res.data.data);
          this.page_data=res.data.data;
         

           
        });
    },
    onDelete() {
      Toast('delete');
    },
    onEdit(item, index) {
   let addressInfo = new Object;
   this.areaList = areaList;
   // Toast('编辑收货地址:' + index);
   console.log('编辑收货地址:' + index);
   console.log(item);
   // 进入编辑模式
   this.show1 = true;
   addressInfo = {
    id:item.id,
    name:item.name,
    tel:item.tel,
    province:item.province,
    city:item.city,
    county:item.county,
    area_code:item.area_code,
    address_detail:item.address,
    postal_code:item.postal_code,
    is_default:item.is_default,
   }
  
   this.address = addressInfo;
  },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>

