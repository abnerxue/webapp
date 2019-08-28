<template>
  <div class="m-bg">
    <div class="m-sbg">
      <table class="m-table">
        <tr>
          <td colspan="2" class="m-line-one">总常孝通(个)<br>18,888</td>
        </tr>
        <tr>
          <td>可转常孝通(个)<br>10,000</td>
          <td>今日常孝通(元/个)<br>10</td>
        </tr>
        <tr>
          <td>锁定常孝通(个)<br>8888</td>
        </tr>
        <tr>
          <td>
            <button class="m-button-one">批发常孝通</button>
          </td>
          <td>
            <button class="m-button-two">转出常孝通</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {

};
</script>
<style scoped>
.m-bg {
  position: relative;
  background-image:url("../../../../static/img/market-sec-bg.png") ;
  height: 80%;
}
.m-sbg {
  position: absolute;
  background: white;
  height: 50%;
  width: 80%;
  margin: 0.5rem 10%;
  box-shadow: 2px 2px 2px #dddcdc;
  border-radius: 5px;
}

.m-table{
  width: 100%;
  text-align: center;
  margin-top: 0.4rem;
  height: 85%;
}

.m-line-one{
  font-size: 0.3rem;
  margin-top:0.4rem; 
  
}

.m-line-two{
  font-size: 0.3rem;
  text-align: center;
  margin:0.4rem auto; 
  float: left;
  display: block;
}

.m-line-three{
  font-size: 0.3rem;
  text-align: center;
  margin:0.4rem auto; 
  clear: both;
  display: block;
}

.m-button-one{
  font-size: 0.3rem;
  padding: 0.3rem;
  color: #00a2ff;
  background-color:  #edf8ff
}

.m-button-two{
  font-size: 0.3rem;
  padding: 0.3rem;
  color: white;
  background-color:  #00a2ff
}
</style>
