<template lang="html">
  <div>
    <v-footer
      height="auto"
      color="primary">
      <v-layout row wrap>
        mt-1
          Made with <v-icon small color="red lighten-1">mdi-heart</v-icon> by Vuetify | Proudly Powered by
       <router-link to="/admin" class="black--text">后台界面</router-link>
        {{ footerCopyright }} {{ getCurrentYear }}
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  data: () => ({
    //
  }),
  computed: {
    footerCopyright() {
      return "@Copy Right";
    },
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="css" scoped>
.attribution a[href] {
  text-decoration: underline;
  color: #ccc;
}
</style>
