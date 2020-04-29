// 是否状态;
export const YNStatus = {
  Yes: 3,
  No: 1,
  Types: {
    '3': '是',
    '1': '否'
  },
  TypeArray: [{
    KeyId: '3',
    Value: '是'
  },
  {
    KeyId: '1',
    Value: '否'
  }]
}
export const GoodsStatus = {
  Draft: 1,
  Pending: 2,
  Pass: 3,
  Returned: 4,
  Invalid: 5,
  Cancel: 6,
  Types: {
    '1': '草稿',
    '2': '待审核',
    '3': '审核通过',
    '4': '审核退回',
    '5': '已作废',
    '6': '已取消'
  },
  'TypeArray': [
    { KeyId: 1, 'Value': '草稿' },
    { KeyId: 2, 'Value': '待审核' },
    { KeyId: 3, 'Value': '审核通过' },
    { KeyId: 4, 'Value': '审核退回' },
    { KeyId: 5, 'Value': '已作废' },
    { 'KeyId': 6, 'Value': '已取消' }
  ]
}

// 电子钱包开通账户状态;
export const EwalletMasterState = {
  Waiting: 1,
  Opening: 3,
  Opened: 5,
  Closed: 7,
  Failed: 9,
  Locked: 11,
  'Types': {
    '1': '未开通',
    '3': '开通中',
    '5': '已开通',
    '7': '已销户',
    '9': '开通失败',
    '11': '已冻结'
  },
  'TypeArray': [
    { 'KeyId': '1', 'Value': '未开通' },
    { 'KeyId': '3', 'Value': '开通中' },
    { 'KeyId': '5', 'Value': '已开通' },
    { 'KeyId': '7', 'Value': '已销户' },
    { 'KeyId': '9', 'Value': '开通失败' },
    { 'KeyId': '11', 'Value': '已冻结' }
  ]
}
// 电子钱包的账户列表的账户类型;
export const EwalletMasterEwalletType = {
  'Company': 1,
  'Person': 3,
  'Types': {
    '1': '公司',
    '3': '个人'
  },
  'TypeArray': [
    { 'KeyId': '1', 'Value': '公司' },
    { 'KeyId': '3', 'Value': '个人' }
  ]
}
// 角色类型;
export const CharacterType = {
  'Lingcb': 1001,
  'Lbranch': 1101,
  'Group': 2001,
  'Company': 2101,
  'Store': 2201,
  'Supplier': 3001,
  'Proxyer': 3201,
  'Neibor': 4001,
  'Types': {
    '1001': '零成本平台',
    '1101': '零成本分公司',
    '2001': '珠宝集团',
    '2101': '珠宝公司',
    '2201': '珠宝门店',
    '3001': '礼品供应商',
    '3201': '礼品运营商',
    '4001': '异业联盟商'
  },
  'TypeArray': [
    { 'KeyId': 1001, 'Value': '零成本平台' },
    { 'KeyId': 1101, 'Value': '零成本分公司' },
    { 'KeyId': 2001, 'Value': '珠宝集团' },
    { 'KeyId': 2101, 'Value': '珠宝公司' },
    { 'KeyId': 2201, 'Value': '珠宝门店' },
    { 'KeyId': 3001, 'Value': '礼品供应商' },
    { 'KeyId': 3201, 'Value': '礼品运营商' },
    { 'KeyId': 4001, 'Value': '异业联盟商' }
  ]
}
// 电子钱包的提现绑卡的状态;
export const EwalletCashbindState = {
  'Wait': 1,
  'Bind': 3,
  'Types': {
    '1': '未绑卡',
    '3': '已绑卡'
  },
  'TypeArray': [
    { 'KeyId': '1', 'Value': '未绑卡' },
    { 'KeyId': '3', 'Value': '已绑卡' }
  ]
}
// 申请单状态;
export const TunePetitionOrderBasicState = {
  'Wait': 3,
  'Audit': 5,
  'Abandon': 9,
  'Types': {
    '3': '待审核',
    '5': '审核通过',
    '9': '已作废'
  },
  'TypeArray': [
    { 'KeyId': '3', 'Value': '待审核' },
    { 'KeyId': '5', 'Value': '审核通过' },
    { 'KeyId': '9', 'Value': '已作废' }
  ]
}
// 提现单状态;
export const FundCasheOrderBasicState = {
  'Wait': 3,
  'Audit': 5,
  'Abandon': 9,
  'Types': {
    '3': '待审核',
    '5': '审核通过',
    '9': '已作废'
  },
  'TypeArray': [
    { 'KeyId': '3', 'Value': '待审核' },
    { 'KeyId': '5', 'Value': '审核通过' },
    { 'KeyId': '9', 'Value': '已作废' }
  ]
}
// 审核规则;
export const SettingFlowSwitchType = {
  'Auto': 1,
  'Manual': 3,
  'Types': {
    '1': '自动审核',
    '3': '手工审核'
  },
  'TypeArray': [
    { 'KeyId': '1', 'Value': '自动审核' },
    { 'KeyId': '3', 'Value': '手工审核' }
  ]
}
// 电子钱包的流水日志的收支类型;
export const EwalletLogIOType = {
  'Inn': 1,
  'Out': 3,
  'Types': {
    '1': '收入',
    '3': '支出'
  },
  'TypeArray': [
    { 'KeyId': '1', 'Value': '收入' },
    { 'KeyId': '3', 'Value': '支出' }
  ]
}
// 电子钱包的流水日志的来源单据类型;
export const EwalletLogSourceType = {
  'OrderCloudOrderCpackBasic': 1001,
  'OrderCloudRetailOrderSellBasic': 1003,
  'GiftingCloudSupplierSettle': 2005,
  'MessageCloudOrderRecharge': 2007,
  'CollegeCloudPackOrderBasic': 4001,
  'ClearingCloudFundCasheOrderBasic': 4005,
  'ClearingCloudFundRechargeOrderBasic': 4007,
  'ClearingCloudFundSelfieOrderBasic': 4009,
  'Types': {
    '1001': 'SaaS系统续费',
    '1003': '门店零售单',
    '2005': '供应商结算',
    '2007': '短信充值单',
    '4001': '科技院套餐订单',
    '4005': '提现单',
    '4007': '充值单',
    '4009': '自转单'
  },
  'TypeArray': [
    { 'KeyId': '1001', 'Value': 'SaaS系统续费' },
    { 'KeyId': '1003', 'Value': '门店零售单' },
    { 'KeyId': '2005', 'Value': '供应商结算' },
    { 'KeyId': '2007', 'Value': '短信充值单' },
    { 'KeyId': '4001', 'Value': '科技院套餐订单' },
    { 'KeyId': '4005', 'Value': '提现单' },
    { 'KeyId': '4007', 'Value': '充值单' },
    { 'KeyId': '4009', 'Value': '自转单' }
  ]
}
// 支付方式;
export const PaymentType = {
  'AliPay': 3,
  'WechatPay': 5,
  'Eebank': 13,
  'Pebank': 15,
  'EwalletBase': 17,
  'Types': {
    '3': '支付宝',
    '5': '微信',
    '13': '企业网银',
    '15': '个人网银',
    '17': '电子钱包(基本户)'
  },
  'TypeArray': [
    { 'KeyId': 3, 'Value': '支付宝' },
    { 'KeyId': 5, 'Value': '微信' },
    { 'KeyId': 13, 'Value': '企业网银' },
    { 'KeyId': 15, 'Value': '个人网银' },
    { 'KeyId': 17, 'Value': '电子钱包(基本户)' }
  ]
}
// 交易状态;
export const CbackIsOK = {
  'Waiting': 1,
  'Failed': 3,
  'Finish': 5,
  'Types': {
    '1': '等待交易',
    '3': '交易失败',
    '5': '交易完成'
  },
  'TypeArray': [
    { 'KeyId': 1, 'Value': '等待交易' },
    { 'KeyId': 3, 'Value': '交易失败' },
    { 'KeyId': 5, 'Value': '交易完成' }
  ]
}

// 电子钱包的流水日志的账户类型;
export const EwalletLogBalanceType = {
  Base: 1,
  Op: 3,
  Types: {
    '1': '基本账户',
    '3': '运营账户'
  },
  TypeArray: [
    { KeyId: '1', Value: '基本账户' },
    { KeyId: '3', Value: '运营账户' }
  ]
}