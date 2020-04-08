<template>
  <el-dialog  title="充值" :visible="basic" :before-close="rechargeClose">
    <div class="OfflineTransfer">
      <el-button class="transfer" @click="Offline">
        <div class="Offline" >线下转账</div>
        <div class= "Offline1">(推荐，无服务费)</div>
      </el-button>
      <el-button class="pay" @click="amount">在线支付</el-button>
    </div>
    <div class="rechargePopup"  v-if="transfer == '线下转账'">
      <div class="DepositInto">
        您可以通过柜台转账、网银、支付宝等直接存入您的电子账户中！
      </div>
      <div class="accountName">
        <span class="accountName1">户名：</span>
        <span class="accountName2">xxxxxxxxxxxxxxxxxxxxxxx</span>
      </div>
      <div class="accountNumber">
        <span class="accountNumber1">银行电子账号：</span>
        <span class="accountNumber2">1234 5678 1234 5678</span>
      </div>
      <div class="branchNumber">
        <span class="branchNumber1">归属支行号：</span>
        <span class="branchNumber2">304100040018</span>
      </div>
      <div class="branchName">
        <span class="branchName1">归属支行名称：</span>
        <span class="branchName2">华夏银行北京和平门支行</span>
      </div>
    </div>
    <div class="onlineTransaction" v-if="transfer == '在线支付'">
      <div class="aggregate">
        <div class="whole">
          <span class="amount">充值金额：</span>
          <el-input class="amount1" v-model="input"></el-input>
          <span class="amount2">元，只能充值整数，最低充值2000元</span>
        </div>
        <div class="money">
          <el-radio v-model="radio" label="1">5000</el-radio>
          <el-radio v-model="radio" label="2">10000</el-radio>
          <el-radio v-model="radio" label="3">20000</el-radio>
          <el-radio v-model="radio" label="4">50000</el-radio>
          <el-radio v-model="radio" label="5">100000</el-radio>
        </div>
        <div class="paymentMethod">
          <span class="Method">支付方式：</span>
          <el-radio v-model="radios" label="1">微信</el-radio>
          <el-radio v-model="radios" label="2">支付宝</el-radio>
          <el-radio v-model="radios" label="3">企业网银</el-radio>
          <el-radio v-model="radios" label="4">个人网银</el-radio>
          <div class="serviceFee">额外扣除<span class="countOff">￥50.00</span> 服务费（费率0.5%）</div>
          <el-button type="primary" class="immediately">立即支付</el-button>
        </div>
      </div>
    </div>
  </el-dialog>  
</template>
<script>
export default {
  props: {
		topUp: {
			type: Boolean,
			default: false
    }
  },
  data() {
    return {
      transfer: '线下转账'
    }
  },
  methods: {
    Offline() {
      if (this.transfer == '在线支付') {
        this.transfer = '线下转账'
      }
    },
    amount() {
      if (this.transfer == '线下转账') {
        this.transfer = '在线支付'
      }
    },
    rechargeClose() {
			this.$emit('rechargeCl', false)
    }
  }
}
</script>>
<style lang="sess" scoped>

</style>>