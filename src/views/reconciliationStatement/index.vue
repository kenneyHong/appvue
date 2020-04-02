<template>
  <div class="content">
    <div class="middleBorder">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="19">
            <el-form-item label="时间：" label-width="120px">
              <el-date-picker
                v-model="form.time"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="商户类型：">
              <el-select v-model="formInline.region" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="珠宝公司" value="jewelryCompany"></el-option>
                <el-option label="珠宝门店" value="jewelryStore"></el-option>
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
          </el-col>
          <el-col :span="5">
            <el-form-item>
              <el-button type="primary">搜索</el-button>
              <el-button>重置</el-button>
              <el-button>导出</el-button>
            </el-form-item>
          </el-col>   
        </el-row>    
     </el-form>       
    </div>
    <el-table
    :data="tableData"
      border>
      <el-table-column
        prop="region"
        label="商户类型"
        min-width="150">
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
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="门店名称"
        width="120">
      </el-table-column>
      <el-table-column  prop="openingAccountBalance" abel="期初账户余额"
        width="170" show-overflow-tooltip>
        <template slot='header'>
          <span>
            期初账户余额
            <i class="el-icon-question"></i>
          </span>
        </template>  
      </el-table-column>
      <el-table-column  prop="currentIncome" abel="本期收入"
        width="120" show-overflow-tooltip>
        <template slot='header'>
          <span>
            本期收入
            <i class="el-icon-question"></i>
          </span>
        </template>  
      </el-table-column>
      <el-table-column  prop="currentExpenditure" abel="本期支出"
        width="120" show-overflow-tooltip>
        <template slot='header'>
          <span>
            本期支出
            <i class="el-icon-question"></i>
          </span>
        </template>  
      </el-table-column>
      <el-table-column  prop="endingAccountBalance" abel=" 期末账户余额"
        width="170" show-overflow-tooltip>
        <template slot='header'>
          <span>
            期末账户余额
            <i class="el-icon-question"></i>
          </span>
        </template>  
      </el-table-column>
      <el-table-column
        prop="operating"
        label="操作"> 
        <template>
          <el-button type="text" size="small" @click="accountFlow = true"> 账户流水</el-button>
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
    <el-dialog title="账户流水" :visible.sync="accountFlow" width="80%">
      <div class="accountFlowPopups">
        <div class="accountFlow">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
              <el-col :span="15">
                <el-form-item label="时间：" label-width="118px">
                  <el-date-picker
                    v-model="formInline.time"
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
  data() {
    return {
      accountFlow: false,
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
      }],
      form: {
        time: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        storeName: ''
      },
      formInline: {
        all: '',
        jewelryCompany: '',
        jewelryStore: '',
        giftSupplier: '',
        gift: '',
        time: '',
        source: ''
      },
      tableData: [{
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        openingAccountBalance: '',
        currentIncome: '',
        endingAccountBalance: '',
        operating: ''
      }, {
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        openingAccountBalance: '',
        currentIncome: '',
        endingAccountBalance: '',
        operating: ''
      }, {
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        openingAccountBalance: '',
        currentIncome: '',
        endingAccountBalance: '',
        operating: ''
      }]
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
.reconciliationStatement{
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
.middleBorder{
  min-height: 92px;
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
.el-table{
  margin-left: 10px;
}
/deep/.el-table th{
  background: #F5F7FA;
} 
</style>