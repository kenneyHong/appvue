<template>
 <div class="content">
    <div class="nonactivated bg-purple-dark" v-if="status.WalletState == 1">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class="el-icon-info"></i>
          <span class="unopenedWallet"> 您尚未开通电子钱包！</span>
          <span class="pendingReviewAfterOpening">
            （开通后支持微信和支付宝收款，服务费低至0.5%，支持提现、礼品商城充值、系统续费等）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet" @click="turnOff = true">开通电子钱包</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="nonactivated bg-purple-dark" v-if="status.WalletState == 3">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class  ="el-icon-info"></i>
          <span class="EwalletOpening" 
          >电子钱包开通中！</span>
          <span class="pendingReviewAfterOpening">
            （正在开通，请稍候刷新重试或联系客服）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet" @click="getStatus">刷新</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="nonactivated bg-purple-dark" v-if="status.WalletState == 9">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class="el-icon-info"></i>
          <span class="walletFailedToOpen">电子钱包开通失败！</span>
          <span class="pendingReviewAfterOpening">
            （失败原因失败原因失败原因...）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet"  @click="turnOff = true">重新开通</el-button></div>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="nonactivated bg-purple-dark">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class  ="el-icon-info"></i>
          <span class="electronicsIsOn" 
          >电子钱包已开通！</span>
          <span class="reRegister">
            （开通后需要重新登录一下系统！）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet" @click="logInSystem">重新登录系统</el-button></div>
        </el-col>
      </el-row>
    </div> -->
    <div class="nonactivated bg-purple-dark" v-if="status.WalletState == 5">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class="el-icon-info"></i>
          <span class="supportDirectDeposit">电子钱包账户支持柜台转账、网银、支付宝等直接存入！</span>
          <span class="pendingReviewAfterOpening">
            （存入后余额显示可能会有延迟，请手工刷新余额）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet">刷新余额</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="leftAndRightLayout" v-if="status.WalletState == 5">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="leftLayout">
            <div class="availableNumber">
              <div class="number">￥50,000.00</div>
              <div class="balance">基本户余额</div>
              <div class="available">    
                <span class="basicallyAvailable">可用：￥50000.00</span>
                <span class="LockBalance">锁定：￥3000.00</span>
              </div>
            </div>
            <div class="rechargeSystem">
              <div class="recharge"><el-button type="warning" @click="basic = true">充值</el-button></div>
              <div class="withdraw" @click="withdraw = true"><el-button>提现</el-button></div>
              <div class="accountFlow" @click="accountFlow = true"><el-button >账户流水</el-button></div>
            </div>       
          </div>
        </el-col>
        <el-col :span="12">
          <div class="rightLayout">
            <div class="operationBorder">
              <div class="NumberOfOperations">￥80,000.00</div>
              <div class="operatingAccount">运营户余额</div>
              <div class="consumerBill">    
                <span class="available1">可用：￥50000.00</span>
                <span class="lockedAmount">锁定：￥30000.00</span>
                <span class="averageConsumption"> 近30天日均消费：￥1000.00</span>
              </div>
              <div class="sufficientBalance">(用于与礼品供应商结算等，请保证余额充足)</div>
            </div>
            <div class="operationRechargeSystem">
              <div class="operationRecharge" @click="operationTopUp = true"><el-button type="warning">充值</el-button></div>
              <div class="operationAccountFlow" @click="operationAccountFlow"><el-button>账户流水</el-button></div>
            </div>        
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bankCardLayout" v-if="status.WalletState == 5">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="bankAccounts">
            <div class="walletAccount">电子钱包账户</div>
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
        </el-col>
        <el-col :span="12">
         <div class="withdrawalBankAccount" v-if="status.EwalletCashbindState == 3">
            <div class="withdrawal">
              <span class="withdrawalBank">提现银行钱包账户</span>
              <span class="replace" @click="replace = true">更换</span>
            </div>
            <div class="withdrawName">
              <span class="withdrawName1">户名：</span>
              <span class="withdrawName2">xxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="withdrawNumber">
              <span class="withdrawNumber1">银行：</span>
              <span class="withdrawNumber2">1234 5678 1234 5678</span>
            </div>
            <div class="cardNumber">
              <span class="cardNumber1">卡号：</span>
              <span class="cardNumber2">304100040018</span>
            </div>
            <div class="accountOpening">
              <span class="accountOpening1">开户网点：</span>
              <span class="accountOpening2">华夏银行北京和平门支行</span>
            </div>
          </div>
          <div class="addBankAccount" v-if="status.EwalletCashbindState == 1">
            <div class="addWithdrawalBank">提现银行账户</div>
            <div class="addTo"  @click="replace = true"><i class="el-icon-plus"></i>添加提现银行卡</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class= "accountFlowPopups">
      <el-dialog title="账户流水" :visible.sync="accountFlow" width="80%">
        <div class="AccountFlow">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="时间：" label-width="120px">
              <el-date-picker
                v-model="form.time"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="来源：">
              <el-select v-model="formInline.source" placeholder="全部">
                <el-option label="全部" value="all1"></el-option>
                <el-option label="提现" value="withdraw"></el-option>
                <el-option label="零售单" value="retailOrder"></el-option>
                <el-option label="充值" value="recharge"></el-option>
                <el-option label="SaaS订单" value="SaaSOrders"></el-option>
                <el-option label="短信充值" value="SMSTopup"></el-option>
                <el-option label="科技院订单" value="academyOrder"></el-option>
                <el-option label="定制单" value="customOrder"></el-option>
                <el-option label="转账" value="transfer"></el-option>
                <el-option label="零售退货单" value="retailReturn"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <el-table
          :data="tableData"
          border>
          <el-table-column
            prop="serialNumber"
            label="交易流水号"
            min-width="120">
          </el-table-column>
          <el-table-column
            prop="creationTime"
            sortable
            label="操作时间"
            width='150'>
          </el-table-column>
          <el-table-column
            prop="incomeAndExpenses"
            label="收入/支出"
            width="120">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="accountBalance"
            label="账户余额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="region1"
            label="来源"
            width="120">
          </el-table-column>
          <el-table-column
            prop="relatedDocuments"
            label="相关单据"
            width="150">
          </el-table-column>
          <el-table-column
            prop="transactionAmount"
            label="交易金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="serviceFee"
            label="服务费"
            width="120">
          </el-table-column>
          <el-table-column
            prop="operator"
            label="操作人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Note"
            label="备注"
            width="120">
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="slot, prev, pager, next "
            :page-size="20"
            :total="200"
            style="display: inline-block;padding-right: 0px;">
            <el-button>首页</el-button>
          </el-pagination>
          <el-pagination layout="slot" style="display: inline-block;padding-right: 0px;">
            <el-button>末页</el-button>
          </el-pagination>
        </div>
      </el-dialog>
    </div>
    <el-dialog  title="手机验证码" :visible.sync="nextStep">
      <div class="phoneVerification">
        <div class="Verification">
          系统已经发送一条验证码到您提现卡绑定的手机138*****123，用于验证！
        </div>
        <div class="receivedVerificationCode">
          <span class="verificationCode">请录入收到的验证码：</span>
          <el-input class="InputBox" v-model="verificationCode"></el-input>
        </div>
        <div class="submit">
          <el-button type="primary" class="submit1" @click="nextStep = false">提交</el-button>
          <el-button  class="cancel" @click="nextStep = false">取消</el-button>
        </div>
      </div>
    </el-dialog>
    <openWallet :openEwallet="turnOff" @open="open" @openEwallet="cancel" @identify="determine"></openWallet>
    <rechargeClose @rechargeCl="pass" :basic="basic"></rechargeClose>
    <withdrawPopup :withdraw="withdraw" @recharge="shutDown" @withdraw="confirmWithdrawal"></withdrawPopup>
    <operationRecharge :operationTopUp="operationTopUp" @recharge="rechargeClosed" @rechargeCancellation="recharge" @payImmediately="immediately"></operationRecharge>
    <withdrawBankPopup :replace="replace" @Card="withdrawalCard" @doAwayWith="abolish" @pace="nextSteps"></withdrawBankPopup>
  </div>
</template>
<script>
import openWallet from '@/components/openWallet.vue'
import rechargeClose from '@/components/rechargeClose.vue'
import withdrawPopup from '@/components/withdrawPopup.vue'
import operationRecharge from '@/components/operationRecharge.vue'
import withdrawBankPopup from '@/components/withdrawBankPopup.vue'
import { EwalletMasterState, EwalletCashbindState } from '@/enums/index.js'
import { USERS_API_GETSTATE, CLEARING_API_OPENACCOUNTWALLET, CLEARING_API_BINDBANKCARD } from '@/apis/user.js'
export default {
  data() {
    return {
      EwalletMasterStates: EwalletMasterState,
      EwalletCashbindState: EwalletCashbindState,
      turnOff: false,
      basic: false,
      withdraw: false,
      form: {
        time: '',
        mosquitoNet: '',
        cardNumber: '',
        reservePhone: '',
        accountOpening: '',
        bank: ''
      },
      formInline: {
        all1: '',
        withdraw: '',
        retailOrder: '',
        SaaSOrders: '',
        SMSTopup: '',
        academyOrder: '',
        customOrder: '',
        transfer: '',
        retailReturn: '',
        bank: '',
        accountOpening: ''
      },
      tableData: [{
        serialNumber: '',
        creationTime: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }, {
        serialNumber: '',
        creationTime: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }, {
        serialNumber: '',
        creationTime: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }],
      verificationCode: '',
      nextStep: false,
      dialogTableVisible: false,
      RechargePopup: false,
      accountFlow: false,
      operationTopUp: false,
      replace: false,
      amountReceived: '',
      status: {}
    }
  },
  methods: {
    operationAccountFlow() {
      this.$router.push('/operatorsFlow/index')
    },
    logInSystem() {
      this.$router.push('/login')
    },
    open() {
      this.turnOff = false
    },
    cancel() {
      this.turnOff = false
    },
    determine(receive, gain) {
      this.ruleForm = gain
      this.openWallet()
      this.turnOff = false
    },
    pass() {
      this.basic = false
    },
    shutDown() {
      this.withdraw = false
    },
    confirmWithdrawal() {
      this.withdraw = false
    },
    rechargeClosed() {
      this.operationTopUp = false
    },
    recharge() {
      this.operationTopUp = false
    },
    immediately() {
      this.operationTopUp = false
    },
    withdrawalCard() {
      this.replace = false
    },
    nextSteps(letter, envelope) {
      this.replace = false
      this.CardStatus()
      this.form = envelope
      console.log(envelope)
    },
    abolish() {
      this.replace = false
    },
    getStatus() {
      USERS_API_GETSTATE().then(res => {
        this.status = res.Data
      })
    },
    openWallet() {
      CLEARING_API_OPENACCOUNTWALLET(this.ruleForm).then(res => {
        this.getStatus()
      })
    },
    CardStatus() {
      CLEARING_API_BINDBANKCARD(this.form).then(res => {

      })
    }
  },
  mounted() {
    this.getStatus()
  },
  components: {
    openWallet,
    rechargeClose,
    withdrawPopup,
    operationRecharge,
    withdrawBankPopup
  }
}
</script>
<style lang="scss" scoped>
el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #faf7e3;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
min-height: 36px;
}
.row-bg {
padding: 0;
background-color: #f9fafc;
}
.EWalletManagement {
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
  width: 77%;
}
.el-icon-info{
  color: #da0000;
}
.nonactivated{
  margin-top: 20px;
  line-height: 4em;
  padding-left: 10px;
  padding-right: 10px;
  .inputBox{
    padding-left: 10px;
    .unopenedWallet{
      color: #333333;
      padding-left: 10px;
    }
    .supportCollectionCommentary{
      color: #999999;
    }
  }
  .openEWallet{
    height: 30px;
    border-radius: 4px;
  }
  .grid-content {
    min-height: 50px;
  }
  .pendingReviewAfterOpening{
    color: #999999; 
  }
  .reRegister{
    color: #da0000;
  }
}
.leftAndRightLayout{
  .leftLayout{
  width: 100%;
  height: 195px;
  background-color: #5873ff;
  margin-top: 10px;
  text-align: center;
  float: left;
  line-height: 28px;
  padding-top: 28px;
    .availableNumber{
      color: #FFFFFF;
      .LockBalance{
        margin-left: 20px;
      }
      .number{
      font-size: 28px;
      }
      .balance{
        font-size: 14px;
      }
      .available{
        font-size: 14px;
      }
    }
    .rechargeSystem{
      margin-top: 34px;
      .recharge{
        width: 33.2%;
        height: 48px;
        float: left;
        background-color: #4a61d6;
        color: #FFFFFF;
        line-height: 4em;
        .el-button{
          background-color: #ffa200;
        }
      }
      .withdraw{
        width: 33.1%;
        height: 48px;
        float: left;
        background-color: #4a61d6;
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 1px;
      }
      .accountFlow{
        width: 33.2%;
        height: 48px;
        float: left;
        background-color: #4a61d6;
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 1px;
      }
    }
  }
  .rightLayout{
    width: 100%;
    height: 195px;
    background-color: #e79300;
    margin-top: 10px;
    text-align: center;
    float: left;
    line-height: 28px;
    padding-top: 28px;
    .operationBorder{
      color: #FFFFFF;
    }
    .NumberOfOperations{
      font-size: 28px;
    }
    .consumerBill{
      font-size: 14px;
    }
    .averageConsumption{
      font-size: 14px;
    }
    .sufficientBalance{
      font-size: 14px;
    }
    .lockedAmount{
      margin-left: 5px;
    }
    .averageConsumption{
      margin-left: 5px;
    }
    .operationRechargeSystem{
      margin-top: 6px;
      .operationRecharge{
        width: 49.7%;
        height: 48px;
        float: left;
        background-color: #c57d00;
        color: #FFFFFF;
        line-height: 4em;
        .el-button{
          background-color: #ffa200;
        }
      }
      .operationAccountFlow{
        width: 49.8%;
        height: 48px;
        float: left;
        background-color: #c57d00;
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 2px;
      }
    }
  }
}
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
.phoneVerification{
  .receivedVerificationCode{
    margin-top: 20px;
    .verificationCode{
      float: left;
    }
    .InputBox{
      width: 150px;
    }
  }
  .submit{
    margin-top: 20px;
    margin-left: 50px;
    .submit1{
      width: 100px;
      border-radius: 3px;
    }
    .cancel{
      width: 100px;
      border-radius: 3px;
    }
  }
}
</style>