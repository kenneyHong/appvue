<template>
  <div class="cardTied">
    <el-dialog  title="账户提现" :visible="withdraw" :before-close="rechargeClose">
      <div class="debitCard">
        <span class="debitCard1">到账银行卡：</span>
        <span class="debitCard2">XXXXX银行（1008）</span>
        <span class="replace" @click="replace = true">更换</span>
      </div>
      <div class="arrivalTime">
        <span class="arrivalTime1">到账时间：</span>
        <span class="nextWorkingDay">下一工作日14:00-15:00</span>
      </div>
      <div class="withdrawalAmount">
        <span class="withdrawalAmount1">提现金额：</span>
        <span class="yuan"><el-input  class="quota" v-model="withdrawalAmount"></el-input> 元</span>
      </div>
      <div class="amountAvailable">账户可用金额 <span class="quotaColor">￥10000.00</span></div>
      <div class="serviceFee">额外扣除<span class="quotaColor"> ￥10.00 </span>服务费（5万以内每笔10元，5万以上每笔20元）</div>
      <div class="withdrawSubmission">
        <el-button type="primary" class="confirmWithdrawal"  @click="confirmWithdrawal">确定提现</el-button>
      </div>
    </el-dialog>  
  </div>
  <!--<el-dialog title="提现卡验证" :visible.sync="nextStep">
    <div class="accountTypeIsInUnits">
      <div class="Precautions">
        <span class="Precautions1">系统已经自动转入一定的金额到您的提现卡，用于验证！</span>
        <span class="Precautions2">到账时间可能有延迟，可以稍候录入，3天内录入有效！</span>
      </div>
      <div class="entryAmount">
        <span class="amountReceived">请录入收到的金额：</span>
        <el-input  class="quota" v-model="amountReceived"></el-input> 
      </div>
      <div class="reTieTheCard">3次错误需要重新绑卡</div>
      <div class="submit">
        <el-button type="primary" class="submit1" @click="nextStep = false">提交</el-button>
        <el-button  class="unbindCard" @click="nextStep = false">取消绑卡</el-button>
        <el-button class="processLater" @click="nextStep = false">稍后处理</el-button>
      </div>
    </div>
  </el-dialog>-->
</template>
<script>
export default {
  props: {
		withdraw: {
			type: Boolean,
			default: false
    }
  },
  data() {
    return {
      withdrawalAmount: ''
    }
  },
  methods: {
    rechargeClose() {
      this.$emit('recharge', false)
    },
    confirmWithdrawal() {
      this.$emit('withdraw', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.cardTied{
  font-size: 15px;
  .replace{
    color: #169BD5;
  }
  .debitCard2{
    margin-left: 20px;
  }
  .replace{
    margin-left: 10px;
  }
  .arrivalTime{
    margin-top: 10px;
  }
  .nextWorkingDay{
    margin-left: 30px;
  }
  .quota{
    width: 150px;
  }
  .quotaColor{
    color: #00cc00;
  }
  .withdrawalAmount{
    margin-top: 10px;
    .yuan{
      margin-left: 30px;
    }
  }
  .withdrawSubmission{
    margin-top: 20px;
    margin-left: 100px;
    .confirmWithdrawal{
      width: 100px;
      border-radius: 3px;
    }
  }
  .amountAvailable{
    margin-top: 10px;
    margin-left: 103px;
    font-size: 12px;
  }
  .serviceFee{
    margin-left: 102px;
    font-size: 12px;
  }
}
.accountTypeIsInUnits{
  .entryAmount{
    .quota{
      width: 180px;
    }
  }
  .reTieTheCard{
    color: #ff0000;
    margin-left: 138px;
    font-size: 12px;
  }
  .submit{
    margin-top: 20px;
    margin-left: 10px;
    .submit1{
      width: 100px;
      border-radius: 3px;
    }
    .unbindCard{
      width: 100px;
      border-radius: 3px;
    }
    .processLater{
      width: 100px;
      border-radius: 3px;
    }
  }
  .Precautions{
    margin-left: 10px;
  }
  .entryAmount{
    margin-left: 10px;
    margin-top: 10px;
  }
}
</style>