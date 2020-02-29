<template>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="operatorsFlow">电子钱包(基本户)流水</span>
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
        <div class="lowerLayout">
          <el-row :gutter="25">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="number1">￥300,000.00</div>
                <div class="accountBalance">期初账户余额</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div class="number2">￥100,000.00</div>
                <div class="currentIncome">本期收入</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div class="number3">￥200,000.00</div>
                <div class="currentExpenditure">本期支出</div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <div class="number4">￥200,000.00</div>
                <div class="endingAccountbalance">期末账户余额</div>
              </div>
            </el-col>
          </el-row> 
        </div>      
      </el-form>
    </div>
     <el-table
    :data="tableData"
      border>
      <el-table-column
        prop="creationTime"
        sortable
        label="操作时间"
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
      value: '',
      options: [{
        value: '选项1',
        label: 'A.珠宝门店（一号一店）'
      }, {
        value: '选项2',
        label: 'B.珠宝公司（一号一店）'
      }, {
        value: '选项4',
        label: 'D.珠宝公司（一号多店）'
      }, {
        value: '选项5',
        label: 'E.珠宝集团'
      }, {
        value: '选项8',
        label: 'Z.平台'
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
.operatorsFlow{
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
  border: 1px solid #e5e5e5;
  margin-left: 10px;
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