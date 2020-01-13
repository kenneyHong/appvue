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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
body {
  min-width: 1280px;
  height: 100%;
  padding: 0px !important;
  margin: 0px !important;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  font-size: 12px;
  overflow: hidden;
  overflow-x: auto;
}
ul{list-style:none}
a{text-decoration: none;} 
img{vertical-align:top;border:none}
 
.clearf:after,
.clearf:before{
  content:"";
  display:block;
  clear:both;
}
.el-header {
  padding: 0;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  overflow:hidden;
  transition: width 0.5s;
  -moz-transition: width 0.5s;	/* Firefox 4 */
  -webkit-transition: width 0.5s;	/* Safari 和 Chrome */
  -o-transition: width 0.5s;
}
.el-main {
  padding: 10px;
}
  
.el-container {
  height: 100%;
}
</style>
