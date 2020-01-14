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
import Navbar from "@/components/fronted/Navbar"
import pageFooter from "@/components/fronted/pageFooter"
export default {
  name: "fontedindex",
  components: {
    Navbar,
    pageFooter
  },
};
</script>
