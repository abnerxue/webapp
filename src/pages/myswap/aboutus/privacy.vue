<template>
  <div>
    <van-row class="s-headeras">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas"  @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">隐私政策</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-row style="margin-top:0.2rem">
        <van-col span="1"></van-col>
        <van-col span="22">
            <p>更新日期：2018年10月29日</p>
            <p>生效日期：2018年10月29日</p>
            <p>
               常州孝行天下文化传播有限公司（以下或称“我们”）非常注重保护用户（“您”）的个人信息及隐私，我们深知个人信息对您的重要性，并将按照法律法规要求和业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。
                我们希望通过本隐私政策向您清晰地介绍在使用我们的产品/服务时，我们如何处理您的个人信息，以及我们为您提供的访问、更正、删除和保护这些信息的方式。
            </p>
            <p>
                本政策将帮助您了解以下内容：
                <ul>
                    <li>
                        &nbsp;&nbsp;&nbsp;1 我们如何收集和使用您的个人信息；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;2 我们如何使用Cookie和同类技术；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;3 我们如何共享、转让、公开披露您的个人信息；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;4 我们如何保存和保护您的个人信息；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;5 您如何管理您的个人信息；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;6 未成年人的个人信息保护；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;7 通知和修订；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;8 如何联系我们；
                    </li>
                    <li>
                        &nbsp;&nbsp;&nbsp;9 附录。
                    </li>
                </ul>
            </p>
            <p>
                【特别提示】请您在使用我们提供的各项产品/服务前，仔细阅读并充分理解本《隐私政策》（重点内容我们已经将字体加粗请您特别关注）
                并作出相应选择。一旦您使用或继续使用我们的产品/服务时，即意味着您同意我们按照本隐私
            </p>
        </van-col>
        <van-col span="1"></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    goback(){
      this.$router.back('/aboutus')
    }
  }
};
</script>

<style scoped>
.s-headeras {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.35rem;
  background-color: #ededed;
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}

ul li{
    list-style: none
}
p{
    font-size:0.3rem
}
</style>
