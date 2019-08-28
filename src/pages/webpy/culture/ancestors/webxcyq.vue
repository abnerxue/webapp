<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">老莱子戏彩娱亲</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        
        <h5 style="padding-top: 0.3rem;font-size:0.35rem">【经典原文】</h5>
        <p class="m-p">周老莱子至孝，奉二亲，极其甘脆。行年七十，言不称老。常著五色斑斓之衣，为婴儿戏于亲侧。又尝取水上堂，诈跌卧地，作婴儿啼以娱亲意。</p>
        <h5 style="padding-top: 0.3rem;font-size:0.35rem">【诗曰】</h5>
        <p class="m-p">戏舞学娇痴，春风动彩衣。双亲开口笑，喜色满庭闱。</p>
        <h5 style="padding-top: 0.3rem;font-size:0.35rem">【原文注释】</h5>
        <p class="m-p">
          老莱子是东周时期楚国人，年已七十多岁了。虽然已经到了古稀之年，老莱子待父母仍如小孩子一样满腔赤诚，事事体贴入微，关心备至。为了让父母生活得快乐和开心，他千方百计逗老人发笑。因怕引起老人家伤心，
          在他们面前，他从不说自己已老，更不在父母面前提“老”字。他还常穿着多彩的花衣，装成小儿蹦跳欢舞的样子，引父母嬉笑，使他们觉得自己也年轻了，可以说用心十分良苦。一次，他端着水上堂，假装跌倒了，躺在地
          上学着婴儿呜呜娇哭的样子，两位老人慌忙去扶他，他却一下子跳起来，父母明白了他的用意，都乐了。
        </p>
        <p class="m-p">
          孟子说：“大孝之人终身仰慕父母”，楚人老莱子就是这样的大孝之人。有人言称老莱子为取乐父母有过分做作之嫌，实则不然，实在因为他一片至纯孝心使然。俗语说：“笑一笑，十年少；恼一恼，老一老。”父母年纪大
          了，怎么当得起忧愁、烦恼，老莱子正是深谙了这点，才做出了一些看似“做作”的举动。
        </p>
        <h5 style="padding-top: 0.3rem;font-size:0.35rem">【孝道解读】</h5>
        <p
          class="m-p"
        >有些子女，总视老人为负担，不愿尽赡养老人的义务，甚至嫌弃父母，这种思想令人备感心寒。这对于垂暮之年、孤单寂寞的老人，是一种多么深的伤害？父母含辛茹苦地养育子女，子女大了，父母老了，便正是子女反哺之时。敬爱父母，应如老莱子一样，时时处处为父母营造出欢乐温馨的气氛。</p>
        <br>
        <img src="../../../../../static/img/theme3.png">
        
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
      this.$router.back("/webxdwh");
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
    background-image: url("../../../../../static/img/bg.png") ;
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
  background-image: url("../../../../../static/img/bg-header.png");
  width: 100%;
}

.m-header-icon {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.5rem;
}

.m-p {
  font-size: 0.35rem;
  text-indent: 2em;
  line-height: 0.6rem;
  padding-top: 0.3rem;
}

.m-hr {
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}
</style>
