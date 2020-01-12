<template>
  <nav>
    <v-toolbar app class="blue" dark>
      <v-toolbal-title class="text-uppercase black--text">
        <v-btn text router to="/">
          <span class="font-weight-light">blcui</span>
          <span>的个人主页</span>
        </v-btn>
      </v-toolbal-title>
      <v-spacer>
        <v-container grid-list-xs>
          <v-row no-gutters>
            <v-col cols="12" sm="2" v-for="(link,i) in links" :key="i">
              <v-btn text router :to="link.route">{{link.text}}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-spacer>
      <v-btn text small class="blue" @click="startDrawer">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn text color="black">
        <v-icon>mdi-email</v-icon>
        <span>Email me</span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-card class="primary" flat>
        <v-card-media class="white--text" height="200px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">个人简介</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <v-container fill-height>
            <v-layout column="" fill-height align-center>
              <v-flex mt-5 flexbox>
                <v-avatar size="150" color="red">
                  <img src="/avatar.jpg" alt="alt" />
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-card-text>
          <h2 align="center" class="white--text">崔北亮</h2>
        </v-card-text>
        <v-card-text>
          <p class="white--text">男，中共党员，现任职于南京工业大学信息中心，高级工程师</p>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        { text: "近期动态", route: "/grjj" },
        { text: "出版专著", route: "/rzqk" },
        { text: "技术专栏", route: "/xspj" },
        { text: "资料下载", route: "/cjcx" },
        { text: "用户论坛", route: "/yhlt" }
      ],
      linkdemo: [
        { icon: "mdi-clock", text: "Dashboard", route: "/" },
        { icon: "mdi-account", text: "My Projects", route: "/projects" },
        { icon: "mdi-flag", text: "My Team", route: "/team" }
      ]
    };
  },
  methods: {
    startDrawer() {
      this.drawer = ~this.drawer;
    }
  }
};
</script>

<style>
</style>