<template>
  <div>
    <v-layout column justify-center align-center class="index-container">
      <v-flex xs12 sm8 md6 class="card-container">
        <v-card class="card" v-for="(item,i) in files" :key="i">
          <v-card-title class="headline">{{item.name}}</v-card-title>
          <v-card-text class="post">
            <span class="post-time">
              <v-icon small>mdi-calendar-month-outline</v-icon>
              发表于{{item.updatetime}}
            </span>
            <span>
              <v-icon small>mdi-view</v-icon>
              下载次数 {{item.downloadtime}}
            </span>
          </v-card-text>
          <v-card-text class="content">{{item.gist}}</v-card-text>
          <v-btn color="primary" text :href="item.downloadlink">点击下载</v-btn>
        </v-card>
      </v-flex>
    </v-layout>

    <div class="text-center">
      <v-pagination total-visible="6" v-model="page" :length="length" @input="changePage"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zlxz",
  data() {
    return {
      page: 1,
      limit: 6,
      length: 0,
      keywords: "",
      files: [],
      currentPage: 1
    };
  },
  mounted() {
    this.$store.commit("setLevel", 2);
    this.$store.commit("setTitle", ["导航", "资料下载"]);
    this.fetchData();
    this.files.forEach(element => {
      element.expand = false;
    });
  },
  methods: {
    fetchData() {
      this.request({
        method: "POST",
        url: "/zlxz/fileList",
        data: {
          page: this.page,
          limit: this.limit
        }
      })
        .then(res => {
          this.files = res.data.message;
          this.length = Math.ceil(res.data.totalLength / this.limit);
        })
        .catch(err => window.console.log(err));
    },
    search() {},
    updateCount(index) {
      let obj = this.files[index];
      window.console.log(obj);
      if (obj.downloadtime) {
        obj.downloadtime = obj.downloadtime + 1;
      } else {
        obj["downloadtime"] = 1;
      }
      this.request.post("zlxz/updateFile", { fileInfo: obj });
    },
    changePage(page) {
      this.page = page;
      this.fetchData();
    }
  }
};
</script>

<style lang="less" scoped>
.index-container {
  max-width: 1000px !important;
  margin: 0 auto;
}
.v-card {
  box-shadow: none;
}
.card {
  background-color: rgba(255, 255, 255, 0) !important;
  &:not(:last-child) {
    border-bottom: 1px dotted #aaa;
  }
}
.card:not(:first-child) {
  margin-top: 40px !important;
}
.card-container {
  width: 90%;
}
.post {
  padding-bottom: 8px;
  font-size: 12px;
  &-class {
    margin: 0 6px;
    padding: 0 6px;
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
}
.content {
  padding-top: 0;
}
</style>