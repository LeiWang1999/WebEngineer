<template>
  <div>
    <div>
      <h2>{{title}}</h2>
    </div>
    <div :class="expand ? 'alone-item-expand' : 'alone-item'">
      <span>
        <label>视频介绍：</label>
        <br />
        <p class="grey--text">{{gist}}</p>
      </span>
    </div>
    <div @click="expand = !expand" class="expand-pointer">
      <v-icon v-if="!expand">mdi-chevron-down</v-icon>
      <v-icon v-if="expand">mdi-chevron-up</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      createtime: "",
      title: "",
      gist: "",
      videolink: "",
      expand: false // 是否展开
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
          this.createtime = article.createtime;
          this.gist = article.gist;
          this.videolink = article.videolink;
        });
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.expand-pointer {
  text-align: center;
  cursor: pointer;
}

.alone-item {
  margin: 5px 0;
  width: 100%;
  color: #666;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.alone-item-expand {
  margin: 5px 0;
  color: #666;
  font-weight: 500;
}

.item {
  display: flex;
  margin: 5px 0;
  font-weight: 500;
  justify-content: space-between;
  width: 100%;

  p {
    margin-bottom: 0 !important;
  }

  span {
    width: 50%;
    color: #666;
  }
}
</style>
