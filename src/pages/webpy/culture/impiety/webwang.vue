<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="2">
        <van-icon name="arrow-left" class="m-header-icon" @click="goback"/>
      </van-col>
      <van-col span="20" style="text-align:center">“王”姓</van-col>
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
              出自姬姓，为周文王之后，以王族爵号为氏。周文王第十五子毕公高之后，因本来是王族，所以他们以王为姓。又东周灵王太子姬晋，因直谏被废为庶民，迁居于琅琊（今山东省），世人称其为“王”家，其后亦
              以“王”为姓，称为王氏。
          </p>
          <p class="m-p">
             出自子姓，为殷商王子比干之后，以爵号为氏。据《通志·氏族略》记载，商纣时王子比干之后，比干被杀后，其子孙为了纪念他，以王子爵号改“子”姓为“王”姓，形成了别一支王氏。
          </p>
          <p class="m-p">
             出自妫姓，为齐王田和的后代，以王族称谓为氏。据《通志·氏族略》记载，相传为古帝虞舜之后妫满被周武王封于陈，传至公子完，避难逃到齐国，改姓田，其裔孙田和成为齐国国君，史称“田氏代齐”，齐被灭后，
             其后人以王族身份改“妫”姓为“王”姓，称为王氏。
          </p>
          <p class="m-p">
             复姓简化而来，秦灭六国后，各国王族避难散居，有一小部分易姓为王。 　
          </p>
          <p class="m-p">
             出自赐姓或改姓的王姓。如战国燕太子丹的玄孙嘉被王莽赐姓王，隋末王世充本姓支氏。
          </p>
          <br>
        <img src="../../../../../static/img/jisi6.png">
        <p class="m-p-a">
              二、迁徙分布
          </p>
          <p class="m-p">
              王姓在秦汉时期基本生活在今山西芮城、夏县、蒲县、平陆，河南开封、虞城、淮县，陕西咸阳，山东淄博等地，而子姓为王的后裔则由河南卫辉迁至今甘肃天水、山东东平、河南新蔡、新野、焦作等地。
          </p>
          <p class="m-p">
             两汉时期，开始出现了以新朝皇帝王莽而得名的元城（今河北省大名）王姓；琅琊王姓，以西汉谏议大夫王吉为开基祖；太原王姓，分为晋阳支（以三国魏司空王昶开基），祁县支（以东汉王允为开基）。
          </p>
          <p class="m-p">
            魏晋南北朝时期琅琊王姓的后裔王导和王敦兄弟辅佐司马睿建立东晋，琅琊王氏举族南迁，衣冠南渡，时称“王与马共天下”。太原王姓祁县支在司马懿专权时遭受灭顶之灾。
          </p>
          <p class="m-p">
             隋灭陈时，原仕于南朝的琅邪王姓被分别迁于关中、河北、河东等地。 　
          </p>
          <p class="m-p">
             唐末时，王潮和王审知兄弟南迁福建，建立闽国，由此，王审知被誉为“开闽第一人”。
          </p>
          <p class="m-p">
             北宋灭后，三槐王姓（以唐末的黎阳〈今河南省浚县〉令王言为开基祖）的不少人迁居江浙一带，尤以江苏昆山一支贤才辈出，成为望族。
          </p>
          <p class="m-p">
             明代时在洪洞大槐树集结的山西人被分别迁于河南、河北、山东、江苏、浙江、甘肃等地。于是太原王和三槐王等在中原地区有了更为广泛的分布。
          </p>
          <p class="m-p-a">
              三、郡望堂号
          </p>
          <p class="m-p-a">
              【郡望】
          </p>
          <p class="m-p-a">
              太原郡：战国秦庄王置郡，治所在晋阳（今山西省太原西南）。此一支王氏，始祖为周灵王太子。
          </p>
          <p class="m-p-a">
              琅琊郡：秦始皇置。治所在琅琊，郡治相当于今山东省胶南谙城、临沂、胶南一带。
          </p>
          <p class="m-p-a">
              北海郡：汉景帝置。治所营陵，郡治相当于今山东省东部潍坊地区。此支王氏，出自虞舜妫姓王氏。
          </p>
          <p class="m-p-a">
              堂邑郡：春秋时为堂邑，晋代置郡。治所在堂邑（今江苏省六合县北）。
          </p>
          <p class="m-p-a">
              【堂号】
          </p>
          <p class="m-p-a">
              三槐堂：北宋王祐，大名莘县人，字景叔，自幼聪慧过人，年轻时曾任魏县、南乐二县县令。入宋以后，晚年拜为兵部侍郎，于上任后月余去世，终年六十四岁，葬在陕西华州安丰里，追封晋国公。相传，
              周代宫廷外种槐树三棵，荆棘九株。百官朝见天子之时，三公面对槐树而立，九卿面对荆棘面立。后世便以三槐代指三公一类官职，九棘代指九卿百官。王祐亲手在庭中栽种了三棵槐树，希望借重三槐的喻意，
              显赫族人。后来次子王旦果然当了宰相，孙王素又做了宋仁宗时的工部尚书。王氏族人遂称这支王氏宗族为三槐王氏，并将宗族祠堂命名为三槐堂。王祐曾孙王巩文彩出众，与苏轼友善。苏轼为之作《三槐堂铭》，
              从此三槐堂扬名天下，成为王氏子孙后代通用的堂名。
          </p>
          <p class="m-p-a">
              还有双桂、承德、五果、宝善、积德、存厚、敦睦、馀庆、宗德、燕翼、绍兴、思明、怀德、五孝、孝睦、敦本、槐明、梓谊、听槐堂等。
          </p>
          <p class="m-p-a">
              历史名人
          </p>
          <p class="m-p-a">
              王绾，秦国人，有（删）秦朝以来历史上的第一位丞相。
          </p>
          <p class="m-p-a">
              王昭君，名嫱，字昭君，乳名皓月。中国古代四大美女之一。
          </p>
          <p class="m-p-a">
              王景，字仲通，东汉时期著名的水利工程专家。
          </p>
          <p class="m-p-a">
              王粲，字仲宣。东汉末年著名文学家，“建安七子”之一，被称为“七子之冠冕”。
          </p>
          <p class="m-p-a">
              王祥，字休征，西晋太保，二十四孝人物之一，“卧冰求鲤”的主人翁。
          </p>
          <p class="m-p-a">
              王羲之，字逸少。晋代书法家、书圣，代表作品《兰亭序》。
          </p>
          <p class="m-p-a">
              王勃，字子安，唐朝文学家。“初唐四杰”之一。代表作品《滕王阁序》。
          </p>
          <p class="m-p-a">
              王昌龄，字少伯。盛唐著名边塞诗人，“七绝圣手”。
          </p>
          <p class="m-p-a">
              王重阳，中国道教分支全真道的始创人，后被尊为道教的北五祖之一。
          </p>
          <p class="m-p-a">
              王冕，字元章，元代著名画家、诗人、书法家。
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

