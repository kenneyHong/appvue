<template>
  <div class="content">
    <el-row>
      <el-col :span="18">
        <el-button type="primary" class='export'>导出</el-button>
        <el-button type="primary" class='auditRequirements' @click="auditRequirements = true">审核规定</el-button>
      </el-col>
      <el-col :span="6">
        <el-dropdown>
          <el-button type="primary">
            所有状态<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>待审核</el-dropdown-item>
            <el-dropdown-item>审核通过</el-dropdown-item>
            <el-dropdown-item>已作废</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-input placeholder="公司编码" v-model="input3" class="input-with-select" suffix-icon="el-icon-search">
        </el-input>
        <span class="generalSearch"  @click="btn">{{searchTitle}}</span>
      </el-col>    
    </el-row>
    <div class="middleBorder" v-if="searchTitle == '高级搜索'">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="118px">
        <el-row :gutter="20">
          <el-col :span="20">
            <el-form-item label="单据编号：">
              <el-input v-model="form.documentNumber"></el-input>
            </el-form-item>
            <el-form-item label="账户类型">
              <el-select v-model="formInline.accountType" placeholder="全部">
                <el-option label="全部" value="all"></el-option>
                <el-option label="公司" value="company"></el-option>
                <el-option label="个人" value="personal"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="户名：">
              <el-input v-model="form.accountName"></el-input>
            </el-form-item>
            <el-form-item label="创建时间：" label-width="120px">
              <el-date-picker
                v-model="form.creationTime"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
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
        label="创建时间"
        width='150'>
      </el-table-column>
      <el-table-column
        prop="founder"
        label="创建人"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="accountType"
        label="账户类型"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="accountName"
        label="户名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="region"
        label="商户类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="companyCode"
        label="公司编码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="companyName"
        label="公司名称"
        width="150">
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
      <el-table-column
        prop="reviewTime"
        label="审核时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="review"
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
          <el-button type="primary" class="searchFor"  @click="outerVisible = true">确定</el-button>
          <el-button class="reset"  @click="auditRequirements = false">取消</el-button>
        </div>
      </div>
    </el-dialog> 
    <el-dialog :visible.sync="outerVisible">
      <div class="automaticReview">
        <div class="reviewContent">
          <span class="documentNumber">单据编号：xxxxx00001</span>
          <span class="founder">创建人：张三 2016-01-01</span>
        </div>
        <div class="auditResults">
          <span class="auditResults1">审核结果：</span>
          <span class="examinationPassed"><el-radio v-model="radio" label="1">审核通过</el-radio></span>
          <div class= "void">
            <el-radio v-model="radio" label="2">作废</el-radio>
            <el-input  class="void1" v-model="voidNote" placeholder="作废原因备注"></el-input>
          </div>
        </div>
        <div class="submit">
          <el-button type="primary" class="searchFor">确定</el-button>
          <el-button class="reset"   @click="outerVisible = false">取消</el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="查看" :visible.sync="lookOver">
      <div class="accountType">
        <div class="typeOfCompany">
          <el-form :model="ruleForm" ref="ruleForm" label-width="118px" class="demo-ruleForm" >
            <!-- <el-form-item label="*账户类型：">
              <el-input v-model="ruleForm.accountType"></el-input>
            </el-form-item>
            <el-form-item label="*户名：">
              <el-input v-model="ruleForm.accountName"></el-input>
            </el-form-item>
            <el-form-item label="*统一社会信用代码：">
              <el-input v-model="ruleForm.creditCode"></el-input>
            </el-form-item>
            <el-form-item label="*法定代表人姓名：">
              <el-input v-model="ruleForm.legalName"></el-input>
            </el-form-item>
            <el-form-item label="*法定代表人身份证：">
              <el-input v-model="ruleForm.legalIdentityCard"></el-input>
            </el-form-item>
            <el-form-item label="*手机号码：">
              <el-input v-model="ruleForm.mobilePhone"></el-input>
            </el-form-item>
            <el-form-item label="*所属区域：">
              <el-input v-model="ruleForm.districtBelong"></el-input>
            </el-form-item>
            <el-form-item label="*详细地址：">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>-->
            <div class= "personalType">
              <el-form-item label="*账户类型：">
                <el-input v-model="ruleForm.accountType"></el-input>
              </el-form-item>
              <el-form-item label="*户名：">
                <el-input v-model="ruleForm.accountName"></el-input>
              </el-form-item>
              <el-form-item label="*身份证号码：">
                <el-input v-model="ruleForm.identificationNumber"></el-input>
              </el-form-item>
              <el-form-item label="*手机号码：">
                <el-input v-model="ruleForm.mobilePhone"></el-input>
              </el-form-item>
            </div>
          </el-form>
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
export default {
  data() {
    return {
      reset: false,
      lookOver: false,
      auditRequirements: false,
      searchTitle: '普通搜索',
      radio: '1',
      outerVisible: false,
      voidNote: '',
      form: {
        documentNumber: '',
        accountName: '',
        creationTime: '',
        companyCode: '',
        companyName: '',
        storeCode: '',
        storeName: ''
      },
      ruleForm: {
        accountType: '',
        accountName: '',
        creditCode: '',
        legalName: '',
        legalIdentityCard: '',
        mobilePhone: '',
        districtBelong: '',
        address: '',
        identificationNumber: ''
      },
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
      formInline: {
        all: '',
        company: '',
        personalL: '',
        ewelryStore: '',
        jewelryCompany: '',
        jewelleryGroup: '',
        giftSupplier: '',
        gift: ''
      },
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
}
</style>