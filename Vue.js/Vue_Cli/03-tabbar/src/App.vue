<template>
  <div id="app">
    <tab-bar id="tab-bar">

    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue"
export default {
  name : 'App',
  components : {
    TabBar
  }
}
</script>

<style lang="less">
@import "./assets/css/base.css";
#tab-bar {
  display: flex;
  background-color: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  box-shadow: 0px -3px 1px rgba(red, green, blue, 0.2)
}
</style>
