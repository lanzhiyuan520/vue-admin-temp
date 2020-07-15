import Vue from "vue";
import VueRouter from "vue-router";
import { Home } from '../layout'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

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
          menuName : '首页'
        }
      },
      {
        path : '/user',
        name : 'user',
        component : () => import('../views/user'),
        meta : {
          menuName : '用户列表'
        }
      },
      {
        path : '/config',
        name : 'config',
        meta : {
          menuName : '配置'
        },
        component : () => import('../views/config'),
        children: [
          {
            path : '/config/setPass',
            name : 'setPass',
            component : () => import('../views/setPass'),
            meta : {
              menuName : '修改密码'
            }
          },
          {
            path : '/config/testConfig',
            name : 'testConfig',
            meta : {
              menuName : '测试配置'
            },
            component : () => import('../views/testConfig'),
            children : [
              {
                path : '/config/testConfig/testConfig1',
                name : 'testConfig1',
                component : () => import('../views/testConfig1'),
                meta : {
                  menuName : '测试配置1'
                }
              },
              {
                path : '/config/testConfig/testConfig2',
                name : 'testConfig2',
                component : () => import('../views/testConfig2'),
                meta : {
                  menuName : '测试配置2'
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
    component : () => import('../views/login')
  }
];

const router = new VueRouter({
  routes
});

export default router;
