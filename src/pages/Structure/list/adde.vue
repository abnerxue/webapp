
<template>
  <div class="m-bg">
    <van-row class="m-header">
      <van-col span="5">
        <div @click="goback" style="color:#00a2ff;font-size:0.3rem;">取消</div>
      </van-col>
      <van-col span="14">添加员工</van-col>
      <van-col span="5">
        <div @click="onSave" style="color:#00a2ff;font-size:0.3rem;">完成</div>
      </van-col>
    </van-row>
    
    <div style="margin-top:1rem;margin-bottom:-0.2rem">
      <van-field v-model="name" label="姓名" placeholder="必填" style="font-size:0.3rem" />
      <van-field v-model="tel" label="手机号" placeholder="必填" style="font-size:0.3rem" />
      <van-field v-model="bank" label="银行卡号" placeholder="选填" style="font-size:0.3rem" />
      <van-field v-model="email" label="企业邮箱" placeholder="选填" style="font-size:0.3rem" />
      <!-- 选择部门 -->
      <van-field
        readonly
        clickable
        label="部门"
        :value="value2"
        placeholder="点我选择"
        @click="showPicker2 = true"
        style="font-size:0.3rem"
        right-icon="arrow"
      />

      <van-popup v-model="showPicker2" position="bottom" >
        <van-picker
          show-toolbar
          :columns="columns2"
          @cancel="showPicker2 = false"
          @confirm="onConfirm2"
          
        />
      </van-popup>

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
  name: "Addi",
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
      showPicker2: false,
      startTime: "",
      message: "",
      value: "",
      value2: "",
      show1: false,
      show2: false,
      name: "",
      tel: "",
      bank: "",
      showPicker: false,
      checked: true,
      department_id:'',
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
      ],
      columns2:[]
    };
  },
  methods: {
    goback() {
      this.$router.back("/member");
    },
    top() {
      window.scrollTo(0, 0);
    },
    getList() {
      
      let _this = this;
      let data = {
        pId:this.$route.query.pId, //子公司id
        token: this.GLOBAL.token
      };
        
      this.pageDatab = [
        {
          id: 19,
          name: "行政人事部",
          des: null,
          parent_id: 8,
          sort: 0,
          state: 0,
          ctime: "2019-07-16 20:40:56",
          utime: null
        }
      ];
      this.$ajax
        .post("/cxt/oa/dept/detail", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.pageDatab=res.data.data.dept;
          let list=[];
          // let list1=[];
          for(let i =0;i<this.pageDatab.length;i++){
            list.push(this.pageDatab[i].name)
          }
          // for(let j=0;j<list.length;j+=2){
          //   list1.push(list.slice(j,j+2))
          // }
          this.columns2=list;
          console.log( this.pageDatab)
        });
        
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      this.value2 = value;
      this.showPicker2 = false;
    },
    onSave() {
      for(let i=0;i<this.pageDatab.length-1;i++){
        if(this.pageDatab[i].name==this.value2){
          this.department_id=this.pageDatab[i].id;
        }
      }
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
        department_id: this.department_id
      };
      console.log(data.department_id);
      if(data.name==""){
        Toast('请填写姓名！')
        return
      }
      if(data.phone==""){
        Toast('请填写手机号！')
        return
      }
      let self = this;
            let telreg=/^[1][0-9]{10}$/;
            let myreg=/^[\S]{6,20}$/;
            if(!telreg.test(self.tel)){
                Toast('手机号格式错误！');
                return
            }
      if(data.department_id==""){
        Toast('请选择部门！')
        return
      }
      
      this.$ajax
        .post("/cxt/oa/member/add", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          this.$router.push({
            path: "/member",
            query: {
              dptid: this.department_id,
          dptname:this.value2,
          coname:this.$route.query.coname,
          pId: this.$route.query.pId
            }
          });
        });

      // console.log(this.name);
      // console.log(this.tel);
      // console.log(this.value);
      // console.log(this.bank);
    },
    onSave2() {
      for(let i=0;i<this.pageDatab.length-1;i++){
        if(this.pageDatab[i].name==this.value2){
          this.department_id=this.pageDatab[i].id;
        }
      }
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
        department_id: this.department_id
      };
      console.log(data.department_id);

      if(data.name==""){
        Toast('请填写姓名！')
        return
      }
      if(data.phone==""){
        Toast('请填写手机号！')
        return
      }
      let self = this;
            let telreg=/^[1][0-9]{10}$/;
            let myreg=/^[\S]{6,20}$/;
            if(!telreg.test(self.tel)){
                Toast('手机号格式错误！');
                return
            }
      if(data.department_id==""){
        Toast('请选择部门！')
        return
      }

      this.$ajax
        .post("/cxt/oa/member/add", _this.$qs.stringify(data), {
          headers: _this.Base.initAjaxHeader(1, data)
        })
        .then(res => {
          if(res.state==='000'){
              console.log(res.data)
          this.show1 = true;
          }else{
             Toast(res.data.msg)
          }
         
        });
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
    this.getList()
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

