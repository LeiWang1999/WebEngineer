<template>
<v-card hover flat>
 <v-card-title primary-title>
      <h2 class="headline blue--text">技术专栏</h2>
    </v-card-title>
    <v-card-text>
      <ul v-for="(eachnew,i) in news" :key="i">
        <li>
          <v-btn block text text-lg-left router :to="'/jqdtDetail/'+eachnew._id">
            <span class="font-weight-light">{{eachnew.title}}</span>
            <v-spacer></v-spacer>
            <span>{{eachnew.createtime.split(" ")[0]}}</span>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
  <v-card-actions>
    <v-btn text outlined dark color="orange" router to="/jszl" >了解更多</v-btn>
  </v-card-actions>
</v-card>
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
      url: "/jszl/articalList"
    })
      .then(res => {
        this.news = res.data.message;
      })
      .catch(err => window.console.log(err));
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
ul li {
  background-repeat: no-repeat;
  background-position: 0px 5px;
}
</style>