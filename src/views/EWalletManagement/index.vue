<template>
 <div class="content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="EWalletManagement">电子钱包管理</span>
          <span class="platform">
            <el-select v-model="value" placeholder="A.珠宝门店（一号一店）">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </span>
        </div>
      </el-col>
    </el-row>
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
            <el-button type="primary" class="openEWallet">开通电子钱包</el-button>
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
            <i class="el-icon-info"></i>
            <span class="EwalletOpening">电子钱包开通中！</span>
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
            <el-button type="primary" class="reopen">重新开通</el-button>
          </span> 
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="ReloginLayout">
      <el-row>
        <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="inputBox">
            <i class="el-icon-info"></i>
            <span class="EWalletIsOpen">电子钱包已开通！</span>
            <span class="systemLogin">
              （开通后需要重新登录一下系统！）
            </span>
            <el-button type="primary" class="logInSystem">重新登录系统</el-button>
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
            <span class="LockBalance">锁定：￥0</span>
          </div>
        </div>
        <div class="rechargeSystem">
          <div class="recharge">充值</div>
          <div class="withdraw">提现</div>
          <div class="accountFlow">账户流水</div>
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
          <div class="operationRecharge">充值</div>
          <div class="operationAccountFlow">账户流水</div>
        </div>        
      </div>
    </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      options: [{
        value: '选项1',
        label: 'A.珠宝门店（一号一店）'
      }, {
        value: '选项2',
        label: 'B.珠宝公司（一号一店）'
      }, {
        value: '选项3',
        label: 'C.珠宝门店（一号多店）（同B）'
      }, {
        value: '选项4',
        label: 'D.珠宝公司（一号多店）（同A）'
      }, {
        value: '选项5',
        label: 'G.礼品供应商（同B）'
      }, {
        value: '选项6',
        label: 'Z.平台）'
      }]
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
  background: #d9e2e8;
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
  color: green;
}
.nonactivated{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .unopenedWallet{
      color: green;
    }
    .supportCollectionCommentary{
      color: dimgray;
    }
  }
  .openEWallet{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
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
      color: green;
    }
    .pendingReviewAfterOpening{
      color: dimgray;
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
  }
}
.reopenLayout{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .walletFailedToOpen{
      color: green;
    }
    .causeOfFailure{
      color: dimgray;
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
  }
}
.ReloginLayout{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .EWalletIsOpen{
      color: green;
    }
    .systemLogin{
      color: red;
    }
  }
  .grid-content {
  min-height: 50px;
  }
  .logInSystem{
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border-radius: 4px;
  }
}
.alreadyOpened{
  margin-top: 20px;
  line-height: 4em;
  .inputBox{
    padding-left: 10px;
    .supportDirectDeposit{
      color: green;
    }
    .delayedRefresh{
      color: dimgray;
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
  }
}
.leftAndRightLayout{
  .leftLayout{
  width: 501px;
  height: 195px;
  background-color: rgba(0, 153, 0, 1);
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
        background-color: rgba(0, 102, 0, 1);
        color: #FFFFFF;
        line-height: 4em;
      }
      .withdraw{
        width: 166px;
        height: 48px;
        float: left;
        background-color: rgba(0, 102, 0, 1);
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 1px;
      }
      .accountFlow{
        width: 166px;
        height: 48px;
        float: left;
        background-color: rgba(0, 102, 0, 1);
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 1px;
      }
    }
  }
  .rightLayout{
    width: 501px;
    height: 195px;
    background-color: #00cc00;
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
      color: #ff0000;
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
        background-color: rgba(0, 153, 0, 1);
        color: #FFFFFF;
        line-height: 4em;
      }
      .operationAccountFlow{
        width: 249px;
        height: 48px;
        float: left;
        background-color: rgba(0, 153, 0, 1);
        color: #FFFFFF;
        line-height: 4em;
        margin-left: 2px;
      }
    }
  }
}   
</style>