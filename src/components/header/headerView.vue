<template>
    <div class="header-view">
        <div style="width: 100%"></div>
        <div class="right-box">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
            >
                <el-submenu index="1" popper-class="info-item">
                    <template slot="title">
                        <div class="user-info">
                            <div class="user-name">
                                <span class="hi">你好,</span>
                                <span class="name">{{getUserName}}</span>
                            </div>
                            <div class="avatar">
                                <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJg0W7IVzQ5gPbLouuoeI4VTEFRXKNFJIVFx4SWTWwL5affdJ2s2ShKIxRJIUDVRKiahZD6emQqq4A/132" />
                            </div>
                        </div>
                    </template>
                    <el-menu-item index="1-1" @click="signOut">退出</el-menu-item>
                </el-submenu>
            </el-menu>

        </div>
    </div>
</template>

<script>
  import { getStorage } from '../../tools/common'
  export default {
    name: "headerView",
    data () {
      return {

      }
    },
    computed : {
      getUserName () {
        let userInfo = JSON.parse(getStorage('login') || '{}')
        return userInfo.username || ''
      }
    },
    methods : {
      signOut () {

      }
    }
  };
</script>

<style lang="scss">
    .header-view {
        height: 100%;
        box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
        display: flex;
        justify-content: flex-end;
        .right-box {
            position: relative;
            width: 320px;
            box-sizing: border-box;
            padding-right: 20px;
            display: flex;
            justify-content: flex-end;
            .user-info {
                display: flex;
                align-items: center;
                .avatar {
                    margin-left: 10px;
                    img {
                        display: block;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                    }
                }
                .user-name {
                    span {
                        cursor: pointer;
                    }
                    .hi {
                        color: #909399;
                        font-size: 12px;
                    }
                    .name {
                        color: #a9d86e;
                        font-size: 13px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
    .info-item .el-menu {
        min-width: 120px!important;
    }
    .info-item .el-menu .el-menu-item {
        min-width: 100%;
    }
    .right-box {
        .el-submenu__title {
            padding: 0;
        }
        .el-submenu__icon-arrow {
            display: none;
        }
    }
</style>
