<template>
  <div style="height: 100%;overflow: hidden;">
    <router-view v-if="noLayout" id="#app" class="container" />
    <el-container v-else>
      <el-header height="50px">
        <headerBar />
      </el-header>
      <el-container>
        <el-aside :style="'width:' + sideBarWidth + 'px'">
          <sideBar  @isShow="flexWidthSys" />
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerBar from '@/components/header.vue'
import sideBar from '@/components/sideBar.vue'
export default {
  data() {
    return {
      sideBarWidth: 180,
      noLayout: true
    }
  },
  mounted() {
    this.noLayout = this.$route.path.indexOf('/login') > -1
  },
  methods: {
    flexWidthSys(data) {
      if (data) {
        this.sideBarWidth = this.sideBarWidth - 140
      } else {
        this.sideBarWidth = this.sideBarWidth + 140
      }
    }
  },
  watch: {
    '$route.path'() {
      this.noLayout = this.$route.path.indexOf('/login') > -1
    }
  },
  components: {
    headerBar,
    sideBar
  }
}
</script>
<style lang="scss">
@import '@/assets/style/reset.scss';
@import '@/assets/style/common.scss'
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
</style>
