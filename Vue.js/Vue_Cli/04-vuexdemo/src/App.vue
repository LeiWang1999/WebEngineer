<template>
  <div id="app">
    <h1>This is a counter from App</h1>
    <p>This is a counter : {{$store.state.counter}}</p>
    <button @click="callAdd">click this button to add</button>
    <br />
    <button @click="callSub">click this button to sub</button>
    <br />
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
      this.$store.commit('increment')
    },
    callSub(){
      // this.$store.state.counter--
      this.$store.commit('decrement')
    }
  }
};
</script>

<style>
</style>
