<template>
    <div class="header-view">
        <div style="width: 100%"></div>
        <div class="right-box">
            <div class="full-screen">
                <el-tooltip class="item" effect="dark" :content="getTipText" placement="bottom">
                    <i :class="['iconfont',getFullScreen]" @click="changeFullScreen"></i>
                </el-tooltip>
            </div>
            <el-menu
                    class="el-menu-lang"
                    mode="horizontal"
            >
                <el-submenu index="1" popper-class="lang-item">
                    <template slot="title">
                        <div class="lang-img">
                            <img :src="getLangImg" />
                        </div>
                    </template>
                    <el-menu-item index="1-1" v-for="(langItem,index) in langList" :key="index">
                        <div class="lang-img-item" @click="changeLang(langItem.lang)">
                            <img :src="langItem.img" />
                            <span>{{langItem.text}}</span>
                        </div>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
            >
                <el-submenu index="1" popper-class="info-item">
                    <template slot="title">
                        <div class="user-info">
                            <div class="user-name">
                                <span class="hi">{{$t('你好')}},</span>
                                <span class="name">{{getUserName}}</span>
                            </div>
                            <div class="avatar">
                                <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJg0W7IVzQ5gPbLouuoeI4VTEFRXKNFJIVFx4SWTWwL5affdJ2s2ShKIxRJIUDVRKiahZD6emQqq4A/132" />
                            </div>
                        </div>
                    </template>
                    <el-menu-item index="1-1" @click="signOut">{{$t('退出')}}</el-menu-item>
                </el-submenu>
            </el-menu>

        </div>
    </div>
</template>

<script>
  import { getStorage, removeStroage } from '../../tools/common'
  import { mapState } from 'vuex'
  export default {
    name: "headerView",
    data () {
      return {
        langList : [
          {
            img : require('../../static/img/cn.png'),
            text : '中文',
            lang : 'zh-CN'
          },
          {
            img : require('../../static/img/en.png'),
            text : 'English',
            lang : 'en-US'
          }
        ],
        fullScreen : false
      }
    },
    computed : {
      ...mapState(['language']),
      getUserName () {
        let userInfo = JSON.parse(getStorage('login') || '{}')
        return userInfo.username || ''
      },
      getLangImg () {
        return this.langList.filter(langItem => langItem.lang === this.language)[0].img
      },
      getFullScreen () {
        return this.fullScreen?'icon-quxiaoquanping':'icon-quanping'
      },
      getTipText () {
        return this.fullScreen?'取消全屏':'全屏'
      }
    },
    methods : {
      //全屏切换
      changeFullScreen () {
        let element = document.documentElement;
        // 判断是否已经是全屏
        // 如果是全屏，退出
        if (this.fullScreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {    // 否则，进入全屏
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        // 改变当前全屏状态
        this.fullScreen = !this.fullScreen;
      },
      signOut () {
        removeStroage('login')
        this.$message.success('退出成功')
        setTimeout(() => {
          this.$router.replace('/login')
        },1000)
      },
      changeLang (lang) {
        localStorage.setItem('lang',lang)
        this.$store.commit('changeLang',lang)
        this.$i18n.locale = lang
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
            .full-screen {
                display: flex;
                align-items: center;
                margin-right: 10px;
                i{
                    font-size: 20px;
                }
            }
            .user-info {
                height: 60px;
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
        .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
            border-bottom: none;
        }
        .el-menu.el-menu--horizontal {
            border-bottom: none;
        }
    }
    .el-menu-lang.el-menu {
        margin-right: 10px;
        .lang-img {
            img {
                width: 32px;
                height: 32px;
            }
        }
    }
    .lang-img-item {
        img {
            width: 32px;
            height: 32px;
        }
        span {
            font-size: 12px;
            margin-left: 5px;
            color: #909399;
        }
        span:hover {
            color: #303133;
        }
    }
    .lang-item {
        .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
            min-width: 100%;
        }
        /*.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title  {*/
            /*height: 60px;*/
        /*}*/
    }

</style>
