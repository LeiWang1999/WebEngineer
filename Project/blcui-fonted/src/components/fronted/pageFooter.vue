<template lang="html">
  <div>
    <v-footer height="auto" color="white">
      <v-layout row wrap>
        <span
          >Made with <v-icon small color="red lighten-1">mdi-heart</v-icon> by
          Vuetify | Proudly Powered by Mars
        </span>
         | 
              <div>
        <span class="grey--text">今日点击:</span>
        <span >{{uv}}</span>
        <span class="grey--text">次</span>
        |
        <span class="grey--text">昨天点击:</span>
        <span >{{uvBefore}}</span>
        <span class="grey--text">次</span>
      </div>
      </v-layout>

      <v-spacer>
        <span> Copyright © 南京工业大学</span>
        <a href="http://www.beian.miit.gov.cn" target="_blank"
          >苏ICP备11073482号</a
        >
        &nbsp;&nbsp;
        <a
          class="police"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011102010195"
          target="_blank"
          >公网安备32011102010195号</a
        >
      </v-spacer>
      <router-link to="/admin" class="black--text">后台界面</router-link>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  data: () => ({
    uv: 0,
    uvBefore: 0
  }),
  mounted() {
    this.request
      .post("/history/getVisit", {
        date: this.getCurrentDate(),
        dateBefore: this.getBeforeDate()
      })
      .then(res => {
        this.uv = res.data.uvToday;
        this.uvBefore = res.data.uvBefore;
      });
  },
  methods: {
    getCurrentDate: function() {
      let mydate, y, m, d;
      mydate = new Date();
      y = mydate.getFullYear();
      m = mydate.getMonth() + 1;
      d = mydate.getDate();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      let date = y + "-" + m + "-" + d;
      return date;
    },
    getBeforeDate: function() {
      let mydate, y, m, d;
      mydate = new Date();
      mydate = new Date(mydate - 24 * 60 * 60 * 1000);
      y = mydate.getFullYear();
      m = mydate.getMonth() + 1;
      d = mydate.getDate();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      let date = y + "-" + m + "-" + d;
      return date;
    }
  }
};
</script>

<style lang="css" scoped>
.attribution a[href] {
  text-decoration: underline;
  color: #ccc;
}
</style>
