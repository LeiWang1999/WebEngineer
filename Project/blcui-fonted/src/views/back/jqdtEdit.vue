<template>
  <v-container grid-list-xs>
    <v-alert class="primary white--text" v-model="alertValue">保存成功，等待页面跳转...</v-alert>
    <v-snackbar v-model="snackbar">
      {{ warnningText }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-subheader class="black--text">标题</v-subheader>
    <v-text-field v-model="title" label="请输入文章标题" :rules="titlerules" hide-details="auto"></v-text-field>
    <v-subheader class="black--text">简介</v-subheader>
    <v-text-field v-model="gist" label="请输入文章简介" :rules="gistrules" hide-details="auto" solo></v-text-field>
    <v-divider></v-divider>
    <mavon-editor v-model="content" />
    <br />
    <v-divider></v-divider>
    <br />
    <v-btn :disabled="!isSaveDisable" block class="pink" @click="saveArticle">点我保存</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "jqdtedit",
  data() {
    return {
      snackbar: false,
      warnningText: "",
      alertValue: false,
      data: "",
      title: "",
      gist: "",
      content: "",
      titleRule1State: false,
      titleRule2State: false,
      gistRule1State: false,
      gistRule2State: false,
      titlerules: [
        value => {
          if (value) {
            this.titleRule1State = true;
            return true;
          } else {
            this.titleRule1State = false;
            return "必填！";
          }
        },
        value => {
          if ((value || "").length <= 20) {
            this.titleRule2State = true;
            return true;
          } else {
            this.titleRule2State = false;
            return "控制在20个字以内！";
          }
        }
      ],
      gistrules: [
        value => {
          if (value) {
            this.gistRule1State = true;
            return true;
          } else {
            this.gistRule1State = false;
            return "必填！";
          }
        },
        value => {
          if ((value || "").length <= 30) {
            this.gistRule2State = true;
            return true;
          } else {
            this.gistRule2State = false;
            return "控制在30个字以内！";
          }
        }
      ]
    };
  },
  mounted() {
    if (this.$route.params.id) {
      // when article exist
      this.request
        .get("/jqdt/articleDetail/" + this.$route.params.id)
        .then(res => {
          let article = res.data.info;
          window.console.log(res.data);
          this.title = article.title;
          this.date = article.date;
          this.gist = article.gist;
          this.content = article.content;
        });
    }
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
      this.date = y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
    },
    saveArticle() {
      if (this.title.length === 0) {
        this.warnningText = "标题不能为空!";
        this.snackbar = true;
        return;
      }
      if (this.gist.length === 0) {
        this.warnningText = "简介不能为空";
        this.snackbar = true;
        return;
      }
      if (this.content.length === 0) {
        this.warnningText = "内容不能为空！";
        this.snackbar = true;
        return;
      }

      if (this.$route.params.id) {
        // save existed article
        let obj = {
          _id: this.$route.params.id,
          title: this.title,
          date: this.date,
          gist: this.gist,
          content: this.content
        };
        this.request
          .post("jqdt/updateArticle", { articleInfo: obj })
          .then(res => {
            if (res.data.success == true) {
              this.warnningText = "保存成功";
              this.snackbar = true;
              setInterval(this.refreshArticleList, 3000);
            }
          });
      } else {
        // esit a new article
        this.getDate();
        let obj = {
          title: this.title,
          date: this.date,
          gist: this.gist,
          content: this.content
        };
        this.request({
          method: "post",
          url: "/jqdt/saveArticle",
          data: {
            articleInfo: obj
          }
        })
          .then(res => {
            if (res.data.success == true) {
              this.warnningText = "保存成功";
              this.snackbar = true;
              this.refreshArticleList();
            }
          })
          .catch(err => window.console.log(err));
      }
    },
    // 保存成功后跳转至文章列表页
    refreshArticleList() {
      this.$router.push({ name: "jqdtlist" });
    }
  },
  computed: {
    isSaveDisable() {
      return (
        this.titleRule1State &&
        this.titleRule2State &&
        this.gistRule1State &&
        this.gistRule2State
      );
    }
  }
};
</script>

<style>
</style>