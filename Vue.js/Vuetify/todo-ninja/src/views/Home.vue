<template>
  <div class="home">
    <h1>This is a Home Page</h1>
    <p
      class="red white--text"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptate id ipsam ipsum ducimus, possimus nobis ipsa aperiam explicabo voluptatem consequatur facilis dolorum perferendis aspernatur aliquam nesciunt, voluptatibus fuga error.</p>
    <p
      class="pink lighten-3 red--text text--darken-3"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus facere corporis, praesentium nihil et dicta optio voluptates officia, est provident blanditiis quo, a suscipit sed possimus neque excepturi veniam.</p>
    <h1 class="display-4">Massive Display</h1>
    <h1 class="display-3">Massive Display</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <br />
    <v-btn depressed dark color="pink">Click me</v-btn>
    <br />
    <v-btn text color="pink">Click me</v-btn>
    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>emial menu</span>
    </v-btn>
    <v-btn small depressed class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>emial me</span>
    </v-btn>
    <v-btn fab dark small class="purple">
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
