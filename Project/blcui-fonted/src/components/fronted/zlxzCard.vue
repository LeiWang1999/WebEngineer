<template>
<v-card hover flat>
    <v-card-title primary-title>
      <h2 class="headline blue--text">资料下载</h2>
    </v-card-title>
    <v-card-text>
      <ul v-for="(eachfile,i) in files" :key="i">
        <li>
          <v-btn block text text-lg-left router :to="'/jqdtDetail/'+eachfile._id">
            <span class="font-weight-light">{{eachfile.name}}</span>
            <v-spacer></v-spacer>
            <span>{{eachfile.updatetime.split(" ")[0]}}</span>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
  <v-card-actions>
    <v-btn text outlined dark color="pink" router to="/zlxz" >了解更多</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  name: "zlxzcard",
  data() {
    return {
      files: []
    };
  },
  mounted() {
    this.request({
      method: "POST",
      url: "/zlxz/fileList",
      data:{
        limit: 9
      }
    })
      .then(res => {
        this.files = res.data.message;
      })
      .catch(err => window.console.log(err));
  }
};
</script>

<style>
</style>