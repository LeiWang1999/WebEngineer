import Vue from 'vue'
import Vuex from 'vuex'

// 安装vueX
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // define data
    counter: 20
  },
  mutations: {
    // define methods
    increment(state, num){
      state.counter = state.counter + num
    },
    decrement(state){
      state.counter--
    }
  },
  actions: {
    // 做一些异步操作 
  },
  modules: {
  },
  getters: {
    // 类似计算属性
    powerCounter(state){
      return state.counter * state.counter
    },
    testGetter(state, getters){
      // getters 可以作为getter的参数传递
      return (arg)=>{
        // 返回函数的话，外面就可以传参了
      }
    }
  }
})
