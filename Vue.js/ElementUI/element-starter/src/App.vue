<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='layout' tag="button">Layout</router-link>
      <router-view></router-view>
      <el-button type="primary" @click="startHacking">Start</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
