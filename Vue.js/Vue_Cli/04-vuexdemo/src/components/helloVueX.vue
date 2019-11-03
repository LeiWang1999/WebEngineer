<template>
  <div>
    <h1>This is a helloVueX cpn</h1>
    <p>This is a counter: {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "hellovuex",
  props: {
    counter: Number
  }
};
</script>  

<style>
</style>