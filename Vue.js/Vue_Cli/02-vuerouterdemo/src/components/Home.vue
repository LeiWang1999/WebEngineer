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
  data(){
    return {
      path: "/home/news"
    }
  },
  created: function(){
    console.log('Home Created');
  },
  distroyed: function(){
    console.log('Home Distroyed');
  },
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.$route.path);
    
    this.path = this.$route.path
    next()
  }
};
</script>