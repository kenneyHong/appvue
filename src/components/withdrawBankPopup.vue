<template>
  <div class="changePopupLayout">
    <el-dialog title="未绑定提现卡" :visible="replace" :before-close="withdrawalCard">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="*开户名称：">
          <el-input placeholder="xxxxxxxxxx公司" v-model="form.mosquitoNet" :disabled="true"></el-input>
          <span class="sameName">（提现卡必须为开通资金账户的同名账户）</span>
        </el-form-item>
        <el-form-item label="*银行：">
          <el-select v-model="form.bank" placeholder="请选择">
            <el-option label="请选择" value="pleaseChoose"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*卡号：">
          <el-input v-model="form.cardNumber"></el-input>
        </el-form-item>
        <el-form-item label="*开户地区：">
          <el-cascader
            :options="operatio"
            :props="{ multiple: true,checkStrictly: true }"
            clearable>
          </el-cascader>
        </el-form-item>
        <el-form-item label="*开户网点：">
          <el-select v-model="form.accountOpening" placeholder="请选择网点">
            <el-option label="请选择网点" value="PleaseSelectBranch"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*银行预留手机：">
          <el-input v-model="form.reservePhone"></el-input>
        </el-form-item>
      </el-form>
      <div class="description">注：每天最多只能提交3次</div>
      <div class="submit">
        <el-button type="primary" class="nextStep" @click="nextStep">下一步</el-button>
        <el-button class="reset"  @click="abolish" >取消</el-button>
      </div>
    </el-dialog>  
  </div>
  <!--<div class="untiedCashCard">
    <el-dialog  title="未绑定银行卡" :visible.sync="withdraw">
      <div class="bindWithdrawal">
        <i class="el-icon-info"></i>
        <div class="unboundCard">您尚未绑定提现卡，请先绑定后再提现！</div>
      </div>
      <div class="untiedsubmit">
        <el-button type="primary" class="tiedCardNow"  @click="replace = true">立即绑卡</el-button>
        <el-button class="untiedCashCardreset" @click="withdraw = false">取消</el-button>
      </div>
    </el-dialog>
  </div>-->
</template>
<script>
export default {
  props: {
		replace: {
			type: Boolean,
			default: false
    }
	},
  data() {
    return {
      form: {
        time: '',
        mosquitoNet: '',
        cardNumber: '',
        reservePhone: '',
        accountOpening: '',
        bank: ''
      },
      options: [{
        value: 'shen',
        label: '省',
        children: [{
          value: 'guangdongshen',
          label: '广东省'
        }]
      }, {
        value: 'shi',
        label: '市',
        children: [{
          value: 'shentoushi',
          label: '汕头市'
        }]
      }, {
        value: 'quexian',
        label: '区/县',
        children: [{
          value: 'chaoyang',
          label: '潮阳区'
        }]
      }],
      operatio: [{
        value: 'shen',
        label: '省',
        children: [{
          value: 'guangdongshen',
          label: '广东省'
        }]
      }, {
        value: 'shi',
        label: '市',
        children: [{
          value: 'shentoushi',
          label: '汕头市'
        }]
      }]
    }
  },
  methods: {
    withdrawalCard() {
			this.$emit('Card', false)
    },
    abolish() {
      this.$emit('doAwayWith', false)
    },
    nextStep() {
      this.$emit('pace', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.changePopupLayout{
  .description{
    color: #ff0000;
  }
  .sameName{
    color: #999999;
  }
  .submit{
    margin-top: 10px;
    margin-left: 70px;
    .nextStep{
      width: 100px;
      border-radius: 3px;
    }
    .reset{
      width: 100px;
      border-radius: 3px;
    }
  }
}
.untiedCashCard{
  .bindWithdrawal{
    .el-icon-info{
      color: #333333;
      font-size: 36px;
      float: left;
      margin-right: 20px;
    }
    .unboundCard{
      font-size: 16px;
      line-height: 2.5em;
    }
  }
  .untiedsubmit{
    margin-top: 20px;
    .tiedCardNow{
      width: 100px;
      border-radius: 3px;
    }
    .untiedCashCardreset{
      width: 100px;
      border-radius: 3px;
    }
  }
}
</style>>