<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse?'64px':'180px'">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header>
          <header-view></header-view>
        </el-header>
        <breadcrumb></breadcrumb>
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
  import breadcrumb from '../components/breadcrumb/breadcrumb'
  import { mapState } from 'vuex'
  export default {
    name: "Home",
    data () {
      return {

      }
    },
    components: {
      leftMenu,
      headerView,
      breadcrumb
    },
    computed : {
      ...mapState(['isCollapse'])
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
  }
  .home {
    .el-header {
      padding: 0;
    }
    .el-aside {
      transition: all .2s linear;
      overflow-x: hidden;
    }
  }

  .el-main {
    background-color: #F6F7FC;
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
