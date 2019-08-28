<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">家祭流程</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p">
              主位：天地君亲师 位（注意：有空格，用黄纸写，均繁体字）
          </p>
          <p class="m-p">
              陪祀：
          </p>
          <p class="m-p">
              某氏堂上历代宗亲 位（注意：有空格，用红纸写，均繁体字）
          </p>
          <p class="m-p">
              先考某公讳 某某老大人 位（注意：有空格，用红纸写，均繁体字）
          </p>
          <p class="m-p">
              先妣某母讳 某某老孺人 位（注意：有空格，用红纸写，均繁体字）
          </p>
          <p class="m-p">
              （以上二位，写离自己最近的祖先）
          </p>
          <p class="m-p">
              与祭：
          </p>
          <p class="m-p">
              主祭：
          </p>
          <p class="m-p">
              古代妇女不参与祭祀，嫡长子或嫡长女则是主祭。
          </p>
          <p class="m-p">
              陪祭：
          </p>
          <p class="m-p">
              古代德陪祭是五服的亲戚，但是现在五服基本上不清楚了
          </p>
          <p class="m-p">
              其余诸子女、孙辈、儿媳、女婿、侄儿、侄女、外孙则是陪祭。
          </p>
          <p class="m-p">
              执事：（2人，左右各一。负责在祭祀过程中端茶送水，传递祭品。）由大嫂或大女婿担任。
          </p>
          <p class="m-p">
              流程
          </p>
          <p class="m-p">
            1. 前一天准备祭祀所需物品
          </p>
         <p class="m-p">
            2. 当天清早，陈列神主（用红布盖住），陈列祭品
        </p>
        <p class="m-p">
            3. 与祭诸人，洗手。
        </p>
        <p class="m-p">
            4. 主祭三跪九叩，上香（三支，黄色的，插在香炉中，一子排开，上下笔直，间隔寸余），陪祭一样三跪九叩。同时执事点亮蜡烛。
        </p>
        <p class="m-p">
            5. 主祭先奠酒（将酒在香烟上熏三圈，然后倒入酒池），同时执事揭开盖在神主上的红布
        </p>
        <p class="m-p">
             6. 主祭致祝辞（禀告祭祀的意图和内容。如祭祖：儿承父母之体，感天地之恩，今当吉日修礼备馔以飨先君，乃祀诸圣。应有备仪，恭呈祭品。抑祭礼仪，追思先考。体孝行恭，而教后辈。）
         </p>
        <p class="m-p">
            7. 左执事，点红香一柱（三支），单膝下跪，递给主祭。
        </p>
        <p class="m-p">
            8. 主祭三跪九叩，上香。陪祭一样。
        </p>
        <p class="m-p">
             9. 右执事，接过，单膝下跪，点头，插入香炉（一子排开，上下笔直，间隔寸余）
        </p>
        <p class="m-p">
            10. 主祭端起酒杯。
        </p>
        <p class="m-p">
            11. 左执事，倒酒，单膝下跪，递给主祭。
        </p>
        <img src="../../../../../static/img/jisi2.png" style="margin-top:0.2rem ">
        
        <p class="m-p">
            12. 主祭将酒在香绕三圈，递右执事。
          </p>
         <p class="m-p">
            13. 右执事，接过，单膝下跪，点头，放在神主前
        </p>
        <p class="m-p">
            14. 主祭、陪祭。一跪三扣。
        </p>
        <p class="m-p">
            15. 如此重复三次，为亚献、三献。
        </p>
        <p class="m-p">
            16. 左执事，端来米饭，单膝下跪，递给主祭。
        </p>
        <p class="m-p">
             17. 主祭将米饭在香绕三圈，递右执事。
         </p>
        <p class="m-p">
            18. 右执事，接过米饭，单膝下跪，点头，放在神主前。
        </p>
        <p class="m-p">
            19. 左执事，端来肉汤，单膝下跪，递给主祭。
        </p>
        <p class="m-p">
             20. 主祭将肉汤在香绕三圈，递右执事。
        </p>
        <p class="m-p">
            21. 右执事，接过，单膝下跪，点头，放在神主前。
        </p>
        <p class="m-p">
            22. 主祭跪读祭文（文言四六体）。
        </p>
        <p class="m-p">
            23. 读毕。主祭、陪祭，一跪三扣。
        </p>
        <p class="m-p">
            24. 左执事，端来茶、水，单膝下跪，递给主祭。
         </p>
        <p class="m-p">
            25. 主祭将茶、水在香绕三圈，递右执事。
        </p>
        <p class="m-p">
            26. 右执事，接过茶、水，单膝下跪，点头，放在神主前。
        </p>
        <p class="m-p">
            27. 主祭、陪祭，一跪三扣。
        </p>
        <p class="m-p">
            28. 主祭送神致辞（宣布祭祀即将完毕。如：酒斟三献，礼馔普享。祭祀周隆，组考享欢。至今礼圆，宜回阆苑。）
        </p>
        <p class="m-p">
            29. 有嫡长孙，则嫡长孙，无责嫡孙女，或侄孙辈。上香（三支，红色的，插在香炉中，一子排开，上下笔直，间隔寸余）所有人一跪三扣。
        </p>
        <p class="m-p">
            30. 执事将所有神主扯下，用黄裱纸包好。递于主祭。最后上香的人捧香炉。
        </p>
        <p class="m-p">
            31. 将神主和黄裱纸、纸钱、香在化帛处燃烧。众人三跪九叩。送神。
        </p>
        <p class="m-p">
            32. 祭祀完毕。
        </p>
        <p class="m-p-a">
           祭祀时在场，但不参与祭祀的人应回避。祭祀后所有祭品均可以食用，但是饭必须将碗反扣倒掉。（可到在化帛处） 
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
      active: 1,
      images: []
    };
  },
  methods: {
    goback() {
      this.$router.back("/webxgjz");
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
  padding-top: 0.2rem;
}
.m-p-a {
  font-size: 0.35rem;
  line-height: 0.6rem;
  padding-top: 0.2rem;
}

.m-hr{
  position: fixed;
  top: 1rem;
  z-index: 1;
  width: 100%;
}


</style>

