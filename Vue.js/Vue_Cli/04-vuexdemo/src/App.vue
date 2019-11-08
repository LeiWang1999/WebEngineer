<template>
  <div id="app">
    <h1>This is a counter from App</h1>
    <p>This is a counter : {{$store.state.counter}}</p>
    <button @click="callAddMore(2)">click this button to add</button>
    <br />
    <button @click="callSub">click this button to sub</button>
    <br />
    <h2>Show getter methods from counter</h2>
    <p>This ia a powerCounter: {{$store.getters.powerCounter}}</p>
    <hello-vue-x></hello-vue-x>
  </div>
</template>

<script>
import helloVueX from '@/components/helloVueX'
export default {
  name: "App",
  components:{
    helloVueX
  },
  data: function() {
    return {
    };
  },
  methods: {
    callAdd(){
      // this.counter++;
      // this.$store.state.counter++
      // mutations的另一种传参方式
      this.$store.commit({
        type: 'increment',
        // 这样那边接受的就是一个对象
        num : 1
        
      })
    },
    callSub(){
      // this.$store.state.counter--
      this.$store.commit('decrement')
    },
    callAddMore(num){
      this.$store.commit('increment', num)
    }
  }
};
</script>

<style>
</style>
