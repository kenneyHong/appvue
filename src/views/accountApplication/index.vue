<template>
  <div class="content">
    <el-row>
      <el-col :span="16">
        <el-button type="primary" class='export'>导出</el-button>
        <el-button type="primary" class='auditRequirements' @click="auditRequirements = true">审核规定</el-button>
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
        <span class="generalSearch"  @click="btn">{{searchTitle}}</span>
      </el-col>    
    </el-row>
    <div class="middleBorder" v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="单据编号：">
              <el-input v-model="form.PetitionCode"></el-input>
            </el-form-item>
            <el-form-item label="账户类型">
              <el-select v-model="form.EwalletType" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="公司" value="company"></el-option>
                <el-option label="个人" value="personal"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="form.AccountName"></el-input>
            </el-form-item>
            <el-form-item label="创建时间：" label-width="120px">
              <el-date-picker
                v-model="form.CreateTime"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
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
    :data="tableData"
      border>
      <el-table-column
        prop="PetitionCode"
        label="单号编号"
        min-width="150">
      </el-table-column>
      <el-table-column
        prop="CreateTime"
        sortable
        label="创建时间"
        width='150'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建人"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="EwalletType"
        label="账户类型"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="AccountName"
        label="户名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="CharacterType"
        label="商户类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="CompanyCode"
        label="公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="CompanyName"
        label="公司名称"
        width="150">
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
      <el-table-column
        prop="CheckTime"
        label="审核时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="CheckUser"
        label="审核人"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="120">
      </el-table-column>
      <el-table-column
        prop="operating"
        label="操作"
        width='150'> 
        <template slot-scope="scope">
          <el-button  type="text" size="small"  @click="lookOver = true">查看</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">作废</el-button>
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
    <el-dialog  title="审核规则" :visible.sync="auditRequirements">
      <div class="auditRules">
        <div class="documentReviewRules">单据审核规则:</div>
        <div class="smartSelection">
          <el-radio v-model="radio" label="1" >自动审核</el-radio>
          <el-radio v-model="radio" label="2">人工审核</el-radio>
        </div>
        <div slot="footer" class="submit">
          <el-button type="primary" class="searchFor"  @click="auditRequirements = false">确定</el-button>
          <el-button class="reset"  @click="auditRequirements = false">取消</el-button>
        </div>
      </div>
    </el-dialog> 
    <el-dialog title="查看" :visible.sync="lookOver">
      <div class="accountType">
        <!-- <div class="typeOfCompany">
            <table border="1"  cellpadding="0" cellspacing="0"> 
            <tr>
              <th>*账户类型：</th>
              <td>Savings</td>
            </tr>
            <tr>
              <th>*户名：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*统一社会信用代码：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*法定代表人姓名：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*法定代表人身份证：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*手机号码：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*所属区域：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*详细地址：</th>
              <td>$100</td>
            </tr>
          </table>
        </div>   -->
        <div class= "personalType">
          <table border="1"  cellpadding="0" cellspacing="0">
            <tr>
              <th>*账户类型：</th>
              <td>Savings</td>
            </tr>
            <tr>
              <th>*户名：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*身份证号码：</th>
              <td>$100</td>
            </tr>
            <tr>
              <th>*手机号码：</th>
              <td>$100</td>
            </tr>
          </table>
        </div>
        <div class="submit">
          <el-button type="primary" class="review" @click="lookOver = false">审核</el-button>
          <el-button class="Void"  @click="lookOver = false">作废</el-button>
        </div>
      </div>
    </el-dialog> 
  </div>
</template>
<script>
import { CLEARING_API_GETOPENLIST } from '@/apis/user.js'
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '所有状态'
      }, {
        value: '选项2',
        label: '待审核'
      }, {
        value: '选项3',
        label: '审核通过'
      }, {
        value: '选项4',
        label: '已作废'
      }],
      value: '',
      lookOver: false,
      auditRequirements: false,
      searchTitle: '普通搜索',
      radio: '1',
      voidNote: '',
      form: {
        PetitionCode: '',
        EwalletType: '',
        AccountName: '',
        CreateTime: '',
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
      tableData: [],
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
    },
    getData() {
      CLEARING_API_GETOPENLIST(this.form).then(res => {
        this.tableData = res.Data.Subset
      })
    },
    reset() {
      this.form = {
        PetitionCode: '',
        EwalletType: '',
        AccountName: '',
        CreateTime: '',
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
  border-radius: 4px;
}
.auditRequirements{
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
.auditRules{ 
  .documentReviewRules{
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .submit{
    margin-top: 20px;
    .searchFor{
    width: 100px;
    border-radius: 3px;
    }
    .reset{
      width: 100px;
      border-radius: 3px;
    }
  } 
}
.automaticReview{
  font-size: 14px;
  .reviewContent{
    .documentNumber{
      float: left;
      margin-right: 20px;
    }
  }
  .auditResults{
    margin-top: 20px;
  }
  .void{
    margin-left: 74px;
    .void1{
      width: 200px;
    }
  }
  .submit{
    margin-top: 15px;
    .searchFor{
    width: 100px;
    border-radius: 3px;
    }
    .reset{
      width: 100px;
      border-radius: 3px;
    }
  }
}
.accountType{
  .submit{
    margin-top: 15px;
    .review{
    width: 100px;
    border-radius: 3px;
    }
    .Void{
      width: 100px;
      border-radius: 3px;
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
}
</style>