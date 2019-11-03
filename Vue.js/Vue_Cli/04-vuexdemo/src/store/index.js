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
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
