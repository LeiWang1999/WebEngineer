import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Index from "@/components/fronted/Index.vue";
import Login from "@/views/back/Login.vue";
import Layout from "@/components/back/Layout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: Index,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("../views/fronted/Dashboard.vue")
      },
      {
        path: "jqdt",
        name: "jqdt",
        component: () => import("../views/fronted/Jqdt.vue")
      },
      {
        path: "cbzz",
        name: "cbzz",
        component: () => import("../views/fronted/Cbzz.vue")
      },
      {
        path: "jszl",
        name: "jszl",
        component: () => import("../views/fronted/Jszl.vue")
      },
      {
        path: "zlxz",
        name: "zlxz",
        component: () => import("../views/fronted/Zlxz.vue")
      },
      {
        path: "yhlt",
        name: "yhlt",
        component: () => import("../views/fronted/Yhlt.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    redirect: "/admin/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/back/home"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "tabs",
        name: "Tabs",
        component: () => import("@/views/back/tabs"),
        meta: {
          title: "选项卡"
        }
      }
    ]
  },
  {
    path: "/admin",
    component: Layout,
    redirect: "/table",
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/back/table"),
        meta: {
          title: "表格"
        }
      }
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  window.console.log(to.name, from.name);
  if (to.name == "Login") {
    window.console.log(localStorage.getItem("accessToken"));
    if (localStorage.getItem("accessToken")) {
      next(from.path);
    } else {
      next();
    }
  } else {
    if (localStorage.getItem("accessToken")) {
      store.commit("setTabs", {
        name: to.meta.title,
        href: to.path
      });
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});

export default router;
