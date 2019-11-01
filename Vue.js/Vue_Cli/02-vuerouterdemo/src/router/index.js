// 在这里配置和路由相关的信息
import VueRouter from "vue-router"
import Vue from "vue"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import User from "../components/User.vue"
import News from "../components/HomeCpn/News.vue"
import Message from "../components/HomeCpn/Message.vue"
import Profile from "../components/Profile.vue"
// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        // 把path重定向到/home
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home,
        // meta 元数据 描述数据的数据
        meta:{
            title : 'Home'
        },
        children: [
            {
                path: '/',
                redirect: 'news' 
            },
            {
                path: 'news',
                component: News
            },
            {
                path: 'message',
                component: Message
            }
        ]
    },
    {
        path: '/about',
        meta: {
            title : 'About'
        },
        component: About
    },
    {
        path: '/user/:userId',
        meta: {
            title: 'User'
        },
        component: User
        // componenf: () => import("./components/User.vue") 这样写可以实现路由懒加载
    },
    {
        path: '/profile',
        component: Profile
    }
]

// 2.创建VueRouter对象
const router = new VueRouter({
    // 配置路由和组件之间的映射关系
    routes,
    mode: 'history'
})

// 3.将我们router对象传入到vue实例
export default router