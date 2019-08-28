
<template>
    <div style="background-color:#fff;padding-bottom:.2rem;">
        <div style="padding-top:.2rem;position:fixed;left: 0;top:0;width:100%;background-color:#fff;">
            <div style="border:1px solid #ddd;border-radius:5px;overflow:hidden;width:90%;margin:0 auto;">
                <Calendar
                v-on:choseDay="clickDay"
                v-on:changeMonth="changeDate"
                :markDate="arr"
                ></Calendar>
            </div>
            <div style="width:90%;margin:0 auto;padding:.2rem 0;font-size:.3rem;font-weight:bold;">详情</div>
        </div>
        <div v-if="show_item&&bannerList_.length>0" style="padding-top:8rem;">
            <div v-for="(img,index) in bannerList_" @click="toDetail()" :key="index" style="display:flex;width:90%;margin:0 auto;border:1px solid #E5E5E5;margin-bottom:.2rem;">
                <div style="flex:1;background-color:#fff8f1;color:#FF800E;padding:.2rem;box-sizing:border-box;text-align:center;display:flex;justify-content: center;align-items: Center;">
                    <div>
                    <div style="font-size:.28rem;">{{img.date.substring(0,7)}}</div>
                    <div style="font-size:.56rem;">{{img.date.substring(8,10)}}</div>
                    </div>
                </div>
                <div style="flex:3;">
                    <div style="width:95%;margin:0 auto;padding:.1rem 0;">
                        <div style="margin-bottom:.1rem;text-align:center;font-size:.32rem;color:#222222;font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                            {{img.title}}
                        </div>
                        <div style="margin-bottom:.1rem;">
                            <img src="../assets/time_icon.png" style="width:14px;height:14px;float:left;margin-right:5px;margin-top:1px;"/>{{img.date+' '+img.time}}
                        </div>
                        <div style="margin-bottom:.1rem;">
                            <img src="../assets/location_icon.png" style="width:14px;height:14px;float:left;margin-right:5px;margin-top:1px;"/>{{img.place}}
                        </div>
                        <div>
                            <img src="../assets/speaker_icon.png" style="width:14px;height:14px;float:left;margin-right:5px;margin-top:1px;"/>{{img.speaker}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else style="padding-top:8rem;">
            <div style="display:flex;justify-content: center;align-items: Center;height:auto;height:4rem;">
                暂无
            </div>
        </div>
    </div>
</template>
<script>
import Calendar from 'vue-calendar-component';
  // 多个标记示例
export default {
    components: {
        Calendar
    },
        data() {
            return {
                arr:["2019/4/12","2019/4/6"],
                show_item:false,
                bannerList_: '',
                apiPath : {
                    //列表
                    list : '/api/platform/list',
                    //首页列表
                    //index : '/api/platform/index/new',
                    // index : '/api/platform/index',
                    index:'/static/datas.json',
                    //个人中心
                    user : '/api/user/index',
                    //banner pv/uv 统计接口
                    bannerPv : '/api/platform/bannerPv'
                },
            }
        },
  methods:{
      toDetail(){
          this.$router.push({ name : 'detail',});
      },
        clickDay(data) {
            console.log(data); //选中某天
            // this.show_item = !this.show_item;
            if(this.arr.indexOf(data)>-1){
                this.show_item = true;
            }else{
                this.show_item = false;
            }
        },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    },
               //获取列表数据
            getList() {      
                let _this = this;                     
                let data = {
                //    pageNum : this.pageNum,
                //    type : this.type
                };                    

                this.$ajax.get(this.apiPath.index,_this.$qs.stringify(data),{
                    headers: _this.Base.initAjaxHeader(1,data)
                }).then(res=>{
                   this.bannerList = res.data.data; 
                   this.bannerList_ = res.data.data;
                   console.log(res.data.data);
                    // let result = res.data; 
                    // if(result.status == 0 || result.status == -100 || result.status == -9) { 
                    //     //首页只展示十条数据，不用分页 
                    //     //_this.totalPage = result.result.pageEntity.totalPage;
                    //     _this.bannerList = result.result.bannerList;
                    //     _this.carouseList = result.result.carouseList;
                    //     _this.showMarquee(_this,0);
                    //     if(_this.pageNum > _this.totalPage) {
                            
                    //     } else {
                    //         _this.listData = [ ..._this.listData, ...result.result.list ];
                    //     }
                    //     _this.pageNum += 1; 
                    // } else {
                    //     _this.$msg({ content : result.msg });
                    // }
                    // _this.isShowLoading = false;
                    // _this.isLoading = false;
                    // //解决一个问题，ios返回莫名出现遮罩层
                    // window.scrollTo(0,1); 
                    // window.scrollTo(0,0); 

               });
            },
  },
  
    created() {
    },
    beforeMount() {         
        this.getList();
    }
}
</script>
<style lang="scss" scoped>h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}
.div {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  background: #0fc37c;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}
.wh_container >>> .mark1 {
  background-color: orange;
}
.wh_container >>> .mark2 {
  background-color: blue;
}
.wh_content_item > .wh_isMark {
  background: orange;
}
.wh_container >>> .wh_content_all {
  background-color: red;
}
</style>


