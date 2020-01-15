<template>
  <v-container grid-list-xs>
    <v-snackbar v-model="snackbar">
      {{ warnningText }}
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-text-field v-model="title" label="请输入文章标题" :rules="rules" hide-details="auto"></v-text-field>
    <v-divider></v-divider>
    <mavon-editor :toolbars="toolbars" v-model="content" @imgAdd="imgAdd" />
    <br />
    <v-divider></v-divider>
    <br />
    <v-btn :disabled="!isSaveDisable" block class="pink" @click="saveArticle">点我保存</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "editDemo",
  data() {
    return {
      snackbar: false,
      warnningText: "",
      title: "",
      content: "",
      titleRule1State: false,
      titleRule2State: false,
      rules: [
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
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
        boxShadow: false
      }
    };
  },
  methods: {
    saveArticle() {
      //   let self = this;
      if (this.title.length === 0) {
        this.warnningText = "标题不能为空!";
        this.snackbar = true;
        return;
      }
      if (this.content.length === 0) {
        this.warnningText = "内容不能为空！";
        this.snackbar = true;
        return;
      }
      alert("保存" + this.title + "成功");
    },
    imgAdd(pos, file) {
      // 上传图片
      var formData = new FormData();
      formData.append("image", file);
      this.request({
        url: ("/jqdt/uploadImage"), //请求地址
        method: "post",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(url => {
        // console.log(JSON.stringify(url))
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1.  通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         * 3. 由于vue运行访问的路径只能在static下，so，我就把图片保存到它这里了
         */        
        this.$img2Url(
          pos,
          "http://localhost:8002/static/image/" + url.data.data
        );
      }).catch(err=> window.console.log(err));
    },
  },
  computed: {
    isSaveDisable() {
      return this.titleRule1State && this.titleRule2State;
    }
  }
};
</script>

<style>
</style>