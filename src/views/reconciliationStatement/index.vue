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
              <el-select v-model="form.region" placeholder="全部">
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
          <el-button type="text" size="small" @click="accountFlows = true"> 账户流水</el-button>
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
    <account-flow :accountFlows="accountFlows" @closeDia="closedia"></account-flow>
  </div>
</template>
<script>
import accountFlow from '@/components/accountFlow.vue'
export default {
  data() {
    return {
      accountFlows: false,
      form: {
        time: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        storeName: '',
        region: '全部'
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
  },
  methods: {
    closedia() {
      this.accountFlows = false
    }
  },
  components: {
    accountFlow
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