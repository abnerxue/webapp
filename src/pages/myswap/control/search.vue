<template>
  <div class="corporation">
    <van-row class="s-headeras" style="background:#222222;">
      <van-col span="2">
        <van-icon name="arrow-left" class="s-header-iconas" @click="onClickLeft" />
      </van-col>
      <van-col span="21"><van-search placeholder="请输入搜索关键词" v-model="value" background=""/></van-col>
      <van-col span="1"></van-col>
    </van-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:""
    };
  },

  methods: {
    onClickLeft() {
      // this.$router.push({path:'/large?stage='+this.mess})
      this.$router.push("/company");
    },
  },
};
</script>

<style scoped>
.van-field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #414141;
    text-align: left;
    background-color:#222222 ;
    /* border: 0.01rem solid #414141; */
    resize: none;
}
.van-search {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    /* padding: 10px 12px; */
    border: 0.01rem solid #414141;
    margin: 0.1rem 0.1rem 0.1rem 0.3rem;
    height: 0.8rem
}
.van-search__content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding-left: 8px;
    background-color: #222222;
    /* border-radius: 2px; */
}
.van-field__left-icon .van-icon, .van-field__right-icon .van-icon {
    display: block;
    min-width: 1em;
    font-size: 16px;
    line-height: inherit;
    color: #323233
}

.corporation {
  width: 100%;
  height: 100%;
  background: #414141;
}
.s-headeras {
  height: 8%;
  line-height: 1rem;
  color: #ffffff;
  font-size: 0.35rem;
  
}

.s-header-iconas {
  position: absolute;
  top: 0.3rem;
  left: 0.2rem;
  font-size: 0.45rem;
}
</style>