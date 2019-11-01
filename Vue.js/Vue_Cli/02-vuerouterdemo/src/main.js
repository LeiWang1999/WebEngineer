import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


// 全局导航守卫  = 前置钩子
router.beforeEach((to, from, next) =>{
  console.log(to);
  
  document.title = to.matched[0].meta.title
  next()
});

console.log(router);
