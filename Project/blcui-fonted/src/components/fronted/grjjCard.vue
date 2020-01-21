<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <v-card hover flat>
        <v-card-title primary-title>
          <v-img class="white--text" height="250px" :src="avatarBase64">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <h2 class="headline" style="text-shadow: 0px 2px 5px #222;">个人简介</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
        </v-card-title>
        <v-card-text>
          <div v-html="detailContent"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="mailDialog" width="400">
      <v-card hover flat>
        <v-card-title primary-title>怎样联系我</v-card-title>
        <v-card-text>
          <span>邮箱:</span>
          <a href="mailto:cbl@njut.edu.cn">cbl@njut.edu.cn</a>
        </v-card-text>
        <v-card-text>
          <span>联系电话:</span>
          <span class="black--text">025-83172361/83172367</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="mailDialog = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card hover flat>
      <v-img class="white--text" height="200px" :src="avatarBase64">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <h2 class="headline" style="text-shadow: 0px 2px 5px #222;">个人简介</h2>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-text>
        <h2 align="center">崔北亮</h2>
      </v-card-text>
      <v-card-text>
        <p>{{content}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text outlined dark color="black" @click="showDialog">了解更多</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="grey" @click="mailDialog = true">mdi-email</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "grjjcard",
  data() {
    return {
      content: "",
      avatarBase64: "",
      dialog: false,
      mailDialog: false,
      detailContent: ""
    };
  },
  mounted() {
    this.request.post("/grjj/detail").then(data => {
      let res = data.data.res;
      this.content = res.content;
      this.avatarBase64 = res.avatarBase64;
      this.detailContent = res.detailContent;
    });
  },
  methods: {
    showDialog() {
      this.dialog = true;
    }
  }
};
</script>

<style>
</style>