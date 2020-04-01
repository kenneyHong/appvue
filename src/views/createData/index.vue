<template>
  <div class="login">
    <div>
      <span>账户列表</span>
      <el-button @click="createAccountData">创建</el-button>
      <el-button @click="getAccountData">获取</el-button>
    </div>
    <div>
      <span>账户列表</span>
      <el-button @click="createAccountData">创建</el-button>
      <el-button @click="getAccountData">获取</el-button>
    </div>
    <div>
      <span>电子钱包</span>
      <el-button @click="openWallet">创建</el-button>
      <el-button @click="getAccountData">获取</el-button>
    </div>
  </div>
</template>
<script>
import {
  GOODS_API_CREATEFALSEDATA,
  GOODS_API_GETGOODSDATA,
  CLEARING_API_CREATEACCOUNTLIST,
  CLEARING_API_GETACCOUNTLIST,
  CLEARING_API_OPENACCOUNTWALLET
} from '@/apis/user.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    createData() {
      GOODS_API_CREATEFALSEDATA().then(res => {
        if (res.data.Code == 'CORRECT') {
          console.log(res)
        }
      })
    },
    getData() {
      GOODS_API_GETGOODSDATA({ PageSize: 10, PageIndex: 1 }).then(res => {
        if (res.data.Code == 'CORRECT') {
          console.log(res)
        }
      })
    },
    createAccountData() {
      CLEARING_API_CREATEACCOUNTLIST().then(res => {
        if (res.data.Code == 'CORRECT') {
          console.log(res)
        }
      })
    },
    getAccountData() {
      CLEARING_API_GETACCOUNTLIST({
        OrderBy: 1,
        IsAsced: 1,
        PageIndex: 1,
        PageSize: 10
      }).then(res => {
        if (res.data.Code == 'CORRECT') {
          console.log(res)
        }
      })
    },
    openWallet() {
      CLEARING_API_OPENACCOUNTWALLET().then(res => {
        if (res.data.Code == 'CORRECT') {
          console.log(res)
        }
      })
    }
  },
  mounted () {
  },
  watch: {},
  components: {}
}
</script>
<style lang="scss" scoped>
</style>