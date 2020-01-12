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
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form> 
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
        creationTime: ''
      }
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
   
  }
}
</style>