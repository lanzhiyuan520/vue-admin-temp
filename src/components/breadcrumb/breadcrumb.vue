<template>
    <div class="breadcrumb">
        <div class="show-or-hide-menu" :class="{'isHide':this.isCollapse}" @click="operatingMenu">
            <i class="iconfont icon-zhankai-shouqi"></i>
        </div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item  v-for="item in matched" :key="item.path">{{$t(item.meta.title)}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "breadcrumb",
    data () {
      return {
        matched : []
      }
    },
    mounted () {
      this.getRouter()
    },
    computed : {
      ...mapState(['isCollapse']),
    },
    methods : {
      getRouter () {
        this.matched =  this.$route.matched.filter(item => item.path)
      },
      operatingMenu () {
        this.$store.commit('changeCollapse',!this.isCollapse)
      }
    },
    watch : {
      $route () {
        this.getRouter()
      }
    }
  };
</script>

<style lang="scss">
    .breadcrumb {
        height: 30px;
        background-color: #eaebec;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 16px;
        .show-or-hide-menu {
            transition: all .2s linear;
            margin-right: 10px;
            transform: rotate(180deg);
            i {
                font-size: 20px;
            }
        }
        .show-or-hide-menu.isHide {
            transform: rotate(0deg);
        }
    }
</style>
