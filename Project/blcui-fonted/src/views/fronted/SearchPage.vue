<template>
  <v-layout column justify-center align-center class="index-container">
    <v-flex v-if="articleList.length" xs12 sm8 md6 class="card-container">
      <v-card class="card" v-for="(item,i) in articleList" :key="i">
        <span>所在板块:</span>
        <v-subheader v-if="item.type=='jqdt'" small class="red--text">近期动态</v-subheader>
        <v-subheader v-if="item.type=='cbzz'" small class="blue--text">出版专著</v-subheader>
        <v-subheader v-if="item.type=='jszl'" small class="yellow--text">技术专栏</v-subheader>
        <v-subheader v-if="item.type=='zlxz'" small class="green--text">资料下载</v-subheader>
        <v-subheader v-if="item.type=='tszs'" small class="pink--text">他山之石</v-subheader>

        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text class="post">
          <span class="post-time">
            <v-icon small>mdi-calendar-month-outline</v-icon>
            发表于{{item.date}}
          </span>
          <span>
            <v-icon small>mdi-view</v-icon>
            阅读次数 {{item.clicktime}}
          </span>
        </v-card-text>
        <v-card-text class="content">{{item.gist}}</v-card-text>
        <v-btn v-if="item.type=='zlxz'" color="primary" :href="item.downloadlink" text>点击下载</v-btn>
        <v-btn v-if="item.type=='cbzz'" color="primary" :href="'/cbzzDetail/'+item._id" text>了解更多</v-btn>
        <v-btn v-else color="primary" text @click="handleRead(item._id, item.type)">阅读原文 »</v-btn>
      </v-card>
    </v-flex>
    <v-flex v-else xs12 sm8 md6 class="card-container">
      <h2 class="text-center">对不起，没有找到相关文章</h2>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      articleList: []
    };
  },
  mounted() {
    let keywords = this.$route.params.keywords;
    this.fetchInfo(keywords);
  },
  computed: {
    newKeyword() {
      return this.$route.params.keywords;
    }
  },
  watch: {
    newKeyword(val) {
      this.fetchInfo(val);
    }
  },
  methods: {
    fetchInfo(keywords) {
      this.request({
        method: "POST",
        url: "/user/search",
        data: {
          keywords: keywords
        }
      }).then(res => {
        this.articleList = res.data.result;
      });
    },
    handleRead(id, type) {
      this.$router.push("/" + type + "Detail/" + id);
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