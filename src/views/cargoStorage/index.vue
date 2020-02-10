<template>
  <div class="content">
    <el-button type="primary" class="newButton">新建</el-button>
    <el-dropdown>
    <el-button class="primary">
      批量操作<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>黄金糕</el-dropdown-item>
      <el-dropdown-item>狮子头</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item>双皮奶</el-dropdown-item>
      <el-dropdown-item>蚵仔煎</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
    <el-button class="customize">自定义列</el-button>
    <div class="rightLayout">
      <el-dropdown>
        <el-button class="status">
          所有状态<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-input placeholder="请输入单号" v-model="input3" class="input-with-select">
        <el-dropdown slot="prepend">
          <el-button class="status">
            按单号<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-input>
      <span class="generalSearch">普通搜索</span>
    </div> 
    <div class="middleBorder">
      <el-form ref="form" :inline="true" class="demo-form-inline" :model="form" label-width="120px">
        <div class="leftlayout">
          <el-form-item label="单据编号：">
            <el-input v-model="form.documentNumber"></el-input>
          </el-form-item>
          <el-form-item label="供应商：">
            <el-input v-model="form.supplier"></el-input>
          </el-form-item>
          <el-form-item label="创建时间：">
            <el-date-picker
              v-model="form.creationTime"
              type="date"
              placeholder="2016/01/01-2016/02/01">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="送货单号：">
            <el-input v-model="form.singleNumber"></el-input>
          </el-form-item>
          <el-form-item label="采购员：">
            <el-input v-model="form.buyer"></el-input>
          </el-form-item>
          <el-form-item label="最后操作时间：">
            <el-date-picker
              v-model="form.lastMinute"
              type="date"
              placeholder="2016/01/01-2016/02/01">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="备注：">
            <el-input v-model="form.note"></el-input>  
          </el-form-item>
        </div>
        <div class="rightLayout">
          <el-form-item>
            <el-button type="primary">搜索</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </div>  
      </el-form>
    </div>
    <el-table
      :data="tableData">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="documentNumber"
        label="单号编号"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="supplier"
        label="供应商"
        width="120">
      </el-table-column>
      <el-table-column
        prop="source"
        label="来源"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="creationTime"
        sortable
        label="创建时间"
        width='180'>
      </el-table-column>
      <el-table-column
        prop="buyer"
        label="采购员"
        width='120'>
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="采购数量">
      </el-table-column>
      <el-table-column
        prop="cost"
        label="采购成本">
      </el-table-column>
      <el-table-column
        prop="lastMinute"
        sortable
        label="最后操作时间"
        width='180'>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
        <el-table-column
        prop="operating"
        label="操作"> 
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
     <el-pagination
        background
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input3: '',
      select: '',
      form: {
        documentNumber: '',
        supplier: '',
        creationTime: '',
        singleNumber: '',
        buyer: '',
        lastMinute: '',
        note: ''
      },
      tableData: [{
        documentNumber: '17000001',
        supplier: 'xxxxx公司',
        source: '自建',
        creationTime: '',
        buyer: '张三',
        quantity: '100',
        cost: '10000.00',
        lastMinute: '',
        status: '草稿',
        operating: '查看'
      }, {
        documentNumber: '17000001',
        supplier: '总部',
        source: '总部分发',
        creationTime: '',
        buyer: '',
        quantity: '',
        cost: '',
        lastMinute: '',
        status: '待审查',
        operating: '查看'
      }, {
        documentNumber: '17000001',
        supplier: '总部',
        source: '总部分发',
        creationTime: '',
        buyer: '',
        quantity: '',
        cost: '',
        lastMinute: '',
        status: '待审查',
        operating: '查看'
      }, {
        documentNumber: '17000001',
        supplier: '总部',
        source: '总部分发',
        creationTime: '',
        buyer: '',
        quantity: '',
        cost: '',
        lastMinute: '',
        status: '待审查',
        operating: '查看'
      }]
    }
  },
  methods: {
  },
  mounted () {
  },
  watch: {},
  components: {}
}
</script>
<style lang="scss" scoped>
.content {
  .newButton{
    width: 100px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .primary{
    width: 100px;
    height: 31px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .customize{
    width: 100px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .rightLayout{
    float: right;
    margin-top: 10px;
    .status{
      width: 100px;
      height: 30px;
      
    }
    .el-input-group{
      width: 200px;
    }
    .generalSearch{
      font-size: 12px;
      color: #1f91df;
    }
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
   .leftlayout{
     float: left;
     width: 70%;
   }
   .rightLayout{
     float: right;
     width: 30%;
   }
  }
  .el-table{
    border-top: 1px solid #e5e5e5;
    margin-top: 10px;
  }
  
}
</style>