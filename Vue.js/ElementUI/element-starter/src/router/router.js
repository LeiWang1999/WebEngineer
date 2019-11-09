/*
* 路由对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = ()=>import('../components/Layout.vue');

//申明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
        path:'/',
        redirect: '/layout'
    },
    {
        path: '/layout',
        component: Layout
    }
  ]
})