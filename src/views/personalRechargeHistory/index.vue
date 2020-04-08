<template>
  <div class="content">
    <el-row>
      <el-col :span="16">
        <el-button type="primary" class="export">导出</el-button>
      </el-col>
    <el-col :span="8">
      <el-select v-model="value" placeholder="所有状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input placeholder="公司编码" v-model="input3" class="input-with-select">
        <el-button slot="append" class="el-icon-search"></el-button>
      </el-input>
      <span class="generalSearch" @click="btn">{{searchTitle}}</span>
    </el-col>
    </el-row>
    <div class="middleBorder" v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="时间：" label-width="120px">
              <el-date-picker
                v-model="form.time"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="资金账号：">
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
            <el-form-item label="门店编码：">
              <el-input v-model="form.storeCode"></el-input>
            </el-form-item>
            <el-form-item label="门店名称：">
              <el-input v-model="form.storeName"></el-input>
            </el-form-item> 
            <el-form-item label="状态：">
              <el-select v-model="formInline.region" placeholder="全部">
                <el-option label="全部" value="all1"></el-option>
                <el-option label="支付中" value="payments"></el-option>
                <el-option label="支付成功" value="paymentSuccessful"></el-option>
                <el-option label="支付失败" value="paymentFailed"></el-option>
              </el-select>
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
    :data="tableData"
      border>
      <el-table-column
        prop="documentNumber"
        label="单号编号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="creationTime"
        sortable
        label="操作时间"
        width='150'>
      </el-table-column>
      <el-table-column
        prop="fundAccount"
        label="资金账号"
        width='150'>
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
        prop="amount"
        label="金额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="serviceFee"
        label="服务费"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
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
      options: [{
        value: '选项1',
        label: '所有状态'
      }, {
        value: '选项2',
        label: '开户中'
      }, {
        value: '选项3',
        label: '已开户'
      }, {
        value: '选项4',
        label: '已销户'
      }, {
        value: '选项5',
        label: '冻结'
      }, {
        value: '选项6',
        label: '开户失败'
      }],
      value: '',
      searchTitle: '普通搜索',
      form: {
        time: '',
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
        all1: '',
        payments: '',
        paymentSuccessful: '',
        paymentFailed: ''
      },
      tableData: [{
        documentNumber: '',
        creationTime: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        amount: '',
        serviceFee: '',
        status: ''
      }, {
        documentNumber: '',
        creationTime: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        amount: '',
        serviceFee: '',
        status: ''
      }, {
        documentNumber: '',
        creationTime: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        amount: '',
        serviceFee: '',
        status: ''
      }, {
        documentNumber: '',
        creationTime: '',
        fundAccount: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        amount: '',
        serviceFee: '',
        status: ''
      }],
      input3: ''
    }
  },
  methods: {
    btn() {
      if (this.searchTitle == '普通搜索') {
        this.searchTitle = '高级搜索'
      } else if (this.searchTitle == '高级搜索') {
        this.searchTitle = '普通搜索'
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
.el-select{
  width: 150px;
}
/deep/ .el-input-group__append{
  padding: 0 12px;
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
.generalSearch{
  font-size: 12px;
  color: #1f91df;
}
.middleBorder{
  min-height: 92px;
  border: 1px solid #e5e5e5;
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
/deep/.el-table th{
  background: #F5F7FA;
} 
</style>