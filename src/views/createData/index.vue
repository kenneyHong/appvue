
<template>
  <div class="login">
    <el-button @click="createData">创建</el-button>
  </div>
</template>
<script>
import {
  GOODS_API_CREATEFALSEDATA
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