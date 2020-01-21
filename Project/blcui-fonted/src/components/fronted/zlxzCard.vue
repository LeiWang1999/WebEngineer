<template>
  <div>
    <v-card-title primary-title>
      <h2 class="headline blue--text">资料下载</h2>
      <v-spacer></v-spacer>
      <v-btn  icon color="blue" router to="/zlxz">
        <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="blue"></v-divider>
    <v-card-text>
      <ul v-for="(eachfile,i) in files" :key="i">
        <li>
          <v-btn block text text-lg-left :href="eachfile.downloadlink">
            <span class="font-weight-light">{{eachfile.name}}</span>
            <v-spacer></v-spacer>
            <span class="grey--text">{{eachfile.updatetime.split(" ")[0]}}</span>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
  </div>
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

<style scoped>
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
ul li {
  border-style: none none dashed none;
  border-width: 1px;
  background-repeat: no-repeat;
  background-position: 0px 5px;
}
ul :hover {
  color: dodgerblue;
}
</style>