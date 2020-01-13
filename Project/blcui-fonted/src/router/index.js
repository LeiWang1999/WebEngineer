import Vue from "vue";
import VueRouter from "vue-router";
import Index from '@/views/fonted/Index.vue';
import Login from '@/components/back/Login.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: Index,
    children:[
      {path: 'dashboard', name: 'dashboard', component:  () =>import("../views/fonted/Dashboard.vue")},
      {path: 'jqdt', name: 'jqdt', component:  () =>import("../views/fonted/Jqdt.vue")},
      {path: 'cbzz', name: 'cbzz', component:  () =>import("../views/fonted/Cbzz.vue")},
      {path: 'jszl', name: 'jszl', component:  () =>import("../views/fonted/Jszl.vue")},
      {path: 'zlxz', name: 'zlxz', component:  () =>import("../views/fonted/Zlxz.vue")},
      {path: 'yhlt', name: 'yhlt', component:  () =>import("../views/fonted/Yhlt.vue")}
    ]
  },
  {
    path: "/login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
