<template>
  <div class="economy">
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
  </div> 
</template>
<script>
export default {
  props: {
		basic: {
			type: Boolean,
			default: false
    }
  },
  data() {
    return {
      input: '',
      transfer: '线下转账',
      radio: '1',
      radios: '1'
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
<style lang="scss" scoped>
.bankCardLayout{
  margin-top: 10px;
  .bankAccounts{
    width: 100%;
    height: 195px;
    border: 1px solid #e5e5e5;
    .walletAccount{
      height: 32px;
      color: #333333;
      font-size: 14px;
      font-weight: 600;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
      padding-left: 20px;
      line-height: 2.5em;
    }
    .accountName1{
      color: #777777;
      padding-left: 20px;
      padding-top: 15px;
      font-size: 14px;
      width: 200px;
      display: inline-block;
    }
    .accountName2{
      color: #333333;
      font-size: 14px;
    }
    .accountNumber1{
      width: 200px;
      display: inline-block;
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
    }
    .accountNumber2{
      font-size: 14px;
      color: #333333;
    }
    .branchNumber1{
      width: 200px;
      display: inline-block;
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
    }
    .branchNumber2{
      font-size: 14px;
      color: #333333;
    }
    .branchName1{
      width: 200px;
      display: inline-block;
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
    }
    .branchName2{
      color: #333333;
      font-size: 14px;
    }
  }
  .withdrawalBankAccount{
    width: 100%;
    height: 195px;
    border: 1px solid #e5e5e5;
    .withdrawal{
      border-bottom: 1px solid #e5e5e5;
      .withdrawalBank{
      height: 32px;
      color: #333333;
      font-size: 14px;
      font-weight: 600;
      background-color: #f5f5f5;
      padding-left: 20px;
      line-height: 2.5em;
      }
     .replace{
      font-size: 14px;
      color: #169BD5;
      float: right;
      line-height: 2.5em;
      margin-right: 10px;
      }
    }
    .withdrawName{
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 15px;
      width: 200px;
      display: inline-block;
    }
    .withdrawName2{
      color: #333333;
      font-size: 14px;
    }
    .withdrawNumber{
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      width: 200px;
      display: inline-block;
    }
    .withdrawNumber2{
      color: #333333;
      font-size: 14px;
    }
    .cardNumber{
      font-size: 14px;
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      width: 200px;
      display: inline-block;
    }
    .cardNumber2{
      color: #333333;
      font-size: 14px;
    }
    .accountOpening{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      width: 200px;
      display: inline-block;
    }
    .accountOpening2{
      color: #333333;
      font-size: 14px;
    }
  }
  .addBankAccount{
    width: 100%;
    height: 195px;
    border: 1px solid #e5e5e5;
    .addWithdrawalBank{
      height: 32px;
      color: #333333;
      font-size: 12px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
      padding-left: 20px;
      line-height: 2.5em;
    }
    .addTo{
      font-size: 12px;
      color: #1f91df;
      text-align: center;
      line-height: 12em;
    }
  }
} 
.poPupWindow{
  .relatedInformation{
    color: #999999;
    font-size: 12px;
  }
}
.economy{
  margin-left: 30px;
  .rechargePopup{
    width: 428px;
    height: 300px;
  }
  .transfer{
    float: left;
    width: 214px;
    height: 56px;
  }
  .pay{
    float: left;
    margin: 0px;
    border-left: none;
    width: 214px;
    height: 56px;
  }
  .rechargePopup{
    border: 1px solid #e5e5e5;
  }
  .DepositInto{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
  .accountName{
    float: left;
    margin-left: 103px;
    margin-top: 38px;
  }
  .accountNumber{
    float: left;
    margin-top: 10px;
    margin-left: 47px;
  }
  .branchNumber{
    float: left;
    margin-top: 10px;
    margin-left: 60px;
  }
  .branchName{
    float: left;
    margin-top: 10px;
    margin-left: 45px;
  }
}
.onlineTransaction{
  width: 428px;
  height: 300px;
  border: 1px solid #e5e5e5;
  .aggregate{
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
    }
  }
}
</style>>