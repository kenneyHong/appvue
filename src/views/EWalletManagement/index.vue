<template>
 <div class="content">
    <div class="nonactivated bg-purple-dark">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class="el-icon-info"></i>
          <span class="unopenedWallet"> 您尚未开通电子钱包！</span>
          <span class="pendingReviewAfterOpening">
            （开通后支持微信和支付宝收款，服务费低至0.5%，支持提现、礼品商城充值、系统续费等）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet" @click="dialogTableVisible = true">开通电子钱包</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="nonactivated bg-purple-dark">
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
          <div style="text-align: right;"><el-button type="primary" class="openEWallet">刷新</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="nonactivated bg-purple-dark">
      <el-row :gutter="20">
        <el-col :span="21">
          <i class="el-icon-info"></i>
          <span class="walletFailedToOpen">电子钱包开通失败！</span>
          <span class="pendingReviewAfterOpening">
            （失败原因失败原因失败原因...）
          </span>
        </el-col>
        <el-col :span="3">
          <div style="text-align: right;"><el-button type="primary" class="openEWallet"  @click="dialogTableVisible = true">重新开通</el-button></div>
        </el-col>
      </el-row>
    </div>
    <div class="nonactivated bg-purple-dark">
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
    </div>
    <div class="nonactivated bg-purple-dark">
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
          <div class="recharge"><el-button type="warning" @click="RechargePopup = true">充值</el-button></div>
          <div class="withdraw" @click="withdraw = true"><el-button>提现</el-button></div>
          <div class="accountFlow" @click="accountFlow = true"><el-button >账户流水</el-button></div>
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
          <div class="operationRecharge" @click="operationTopUp = true"><el-button type="warning">充值</el-button></div>
          <div class="operationAccountFlow" @click="operationAccountFlow"><el-button>账户流水</el-button></div>
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
      <div class="addBankAccount">
        <div class="addWithdrawalBank">提现银行账户</div>
        <div class="addTo"  @click="replace = true"><i class="el-icon-plus"></i>添加提现银行卡</div>
      </div>
    </div>
    <div class="poPupWindow"> 
        <el-dialog title="开通电子钱包" :visible.sync="dialogTableVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="118px" class="demo-ruleForm" >
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
          </el-form>
          <div  slot="footer" class="submit">
            <el-button type="primary" class="searchFor" >确定</el-button>
            <el-button class="reset"  @click="dialogTableVisible = false">取消</el-button>
          </div>
        </el-dialog>
      
    </div>
    <div class="economy">
      <el-dialog  title="充值" :visible.sync="RechargePopup">
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
    <div class="operationTopUp">
      <el-dialog  title="充值" :visible.sync="operationTopUp">
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
          <el-button type="primary" class="immediately">立即支付</el-button>
          <el-button class="cancel" @click="operationTopUp = false">取消</el-button>
        </div>
      </el-dialog>  
    </div>
    <div class="changePopupLayout">
      <el-dialog title="未绑定提现卡" :visible.sync="replace">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="*开户名称：">
            <el-input placeholder="xxxxxxxxxx公司" v-model="form.mosquitoNet" :disabled="true"></el-input>
            <span class="sameName">（提现卡必须为开通资金账户的同名账户）</span>
          </el-form-item>
          <el-form-item label="*银行：">
            <el-select v-model="formInline.bank" placeholder="请选择">
              <el-option label="请选择" value="pleaseChoose"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="*卡号：">
            <el-input v-model="form.cardNumber"></el-input>
          </el-form-item>
          <el-form-item label="*开户地区：">
            <el-cascader
              :options="operatio"
              :props="{ multiple: true,checkStrictly: true }"
              clearable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="*开户网点：">
            <el-select v-model="formInline.accountOpening" placeholder="请选择网点">
              <el-option label="请选择网点" value="PleaseSelectBranch"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="*银行预留手机：">
            <el-input v-model="form.reservePhone"></el-input>
          </el-form-item>
        </el-form>
        <div class="description">注：每天最多只能提交3次</div>
        <div class="submit">
          <el-button type="primary" class="nextStep" @click="nextStep = true" >下一步</el-button>
          <el-button class="reset"  @click="replace = false" >取消</el-button>
        </div>
      </el-dialog>  
    </div>
    <!--<div class="untiedCashCard">
      <el-dialog  title="未绑定银行卡" :visible.sync="withdraw">
        <div class="bindWithdrawal">
          <i class="el-icon-info"></i>
          <div class="unboundCard">您尚未绑定提现卡，请先绑定后再提现！</div>
        </div>
        <div class="untiedsubmit">
          <el-button type="primary" class="tiedCardNow"  @click="replace = true">立即绑卡</el-button>
          <el-button class="untiedCashCardreset" @click="withdraw = false">取消</el-button>
        </div>
      </el-dialog>
    </div>-->
    <div class="cardTied">
      <el-dialog  title="账户提现" :visible.sync="withdraw">
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
          <el-button type="primary" class="confirmWithdrawal" @click="withdraw = false">确定提现</el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        time: '',
        mosquitoNet: '',
        cardNumber: '',
        reservePhone: ''
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
      withdrawalAmount: '',
      nextStep: false,
      withdraw: false,
      radio: '1',
      radios: '1',
      input: '',
      transfer: '线下转账',
      dialogTableVisible: false,
      RechargePopup: false,
      accountFlow: false,
      operationTopUp: false,
      replace: false,
      amountReceived: '',
      ruleForm: {
        accountType: '公司',
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
      operatio: [{
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
      }],
      rules: {
        accountType: [
          { accountType: true, message: '请选择活动资源', trigger: 'change' }
        ]
      }
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
    operationAccountFlow() {
      this.$router.push('/operatorsFlow')
    },
    logInSystem() {
      this.$router.push('/login')
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
    .withdrawal{
      border-bottom: 1px solid #e5e5e5;
      .withdrawalBank{
      height: 32px;
      color: #333333;
      font-size: 12px;
      background-color: #f5f5f5;
      padding-left: 20px;
      line-height: 2.5em;
      }
     .replace{
      color: #169BD5;
      float: right;
      line-height: 2.5em;
      margin-right: 10px;
      }
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
.changePopupLayout{
  .description{
    color: #ff0000;
  }
  .sameName{
    color: #999999;
  }
  .submit{
    margin-top: 10px;
    margin-left: 70px;
    .nextStep{
      width: 100px;
      border-radius: 3px;
    }
    .reset{
      width: 100px;
      border-radius: 3px;
    }
  }
}
.untiedCashCard{
  .bindWithdrawal{
    .el-icon-info{
      color: #333333;
      font-size: 36px;
      float: left;
      margin-right: 20px;
    }
    .unboundCard{
      font-size: 16px;
      line-height: 2.5em;
    }
  }
  .untiedsubmit{
    margin-top: 20px;
    .tiedCardNow{
      width: 100px;
      border-radius: 3px;
    }
    .untiedCashCardreset{
      width: 100px;
      border-radius: 3px;
    }
  }
}
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