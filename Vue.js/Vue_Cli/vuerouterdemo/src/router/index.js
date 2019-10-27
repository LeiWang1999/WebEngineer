// 在这里配置和路由相关的信息
import VueRouter from "vue-router"
import Vue from "vue"

// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

const routes = [

]

// 2.创建VueRouter对象
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes
})

// 3.将我们router对象传入到vue实例
export default router