<template>
  <div class="content">
    <div class="middleBorder">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="120px">
        <div class="Upperlayout">
          <el-row :gutter="20">
            <el-col :span="18">
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
              <el-form-item label="来源：">
                <el-select v-model="formInline.region1" placeholder="全部">
                  <el-option label="全部" value="all1"></el-option>
                  <el-option label="礼品订单" value="giftOrders"></el-option>
                  <el-option label="充值" value="recharge"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button>重置</el-button>
                <el-button>导出</el-button>
              </el-form-item>
            </el-col>  
          </el-row>
        </div>
      </el-form>
    </div>
    <div class="lowerLayout">
      <div class="grid-content bg-purple">
        <div class="number1">￥300,000.00</div>
        <div class="accountBalance">
          期初账户余额
          <el-tooltip class="item" effect="dark" content="所选时间之前的账户余额" placement="bottom-start">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </div>
      <div class="grid-content bg-purple-light">
        <div class="number2">￥100,000.00</div>
        <div class="currentIncome">
          本期收入
          <el-tooltip class="item" effect="dark" content="所选时间范围内的收入" placement="bottom-start">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </div>
      <div class="grid-content bg-purple1">
        <div class="number3">￥200,000.00</div>
        <div class="currentExpenditure">
          本期支出
          <el-tooltip class="item" effect="dark" content="所选时间范围内的支出" placement="bottom-start">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </div>
      <div class="grid-content bg-purple2">
        <div class="number4">￥200,000.00</div>
        <div class="endingAccountbalance">
          期末账户余额
          <el-tooltip class="item" effect="dark" content="截止所选时间的账户余额" placement="bottom-end">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </div>
    </div>      
    <el-table
    :data="tableData"
      border>
      <el-table-column
        prop="creationTime"
        sortable
        label="操作时间"
        min-width="150">
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
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="门店名称"
        width="120">
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
        prop="sourceTicketNumber"
        label="来源单号"
        width="150">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        all1: '',
        giftOrders: '',
        recharge: ''
      },
      tableData: [{
        creationTime: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        sourceTicketNumber: '',
        operator: '',
        Note: ''
      }, {
        creationTime: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        sourceTicketNumber: '',
        operator: '',
        Note: ''
      }, {
        creationTime: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        sourceTicketNumber: '',
        operator: '',
        Note: ''
      }, {
        creationTime: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        incomeAndExpenses: '',
        amount: '',
        accountBalance: '',
        region1: '',
        sourceTicketNumber: '',
        operator: '',
        Note: ''
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.middleBorder{
  min-height: 92px;
  overflow: hidden;
  .demo-form-inline{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
}
.lowerLayout{
  background-color: #e5e9f2;
  overflow: hidden;
  .demo-form-inline{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .el-date-editor{
    width: 178px;
  }
  .bg-purple-dark {
    background: #e5e9f2;
    float: left;
  }
  .bg-purple {
    background: #e5e9f2;
    float: left;
    border-right: 1px solid #777777;
    line-height: 2em;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .bg-purple1{
    background: #e5e9f2;
    float: left;
    line-height: 2em;
    border-right: 1px solid #777777;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .bg-purple2{
    background: #e5e9f2;
    float: left;
    line-height: 2em;
  }
  .bg-purple-light {
    background: #e5e9f2;
    float: left;
    border-right: 1px solid #777777;
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 2em;
  }
  .grid-content {
    min-height: 56px;
    text-align: center;
    width: 25%;
    padding-top: 5px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #e5e9f2;
  }
}
.el-table--border{
  margin-top: 10px;
}
/deep/.el-table th{
  background: #F5F7FA;
} 
</style>