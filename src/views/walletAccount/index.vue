<template>
  <div class="content">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <span class="walletlist">电子钱包账户列表</span>
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
      <span class="generalSearch">普通搜索</span>
    </el-row>
    <div class="middleBorder">
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
            </el-form-item>
              <el-form-item label="门店编码：">
              <el-input v-model="form.storeCode"></el-input>
            </el-form-item>
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
  </div>
</template>
<script>
export default {
  data () {
    return {
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
    handleClick() {
      alert('button click');
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
.walletlist{
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
  margin-left: 60%;
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