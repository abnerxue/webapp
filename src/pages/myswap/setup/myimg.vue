<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="4">
        <van-icon name="arrow-left" class="s-header-iconas" @click="goback" />
      </van-col>
      <van-col span="17">头像</van-col>
      <van-col span="3" ><p style="font-size:0.7rem" @click="change">···</p></van-col>
    </van-row>

    <div class="s-bg">
      <!-- <img src="tc.img?../../../static/img/myimg.png" class="s-img"> -->
      <img :src="tc.img" class="s-img">
    </div>

    <van-popup
  v-model="show"
  position="bottom"
  :style="{ height: '14.5%' }"
>
  <van-cell-group>
      <van-cell size="small" title="从手机相册选择" @click='sjxc'/>
       <!-- <van-cell size="small" title="拍照"/> -->
      <!-- <van-cell size="small" title="保存到手机" @click='bcsj'/> -->
  </van-cell-group>
</van-popup>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      show:false
    };
  },
  created(){
    this.getDataList()
  },
  methods: {
    getDataList(){
      let data = {
       token:this.GLOBAL.token
      };
      let _this = this;
          this.tc = {
          role:'',
          tel:'',
          img:'',
            
        
          };
       
      this.$ajax.post('/cxt/user/selfInfo', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
           console.log(res.data.data);
          this.tc=res.data.data
          this.tel=res.data.data.tel
           this.r=res.data.data.role
        
           
        });
    },
    goback() {
      this.$router.back("/personalmsg");
    },
    change(){
      this.show=true
    },
    sjxc(){
       
        
    if(this.GLOBAL.systemName==='android'){
      
        window.android.requestUploadPictureFromGallery('portrait')
         
    }
    if(this.GLOBAL.systemName==='ios'){
       
        console.log('ios')
       window.webkit.messageHandlers.requestUploadPictureFromGallery.postMessage("portrait");
    
    }
   
    },
   bcsj(){
         if(this.GLOBAL.systemName==='android'){
      
       window.android.requestSaveFile("文件地址","文件夹名","文件名");

         
    }
    if(this.GLOBAL.systemName==='ios'){
       
        console.log('ios')
       window.webkit.messageHandlers.requestSaveFile.postMessage({url: "文件地址", dir: "文件夹名",name: "文件名"})

    
    }    
   },
    uploadFileResult(){
      
    }
  }
};
</script>

<style scoped>
.s-bg {
  background-color: #ededed;
  width: 100%;
  margin-top: 1.2rem
}

.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: white;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

.s-img{
    width: 70%;
    padding: 0.5rem 15%
}


</style>
