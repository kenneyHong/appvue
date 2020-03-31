
<template>
  <div class="sideBar">
    <div class="sideContent">
      <span class="shrink" @click="telescopicTab">
        <img class="Icon" src="../assets/images/clicktoShrink.png" alt="img">
        <span class="clickto">点击收缩</span>
      </span>
      <el-scrollbar wrap-class="list" wrap-style="color: red;" class="sidBar-sys">
        <ul>
          <li class="features" :class="isSelfLink('/walletAccount/index') && 'active'" @click="toLinks('/walletAccount/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包账户列表</span>
          </li>
          <li class="features" :class="isSelfLink('/EWalletManagement/index') && 'active'" @click="toLinks('/EWalletManagement/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包管理</span>
          </li>
          <li class="features" :class="isSelfLink('/accountApplication/index') && 'active'" @click="toLinks('/accountApplication/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包开户申请</span>
          </li>
          <li class="features" :class="isSelfLink('/withdrawalApplication/index') && 'active'" @click="toLinks('/withdrawalApplication/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">电子钱包提现申请</span>
          </li>
          <li class="features" :class="isSelfLink('/reconciliationStatement/index') && 'active'" @click="toLinks('/reconciliationStatement/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户对账报表</span>
          </li>
          <li class="features" :class="isSelfLink('/basicHousehold/index') && 'active'" @click="toLinks('/basicHousehold/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户流水</span>
          </li>
          <li class="features" :class="isSelfLink('/personalRechargeHistory/index') && 'active'" @click="toLinks('/personalRechargeHistory/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">基本户充值记录</span>
          </li>
          <li class="features" :class="isSelfLink('/operatorManagement/index') && 'active'" @click="toLinks('/operatorManagement/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户管理</span>
          </li>
          <li class="features" :class="isSelfLink('/operatorsFlow/index') && 'active'" @click="toLinks('/operatorsFlow/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户流水</span>
          </li>
          <li class="features" :class="isSelfLink('/operatingAccount/index') && 'active'" @click="toLinks('/operatingAccount/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户对账报表</span>
          </li>
          <li class="features" :class="isSelfLink('/ewalletrechargeReport/index') && 'active'" @click="toLinks('/ewalletrechargeReport/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">运营户充值报表</span>
          </li>
          <li class="features" :class="isSelfLink('/depositData/index') && 'active'" @click="toLinks('/depositData/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">入金单</span>
          </li>
          <li class="features" :class="isSelfLink('/withdrawal/index') && 'active'" @click="toLinks('/withdrawal/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">出金单</span>
          </li>
          <li class="features" :class="isSelfLink('/lnPlatformTransferBill/index') && 'active'" @click="toLinks('/lnPlatformTransferBill/index')">
            <img class="Icon" src="../assets/images/giftShop.png" alt="img">
            <span class="functions">平台内转账单</span>
          </li>
        </ul>
      </el-scrollbar>
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
    },
    isSelfLink(link) {
      return this.$route.path == link
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