<template>
  <v-container grid-list-xs>
    <v-alert class="primary white--text" v-model="alertValue">保存成功，等待页面跳转...</v-alert>
    <v-snackbar v-model="snackbar">
      {{ warnningText }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-subheader class="black--text">标题</v-subheader>
    <v-text-field v-model="title" label="请输入视频标题" :rules="titlerules" hide-details="auto"></v-text-field>
    <v-subheader class="black--text">请输入视频简介</v-subheader>
    <v-textarea filled name="input-7-4" label="摘要" v-model="gist" :rules="gistrules"></v-textarea>
    <v-subheader class="black--text">请输入技术详情</v-subheader>
    <editor :api-key="apiKey"  :init="editorInit" v-model="content"></editor>
    <v-divider></v-divider>
    <v-subheader class="black--text">视频链接</v-subheader>
    <v-text-field v-model="videolink" label="请输入视频链接" hide-details="auto"></v-text-field>
    <v-divider></v-divider>
    <br />
    <v-btn :disabled="!isSaveDisable" block class="pink" @click="saveArticle">点我保存</v-btn>
  </v-container>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import plugins from "./tinymce/pliguns";
import toolbar from "./tinymce/toolbar";
export default {
  name: "jszledit",
  components:{
    Editor
  },
  data() {
    return {
      snackbar: false,
      warnningText: "",
      alertValue: false,
      updatetime: "",
      content: "",
      title: "",
      gist: "",
      apiKey: "ouv7gosz4fnfvray6qdn7yqbtwsoleq7zx7jfoboixat7ivq",
      videolink: "",
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
      ],
      editorInit: {
        height: 500,
        menubar: true,
        skin_url: "/tinymce/skins/ui/oxide",
        language_url: `/tinymce/langs/zh_CN.js`,
        language: "zh_CN", //调用放在langs文件夹内的语言包
        paste_data_images: true, // 允许粘贴图像
        powerpaste_word_import: "prompt", // 在尝试粘贴word内容后，提示用户在清除和合并选项之间进行选择。
        powerpaste_html_import: "prompt", //在尝试粘贴HTML内容后，提示用户在清除和合并选项之间进行选择
        //TinyMCE 会将所有的 font 元素转换成 span 元素
        convert_fonts_to_spans: true,
        //换行符会被转换成 br 元素
        convert_newlines_to_brs: false,
        force_br_newlines: false,
        //当返回或进入 Mozilla/Firefox 时，这个选项可以打开/关闭段落的建立
        force_p_newlines: false,
        //这个选项控制是否将换行符从输出的 HTML 中去除。选项默认打开，因为许多服务端系统将换行转换成，
        relative_urls: false,
        plugins: plugins,
        toolbar1: toolbar.toobar1,
        toolbar2: toolbar.toobar2,
        images_upload_handler: (blobInfo, success) => {
          success(
            "data:" + blobInfo.blob().type + ";base64," + blobInfo.base64()
          );
        }
      }
    };
  },
  mounted() {
    if (this.$route.params.id) {
      // when article exist
      this.request
        .get("/jszl/articleDetail/" + this.$route.params.id)
        .then(res => {
          let article = res.data.info;
          this.title = article.title;
          this.content = article.content;
          this.updatetime = article.updatetime;
          this.gist = article.gist;
          this.videolink = article.videolink;
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
      let date = y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
      return date;
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
      if (this.videolink.length === 0) {
        this.warnningText = "视频链接不能为空！";
        this.snackbar = true;
        return;
      }

      if (this.$route.params.id) {
        // save existed article
        let obj = {
          _id: this.$route.params.id,
          title: this.title,
          updatetime: this.getDate(),
          gist: this.gist,
          content: this.content,
          videolink: this.videolink
        };
        this.request
          .post("jszl/updateArticle", { articleInfo: obj })
          .then(res => {
            if (res.data.success == true) {
              this.warnningText = "保存成功";
              this.snackbar = true;
              this.refreshArticleList();
            }
          });
      } else {
        // create a new book info
        let obj = {
          title: this.title,
          createtime: this.getDate(),
          gist: this.gist,
          content: this.content,
          videolink: this.videolink
        };
        this.request({
          method: "post",
          url: "/jszl/saveArticle",
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
      this.$router.push({ name: "jszllist" });
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