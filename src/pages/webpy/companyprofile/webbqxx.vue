<template>
  <div>
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">版权信息</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row class="m-bg">
      <van-col span="2"></van-col>
      <van-col span="20">
          <h6 class="m-h">网站内容来源及版权所有</h6>
          <ol class="m-text">
          <li>1、本网站内于任何媒体呈现的任何内容，无论商标、设计、文字、图像和任何其他信息，未经特殊说明，其著作权均属中华孝道园所有。</li>
          <li>2、本站点中所标示出的"版权所有"是中华孝道园对于整个站点的logo标志、本站设计思想、本站构架以及本站自主设计、编写、制作的内容和图像等具有自主权限的版权声明。</li>
          <li>3、中华孝道园对于其开发的或和他人共同开发的所有内容和服务拥有全部知识产权，受有关版权、商标权、服务商标、专利、专有权利等知识产权法律的保护。</li>
          <li>4、中华孝道园的网络服务内容包括：文字、软件、图片、图表、广告中的全部内容；以及中华孝道园为用户提供的其它信息。所有这些内容均受上述相关法律的保护。 </li>
          <li>5、本站点包含部分由其它组织、团体或商业机构提供的文字内容，这些内容的版权属于相应的提供者。基于无法与有关作者一一取得联系，故原作者如对本站点摘录或转载这些内容有异议，请致电邮中华孝道园旅游区，我们会及时处理。</li>
        </ol>
        
        <h6 class="m-h">引用本网站内容</h6>
        <ol class="m-text">
          <li>1、如遵从版权法和中华孝道园关于本网站内容的声明，您可在非商业用途的情况下浏览、下载本网站的内容。如出于商业用途的使用（如：拷贝、下载、存储、通过硬拷贝或电子抓取系统、发送、转换、出租、演示、传播、出版或任何方式散发本网站的任何内容，或创造与内容有关的派生产品）则必须经过中华孝道园的书面许可，并在使用时注明来源和版权系中华孝道园所有的标记。有关书面申请可写信至：中华孝道园收。对于网站和平面媒体违反国家有关法律法规，不尊重本网站声明，不经本网站同意，擅自使用本网站内容并不注明出处的行为，本网站保留采取法律措施、追究其责任的权力。 </li>
          <li>2、未经中华孝道园的明确书面许可，任何人不得复制或在非中华孝道园所属的服务器上做镜像。</li>
          <li>3、如果您要使用本站点包含的由其它组织、团体或商业机构提供的内容，请直接与适当的版权持有人联系，与之相关的任何事务以及法律责任均与本站点无关。</li>
          <li>4、任何个人和组织获得允许后以任何形式复制和传播本站点中版权属于中华孝道园所有的内容，还必须遵守以下条件： 
            <ol>
              <li>（1）摘录或引述应确保反映原文的真实含义。 </li>
              <li>（2）注明出处，即本站点的  URL：http://www.rjzd.cn/ 链接注意事项。</li>
            </ol>
          </li>
        </ol>
        <br><br><br><br>
        
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
      active: 1,
      images: []
    };
  },
  methods: {
    goback() {
      this.$router.push("/webinfo");
    }
  }
};
</script>

<style scoped>
.m-bg{
    background-image: url("../../../../static/img/bg.png") ;
    margin-top:1rem;
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

.m-h{
  margin: 0.2rem 0;
  font-size: 0.3rem;
  font-weight: bolder
}

.m-text{
  font-size: 0.3rem;
  line-height: 0.35rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
