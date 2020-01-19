<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 8>
        <Info />
        <Player />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Info from "@/components/fronted/jqdtdetail/Info";
import Player from "@/components/fronted/jqdtdetail/Player";
export default {
  name: "jszldetail",
  components: {
    Info,
    Player
  }
};
</script>

