<template>
  <div class="home">
    <el-container>
      <el-aside width="180px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <header-view></header-view>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import leftMenu from './leftMenu'
  import headerView from '../components/header/headerView'
  export default {
    name: "Home",
    data () {
      return {

      }
    },
    components: {
      leftMenu,
      headerView
    },
    created () {

    },
    methods : {

    },
    watch : {

    }
  };
</script>
<style lang="scss">
  .home,.el-container {
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    /*text-align: center;*/
    /*line-height: 60px;*/
  }
  .home {
    .el-header {
      padding: 0;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
