<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“吴”姓</van-col>
      <van-col span="2"></van-col>
    </van-row>
    <hr class="m-hr">
    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
          <p class="m-p-a">
              一、姓氏起源
          </p>
          <p class="m-p">
              1、上古时已有吴姓。一是舜的后代有封在虞的，因“虞”与“吴”音相近，故舜后有吴姓。一是颛顼帝时有吴权，其后亦有吴氏。一是少康帝时有神箭手吴贺，其后有吴姓。
          </p>
          <p class="m-p">
              2、出自姬姓，以国为氏，是黄帝轩辕氏的直系后裔。商时，黄帝的12世孙古公亶父（周太王）建立了周部落。太王有三子，其中小儿子季历颇有才干，生子姬昌，姬昌出世时，有圣瑞出现，所以太王就属意姬昌接位。
              太王的大儿子太伯和二儿子仲雍知道了父王的意思是先传位给季历，再传位给姬昌，就决定自动让贤，便一起南下荆蛮（周人敌视楚国的称呼）。太伯和仲雍给当时比较落后的江南带去了中原先进的文化，被当地土著
              推举为君长，号称句吴。太伯死后，由仲雍继位。周武王（姬昌为文王，其子姬发为武王）灭商后，仲雍的3世孙周章为诸侯，国号改称吴，并追封太伯为吴伯。至仲雍的第19世孙寿梦称王，建都今江苏吴县。寿梦的第
              四子季扎本该继承王位，但他避而不受，逃到延陵以耕田为生。此后吴王寿梦的后裔分为两支：一支在政治上发展，出现了吴王阖闾，吴王夫差等著名国君；另一支则是季扎及其后裔独立发展，人丁繁衍众多，构成了
              当今吴姓的绝大部分。吴国被越国所灭后，其子孙便以国为氏，称吴氏。
          </p>
          
        <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
                吴国灭亡后，夫差的太子吴鸿被流放到江西，夫差之后还繁衍于江浙、安徽、山东、河南境内的一些地方。隋唐时期，吴氏已广泛地分布于大江南北。唐高宗时有吴姓将佐随陈政、陈元光父子入闽开辟漳州，唐僖宗时，
                有吴姓将佐随王审知入闽，皆在福建安家落户。宋明以后，吴氏称雄于东南，其中季扎的53世孙吴宣是后蜀驸马，家族显赫一时。吴宣的5世孙吴吉甫是吴氏入粤始祖。
          </p>
          <p class="m-p">
                吴氏迁居台湾始于1291年，入台第一人是元朝礼部员外郎吴光斗，他奉命率6000人乘船“往使琉球”（即台湾）。明朝末年以后，福建、广东沿海吴氏有许多人前往澎湖、台北、高雄等地谋生创业。发展至今，其中最为
                显赫的一支是吴伯雄家族。吴伯雄现任台湾国民党中央常委、台北市市长等要职，其家族号称吴氏“全台第一家”。 
          </p>
          <p class="m-p">
                吴氏迁居香港，大约始于元代。
          </p>
          <p class="m-p">
                吴氏向海外拓展，最早是到日本。吴人东渡日本在公元前450年左右，其中有一支演变成日本皇室。吴氏在东渡日本的同时，还有大批人南迁，进入今越南地区。其中季扎的50世孙吴权于939年称王，建立了越南历史上最
                早的独立王朝--吴朝。南越政权最后一任总统吴庭艳即吴权之后。现在越南有二百多姓，吴姓为第六大姓。东汉时有吴风进入朝鲜，发展至今，吴姓称为朝鲜143个姓氏中最常见的20大姓之一。明代以后，吴姓还有人移民
                南洋，迁至马来西亚、菲律宾、印尼、新加坡以及泰国、缅甸等国，近代，又有人旅居欧美。
          </p>
          <p class="m-p-a">
              三、郡望堂号
          </p>
          <p class="m-p-a">
              【郡望】
          </p>
          <p class="m-p-a">
              延陵县：西晋时分曲阿县置县。 
          </p>
          <p class="m-p-a">
              濮阳郡：晋代时改东郡置国，西晋末改为郡。此支吴氏，其开基始祖为广平侯吴汉的裔孙吴遵。 
          </p>
          <p class="m-p-a">
               陈留郡：西汉时置郡。此支吴氏是季扎的后裔，为东汉吴恢之族所在。 
          </p>
          <p class="m-p-a">
              长沙郡：秦时置郡。此支吴氏系季扎之后，其开基始祖为西汉长沙王吴芮。
          </p>
          
          <p class="m-p-a">
              【堂号】
          </p>
          <p class="m-p-a">
              延陵堂：季扎是吴王寿梦的第四子，以贤德著称，寿梦想让他继承王位，
              他坚辞不受，寿梦只好把他封在延陵。他的三个哥哥先后为吴王，临死时要传位给他，他仍然不接受。因此他被后人奉为“至德第三人”，又因其封邑在延陵，故时人称其为“延陵季子”。 
          </p>
         
          <p class="m-p-a">
              历史名人
          </p>
          <p class="m-p-a">
               吴起，战国时著名军事家。
          <p class="m-p-a">
              吴广，秦末农民起义领袖。公元前209年与陈胜发动戍卒九百人起义，建立张楚政权。后为部将田臧假借陈胜命令杀害。
          </p>
          <p class="m-p-a">
              吴道子，唐代著名画家。被后人奉为“画圣”。其画线条遒劲雄放，变化丰富，一变古来沿袭的高古游丝描的细笔，发展了线描的艺术方法，故表现出来的物象富有运动感、节奏感，被人们称为“吴带当风”。  
          </p>
          <p class="m-p-a">
               吴承恩，明朝小说家。著有《西游记》传世。
          </p>
          <p class="m-p-a">
                 吴敬梓，清代人，以小说《儒林外史》而著称的杰出讽刺作家。 
          </p>
          <p class="m-p-a">
                吴沃尧，清代著名小说家。著有《二十年目睹之怪现状》。
          </p>
          <p class="m-p-a">
                 吴昌硕，清代著名的篆刻家、书画家。工诗，善书法，尤精篆刻。 
          </p>
          <p class="m-p-a">
                吴其濬，清代著名政治家、科学家。著有被誉为19世纪中国重要的植物学著作《植物名实图考长编》22卷和《植物名实图考》38卷。
          </p>
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

