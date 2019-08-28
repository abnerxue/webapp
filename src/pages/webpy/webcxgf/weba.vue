<template>
  <div class="m-bg">
    
    
        <img src="../../../../static/img/employ.png"  @click="goback">
    

    
  </div>
</template>
 <script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {
    goback() {
      this.$router.back("/webs");
    }
  }
};
</script>
 <style scoped>
.m-bg {
  background-image: url("../../../../static/img/bg.png");
  
}

</style>
 