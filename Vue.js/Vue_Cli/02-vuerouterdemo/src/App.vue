<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <!-- tag属性渲染成button
    active-class 可以更改当触发的时候被赋予的class名
    或者在router中加上
    linkActiveClass:'active'-->
    <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <!-- replace属性是把history的跳转方法从push换成replace -->
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+userId" replace>用户</router-link>
    <router-link :to="ProfileInfo">配置</router-link>
    <!-- 告诉渲染的站位 -->
    <!-- 可以把 keep-alive 的属性改掉 -->
    <!-- <keep-alive exclude="cpn-name,cpn-name"> -->
    <!-- 两个组件的名字之间不能加空格 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 在Keep alive 里 组件有actived 和 disactived两个方法 -->
    <!-- 如果没有KeepAliv 那么组件就只有created和destroyed -->
    <br />
    <button @click="callHome">Home Page</button>
    <button @click="callAbout">About</button>
    <br />
    <button @click="callPrint">Click Me to print $router</button>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      userId: "princeling",
      ProfileInfo: {
        path: "/profile",
        query: {
          name: "princeling",
          age: 20,
          height: 175
        }
      }
    };
  },
  methods: {
    callHome: function() {
      // 不能用history.pushxxxx 会绕过router
      this.$router.push("/home");
      console.log("callHome");
    },
    callAbout: function() {
      this.$router.push("/about");
      console.log("callAbout");
    },
    callPrint: function() {
      console.log(this.$router);
    }
  },
  created: function() {
    console.log("App created");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  color: red;
}
</style>
