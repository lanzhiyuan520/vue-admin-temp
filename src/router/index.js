import Vue from "vue";
import VueRouter from "vue-router";
import { Home } from '../layout'
import { getStorage } from "../tools/common";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect : '/index',
    children : [
      {
        path : '/index',
        name : 'index',
        component : () => import('../views/index'),
        meta : {
          title : '首页',
          icon : 'icon-shouye1'
        }
      },
      {
        path : '/user',
        name : 'user',
        component : () => import('../views/user'),
        meta : {
          title : '用户',
          icon : 'icon-yonghu'
        }
      },
      {
        path : '/config',
        name : 'config',
        meta : {
          title : '配置',
          icon : 'icon-peizhishezhi'
        },
        component : () => import('../views/config'),
        children: [
          {
            path : '/config/setPass',
            name : 'setPass',
            component : () => import('../views/setPass'),
            meta : {
              title : '修改密码'
            }
          },
          {
            path : '/config/testConfig',
            name : 'testConfig',
            meta : {
              title : '测试配置'
            },
            component : () => import('../views/testConfig'),
            children : [
              {
                path : '/config/testConfig/testConfig1',
                name : 'testConfig1',
                component : () => import('../views/testConfig1'),
                meta : {
                  title : '测试配置1'
                }
              },
              {
                path : '/config/testConfig/testConfig2',
                name : 'testConfig2',
                component : () => import('../views/testConfig2'),
                meta : {
                  title : '测试配置2'
                }
              },
            ]
          }
        ]
      },
      {
        path : '/error',
        name : 'error',
        component : () => import('../views/errorPage/index'),
        meta : {
          title : '错误页面',
          icon : 'icon-cuowu'
        },
        children : [
          {
            path : '/error/404',
            name : '404',
            component : () => import('../views/errorPage/404'),
            meta : {
              title : '404',
            }
          },
          {
            path : '/error/401',
            name : '401',
            component : () => import('../views/errorPage/401'),
            meta : {
              title : '401',
            }
          }
        ]
      },
      {
        path : '/auth',
        name : 'auth',
        component : () => import('../views/auth/index'),
        meta : {
          title : '权限设置',
          icon : 'icon-quanxianguanli'
        },
        children : [
          {
            path : '/auth/permissionSettings',
            name : 'permissionSettings',
            component : () => import('../views/auth/permissionSettings'),
            meta : {
              title : '权限管理',
              auth : ['admin']
            },
          }
        ]
      },
      {
        path : '/plugins',
        name : 'plugins',
        component : () => import('../views/plugins/index'),
        meta : {
          title : '插件',
          icon : 'icon-peizhishezhi'
        },
        children : [
          {
            path : '/plugins/richTextView',
            name : 'richTextView',
            component : () => import('../views/plugins/richTextView'),
            meta : {
              title : '富文本',
            }
          },
          {
            path : '/plugins/exportExcel',
            name : 'exportExcel',
            component : () => import('../views/plugins/exportExcel'),
            meta : {
              title : '导出excel',
            }
          },
          {
            path : '/plugins/slicksort',
            name : 'slicksort',
            component : () => import('../views/plugins/slicksort'),
            meta : {
              title : '拖拽',
            }
          },
        ]
      }
    ]
  },
  {
    path : '/login',
    name : 'login',
    component : () => import('../views/login'),
    meta : {
      title : '登录'
    }
  },
  {
    path : '*',
    name : '404',
    component : () => import('../views/errorPage/404'),
    meta : {
      title : '404'
    }
  }
];

const router = new VueRouter({
  // mode : 'history',
  // base : '/www/vue-admin/',
  routes
});


router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  let userInfo = getStorage('login')
  let permissionList = to.meta.auth || []
  if (permissionList.length < 1) {
    if (!userInfo && to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (!userInfo) {
      next('/login')
    } else {
      let role = JSON.parse(userInfo).role
      if (permissionList.indexOf(role) !== -1) {
        next()
      } else {
        next('/error/401')
      }
    }
  }

})
router.afterEach(() => {
  window.scrollTo(0,0);
})
router.onError(callback => {
  console.log('出错了!', callback);
});

export default router;
