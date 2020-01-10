
<template>
  <div class="header">
    <div class="brand-title">
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
  .pageName {
    color: #fff;
  }
}
</style>