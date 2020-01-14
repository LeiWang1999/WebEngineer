<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-title primary-title>
      <div class="title">近期动态</div>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn text>
          <v-icon color="blue">mdi-more</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-divider></v-divider>
      <v-list-item v-model="news" v-for="(eachnew, i) in news" :key="i">
        <v-list-item-content>
          <v-card-title primary-title small>{{eachnew.time}}</v-card-title>
          <v-card-actions>
            <v-btn absolute right text class="grey--text">
              <span class="text--right" block>{{eachnew.title}}</span>
            </v-btn>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "jqdtcard",
  data() {
    return {
      news: [
        { title: "做了啥1", time: "11-10" },
        { title: "做了啥2...", time: "11-20" },
        { title: "1231313...", time: "11-30" },
        { title: "adaddasda...", time: "09-10" }
      ]
    };
  }
};
</script>

<style>
</style>