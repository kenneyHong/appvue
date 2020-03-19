<template>
  <div class="content">
    <div class="formHeader">
      <el-row>
        <el-button class="rechargeStatistics"  @click="statistics">充值统计</el-button>
        <el-button  class="rechargeStatement"@click="tj">充值对账单</el-button>
      </el-row>
    </div>
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
              <el-form-item label="状态：">
                <el-select v-model="formInline.region1" placeholder="全部">
                  <el-option label="全部" value="all1"></el-option>
                  <el-option label="已支付" value="Paid"></el-option>
                  <el-option label="未支付" value="unpaid"></el-option>
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
        <div class="number1">0</div>
        <div class="accountBalance">商家数量</div>
      </div>
      <div class="grid-content bg-purple-light">
        <div class="number2">0</div>
        <div class="currentIncome">充值次数</div>
      </div>
      <div class="grid-content bg-purple1">
        <div class="number3">￥0.00</div>
        <div class="currentExpenditure">充值金额</div>
      </div>
   </div>      
    <div class="formClassification"  v-if="rechargeStatistics == '充值统计'">
      <el-table 
      :data="tableData"
        border
        >
        <el-table-column
          prop="region"
          label="商户类型">
        </el-table-column>
        <el-table-column
          prop="companyCode"
          label="公司编码"
          width="170">
        </el-table-column>
        <el-table-column
          prop="companyName"
          label="公司名称"
          width="170">
        </el-table-column>
        <el-table-column
          prop="storeCode"
          label="门店编码"
          width="170">
        </el-table-column>
        <el-table-column
          prop="name"
          label="门店名称"
          width="170">
        </el-table-column>
        <el-table-column
          prop="rechargeTimes"
          label="充值次数"
          width="170">
        </el-table-column>
        <el-table-column
          prop="rechargeAmount"
          label="充值金额"
          width="170">
        </el-table-column>
      </el-table>
    </div>
    <div class="formClassification1" v-if="rechargeStatistics == '充值对账单'">  
      <el-table
      :data="tableData1"
        border>
        <el-table-column
          prop="time"
          label="时间"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="rechargeNumber"
          label="充值单号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="serialNumber"
          label="流水号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="region"
          label="商户类型"
          width="170">
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
          prop="rechargeAmount"
          label="充值金额"
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
        <el-table-column
          prop="status"
          label="状态"
          width="120">
        </el-table-column>
      </el-table>
    </div>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      rechargeStatistics: '充值统计',
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
        Paid: '',
        unpaid: ''
      },
      tableData: [{
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeTimes: '',
        rechargeAmount: ''
      }, {
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeTimes: '',
        rechargeAmount: ''
      }, {
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeTimes: '',
        rechargeAmount: ''
      }],
      tableData1: [{
        time: '',
        rechargeNumber: '',
        serialNumber: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeAmount: '',
        operator: '',
        Note: '',
        status: ''
      }, {
        time: '',
        rechargeNumber: '',
        serialNumber: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeAmount: '',
        operator: '',
        Note: '',
        status: ''
      }, {
        time: '',
        rechargeNumber: '',
        serialNumber: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        rechargeAmount: '',
        operator: '',
        Note: '',
        status: ''
      }]
    }
  },
  methods: {
    statistics() {
      if (this.rechargeStatistics == '充值对账单') {
        this.rechargeStatistics = '充值统计'
      }
    },
    tj() {
      if (this.rechargeStatistics == '充值统计') {
        this.rechargeStatistics = '充值对账单'
      }
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
.formHeader{
  .el-button{
  background: #ffffff;
  }
  .rechargeStatement{
  margin-left: -3px;
  border-bottom: none;
  }
  .rechargeStatistics{
    border-right: none;
    margin-left: 10px;
    border-bottom: none;
  }
}
.middleBorder{
  min-height: 92px;
  border-top: 1px solid #e5e5e5;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  .el-col{
    margin-top: 10px;
  }
}
.lowerLayout{
  margin-left: 10px;
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
  }
  .bg-purple-light {
    background: #e5e9f2;
    float: left;
    border-right: 1px solid #777777;
    line-height: 2em;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .grid-content {
    min-height: 56px;
    text-align: center;
    width: 33%;
    padding-top: 5px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #e5e9f2;
  }
}
.el-table {
  padding-top: 20px;
  margin-left: 10px;
}
.el-table--border{
  border: none;
}
</style>