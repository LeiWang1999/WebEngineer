<template>
  <v-container fluid>
    <v-card class="mx-auto" fluid>
      <v-card-text>
        <div class="text-center">上一次更新时间</div>
        <p class="text--primary text-center">{{updatetime}}</p>
      </v-card-text>
        <v-textarea outlined label="个人简介" v-model="content"></v-textarea>
        <v-btn block class="purple white--text" @click="updateInfo">确认修改</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "grjjAdmin",
  data() {
    return {
      content: "",
      updatetime: ""
    };
  },
  mounted() {
    this.request.post("/grjj/detail").then(data => {
      let res = data.data.res;
      this.content = res.content;
      this.updatetime = res.updatetime;
    });
  },
  methods: {
    getDate: function() {
      let mydate, y, m, d, hh, mm, ss;
      mydate = new Date();
      y = mydate.getFullYear();
      m = mydate.getMonth() + 1;
      d = mydate.getDate();
      hh = mydate.getHours();
      mm = mydate.getMinutes();
      ss = mydate.getSeconds();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      if (hh < 10) hh = "0" + hh;
      if (mm < 10) mm = "0" + mm;
      if (ss < 10) ss = "0" + ss;
      let time = y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
      return time;
    },
    fetchInfo() {
      this.request.post("/grjj/detail").then(data => {
        let res = data.data.res;
        this.content = res.content;
        this.updatetime = res.updatetime;
      });
    },
    updateInfo() {
      let obj = {
        content: this.content,
        updatetime: this.getDate()
      };
      this.request.post("/grjj/updateDetail", { obj }).then(res => {
        let success = res.data.success;
        if (success) alert("更新成功");
        this.fetchInfo();
      });
    }
  }
};
</script>

<style>
</style>