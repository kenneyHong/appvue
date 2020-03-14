<template>
 <div class="content">
    <div class="middleBorder">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
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
              <el-form-item label="资金账户：">
                <el-input v-model="form.fundAccount"></el-input>
              </el-form-item>
              <el-form-item label="户名：">
                <el-input v-model="form.accountName"></el-input>
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
              </el-form-item>
                <el-form-item label="门店编码：">
                <el-input v-model="form.storeCode"></el-input>
              </el-form-item>
              </el-form-item>
                <el-form-item label="门店名称：">
                <el-input v-model="form.storeName"></el-input>
              </el-form-item> 
              <el-form-item label="来源：">
                <el-select v-model="formInline.region1" placeholder="全部">
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
        <div class="number1">￥0,00</div>
        <div class="documentAmount">
          单据金额
          <i class="el-icon-question"></i>
        </div>
      </div>          
      <div class="grid-content bg-purple-light">
        <div class="number2">￥0,00</div>
        <div class="amountReceived">
          到账金额
          <i class="el-icon-question"></i>
        </div>
      </div>
      <div class="grid-content bg-purple1">
        <div class="number3">￥0.00</div>
        <div class="platformServiceFee">
          平台服务费
          <i class="el-icon-question"></i>
        </div>
      </div>
      <div class="grid-content bg-purple2">
        <div class="number3">￥0.00</div>
        <div class="PayagencyServiceFee">
          支付机构服务费
          <i class="el-icon-question"></i>
        </div>
      </div> 
    </div>      
    <el-table
    :data="tableData"
      border>
      <el-table-column
        prop="creationTime"
        sortable
        label="创建时间"
        width='150'>
      </el-table-column>
      <el-table-column
        prop="transactionHour"
        label="交易时间"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="serialNumber"
        label="交易流水号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="documentAmount"
        label="单据金额"
        width="150">
      </el-table-column>
      <el-table-column
        prop="amountReceived"
        label="到账金额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="platformServiceFee"
        label="平台服务费"
        width="120">
      </el-table-column>
      <el-table-column
        prop="payagencyServiceFee"
        label="支付机构服务费"
        width="120">
      </el-table-column>
      <el-table-column
        prop="fundAccount"
        label="资金账号"
        sortable
        width="150">
      </el-table-column>
      <el-table-column
        prop="accountName"
        label="户名"
        width='150'>
      </el-table-column>
      <el-table-column
        prop="region"
        label="商户类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="companyCode"
        label="公司编码"
        width="150">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="storeCode"
        label="门店编码"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="门店名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="source"
        label="来源"
        width="150">
      </el-table-column>
      <el-table-column
        prop="relatedDocuments"
        label="相关单据"
        width="150">
      </el-table-column>
      <el-table-column
        prop="founder"
        label="创建人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="paymentMethod"
        label="支付方式"
        width="150">
      </el-table-column>
      <el-table-column
        prop="Note"
        label="备注"
        width="150">
      </el-table-column>
      <el-table-column
        prop="tradingStatus"
        label="交易状态"
        width="150">
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
        fundAccount: '',
        accountName: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        storeName: ''
      },
      formInline: {
        all: '',
        jewelryStore: '',
        jewelryCompany: '',
        jewelleryGroup: '',
        giftSupplier: '',
        gift: '',
        all1: '',
        withdraw: '',
        retailOrder: '',
        recharge: '',
        SaaSOrders: '',
        SMSTopup: '',
        academyOrder: '',
        customOrder: '',
        transfer: '',
        retailReturn: ''
      },
      tableData: [{
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        platformServiceFee: '',
        payagencyServiceFee: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        paymentMethod: '',
        Note: '',
        tradingStatus: ''
      }, {
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        platformServiceFee: '',
        payagencyServiceFee: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        paymentMethod: '',
        Note: '',
        tradingStatus: ''
      }, {
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        platformServiceFee: '',
        payagencyServiceFee: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        paymentMethod: '',
        Note: '',
        tradingStatus: ''
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
.middleBorder{
  min-height: 92px;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  .el-row{
    margin-bottom: 10px;
  }
  .demo-form-inline{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
}
.lowerLayout{
  margin-left: 10px;
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
  }
  .bg-purple1{
    background: #e5e9f2;
    float: left;
    line-height: 2em;
    border-right: 1px solid #777777;
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
.el-table{
  margin-left: 10px;
  margin-top: 80px;
}
/deep/.el-table th{
  background: #F5F7FA;
} 
</style> 