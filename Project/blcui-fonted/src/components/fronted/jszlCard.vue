<template>
  <div>
    <v-card-title primary-title>
      <h2 class="headline blue--text">技术专栏</h2>
      <v-spacer></v-spacer>
      <v-btn  icon color="blue" router to="/jszl">
        <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="blue"></v-divider>
    <v-card-text>
      <ul v-for="(eachnew,i) in news" :key="i">
        <li>
          <v-btn block text text-lg-left router :to="'/jszlDetail/'+eachnew._id">
            <span class="font-weight-light">{{eachnew.title}}</span>
            <v-spacer></v-spacer>
            <span class="grey--text">{{eachnew.createtime.split(" ")[0]}}</span>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "jszlcard",
  data() {
    return {
      news: []
    };
  },
  mounted() {
    this.request({
      method: "POST",
      url: "/jszl/articalList",
      data: {
        limit: 9
      }
    })
      .then(res => {
        this.news = res.data.message;
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