<template>
  <div class="content">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="accountManagement">电子钱包账户管理</span>
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
    <div class="middleBorder" v-if="searchTitle == '高级搜索'">
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
        width="150">
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
        width="130">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">流水</el-button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTitle: '普通搜索',
      options: [{
        value: '选项1',
        label: 'Z.平台'
      }, {
        value: '选项2',
        label: 'D.珠宝公司'
      }, {
        value: '选项3',
        label: 'E.珠宝集团'
      }],
      value: '',
      input3: '',
      tableData: [{
        documentNumber: '170000',
        creationTime: '',
        founder: '张三',
        accountType: '公司',
        accountName: 'xxxxxx',
        region: '珠宝公司',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        reviewTime: '',
        review: '',
        status: '',
        operating: ''
      }, {
        documentNumber: '170000',
        creationTime: '',
        founder: '张三',
        accountType: '公司',
        accountName: 'xxxxxx',
        region: '珠宝公司',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        reviewTime: '',
        review: '',
        status: '',
        operating: ''
      }, {
        documentNumber: '',
        creationTime: '',
        founder: '',
        accountType: '',
        accountName: '',
        region: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        name: '',
        reviewTime: '',
        review: '',
        status: '',
        operating: ''
      }],
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
      }
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
.accountManagement{
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
</style>