<template>
  <div>
    <v-card-title primary-title>
      <h2 class="headline blue--text">出版专著</h2>
      <v-spacer></v-spacer>
      <v-btn icon color="blue" router to="/cbzz">
        <v-icon>mdi-chevron-double-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="blue"></v-divider>
    <v-card-text>
      <ul v-for="(eachbook,i) in books" :key="i">
        <li>
          <v-btn block text text-lg-left router :to="'/cbzzDetail/'+eachbook._id">
            <span class="font-weight-light">《{{eachbook.name}}》</span>
          </v-btn>
        </li>
      </ul>
    </v-card-text>
  </div>
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