import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home/Home.vue"
import Cart from "../views/Cart/Cart.vue"
import Category from "../views/Category/Category.vue"
import Profile from "../views/Profile/Profile.vue"

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
