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
          title : '首页'
        }
      },
      {
        path : '/user',
        name : 'user',
        component : () => import('../views/user'),
        meta : {
          title : '用户列表'
        }
      },
      {
        path : '/config',
        name : 'config',
        meta : {
          title : '配置'
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
  mode : 'history',
  routes
});


router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  let userInfo = getStorage('login')
  // console.log(JSON.stringify(to))  //path /index
  if (!userInfo && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
router.afterEach(() => {
  window.scrollTo(0,0);
})
router.onError(callback => {
  console.log('出错了!', callback);
});

export default router;
