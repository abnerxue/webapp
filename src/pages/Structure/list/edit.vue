<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="5">
        <div @click="goback" style="color:#00a2ff;font-size:0.3rem;">取消</div>
      </van-col>
      <van-col span="14">编辑信息</van-col>
      <van-col span="5">
        <div @click="onSave" style="color:#00a2ff;font-size:0.3rem;">完成</div>
      </van-col>
    </van-row>
    
    <div style="margin-top:1rem;margin-bottom:-0.2rem">
      <van-field v-model="name" label="姓名" placeholder="必填" style="font-size:0.3rem" />
      <van-field v-model="tel" label="手机号" placeholder="必填" style="font-size:0.3rem" />
      <van-field v-model="bank" label="银行卡号" placeholder="选填" style="font-size:0.3rem" />
      <van-field v-model="email" label="企业邮箱" placeholder="选填" style="font-size:0.3rem" />
      
      <van-field  label="部门" v-model="dptname" style="font-size:0.3rem" :readonly="true" input-align="right" right-icon="arrow"/>

      <!-- <van-row style="position:relative">
        <van-col span="6">
          <van-cell title="部门" />
        </van-col>
        <van-col span="16" style="text-align:right;color:#9a9a9a;font-size:0.35rem;margin-top:0.27rem">{{this.$route.query.name}}</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="m-icon"/>
        </van-col>
      </van-row> -->

      <van-field v-model="staff_no" label="工号" placeholder="选填" style="font-size:0.3rem;" :border="true" />
      <van-field v-model="landline" label="分机号" placeholder="选填" style="font-size:0.3rem" />
      <van-field v-model="office" label="办公地点" placeholder="选填" style="font-size:0.3rem" />
      <!-- 选择职务 -->
      <van-field
        readonly
        clickable
        label="职务"
        :value="value"
        placeholder="点我选择"
        @click="showPicker = true"
        style="font-size:0.3rem"
      />

      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <!-- 选择入职时间 -->
      <van-field
        readonly
        clickable
        label="入职时间"
        placeholder="请选择"
        style="font-size:0.3rem"
        v-model="startTime"
        @click="openpicker1"
      />

      <van-popup v-model="showPicker1" position="bottom" id="p1">
        <van-datetime-picker
          ref="picker1"
          v-model="currentDate1"
          type="date"
          @confirm="confirm1"
          @change="change1"
          @cancel="offpicker1"
        />
      </van-popup>

      <!--  -->

      <van-field v-model="message" label="备注" placeholder="选填" style="font-size:0.3rem" />
    </div>

    <div style="height:0.2rem;background-color:#ededed;width:100%;margin-top:0.2rem"></div>

    <van-cell-group style="margin-bottom:-0.2rem">
      <van-switch-cell v-model="checked" title="邀请员工完善个人档案" size="0.45rem"/>
    </van-cell-group>

    <div style="height:1rem;background-color:#ededed;width:100%;margin-top:0.2rem">
      <p class="m-p">
        开启后员工将收到工作通知完善个人档案
      </p>
      <p class="m-p">
        对外信息
      </p>
    </div>
    <van-field  label="对外职位" value="与内部职位同步" style="font-size:0.3rem;margin-bottom:-0.2rem" :readonly="true" input-align="right" right-icon="arrow" />
    <!-- <van-cell title="对外职位" value="与内部职位同步" right-icon="true" style="margin-bottom:-0.2rem"/> -->

    <div style="height:1rem;background-color:#ededed;width:100%;margin-top:0.2rem">
      <p class="m-p">
        设置名片上展示的专属对外职位，统一管理成员对外身份，便于商务沟通
      </p>
      <!-- <p class="m-p">
        高级设置
      </p> -->
    </div>

    <!-- <van-field v-model="id" label="员工ID" placeholder="选填" style="font-size:0.3rem;margin-bottom:-0.2rem" />

    <div style="height:1rem;background-color:#ededed;width:100%;margin-top:0.2rem">
      <p class="m-p">员工在企业的唯一标识，用于铛铛开放平台接口中，该字段设置后不可修改</p>
    </div> -->
    <button class="btn-a" @click="onSave2">保存并继续添加</button>

    <van-dialog v-model="show1" message="保存成功！" show-Confirm-Button @confirm="onClear"></van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import global_ from "../../global"; //引用文件
Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面
import { Toast } from "vant";
export default {
  data() {
    return {
      dptname:'',
      id: "",
      staff_no: "",
      email: "",
      landline: "",
      office: "",
      currentDate1: new Date(),
      showPicker1: false,
      startTime: "",
      message: "",
      value: "",
      show1: false,
      show2: false,
      name: "",
      tel: "",
      bank: "",
      showPicker: false,
      checked: true,
      columns: [
        "总监",
        "部长",
        "副部长",
        "部长助理",
        "经理",
        "副经理",
        "主管",
        "班长",
        "普通员工",
        "专员",
        "会计",
        "出纳",
        "业务经理",
        "总经理",
        "区域经理",
        "督训"
      ]
    };
  },
  methods: {
    goback() {
      this.$router.back("/mmdetail");
    },
    top() {
      window.scrollTo(0, 0);
      let data ={
        id: this.$route.query.id,//成员id
        coname: this.$route.query.coname,
        dptname:this.$route.query.dptname,
        pId: this.$route.query.pId,
        dptid: this.$route.query.dptid,
      }
      this.dptname=this.$route.query.dptname
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
   
    onEdit(){
        let _this = this;
        this.tc={
        name: '',
        tel: '',
        title: '',
        bank: '',
        message: '',
        landline:'',
        startTime:'',
        office:'',
        email:'',
        staff_no:'',
        roleMenu:[]
        }
        let data = {
        token: this.GLOBAL.token,
        id: this.$route.query.id
      };
  
      this.$ajax
        .post("/cxt/oa/member/info", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
            this.tc = res.data.data;
            this.name=res.data.data.name
            this.tel=res.data.data.phone
            this.bank=res.data.data.bank_num
            this.message=res.data.data.des
            this.value=res.data.data.title
            this.title=res.data.data.title
            this.landline=res.data.data.landline
            this.startTime=res.data.data.join_at
            this.office=res.data.data.office
            this.email=res.data.data.email
            this.staff_no=res.data.data.staff_no
            console.log(this.tc)
        });
      

    },
    
    onSave() {
      // let self = this;
      // let reg = /^1(3|4|5|7|8)\d{9}$/;
      // if (reg.test(self.phone)) {
      //   return true;
      // }else{
      //   Toast("请填写正确的手机号！");
      //   return false;
      // }
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.name,
        phone: this.tel,
        title: this.value,
        bank_num: this.bank,
        des: this.message,
        landline:this.landline,
        join_at:this.startTime,
        office:this.office,
        email:this.email,
        staff_no:this.staff_no,
        id: this.$route.query.id,
       
      };
      console.log(data.office);

      this.$ajax
        .post("/cxt/oa/member/update", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.$router.push({
            path: "/mmdetail",
            query: {
              id: this.$route.query.id,
              dptid: this.$route.query.dptid,
          dptname:this.$route.query.dptname,
          coname:this.$route.query.coname,
          pId: this.$route.query.pId,
            }
          });
        });

      // console.log(this.name);
      // console.log(this.tel);
      // console.log(this.value);
      // console.log(this.bank);
    },
    onSave2() {
      // let self = this;
      // let reg = /^1(3|4|5|7|8)\d{9}$/;
      // if (reg.test(self.phone)) {
      //   return true;
      // }else{
      //   Toast("请填写正确的手机号！");
      //   return false;
      // }

      this.show1 = true;
      let _this = this;
      let data = {
        token: this.GLOBAL.token,
        name: this.name,
        phone: this.tel,
        title: this.value,
        bank_num: this.bank,
        des: this.message,
        landline:this.landline,
        join_at:this.startTime,
        office:this.office,
        email:this.email,
        staff_no:this.staff_no,
        id: this.$route.query.id,
        
      };
     

      this.$ajax
        .post("/cxt/oa/member/update", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {});
    },
    onDelete() {
      this.show2 = true;
    },
    onClear() {
      this.value = "";
      this.name = "";
      this.tel = "";
      this.bank = "";
    },
    offpicker1() {
      this.showPicker1 = false;
    },
    openpicker1() {
      // this.$refs.picker1.open();
      this.showPicker1 = true;
    },
    confirm1(val) {
      console.log(val);
      this.startTime =
        "" +
        val.getFullYear() +
        "-" +
        (val.getMonth() + 1) +
        "-" +
        val.getDate() +
        "";
      // console.log(this.startTime);
      this.showPicker1 = false;
      //  this.startTime =  new Date(val).getTime().format("yyyy-MM-dd hh:mm");
    },
    change1(e) {
      console.log(e.getValues());
    },
    handleConfirm(time) {
      console.log(time);
      // this.startTime =  new Date(time).format("yyyy-MM-dd hh:mm");
    },
    onInput(checked) {
      Dialog.confirm({
        title: "提醒",
        message: "是否切换开关？"
      }).then(() => {
        this.checked = checked;
      });
    }
  },
  created() {
    this.top();
    this.onEdit();
  }
};
</script>

<style scoped>
.m-bg {
  background-color: white;
}

.m-header {
  height: 1rem;
  line-height: 1rem;
  color: rgb(7, 7, 7);
  font-size: 0.4rem;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  background-color: white
}

.m-icon {
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
  font-size: 0.5rem;
  color: #9a9a9a;
}

.search {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
}

.line {
  position: fixed;
  top: 1rem;
  z-index: 2;
  width: 100%;
  background-color: #ededed;
  height: 0.2rem;
}

.list {
  font-size: 0.35rem;
  text-align: center;
  width: 100%;
}

.btn-a {
  color: white;
  background-color: #00a2ff;
  border: 0.01rem solid #00a2ff;
  font-size: 0.35rem;
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
}
.m-p{
  margin:0.1rem 0 0.1rem 0.2rem;
  color: #bcbcbc
}
</style>

