<template>
  <div class="content">
    <div class="middleBorder">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
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
            <el-form-item label="交易时间：" label-width="120px">
              <el-date-picker
                v-model="form.transactionHour"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="交易流水号：">
              <el-input v-model="form.transactionSerial"></el-input>
            </el-form-item>
            <el-form-item label="付款资金账号：">
              <el-input v-model="form.paymentFundAccount"></el-input>
            </el-form-item>
            <el-form-item label="付款户名：">
              <el-input v-model="form.paymentAccountName"></el-input>
            </el-form-item>
            <el-form-item label="付款商户类型：">
              <el-select v-model="formInline.paymentMerchantType" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="珠宝门店" value="jewelryStore"></el-option>
                <el-option label="珠宝公司" value="jewelryCompany"></el-option>
                <el-option label="珠宝集团" value="jewelleryGroup"></el-option>
                <el-option label="礼品供应商" value="giftSupplier"></el-option>
                <el-option label="平台" value="gift"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="付款公司编码：">
              <el-input v-model="form.paymentCompanyCode"></el-input>
            </el-form-item>
            <el-form-item label="付款公司名称：">
              <el-input v-model="form.paymentCompanyName"></el-input>
            </el-form-item>
            <el-form-item label="付款门店编码：">
              <el-input v-model="form.paymentStoreCode"></el-input>
            </el-form-item>
            <el-form-item label="付款门店名称：">
              <el-input v-model="form.paymentStoreName"></el-input>
            </el-form-item>
            <el-form-item label="收款资金账号：">
              <el-input v-model="form.receivingFundAccount"></el-input>
            </el-form-item>
            <el-form-item label="收款户名：">
              <el-input v-model="form.beneficiaryAccountName"></el-input>
            </el-form-item>
            <el-form-item label="收款商户类型：">
              <el-select v-model="formInline.beneficiaryMerchantType" placeholder="全部">
                <el-option label="全部" value="beneficiaryall"></el-option>
                <el-option label="珠宝门店" value="beneficiaryjewelryStore"></el-option>
                <el-option label="珠宝公司" value="beneficiaryjewelryCompany"></el-option>
                <el-option label="珠宝集团" value="beneficiaryjewelleryGroup"></el-option>
                <el-option label="礼品供应商" value="beneficiarygiftSupplier"></el-option>
                <el-option label="平台" value="beneficiarygift"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="收款公司编码：">
              <el-input v-model="form.beneficiaryCompanyCode"></el-input>
            </el-form-item>
            <el-form-item label="收款公司名称：">
              <el-input v-model="form.beneficiaryCompanyName"></el-input>
            </el-form-item>
            <el-form-item label="收款门店编码：">
              <el-input v-model="form.beneficiaryStoreCode"></el-input>
            </el-form-item>
            <el-form-item label="收款门店名称：">
              <el-input v-model="form.beneficiaryStoreName"></el-input>
            </el-form-item>
            <el-form-item label="来源：">
              <el-select v-model="formInline.source" placeholder="全部">
                <el-option label="全部" value="all1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="来源单号：">
              <el-input v-model="form.ticketNumber"></el-input>
            </el-form-item>
            <el-form-item label="状态：">
              <el-select v-model="formInline.status" placeholder="全部">
                <el-option label="全部" value="all1"></el-option>
                <el-option label="成功" value="success"></el-option>
                <el-option label="失败" value="failure"></el-option>
                <el-option label="处理中" value="processing"></el-option>
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
      </el-form>
    </div>
    <el-table
    :data="tableData"
      border>
      <el-table-column
        prop="creationTime"
        sortable
        label="创建时间"
        width='120'>
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
        prop="paymentFundAccount"
        sortable
        label="付款资金账号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentAccountName"
        label="付款户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentMerchantType"
        label="付款商户类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentCompanyCode"
        label="付款公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentCompanyName"
        label="付款公司名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentStoreCode"
        label="付款门店编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="paymentStoreName"
        label="付款门店名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="receivingFundAccount"
        sortable
        label="收款资金账号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryAccountName"
        label="收款户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryMerchantType"
        label="收款商户类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryCompanyCode"
        label="收款公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryCompanyName"
        label="收款公司名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryStoreCode"
        label="收款门店编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="beneficiaryStoreName"
        label="收款门店名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="source"
        label="来源"
        width="120">
      </el-table-column>
      <el-table-column
        prop="relatedDocuments"
        label="相关单据"
        width="120">
      </el-table-column>
      <el-table-column
        prop="founder"
        label="创建人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="Note"
        label="备注"
        width="120">
      </el-table-column>
      <el-table-column
        prop="tradingStatus"
        label="交易状态"
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
        transactionHour: '',
        transactionSerial: '',
        paymentFundAccount: '',
        paymentAccountName: '',
        paymentCompanyCode: '',
        paymentCompanyName: '',
        paymentStoreCode: '',
        paymentStoreName: '',
        receivingFundAccount: '',
        beneficiaryAccountName: '',
        beneficiaryCompanyCode: '',
        beneficiaryCompanyName: '',
        beneficiaryStoreCode: '',
        beneficiaryStoreName: '',
        ticketNumber: ''
      },
      formInline: {
        all: '',
        jewelryStore: '',
        jewelryCompany: '',
        jewelleryGroup: '',
        giftSupplier: '',
        gift: '',
        beneficiaryall: '',
        beneficiaryjewelryStore: '',
        beneficiaryjewelryCompany: '',
        beneficiaryjewelleryGroup: '',
        beneficiarygiftSupplier: '',
        beneficiarygift: '',
        source: '',
        status: '',
        all1: '',
        success: '',
        failure: '',
        processing: ''
      },
      tableData: [{
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        paymentFundAccount: '',
        paymentAccountName: '',
        paymentMerchantType: '',
        paymentCompanyCode: '',
        paymentCompanyName: '',
        paymentStoreCode: '',
        paymentStoreName: '',
        receivingFundAccount: '',
        beneficiaryAccountName: '',
        beneficiaryMerchantType: '',
        beneficiaryCompanyCode: '',
        beneficiaryCompanyName: '',
        beneficiaryStoreCode: '',
        beneficiaryStoreName: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        Note: '',
        tradingStatus: ''
      }, {
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        paymentFundAccount: '',
        paymentAccountName: '',
        paymentMerchantType: '',
        paymentCompanyCode: '',
        paymentCompanyName: '',
        paymentStoreCode: '',
        paymentStoreName: '',
        receivingFundAccount: '',
        beneficiaryAccountName: '',
        beneficiaryMerchantType: '',
        beneficiaryCompanyCode: '',
        beneficiaryCompanyName: '',
        beneficiaryStoreCode: '',
        beneficiaryStoreName: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        Note: '',
        tradingStatus: ''
      }, {
        creationTime: '',
        transactionHour: '',
        serialNumber: '',
        documentAmount: '',
        amountReceived: '',
        paymentFundAccount: '',
        paymentAccountName: '',
        paymentMerchantType: '',
        paymentCompanyCode: '',
        paymentCompanyName: '',
        paymentStoreCode: '',
        paymentStoreName: '',
        receivingFundAccount: '',
        beneficiaryAccountName: '',
        beneficiaryMerchantType: '',
        beneficiaryCompanyCode: '',
        beneficiaryCompanyName: '',
        beneficiaryStoreCode: '',
        beneficiaryStoreName: '',
        source: '',
        relatedDocuments: '',
        founder: '',
        Note: '',
        tradingStatus: ''
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
  .bg-purple-dark {
    background: #e5e9f2;
  }
  .bg-purple {
    background: #e5e9f2;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 56px;
    text-align: center;
    width: 230px;
    padding-top: 5px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #e5e9f2;
  }
}
/deep/.el-table th{
  background: #F5F7FA;
}
</style>