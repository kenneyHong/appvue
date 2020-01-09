<template>
  <div style="height: 100%;overflow: hidden;">
    <el-container>
      <el-header height="50px">
        <headerBar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <sideBar />
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
    return {}
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
  text-align: center;
}
.el-main {
  padding: 0;
  height: calc(100% - 50px);
}
  
.el-container {
  height: 100%;
}
</style>
