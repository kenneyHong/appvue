
<template>
  <div class="sideBar">
    <div class="sideContent">
      <span class="shrink" @click="telescopicTab">
        <img class="Icon" src="../assets/images/clicktoShrink.png" alt="img">
        <span class="clickto">点击收缩</span>
      </span>
      <el-scrollbar wrap-class="list" wrap-style="color: red;" class="sidBar-sys">
        <ul>
          <li class="features" :class="this.$route.path == '/walletAccount' && 'active'" @click="toLinks('/walletAccount')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包账户列表</span>
          </li>
          <li class="features" :class="this.$route.path == '/EWalletManagement' && 'active'" @click="toLinks('/EWalletManagement')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包管理</span>
          </li>
          <li class="features" :class="this.$route.path == '/accountApplication' && 'active'" @click="toLinks('/accountApplication')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包开户申请</span>
          </li>
          <li class="features" :class="this.$route.path == '/withdrawalApplication' && 'active'" @click="toLinks('/withdrawalApplication')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包提现申请</span>
          </li>
          <li class="features" :class="this.$route.path == '/reconciliationStatement' && 'active'" @click="toLinks('/reconciliationStatement')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户对账报表</span>
          </li>
          <li class="features" :class="this.$route.path == '/basicHousehold' && 'active'" @click="toLinks('/basicHousehold')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户流水</span>
          </li>
          <li class="features" :class="this.$route.path == '/personalRechargeHistory' && 'active'" @click="toLinks('/personalRechargeHistory')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户充值记录</span>
          </li>
          <li class="features" :class="this.$route.path == '/operatorManagement' && 'active'" @click="toLinks('/operatorManagement')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户管理</span>
          </li>
          <li class="features" :class="this.$route.path == '/operatorsFlow' && 'active'" @click="toLinks('/operatorsFlow')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户流水</span>
          </li>
          <li class="features" :class="this.$route.path == '/operatingAccount' && 'active'" @click="toLinks('/operatingAccount')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户对账报表</span>
          </li>
          <li class="features" :class="this.$route.path == '/EwalletrechargeReport' && 'active'" @click="toLinks('/EwalletrechargeReport')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户充值报表</span>
          </li>
          <li class="features" :class="this.$route.path == '/depositData' && 'active'" @click="toLinks('/depositData')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">入金单</span>
          </li>
          <li class="features" :class="this.$route.path == '/withdrawal' && 'active'" @click="toLinks('/withdrawal')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">出金单</span>
          </li>
          <li class="features" :class="this.$route.path == '/lnPlatformTransferBill' && 'active'" @click="toLinks('/lnPlatformTransferBill')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">平台内转账单</span>
          </li>
        </ul>
      </el-scrollbar>
      <!-- <span class="features">
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
      </span> -->
      <!-- <span class="features" :class="this.$route.path == '/walletAccount' && 'active'" @click="toLinks('/walletAccount')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">电子钱包账户列表</span>
      </span>
      <span class="features" :class="this.$route.path == '/EWalletManagement' && 'active'" @click="toLinks('/EWalletManagement')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">电子钱包管理</span>
      </span>
      <span class="features" :class="this.$route.path == '/accountApplication' && 'active'" @click="toLinks('/accountApplication')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">电子钱包开户申请</span>
      </span>
      <span class="features" :class="this.$route.path == '/withdrawalApplication' && 'active'" @click="toLinks('/withdrawalApplication')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">电子钱包提现申请</span>
      </span>
      <span class="features" :class="this.$route.path == '/reconciliationStatement' && 'active'" @click="toLinks('/reconciliationStatement')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">基本户对账报表</span>
      </span>
      <span class="features" :class="this.$route.path == '/basicHousehold' && 'active'" @click="toLinks('/basicHousehold')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">基本户流水</span>
      </span>
      <span class="features" :class="this.$route.path == '/personalRechargeHistory' && 'active'" @click="toLinks('/personalRechargeHistory')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">基本户充值记录</span>
      </span>
      <span class="features" :class="this.$route.path == '/operatorManagement' && 'active'" @click="toLinks('/operatorManagement')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">运营户管理</span>
      </span>
      <span class="features" :class="this.$route.path == '/operatorsFlow' && 'active'" @click="toLinks('/operatorsFlow')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">运营户流水</span>
      </span>
      <span class="features" :class="this.$route.path == '/operatingAccount' && 'active'" @click="toLinks('/operatingAccount')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">运营户对账报表</span>
      </span>
      <span class="features" :class="this.$route.path == '/EwalletrechargeReport' && 'active'" @click="toLinks('/EwalletrechargeReport')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">运营户充值报表</span>
      </span>
      <span class="features" :class="this.$route.path == '/depositData' && 'active'" @click="toLinks('/depositData')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">入金单</span>
      </span>
      <span class="features" :class="this.$route.path == '/withdrawal' && 'active'" @click="toLinks('/withdrawal')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">出金单</span>
      </span>
      <span class="features" :class="this.$route.path == '/lnPlatformTransferBill' && 'active'" @click="toLinks('/lnPlatformTransferBill')">
        <img class="Icon" src="../assets/images/giftShop.png" alt="img">
        <span class="functions">平台内转账单</span>
      </span> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data () {
    return {
      isShrink: false
    }
  },
  methods: {
    telescopicTab() {
      this.isShrink = !this.isShrink
      this.$emit('isShow', this.isShrink)
    },
    toLinks(str) {
      if (this.$route.path != str) {
        this.$router.push(str)
      }
    }
  },
  mounted () {},
  watch: {},
  components: {}
}
</script>
<style lang="scss" scoped>
.sideBar {
  width: 180px;
  height: 100%;
  background-color: #1e2e45;
  .sideContent {
    height: calc(100% - 0px);
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
    cursor: pointer;
    .Icon{
      float: left;
      margin-top: 14px;
      width: 18px;
    }
    .clickto{
      color: #546987;
      margin-left: 11px; 
      font-size: 12px;
    }
  }
  .active {
    background-color: #3484c0;
  }
  .features{
    height: 40px;
    display: block;
    padding-left: 11px;
    line-height: 40px;
    font-size: 12px;
    cursor: pointer;
    .Icon{
      float: left;
      margin-top: 11px;
    }
    .functions{
      margin-left: 14px;
      color: #ffffff;
    }
  }
}
.sidBar-sys {
  width: auto;
  height: calc(100% - 40px);
}
</style>