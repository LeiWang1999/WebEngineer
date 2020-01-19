<template>
  <v-card hover flat>
    <v-card-title primary-title>
      <h2 class="headline blue--text">出版专著</h2>
    </v-card-title>
    <v-card-text>
      <ul v-for="(eachbook,i) in books" :key="i">
        <li>
          <v-btn block text text-lg-left router :to="'/jqdtDetail/'+eachbook._id">
            <span class="font-weight-light">《{{eachbook.name}}》</span>
            <v-spacer></v-spacer>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
    <v-card-actions>
      <v-btn text outlined dark color="purple" router to="/cbzz">了解更多</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cbzzcard",
  data() {
    return {
      books: []
    };
  },
  mounted() {
    this.request({
      method: "POST",
      url: "/cbzz/bookList",
      data: {
        limit: 9
      }
    })
      .then(res => {
        this.books = res.data.message;
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