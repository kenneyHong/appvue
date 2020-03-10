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
  'Draft': 1,
  'Pending': 2,
  'Pass': 3,
  'Returned': 4,
  'Invalid': 5,
  'Cancel': 6,
  'Types': {
    '1': '草稿',
    '2': '待审核',
    '3': '审核通过',
    '4': '审核退回',
    '5': '已作废',
    '6': '已取消'
  },
  'TypeArray': [
    { 'KeyId': 1, 'Value': '草稿' },
    { 'KeyId': 2, 'Value': '待审核' },
    { 'KeyId': 3, 'Value': '审核通过' },
    { 'KeyId': 4, 'Value': '审核退回' },
    { 'KeyId': 5, 'Value': '已作废' },
    { 'KeyId': 6, 'Value': '已取消' }
  ]
}

// 电子钱包账户状态;
export const EwalletMasterState = {
  'Waiting': 1,
  'Opening': 3,
  'Opened': 5,
  'Closed': 7,
  'Failed': 9,
  'Locked': 11,
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