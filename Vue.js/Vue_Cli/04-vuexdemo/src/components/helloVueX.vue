<template>
  <div>
    <h1>This is a helloVueX cpn</h1>
    <p>This is a counter: {{$store.state.counter}}</p>
    <h2>Show getter methods from counter</h2>
    <p>This ia a powerCounter: {{$store.getters.powerCounter}}</p>
  </div>
</template>

<script>
export default {
  name: "hellovuex",
  props: {
  }
};
</script>  

<style>
</style>