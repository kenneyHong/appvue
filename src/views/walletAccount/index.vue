<template>
  <div class="content">
    <el-row>
      <el-button type="primary" class='export'>导出</el-button>
      <el-dropdown>
        <el-button type="primary" class='status'>
          所有状态<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>开户中</el-dropdown-item>
          <el-dropdown-item>已开户</el-dropdown-item>
          <el-dropdown-item>已销户</el-dropdown-item>
          <el-dropdown-item>冻结</el-dropdown-item>
          <el-dropdown-item>开户失败</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input placeholder="公司编码" v-model="input3" class="input-with-select" suffix-icon="el-icon-search">
      </el-input>
      <span class="generalSearch" @click="btn">{{searchTitle}}</span>
    </el-row>
    <div class="middleBorder"  v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="资金账号：">
              <el-input v-model="form.fundAccount"></el-input>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="form.accountName"></el-input>
            </el-form-item>
            <el-form-item label="银行电子账号：">
              <el-input v-model="form.electronicAccount"></el-input>
            </el-form-item>
            <el-form-item label="开户时间：" label-width="120px">
              <el-date-picker
                v-model="form.accountOpeningtime"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="商户类型：">
              <el-select v-model="formInline.region" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="珠宝门店" value="jewelryStore"></el-option>
                <el-option label="珠宝公司" value="jewelryCompany"></el-option>
                <el-option label="珠宝集团" value="jewelleryGroup"></el-option>
                <el-option label="礼品供应商" value="giftSupplier"></el-option>
                <el-option label="平台" value="gift"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司编码：">
              <el-input v-model="form.companyCode"></el-input>
            </el-form-item>
            <el-form-item label="公司名称：">
              <el-input v-model="form.companyName"></el-input>
            </el-form-item>
            <el-form-item label="门店编码：">
              <el-input v-model="form.storeCode"></el-input>
            </el-form-item>
            <el-form-item label="门店名称：">
              <el-input v-model="form.storeName"></el-input>
            </el-form-item>
            <el-form-item label="账户">
              <el-col :span="5">
                <el-input v-model="sizeForm.name"></el-input>
              </el-col>
              <el-col class="line" :span="2">~</el-col>
              <el-col :span="5">
               <el-input v-model="sizeForm.name"></el-input>
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button type="primary">搜索</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table
    :data="tableData">
      <el-table-column
        prop="fundAccount"
        sortable
        label="资金账号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="accountName"
        label="户名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="electronicAccount"
        label="银行电子账号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="accountOpeningtime"
        sortable
        label="开户时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="region"
        label="商户类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="companyCode"
        label="公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="storeCode"
        label="门店编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="门店名称"
        width="120">
      </el-table-column>
      <el-table-column label="账户余额"  >
        <el-table-column
          prop="totalAmount"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="basicAccount"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="operatingAccount"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="可用金额">
        <el-table-column
          prop="totalAmount1"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="basicAccount1"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="operatingAccount1"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="锁定金额">
        <el-table-column
          prop="totalAmount2"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="basicAccount2"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="operatingAccount2"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="accountstatus"
        label="账户状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="operating"
        label="操作"
        width="150">
        <template>
          <el-button type="text" size="small" @click="View = true">查看</el-button>
          <el-button  type="text" size="small" @click="accountFlow = true">账户流水</el-button>
        </template>
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
    <div class="tableView">
      <el-dialog title="查看" :visible.sync="View">
        <div class="basicMaterial" >
          <el-button class="BasicInformation" type="primary"  @click="basicMaterial">基本资料</el-button>
          <el-button  class="openLog" type="primary"  @click="openLog">开通日志</el-button>
        </div>
       <!-- <div class="companyBasicInformation">
          <el-form ref="form" :model="checkingData" label-width="118px">
            <el-form-item label="资金账号：">
              <el-input v-model="checkingData.fundAccount"></el-input>
            </el-form-item>
            <el-form-item label="账户类型：">
              <el-input v-model="checkingData.accountType"></el-input>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="checkingData.accountName"></el-input>
            </el-form-item>
            <el-form-item label="银行电子账户：">
              <el-input v-model="checkingData.electronicAccount"></el-input>
            </el-form-item>
            <el-form-item label="开户时间：">
              <el-input v-model="checkingData.accountOpeningtime"></el-input>
            </el-form-item>
            <el-form-item label="统一社会信用代码：">
              <el-input v-model="checkingData.socialCredit"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人姓名：">
              <el-input v-model="checkingData.representativeName"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证：">
              <el-input v-model="checkingData.representativeID"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input v-model="checkingData.mobilePhoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="所属区域：">
              <el-input v-model="checkingData.Area"></el-input>
            </el-form-item>
            <el-form-item label="详细地址：">
              <el-input v-model="checkingData.address"></el-input>
            </el-form-item>
          </el-form>
        </div>-->
        <div class="PersonalBasicInformation" v-if="Switch == '基本资料'">
          <el-form ref="form" :model="formation" label-width="118px">
            <el-form-item label="资金账号：">
              <el-input v-model="formation.fundAccount"></el-input>
            </el-form-item>
            <el-form-item label="账户类型：">
              <el-input v-model="formation.accountType"></el-input>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="formation.accountName"></el-input>
            </el-form-item>
            <el-form-item label="银行电子账户：">
              <el-input v-model="formation.electronicAccount"></el-input>
            </el-form-item>
            <el-form-item label="开户时间：">
              <el-input v-model="formation.accountOpeningtime"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码：">
              <el-input v-model="formation.identificationNumber"></el-input>
            </el-form-item>
            <el-form-item label="手机号码：">
              <el-input v-model="formation.mobilePhoneNumber"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="openLog" v-if="Switch == '开通日志'">
          <el-table
            :data="openLogtableData"
            border
            style="width: 100%">
            <el-table-column
              prop="operatingTime"
              label="操作时间"
              min-width="130">
            </el-table-column>
            <el-table-column
              prop="operationType"
              label="操作类型"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="entrance"
              label="入口"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="operator"
              label="操作人"
              min-width="120">
            </el-table-column>
            <el-table-column
              prop="Note"
              label="备注"
              min-width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-dialog>
    </div>
    <el-dialog title="账户流水" :visible.sync="accountFlow" width="80%">
      <div class="accountFlowPopups">
        <div class="accountFlow">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
              <el-col :span="15">
                <el-form-item label="时间：" label-width="118px">
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
              </el-col>
              <el-col :span="4">
                <el-button type="primary">搜索</el-button>
                <el-button>重置</el-button>
              </el-col>
            </el-row>
          </el-form>  
        </div>
        <el-table
        :data="accountFlowTableData"
        border>
          <el-table-column
            prop="serialNumber"
            label="流水号"
            min-width="150">
          </el-table-column>
          <el-table-column
            prop="operatingTime"
            sortable
            label="操作时间"
            width="140">
          </el-table-column>
          <el-table-column
            prop="incomeAndExpenses"
            label="收入/支出"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Amount"
            label="金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="accountBalance"
            label="帐户余额"
            width="130">
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源"
            width="100">
          </el-table-column>
          <el-table-column
            prop="relatedDocuments"
            label="相关单据"
            width="130">
          </el-table-column>
          <el-table-column
            prop="transactionAmount"
            label="交易金额"
            width="100">
          </el-table-column>
          <el-table-column
            prop="serviceFee"
            label="服务费"
            width="100">
          </el-table-column>
          <el-table-column
            prop="operator"
            label="操作人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Note"
            label="备注"
            width="100">
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
      </div>
    </el-dialog>  
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchTitle: '普通搜索',
      input3: '',
      View: false,
      Switch: '基本资料',
      accountFlow: false,
      form: {
        fundAccount: '',
        accountName: '',
        electronicAccount: '',
        accountOpeningtime: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        storeName: ''
      },
      formInline: {
        all: '',
        ewelryStore: '',
        jewelryCompany: '',
        jewelleryGroup: '',
        giftSupplier: '',
        gift: ''
      },
      sizeForm: {
        name: ''
      },
      tableData: [{
        fundAccount: '2016-05-01',
        accountName: '王小虎',
        electronicAccount: '上海市普陀区金沙江路 1518 弄',
        accountOpeningtime: '2',
        region: '4',
        companyCode: '',
        companyName: '',
        storeCode: '',
        totalAmount: '',
        basicAccount: '',
        operatingAccount: '',
        totalAmount1: '',
        basicAccount1: '',
        operatingAccount1: '',
        totalAmount2: '',
        basicAccount2: '',
        operatingAccount2: '',
        accountstatus: '',
        operating: ''
      }, {
        fundAccount: '2016-05-02',
        accountName: '王小虎',
        electronicAccount: '上海市普陀区金沙江路 1517 弄',
        accountOpeningtime: '2',
        region: '4',
        companyCode: '',
        companyName: '',
        storeCode: '',
        totalAmount: '',
        basicAccount: '',
        operatingAccount: '',
        totalAmount1: '',
        basicAccount1: '',
        operatingAccount1: '',
        totalAmount2: '',
        basicAccount2: '',
        operatingAccount2: '',
        accountstatus: '',
        operating: ''
      }, {
        fundAccount: '2016-05-03',
        accountName: '王小虎',
        electronicAccount: '上海市普陀区金沙江路 1519 弄',
        accountOpeningtime: '2',
        region: '4',
        companyCode: '',
        companyName: '',
        storeCode: '',
        totalAmount: '',
        basicAccount: '',
        operatingAccount: '',
        totalAmount1: '',
        basicAccount1: '',
        operatingAccount1: '',
        totalAmount2: '',
        basicAccount2: '',
        operatingAccount2: '',
        accountstatus: '',
        operating: ''
      }, {
        fundAccount: '2016-05-04',
        accountName: '王小虎',
        electronicAccount: '上海市普陀区金沙江路 1516 弄',
        accountOpeningtime: '2',
        region: '4',
        companyCode: '',
        companyName: '',
        storeCode: '',
        totalAmount: '',
        basicAccount: '',
        operatingAccount: '',
        totalAmount1: '',
        basicAccount1: '',
        operatingAccount1: '',
        totalAmount2: '',
        basicAccount2: '',
        operatingAccount2: '',
        accountstatus: '',
        operating: ''
      }],
      checkingData: {
        fundAccount: '',
        accountType: '',
        accountName: '',
        electronicAccount: '',
        accountOpeningtime: '',
        socialCredit: '',
        representativeName: '',
        representativeID: '',
        mobilePhoneNumber: '',
        Area: '',
        address: ''
      },
      formation: {
        fundAccount: '',
        accountType: '',
        accountName: '',
        electronicAccount: '',
        accountOpeningtime: '',
        identificationNumber: '',
        mobilePhoneNumber: ''
      },
      openLogtableData: [{
        operatingTime: '',
        operationType: '',
        entrance: '',
        operator: '',
        Note: ''
      }, {
        operatingTime: '',
        operationType: '',
        entrance: '',
        operator: '',
        Note: ''
      }, {
        operatingTime: '',
        operationType: '',
        entrance: '',
        operator: '',
        Note: ''
      }],
      accountFlowTableData: [{
        serialNumber: '',
        operatingTime: '',
        incomeAndExpenses: '',
        Amount: '',
        accountBalance: '',
        source: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }, {
        serialNumber: '',
        operatingTime: '',
        incomeAndExpenses: '',
        Amount: '',
        accountBalance: '',
        source: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }, {
        serialNumber: '',
        operatingTime: '',
        incomeAndExpenses: '',
        Amount: '',
        accountBalance: '',
        source: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }]
    }
  },
  methods: {
    btn() {
      if (this.searchTitle == '普通搜索') {
        this.searchTitle = '高级搜索'
      } else if (this.searchTitle == '高级搜索') {
        this.searchTitle = '普通搜索'
      }
    },
    basicMaterial() {
      if (this.Switch == '开通日志') {
        this.Switch = '基本资料'
      }
    },
    openLog() {
      if (this.Switch == '基本资料') {
        this.Switch = '开通日志'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
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
.walletlistAccount{
  padding-top: 10px;
  padding-left: 10px;
  display: inline-block;
  width: 77%;
}
.export{
  width: 100px;
  height: 30px;
  margin-left: 10px;
  border-radius: 4px;
}
.status{
  height: 30px;
}
.input-with-select{
  width: 160px;
}
.el-dropdown{
  margin-left: 59%;
}
.generalSearch{
  font-size: 12px;
  color: #1f91df;
}
.middleBorder{
  min-height: 92px;
  border: 1px solid #e5e5e5;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  .demo-form-inline{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .el-date-editor{
    width: 178px;
  }
}
.el-table--border{
  margin-left: 10px;
  margin-top: 10px;
}
.tableView{
  .basicMaterial{
    .el-button{
      border: none;
      width: 100px;
      height: 40px;
    }
    .el-button--primary{
      color: #409eff;
      background: #ffffff;
    }
  }
  .companyBasicInformation{
    margin-top: 20px;
  }
  .PersonalBasicInformation{
    margin-top: 20px;
  }
}
.accountFlowPopups{
  .el-col{
    margin-left: 10px;
  }
}
</style>