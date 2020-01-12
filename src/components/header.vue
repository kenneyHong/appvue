
<template>
  <div class="header">
    <div class="brand-title">
      <span class="jewelry">周大福珠宝</span>
      <span class="pageName">{{$route.meta.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data () {
    return {}
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
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #1e2e45;
  .jewelry{
    font-size: 22px;
    color: #adc7d9;
    margin-left: 35px;
  }
  .pageName {
    color: #fff;
    margin-left: 46px;
  }
}
</style>