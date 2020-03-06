<template>
 <div class="content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="operatorManagement">电子钱包(运营户)管理</span>
          <span class="platform">
            <el-select v-model="value" placeholder="Z.平台">
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
    <el-row>
      <el-button type="primary" class="export">导出</el-button>
      <el-input placeholder="公司编码" v-model="input3" class="input-with-select" suffix-icon="el-icon-search">
      </el-input>
      <span class="generalSearch" @click="btn">{{searchTitle}}</span>
    </el-row>
    <div class="middleBorder" v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="30">
          <el-col :span="20">
           <el-form-item label="商户类型：">
              <el-select v-model="formInline.region" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="珠宝门店" value="jewelryStore"></el-option>
                <el-option label="珠宝公司" value="jewelryCompany"></el-option>
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
            <el-form-item label="账户余额：">
              <span class="inputBox">
                <el-col :span="5">
                  <el-input v-model="sizeForm.balance"></el-input>
                </el-col>
                <el-col class="line" :span="2">~</el-col>
                <el-col :span="5">
                <el-input v-model="sizeForm.balance1"></el-input>
                </el-col>
              </span> 
            </el-form-item>
            <el-form-item label="累积充值金额：">
              <el-col :span="5">
                <el-input v-model="sizeForm.rechargeAmount"></el-input>
              </el-col>
              <el-col class="line" :span="2">~</el-col>
              <el-col :span="5">
              <el-input v-model="sizeForm.rechargeAmount1"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="累积充值次数：">
              <el-col :span="5">
                <el-input v-model="sizeForm.frequency"></el-input>
              </el-col>
              <el-col class="line" :span="2">~</el-col>
              <el-col :span="5">
              <el-input v-model="sizeForm.frequency1"></el-input>
              </el-col>
              </el-form-item> 
            <el-form-item label="最近充值时间：" label-width="120px">
              <el-date-picker
                v-model="form.rechargeTime"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
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
      width="150">
    </el-table-column>
    <el-table-column
      prop="creationTime"
      label="操作时间"
      width="150">
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
      searchTitle: '普通搜索',
      options: [{
        value: '选项1',
        label: 'Z.平台）'
      }],
      value: '',
      input3: '',
      formInline: {
        all: '',
        jewelryStore: '',
        jewelryCompany: ''
      },
      form: {
        companyCode: '',
        companyName: '',
        rechargeTime: ''
      },
      sizeForm: {
        balance: '',
        balance1: '',
        rechargeAmount: '',
        rechargeAmount1: '',
        frequency: '',
        frequency1: ''
      },
      tableData: [{
        documentNumber: '',
        creationTime: '',
        fundAccount: '',
        accountNam: '',
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
        accountNam: '',
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
        accountNam: '',
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
        accountNam: '',
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
        accountNam: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        amount: '',
        serviceFee: '',
        status: ''
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
.operatorManagement{
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
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 10px;
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