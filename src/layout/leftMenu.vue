<template>
    <div class="left-menu">
        <div class="logo-wrap">
            <div class="logo">
                <img src="../static/img/logo.png" alt="">
            </div>
            <div class="logo-text" v-if="!isCollapse">LanAdmin</div>
        </div>
        <div class="menu">
            <el-menu
                    :default-active="onRoutes"
                    class="el-menu-vertical-demo"
                    background-color="#fff"
                    text-color="rgb(102, 102, 102)"
                    active-text-color="rgb(255, 100, 40)"
                    :collapse="isCollapse"
            >
                <template v-for="item in menuList">
                    <template v-if="item.children && item.children.length > 0">
                        <el-submenu :index="item.path" :key="item.path">
                            <template slot="title">
                                <i :class="['iconfont',item.meta.icon]"></i>
                                <span class="title">{{$t(item.meta.title)}}</span>
                            </template>
                            <template v-for="childItem in item.children">
                                <template v-if="childItem.children && childItem.children.length > 0">
                                    <el-submenu :index="childItem.path" :key="childItem.path">
                                        <template slot="title" class="title">{{$t(childItem.meta.title)}}</template>
                                        <template v-for="childrenItem in childItem.children">
                                            <el-menu-item v-if="!childrenItem.meta.isHide" :index="childrenItem.path" :key="childrenItem.path" @click="goRouter(childrenItem.path)">{{$t(childrenItem.meta.title)}}</el-menu-item>
                                        </template>
                                    </el-submenu>
                                </template>
                                <template v-else>
                                    <el-menu-item v-if="!childItem.meta.isHide" :index="childItem.path" @click="goRouter(childItem.path)" :key="childItem.path">{{$t(childItem.meta.title)}}</el-menu-item>
                                </template>
                            </template>
                        </el-submenu>
                    </template>
                    <template v-else>
                        <el-menu-item :index="item.path" :key="item.path" @click="goRouter(item.path)" v-if="!item.meta.isHide">
                            <i :class="['iconfont',item.meta.icon]"></i>
                            <span slot="title" class="title">{{$t(item.meta.title)}}</span>
                        </el-menu-item>
                    </template>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "leftMenu",
    data () {
      return {
        menuList : []
      }
    },
    computed : {
      ...mapState(['isCollapse']),
      onRoutes () {
        return this.$route.path
      }
    },
    created () {
      this.$eventBus.$on('menuController', (flag) => {
        console.log(flag)
      })
      let menuList = this.$router.options.routes.filter(item => item.name === 'Home')
      this.menuList = menuList[0].children
    },
    methods : {
      goRouter (path) {
        this.$router.push(path)
      }
    }
  };
</script>

<style lang="scss">
    .menu {
        overflow-x: hidden;
        background-color: #fff;
        overflow-y: scroll;
        scrollbar-color: transparent transparent;
        margin-top: 3px;
        flex: 1;
        box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5);
    }
    .left-menu {
        height: 100%;
        display: flex;
        flex-direction: column;
        .logo-wrap {
            background-color: #fff;
            /*width: 180px;*/
            height: 60px;
            box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);
            display: flex;
            justify-content: space-around;
            align-items: center;
            .logo {
                img {
                    width: 40px;
                    height: 40px;
                    border-radius:50% ;
                }
            }
            .logo-text {
                color: #FF6C60;
                font-size: 22px;
            }
        }
    }
    .menu {
        .el-menu-vertical-demo {
            width: 100%;
            transition: all .2s linear;
        }
        .el-submenu {
            .el-menu-item {
                width: 100%;
                min-width: 100%;
            }
        }
        .el-menu {
            border-right: none;
        }
        .title {
            margin-left: 5px;
        }
    }
</style>
