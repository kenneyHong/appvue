<template>
 <div class="content">
    <div class="nonactivated">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="inputBox">
            <i class="el-icon-info"></i>
            <span class="unopenedWallet"> 您尚未开通电子钱包！</span>
            <span class="supportCollectionCommentary">
              （开通后支持微信和支付宝收款，服务费低至0.5%，支持提现、礼品商城充值、系统续费等）
            </span>
            <el-button type="primary" class="openEWallet" @click="dialogTableVisible = true">开通电子钱包</el-button>
          </span> 
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="opening">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="inputBox">
            <i class  ="el-icon-info"></i>
            <span class="EwalletOpening" 
            >电子钱包开通中！</span>
            <span class="pendingReviewAfterOpening">
              （正在开通，请稍候刷新重试或联系客服）
            </span>
            <el-button type="primary" class="refresh">刷新</el-button>
          </span> 
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="reopenLayout">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="inputBox">
            <i class="el-icon-info"></i>
            <span class="walletFailedToOpen">电子钱包开通失败！</span>
            <span class="causeOfFailure">
              （失败原因失败原因失败原因...）
            </span>
            <el-button type="primary" class="reopen"  @click="dialogTableVisible = true">重新开通</el-button>
          </span> 
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="alreadyOpened">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="inputBox">
            <i class="el-icon-info"></i>
            <span class="supportDirectDeposit">电子钱包账户支持柜台转账、网银、支付宝等直接存入！</span>
            <span class="delayedRefresh">
              （存入后余额显示可能会有延迟，请手工刷新余额）
            </span>
            <el-button type="primary" class="refreshBalance">刷新余额</el-button>
          </span> 
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="leftAndRightLayout">
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
          <div class="recharge"><el-button type="warning">充值</el-button></div>
          <div class="withdraw"><el-button>提现</el-button></div>
          <div class="accountFlow"><el-button>账户流水</el-button></div>
        </div>       
      </div>
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
          <div class="operationRecharge"><el-button type="warning">充值</el-button></div>
          <div class="operationAccountFlow"><el-button>账户流水</el-button></div>
        </div>        
      </div>
    </div>
    <div class="bankCardLayout">
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
      <div class="withdrawalBankAccount">
        <div class="withdrawalBank">提现银行钱包账户</div>
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
      <div class="addBankAccount">
        <div class="addWithdrawalBank">提现银行账户</div>
        <div class="addTo"><i class="el-icon-plus"></i>添加提现银行卡</div>
      </div>
    </div>
    <div class="poPupWindow"> 
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="118px" class="demo-ruleForm" >
        <el-dialog title="开通电子钱包" :visible.sync="dialogTableVisible">
          <el-form-item label="*账户类型：">
            <el-radio-group v-model="ruleForm.accountType">
              <el-radio class="personalInformation"  label="公司"></el-radio>
              <el-radio class="personalInformation"  label="个人"></el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="the company" v-if="ruleForm.accountType == '公司'">
            <el-form-item label="*户名：">
              <el-input v-model="ruleForm.accountName"></el-input>
              <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
            </el-form-item>
            <el-form-item label="*统一社会信用代码：">
              <el-input v-model="ruleForm.creditCode"></el-input>
            </el-form-item>
            <el-form-item label="*法定代表人姓名：">
              <el-input v-model="ruleForm.legalName"></el-input>
            </el-form-item>
            <el-form-item label="*法定代表人身份证：">
              <el-input v-model="ruleForm.legalIdentityCard"></el-input>
            </el-form-item>
            <el-form-item label="*手机号码：">
              <el-input v-model="ruleForm.mobilePhone"></el-input>
            </el-form-item>
            <el-form-item label="*邮箱：">
              <el-input v-model="ruleForm.mailbox"></el-input>
            </el-form-item>
            <el-form-item label="*所属区域：">
              <el-cascader
                :options="options"
                :props="{ multiple: true,checkStrictly: true }"
                clearable>
              </el-cascader>
            </el-form-item>
            <el-form-item label="*详细地址：">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </div>
          <div class="personal" v-if="ruleForm.accountType == '个人'" >
            <el-form-item label="*户名：">
              <el-input v-model="ruleForm.accountName1"></el-input>
              <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
            </el-form-item>
            <el-form-item label="*身份证号码：">
              <el-input v-model="ruleForm.identityCard1"></el-input>
            </el-form-item>
            <el-form-item label="*手机号码：">
              <el-input v-model="ruleForm.mobilePhone1"></el-input>
              <span class="reservedNumber">（必须为提现银行卡预留的手机，否则无法提现）</span>
            </el-form-item>
            <el-form-item label="*邮箱：">
              <el-input v-model="ruleForm.mailbox1"></el-input>
            </el-form-item>
          </div>
          <div class="submit">
            <el-button type="primary"class="searchFor" >确定</el-button>
            <el-button class="reset">取消</el-button>
          </div>
        </el-dialog>
      </el-form>  
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      ruleForm: {
        accountType: '',
        accountName: '',
        creditCode: '',
        legalName: '',
        legalIdentityCard: '',
        mobilePhone: '',
        mailbox: '',
        address: '',
        accountName1: '',
        identityCard1: '',
        mobilePhone1: '',
        mailbox1: ''
      },
      options: [{
        value: 'shen',
        label: '省',
        children: [{
          value: 'guangdongshen',
          label: '广东省'
        }]
      }, {
        value: 'shi',
        label: '市',
        children: [{
          value: 'shentoushi',
          label: '汕头市'
        }]
      }, {
        value: 'quexian',
        label: '区/县',
        children: [{
          value: 'chaoyang',
          label: '潮阳区'
        }]
      }],
      rules: {
        accountType: [
          { accountType: true, message: '请选择活动资源', trigger: 'change' }
        ]
      }
    }
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
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
    margin-left: 32%;
  }
  .grid-content {
  min-height: 50px;
  }
}
.opening{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .EwalletOpening{
      color:  #333333;
      padding-left: 10px;
    }
    .pendingReviewAfterOpening{
      color: #999999; 
    }
  }
  .grid-content {
  min-height: 50px;
  }
  .refresh{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
    margin-left: 57.4%;
  }
}
.reopenLayout{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .walletFailedToOpen{
       padding-left: 10px;
      color: #333333;
    }
    .causeOfFailure{
      color: #999999;
    }
  }
  .grid-content {
  min-height: 50px;
  }
  .reopen{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
    margin-left: 60.9%;
  }
}
.alreadyOpened{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .supportDirectDeposit{
      padding-left: 10px;
      color: #333333;
    }
    .delayedRefresh{
      color: #999999;
    }
  }
  .grid-content {
  min-height: 50px;
  }
  .refreshBalance{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
    margin-left: 35.7%;
  }
}
.leftAndRightLayout{
  .leftLayout{
  width: 501px;
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
        width: 166px;
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
        width: 166px;
        height: 48px;
        float: left;
        background-color: #4a61d6;
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 1px;
      }
      .accountFlow{
        width: 166px;
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
    width: 501px;
    height: 195px;
    background-color: #e79300;
    margin-top: 10px;
    text-align: center;
    float: left;
    line-height: 28px;
    padding-top: 28px;
    margin-left: 61px;
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
        width: 249px;
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
        width: 249px;
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
  float: left;
  margin-top: 10px;
  .bankAccounts{
    float: left;
    width: 320px;
    height: 180px;
    border: 1px solid #e5e5e5;
    .walletAccount{
      height: 32px;
      color: #333333;
      font-size: 12px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
      padding-left: 20px;
      line-height: 2.5em;
    }
    .accountName{
      color: #777777;
      padding-left: 20px;
      padding-top: 15px;
      .accountName2{
        color: #333333;
        margin-left: 20%;
      }
    }
    .accountNumber{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .accountNumber2{
        color: #333333;
        margin-left: 4%;
      }
    }
    .branchNumber{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .branchNumber2{
        color: #333333;
        margin-left: 8%;
      }
    }
    .branchName{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .branchName2{
        color: #333333;
        margin-left: 4%;
      }
    }
  }
  .withdrawalBankAccount{
    float: left;
    margin-left: 10px;
    width: 320px;
    height: 180px;
    border: 1px solid #e5e5e5;
    .withdrawalBank{
      height: 32px;
      color: #333333;
      font-size: 12px;
      background-color: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
      padding-left: 20px;
      line-height: 2.5em;
    }
    .withdrawName{
      color: #777777;
      padding-left: 20px;
      padding-top: 15px;
      .withdrawName2{
        color: #333333;
        margin-left: 10%;
      }
    }
    .withdrawNumber{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .withdrawNumber2{
        color: #333333;
        margin-left: 10%;
      }
    }
    .cardNumber{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .cardNumber2{
        color: #333333;
        margin-left: 10%;
      }
    }
    .accountOpening{
      color: #777777;
      padding-left: 20px;
      padding-top: 10px;
      .accountOpening2{
        color: #333333;
        margin-left: 2%;
      }
    }
  }
  .addBankAccount{
    float: left;
    margin-left: 10px;
    width: 320px;
    height: 180px;
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
</style>