import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import("@/views/login/login.vue");
const Layout = () => import("@/layout/Layout");
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Menu1_1 = () => import("@/views/routesNest/menu1/menu1-1.vue");
const Menu1_2_1 = () =>
  import("@/views/routesNest/menu1/menu1-2/menu1-2-1.vue");
const Menu1_2_2 = () =>
  import("@/views/routesNest/menu1/menu1-2/menu1-2-2.vue");
const Menu2_1 = () => import("@/views/routesNest/menu2/menu2-1.vue");

Vue.use(VueRouter);

/* 解决两次访问相同路由地址报错 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        lang: "首页",
        permissions: [],
        id: 100,
        menuId: "1",
        name: "home",
        path: "/home",
        component: Home,
      },
      {
        lang: "路由嵌套",
        permissions: [],
        id: 800,
        menuId: "9",
        path: "/nested",
        childrens: [
          {
            lang: "菜单1",
            permissions: [],
            id: 810,
            menuId: "2",
            path: "menu1",
            childrens: [
              {
                lang: "菜单1-1",
                id: 811,
                menuId: "3",
                path: "menu1_1",
                component: Menu1_1,
              },
              {
                lang: "菜单1-2",
                id: 814,
                menuId: "4",
                path: "menu1-2",
                childrens: [
                  {
                    lang: "菜单1-2-1",
                    id: 8140,
                    menuId: "5",
                    path: "menu1_2_1",
                    component: Menu1_2_1,
                  },
                  {
                    lang: "菜单1-2-2",
                    id: 8140,
                    menuId: "6",
                    path: "menu1_2_2",
                    component: Menu1_2_2,
                  },
                ],
              },
            ],
          },
          {
            lang: "菜单2",
            permissions: [],
            id: 810,
            menuId: "1000",
            path: "menu2",
            childrens: [
              {
                lang: "菜单2-1",
                id: 811,
                menuId: "9",
                path: "menu2_1",
                component: Menu2_1,
              },
            ],
          },
        ],
      },
      {
        lang: "外部链接",
        permissions: [],
        id: 900,
        menuId: "11",
        path: "https://github.com/CaoXueLiang",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
