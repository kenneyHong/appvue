<template>
  <el-dialog title="开通电子钱包" :visible="openEwallet" :before-close="Open">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="118px" class="demo-ruleForm" >
      <el-form-item label="*账户类型：">
        <el-radio-group v-model="ruleForm.EwalletType">
          <el-radio class="personalInformation" v-for="(item, index) in EwalletMasterEwalletTypes.TypeArray" :key="index" :label="item.KeyId">{{item.Value}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="the company" v-if="ruleForm.EwalletType == 1">
        <el-form-item label="*户名：">
          <el-input v-model="ruleForm.AccountName"></el-input>
          <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
        </el-form-item>
        <el-form-item label="*统一社会信用代码：">
          <el-input v-model="ruleForm.CreditCode"></el-input>
        </el-form-item>
        <el-form-item label="*法定代表人姓名：">
          <el-input v-model="ruleForm.LegalName"></el-input>
        </el-form-item>
        <el-form-item label="*法定代表人身份证：">
          <el-input v-model="ruleForm.Idcard"></el-input>
        </el-form-item>
        <el-form-item label="*手机号码：">
          <el-input v-model="ruleForm.Mobile"></el-input>
        </el-form-item>
        <el-form-item label="*邮箱：">
            <el-input v-model="ruleForm.Email"></el-input>
        </el-form-item>
        <el-form-item label="*所属区域：">
          <el-cascader
          v-model="value"
          :options="options"
          :props="{ multiple: true,checkStrictly: true }"
          clearable>
          </el-cascader>
        </el-form-item>
        <el-form-item label="*详细地址：">
          <el-input v-model="ruleForm.Address"></el-input>
        </el-form-item>
      </div>
      <div class="personal" v-if="ruleForm.EwalletType == 3" >
        <el-form-item label="*户名：">
          <el-input v-model="ruleForm.AccountName"></el-input>
          <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
        </el-form-item>
        <el-form-item label="*身份证号码：">
          <el-input v-model="ruleForm.Idcard"></el-input>
        </el-form-item>
        <el-form-item label="*手机号码：">
          <el-input v-model="ruleForm.Mobile"></el-input>
          <span class="reservedNumber">（必须为提现银行卡预留的手机，否则无法提现）</span>
        </el-form-item>
        <el-form-item label="*邮箱：">
          <el-input v-model="ruleForm.Email"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div  slot="footer" class="submit">
      <el-button type="primary" class="searchFor" @click="determine">确定</el-button>
      <el-button class="reset"  @click="cancel" >取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { EwalletMasterEwalletType } from '@/enums/index.js'
export default {
	props: {
		openEwallet: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
      EwalletMasterEwalletTypes: EwalletMasterEwalletType,
      value: [],
			ruleForm: {
        EwalletType: '1',
        AccountName: '',
        CreditCode: '',
        LegalName: '',
        Idcard: '',
        Mobile: '',
        Email: '',
        Address: ''
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
      }],
      rules: {
        accountType: [
          { accountType: true, message: '请选择活动资源', trigger: 'change' }
        ]
      }
		}
	},
	methods: {
    Open() {
      this.$emit('open', false)
		},
		cancel() {
			this.$emit('openEwallet', false)
		},
		determine() {
      this.$emit('identify', false, this.ruleForm)
    }
  }
}
</script>>
<style lang="scss" scoped>

</style>>