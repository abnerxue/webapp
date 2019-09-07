<template>
    <div>
        <p  @click="dj()">
            9月10日发工资
            
        </p>
    </div>
</template>
<script>
export default {
    
    methods:{
        dj(){
             let data = {
         token:this.GLOBAL.token,
         pid:5,
         rq:9.7777,
         ff:4566,
      };
     console.log(data)
     
      let _this = this;
         this.rolelist={
           key:'',
           img:'',
           name:'',
           id:''
         }
         
      this.$ajax.post('/cxt/menu/sublist', _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        }).then(res => {
        
         this.rolelist=res.data.data
         console.log(this.rolelist)
           
        });
        }
    }
}
</script>