<template>
  <div style="height: 100%;">
    <router-view v-if="noLayout" id="#app" class="container" />
    <el-container v-else>
      <el-header height="50px">
        <headerBar />
      </el-header>
      <el-container class="themeName">
        <el-aside :style="'width:' + sideBarWidth + 'px'">
          <sideBar  @isShow="flexWidthSys" />
        </el-aside>
        <el-scrollbar>
          <el-main>
            <router-view/>
          </el-main>
        </el-scrollbar>
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
@import '@/assets/style/common.scss';
</style>
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
.themeName {
  height: calc(100% - 80px);
}
.el-scrollbar {
  width: 100%;
  height: 100%;
  .el-scrollbar__wrap {
    overflow: hidden;
    overflow-y: scroll;
  }
}
</style>
