
<template>
  <div class="sideBar">
    <div class="sideContent">
      <span class="shrink">
        <img class="Icon" src="../assets/images/clicktoShrink.png" alt="img">
        <span class="clickto">点击收缩</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/functions.png" alt="img">
        <span class="functions">常用系统</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/erpsystemsystm.png" alt="img">
        <span class="functions">ERP管理系统</span>
      </span>  
      <span class="features">
        <img class="Icon" src="../assets/images/wechatMarketing.png" alt="img">
        <span class="functions">微信营销</span>
      </span>  
      <span class="features">
        <img class="Icon" src="../assets/images/salaryPerformance.png" alt="img">
        <span class="functions">薪酬绩效系统</span>
      </span> 
      <span class="features">
        <img class="Icon" src="../assets/images/marketingActivities.png" alt="img">
        <span class="functions">营销活动</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/jamSystem.png" alt="img">
        <span class="functions">卡券系统系统系统</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/CRM.png" alt="img">
        <span class="functions">SCRM系统</span>
      </span> 
      <span class="features">
        <img class="Icon" src="../assets/images/SMSsystem.png" alt="img">
        <span class="functions">短信系统</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/catCat.png" alt="img">
        <span class="functions">抓财猫</span>
      </span>  
      <span class="features">
        <img class="Icon" src="../assets/images/controlCenter.png" alt="img">
        <span class="functions">管控中心</span>
      </span>
      <span class="features">
        <img class="Icon" src="../assets/images/customerService.png" alt="img">
        <span class="functions">专属客服</span>
      </span> 
      <span class="features">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">礼品商城</span>
      </span>                                                             
    </div>
   
  </div>
</template>
<script>
export default {
  props: {},
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
  },
  watch: {},
  components: {}
}
</script>
<style lang="scss" scoped>
.sideBar {
  width: 200px;
  height: 100%;
  background-color: #1e2e45;
  .sideContent {
    height: calc(100% - 50px);
    overflow: auto;
  }
  .brand-title {
    height: 40px;
    line-height: 40px;
  }
  .shrink{
    height: 40px;
    border-top: 1px solid #152335;
    display: block;
    padding-left: 11px;
    line-height: 40px;
    .Icon{
      float: left;
      margin-top: 14px;
    }
    .clickto{
      color: #546987;
      margin-left: 11px; 
      font-size: 12px;
    }
  }
  .features{
    height: 40px;
    display: block;
    padding-left: 11px;
    line-height: 40px;
    font-size: 12px;
    
    .Icon{
      float: left;
      margin-top: 14px;
    }
    .functions{
      margin-left: 11px;
      color: #ffffff;
    }
  }
}

</style>