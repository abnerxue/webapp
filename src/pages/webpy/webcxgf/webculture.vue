<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback" />
      </van-col>
      <van-col span="20" style="text-align:center">企业文化</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr" />
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <h6 class="m-ha">企业理念</h6>
        <p class="m-pf">
           让孝成为一种信仰 
        </p>

        <h6 class="m-ha">企业使命</h6>
        <p class="m-pf">
           树立孝行标杆，传承孝道精神 
        </p>

        <h6 class="m-ha">企业愿景</h6>
        <p class="m-pf">
           给社会一个道德支点，给员工一个温馨家园 
        </p>

        <h6 class="m-ha">企业核心价值</h6>
        <p class="m-pf">利益祖先，利益当代，利益子孙 </p>
        
        <h6 class="m-ha">企业核心价值观</h6>

        <p class="m-pf">
          感恩、传承、标杆、奉献 
        </p>

        <h6 class="m-ha">团队理念</h6>
        <p class="m-pf">
          把自己交给团队，把团队扛在肩上，和团队共同成长 
        </p>

        <h6 class="m-ha">服务理念</h6>
        <p class="m-pf">“ 换位思考，感悟需求；主动服务，超越期待 ”</p>
        
        <h6 class="m-ha">企业精神</h6>

        <p class="m-pf">
          “ 做自己知行合一，立标杆敢于担当 ”
        </p>
        <br>
        <p class="m-pf">
            公司将秉承“感恩、传承、标杆、奉献”的核心价值观，以“体制创新、机制创新、商业模式创新”为发展理念，做大做强企业，并在未来几年在全国合作开发多个“旅游+”的产业园区，努力成为文化旅游、
            健康养生和现代生态农业领域的领跑者。
        </p>
        
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/webhome" icon="apps-o">网站</van-tabbar-item>
      <van-tabbar-item replace to="/Market" icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item replace to="/myswap" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
 <script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods:{
      goback(){
          this.$router.back('/webs')
      },
      top(){
        window.scrollTo(0,0)
      }
  },
  created(){
    this.top()
  }
};
</script>
 <style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    margin-top:1rem;
    padding-bottom: 2rem
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 1;
  background-image: url("../../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-pf {
  font-size: 0.35rem;
  text-indent: 2em;
  line-height: 0.4rem;
  padding-top: 0.2rem;
}

.m-ha{
    padding-top: 0.2rem;
    font-size: 0.35rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
 