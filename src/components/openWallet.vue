<template>
    <el-dialog title="开通电子钱包" :visible="openEwallet" :before-close="Open">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="118px" class="demo-ruleForm" >
            <el-form-item label="*账户类型：">
            <el-radio-group v-model="ruleForm.accountType">
                <el-radio class="personalInformation"  label="公司"></el-radio>
                <el-radio class="personalInformation"  label="个人"></el-radio>
            </el-radio-group>
            </el-form-item>
            <div class="the company" v-if="ruleForm.accountType == '公司'">
            <el-form-item label="*户名：">
                <el-input v-model="ruleForm.accountName"></el-input>
                <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
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
            <el-form-item label="*邮箱：">
                <el-input v-model="ruleForm.mailbox"></el-input>
            </el-form-item>
            <el-form-item label="*所属区域：">
                <el-cascader
                :options="options"
                :props="{ multiple: true,checkStrictly: true }"
                clearable>
                </el-cascader>
            </el-form-item>
            <el-form-item label="*详细地址：">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            </div>
            <div class="personal" v-if="ruleForm.accountType == '个人'" >
            <el-form-item label="*户名：">
                <el-input v-model="ruleForm.accountName1"></el-input>
                <span class="relatedInformation">（提现时必须为同名账户，填填写完整名称）</span>
            </el-form-item>
            <el-form-item label="*身份证号码：">
                <el-input v-model="ruleForm.identityCard1"></el-input>
            </el-form-item>
            <el-form-item label="*手机号码：">
                <el-input v-model="ruleForm.mobilePhone1"></el-input>
                <span class="reservedNumber">（必须为提现银行卡预留的手机，否则无法提现）</span>
            </el-form-item>
            <el-form-item label="*邮箱：">
                <el-input v-model="ruleForm.mailbox1"></el-input>
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
export default {
	props: {
		openEwallet: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			ruleForm: {
        accountType: '公司',
        accountName: '',
        creditCode: '',
        legalName: '',
        legalIdentityCard: '',
        mobilePhone: '',
        mailbox: '',
        address: '',
        accountName1: '',
        identityCard1: '',
        mobilePhone1: '',
        mailbox1: ''
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
			this.$emit('identify', false)
		}
  }
}
</script>>
<style lang="scss" scoped>

</style>>