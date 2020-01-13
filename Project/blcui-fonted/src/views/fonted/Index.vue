<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view />
    </v-content>
    <pageFooter/>
  </v-app>
</template>

<script>
import Navbar from "@/components/fonted/Navbar"
import pageFooter from "@/components/fonted/pageFooter"
export default {
  name: "index",
  components: {
    Navbar,
    pageFooter
  },
};
</script>
