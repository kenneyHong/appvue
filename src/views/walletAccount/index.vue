<template>
  <div class="content">
    <el-row>
      <el-col :span="16">
        <el-button type="primary" class='export'>导出</el-button>
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
    <div class="middleBorder"  v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="资金账号：">
              <el-input v-model="form.CapitalCode"></el-input>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="form.AccountName"></el-input>
            </el-form-item>
            <el-form-item label="银行电子账号：">
              <el-input v-model="form.BankEcode"></el-input>
            </el-form-item>
            <el-form-item label="开户时间：" label-width="120px">
              <el-date-picker
                v-model="form.LastOpenTime	"
                type="daterange"
                range-separator="-"
                start-placeholder="2016/01/01"
                end-placeholder="2016/01/01">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="商户类型：">
              <el-select v-model="form.CharacterType" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="珠宝门店" value="jewelryStore"></el-option>
                <el-option label="珠宝公司" value="jewelryCompany"></el-option>
                <el-option label="珠宝集团" value="jewelleryGroup"></el-option>
                <el-option label="礼品供应商" value="giftSupplier"></el-option>
                <el-option label="平台" value="gift"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公司编码：">
              <el-input v-model="form.CompanyCode"></el-input>
            </el-form-item>
            <el-form-item label="公司名称：">
              <el-input v-model="form.CompanyName"></el-input>
            </el-form-item>
            <el-form-item label="门店编码：">
              <el-input v-model="form.StoreCode"></el-input>
            </el-form-item>
            <el-form-item label="门店名称：">
              <el-input v-model="form.StoreName"></el-input>
            </el-form-item>
            <!-- <el-form-item label="账户:">
              <el-row :gutter="20">
                <el-col :span="10">
                  <el-input v-model="form.name"></el-input>
                </el-col>
                <el-col class="line" :span="3">~</el-col>
                <el-col :span="10">
                <el-input v-model="form.name"></el-input>
                </el-col>
              </el-row>
            </el-form-item> -->
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button type="primary" @click="getData">搜索</el-button>
              <el-button @click="reset">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table
    :data="tableData">
      <el-table-column
        prop="CapitalCode"
        sortable
        label="资金账号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="AccountName"
        label="户名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="BankEcode"
        label="银行电子账号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="LastOpenTime"
        sortable
        label="开户时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="CharacterType"
        label="商户类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="CompanyCode"
        label="公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="CompanyName"
        label="公司名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="StoreCode"
        label="门店编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="StoreName"
        label="门店名称"
        width="120">
      </el-table-column>
      <el-table-column label="账户余额"  >
        <el-table-column
          prop="SubSumed"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="BaseSumed"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="OpSumed"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="可用金额">
        <el-table-column
          prop="SubValid"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="BaseValid"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="OpValid"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="锁定金额">
        <el-table-column
          prop="SubLock"
          label="总金额"
          width="100">
        </el-table-column>
        <el-table-column
          prop="BaseLock"
          label="基本账户"
          width="100">
        </el-table-column>
        <el-table-column
          prop="OpLock"
          label="运营账户"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="State"
        label="账户状态"
        width="100">
        <template slot-scope="scope">
          {{EwalletMasterStates.Types[scope.row.State]}}
        </template>
      </el-table-column>
      <el-table-column
        prop="operating"
        label="操作"
        width="150">
        <template>
          <el-button type="text" size="small" @click="View = true">查看</el-button>
          <el-button  type="text" size="small" @click="text = true">账户流水</el-button>
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
    <div class="tableView">
      <el-dialog title="查看" :visible.sync="View">
        <div class="basicMaterial" >
          <el-radio-group v-model="Switch" style="margin-bottom: 30px;">
            <el-radio-button label="基本资料" @click="basicMaterial">基本资料</el-radio-button>
            <el-radio-button label="开通日志" @click="openLog">开通日志</el-radio-button>
          </el-radio-group>
          <div class="openLog" v-if="Switch == '开通日志'">
            <el-table
              :data="openLogtableData"
              border
              style="width: 100%">
              <el-table-column
                prop="operatingTime"
                label="操作时间"
                min-width="130">
              </el-table-column>
              <el-table-column
                prop="operationType"
                label="操作类型"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="entrance"
                label="入口"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="operator"
                label="操作人"
                min-width="120">
              </el-table-column>
              <el-table-column
                prop="Note"
                label="备注"
                min-width="180">
              </el-table-column>
            </el-table>
          </div>
          <!-- <div class="companyBasicInformation">
            <table border="1"  cellpadding="0" cellspacing="0">
              <tr>
                <th>资金账号：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>账户类型：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>户名：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>银行电子账户：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>开户时间：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>统一社会信用代码：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>法定代表人姓名：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>法定代表人身份证：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>手机号码：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>所属区域：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>详细地址：</th>
                <td>Savings</td>
              </tr>
            </table>  
          </div> -->
          <div class="PersonalBasicInformation" v-if="Switch == '基本资料'">
            <table border="1"  cellpadding="0" cellspacing="0">
              <tr>
                <th>资金账号：</th>
                <td>Savings</td>
              </tr>
              <tr>
                <th>账户类型：</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>户名：</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>银行电子账户：</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>开户时间：</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>身份证号码：</th>
                <td>$100</td>
              </tr>
              <tr>
                <th>手机号码：</th>
                <td>$100</td>
              </tr>
            </table>  
          </div>
        </div>
      </el-dialog>
    </div>
    <accountFlow :accountFlows="text" @closeDia="shutDown"></accountFlow>
  </div>
</template>
<script>
import accountFlow from '@/components/accountFlow.vue'
import { CLEARING_API_GETACCOUNTLIST } from '@/apis/user.js'
import { EwalletMasterState } from '@/enums/index.js'
export default {
  data () {
    return {
      EwalletMasterStates: EwalletMasterState,
      text: false,
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
      input3: '',
      View: false,
      Switch: '基本资料',
      accountFlow: false,
      tabPosition: 'left',
      form: {
        CapitalCode: '',
        AccountName: '',
        BankEcode: '',
        LastOpenTime: '',
        CharacterType: '',
        CompanyCode: '',
        CompanyName: '',
        StoreCode: '',
        StoreName: '',
        PageSize: 10,
        PageIndex: 1,
        OrderBy: 1,
        IsAsced: 3
      },
      sizeForm: {
        name: ''
      },
      tableData: []
    }
  },
  methods: {
    btn() {
      if (this.searchTitle == '普通搜索') {
        this.searchTitle = '高级搜索'
      } else if (this.searchTitle == '高级搜索') {
        this.searchTitle = '普通搜索'
      }
    },
    basicMaterial() {
      if (this.Switch == '开通日志') {
        this.Switch = '基本资料'
      }
    },
    openLog() {
      if (this.Switch == '基本资料') {
        this.Switch = '开通日志'
      }
    },
    shutDown() {
      this.text = false
    },
    getData() {
      CLEARING_API_GETACCOUNTLIST(this.form).then(res => {
        this.tableData = res.Data.Subset
      })
    },
    reset() {
      this.form = {
        CapitalCode: '',
        AccountName: '',
        BankEcode: '',
        LastOpenTime: '',
        CharacterType: '',
        CompanyCode: '',
        CompanyName: '',
        StoreCode: '',
        StoreName: '',
        PageSize: 10,
        PageIndex: 1,
        OrderBy: 1,
        IsAsced: 3
      }
      this.getData()
    }
  },
  mounted() {
    this.getData()
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
.el-select{
  width: 150px;
}
/deep/ .el-input-group__append{
  padding: 0 12px;
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
.export{
  width: 100px;
  height: 30px;
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
  .line{
    // margin-left: 10px;
    text-align: center;
  }
  .demo-form-inline{
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  .el-date-editor{
    width: 178px;
  }
}
.tableView{
  .companyBasicInformation{
    margin-top: 20px;
  }
}
.accountFlowPopups{
  .el-col{
    margin-left: 10px;
  }
}
th{
  border: 1px solid #cccccc;
  width: 150px;
  border-bottom: none;
  background-color: #dddddd;
  height: 32px;
  text-align: center;
  line-height: 3em;
}
td{
  border: 1px solid #cccccc;
  border-bottom: none;
  border-left: none;
  height: 32px;
  line-height: 3em;
}
tr:last-child td {
  border-bottom: 1px solid #cccccc;
  height: 32px;
  line-height: 3em;
}
tr:last-child th{
  border-bottom: 1px solid #cccccc;
  height: 32px;
  text-align: center;
  line-height: 3em;
}
</style>