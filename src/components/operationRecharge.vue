<template>
  <div class="operationTopUp">
    <el-dialog  title="充值" :visible="operationTopUp" :before-close="rechargeClose">
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
        <el-radio v-model="radios" label="1">电子钱包（基本户）</el-radio>
        <div class="available">可用金额<span class="countOff">￥10000.00</span></div>
        <el-button type="primary" class="immediately" @click="immediately">立即支付</el-button>
        <el-button class="cancel" @click="recharge">取消</el-button>
      </div>
    </el-dialog>  
  </div>
</template>
<script>
export default {
  props: {
    operationTopUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radio: '1',
      radios: '1',
      input: ''
    }
  },
  methods: {
    rechargeClose() {
      this.$emit('recharge', false)
    },
    recharge() {
      this.$emit('rechargeCancellation', false)
    },
    immediately() {
      this.$emit('payImmediately', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.operationTopUp{
  float: left;
  margin-top: 30px;
  margin-left: 10px;
  .amount1{
    width: 100px;
  }
  .money{
    margin-left: 72px;
    margin-top: 10px;
  }
  .paymentMethod{
    margin-top: 10px;
    .serviceFee{
      margin-top: 5px;
      text-align: center;
      .countOff{
        color: #00cc00;
      }
    }
    .immediately{
      width: 100px;
      border-radius: 3px;
      margin-left: 88px;
      margin-top: 20px;
    }
    .cancel{
      width: 100px;
      border-radius: 3px;
    }
  }
}
</style>>