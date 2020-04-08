<template>
  <div>
    <el-dialog title="账户流水" :visible="accountFlows" width="80%" :before-close="closeDialog">
      <div class="accountFlowPopups">
        <div class="accountFlows">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
              <el-col :span="20">
                <el-form-item label="时间：" label-width="118px">
                  <el-date-picker
                    v-model="formInline.time"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="2016/01/01"
                    end-placeholder="2016/01/01">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="来源：">
                  <el-select v-model="formInline.source" placeholder="全部">
                    <el-option label="全部" value="all1"></el-option>
                    <el-option label="提现" value="withdraw"></el-option>
                    <el-option label="零售单" value="retailOrder"></el-option>
                    <el-option label="充值" value="recharge"></el-option>
                    <el-option label="SaaS订单" value="SaaSOrders"></el-option>
                    <el-option label="短信充值" value="SMSTopup"></el-option>
                    <el-option label="科技院订单" value="academyOrder"></el-option>
                    <el-option label="定制单" value="customOrder"></el-option>
                    <el-option label="转账" value="transfer"></el-option>
                    <el-option label="零售退货单" value="retailReturn"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button type="primary">搜索</el-button>
                <el-button>重置</el-button>
              </el-col>
            </el-row>
          </el-form>  
        </div>
        <el-table
        :data="accountFlowTableData"
        border>
          <el-table-column
            prop="serialNumber"
            label="流水号"
            min-width="150">
          </el-table-column>
          <el-table-column
            prop="operatingTime"
            sortable
            label="操作时间"
            width="140">
          </el-table-column>
          <el-table-column
            prop="incomeAndExpenses"
            label="收入/支出"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Amount"
            label="金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="accountBalance"
            label="帐户余额"
            width="130">
          </el-table-column>
          <el-table-column
            prop="source"
            label="来源"
            width="100">
          </el-table-column>
          <el-table-column
            prop="relatedDocuments"
            label="相关单据"
            width="130">
          </el-table-column>
          <el-table-column
            prop="transactionAmount"
            label="交易金额"
            width="100">
          </el-table-column>
          <el-table-column
            prop="serviceFee"
            label="服务费"
            width="100">
          </el-table-column>
          <el-table-column
            prop="operator"
            label="操作人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="Note"
            label="备注"
            width="100">
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
    </el-dialog>
	</div>
</template>
<script>
export default {
  props: {
		accountFlows: {
			type: Boolean,
			default: false
    }
	},
  data () {
    return {
			formInline: {
				all: '',
				jewelryCompany: '',
				jewelryStore: '',
				giftSupplier: '',
				gift: '',
				time: '',
				source: ''
			},
			accountFlowTableData: [{
        serialNumber: '',
        operatingTime: '',
        incomeAndExpenses: '',
        Amount: '',
        accountBalance: '',
        source: '',
        relatedDocuments: '',
        transactionAmount: '',
        serviceFee: '',
        operator: '',
        Note: ''
      }]
    }
	},
	methods: {
		closeDialog() {
			this.$emit('closeDia', false)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>