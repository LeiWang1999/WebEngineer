<template>
  <div>
    <h2>Home Page</h2>
    <p>This is my home page</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created: function(){
    console.log('Home Created');
  }
};
</script>