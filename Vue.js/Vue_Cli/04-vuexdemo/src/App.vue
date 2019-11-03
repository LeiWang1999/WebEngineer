<template>
  <div id="app">
    <h1>This is a counter from App</h1>
    <p>This is a counter : {{counter}}</p>
    <button @click="callAdd">click this button to add</button>
    <br />
    <button @click="callSub">click this button to sub</button>
    <br />
    <hello-vue-x :counter="counter"></hello-vue-x>
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
      counter: 10
    };
  },
  methods: {
    callAdd(){
      this.counter++;
    },
    callSub(){
      this.counter--;
    }
  }
};
</script>

<style>
</style>
