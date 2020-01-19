<template>
  <div class="player">
    <d-player :options="options" ref="player" />
    <v-divider />
  </div>
</template>

<script>
import VueDPlayer from "mars-vue-dplayer";
import "mars-vue-dplayer/dist/mars-vue-dplayer.css";

export default {
  name: "Player",
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      options: {
        // dplayer 设置
        video: {
          url: ""
        }
      },
      player: null
    };
  },
  mounted() {
    if (this.$route.params.id) {
      // when article exist
      this.request
        .get("/jszl/articleDetail/" + this.$route.params.id)
        .then(res => {
          let article = res.data.info;
          this.options.video.url = article.videolink;
        });
    }
  },

  methods: {}
};
</script>

<style lang="scss">
.dplayer {
  width: 100%;
  height: 420px;
  border-radius: 4px;
}

.mini-btn {
  padding: 0 8px !important;
}
</style>
