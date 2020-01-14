<template>
  <div class="dashboard">
    <v-subheader class="grey--text">导航页</v-subheader>
    <v-container class="my-5" grid-list-xs>
      <v-row>
        <v-col cols="12" sm="4">
          <JqdtCard />
        </v-col>
        <v-col cols="12" sm="4">
          <GrjjCard />
        </v-col>
        <v-col cols="12" sm="4">
          <CbzzCard />
        </v-col>
        <v-col cols="12" sm="4">
          <JszlCard />
        </v-col>
        <v-col cols="12" sm="4">
          <ZlxzCard />
        </v-col>
        <v-col cols="12" sm="4">
          <RsxtCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RsxtCard from "@/components/fronted/rsxtCard.vue";
import JqdtCard from "@/components/fronted/jqdtCard.vue";
import GrjjCard from "@/components/fronted/grjjCard.vue";
import CbzzCard from "@/components/fronted/cbzzCard.vue";
import JszlCard from "@/components/fronted/jszlCard.vue";
import ZlxzCard from "@/components/fronted/zlxzCard.vue";
export default {
  name: "home",
  components: {
    RsxtCard,
    JqdtCard,
    GrjjCard,
    CbzzCard,
    JszlCard,
    ZlxzCard
  },
  data() {
    return {
      drawer: false,
      links: [
        { text: "个人简介", route: "/grjj" },
        { text: "认证情况", route: "/rzqk" },
        { text: "学生评价", route: "/xspj" },
        { text: "成绩查询", route: "/cjcx" },
        { text: "参与项目", route: "/cyxm" },
        { text: "用户论坛", route: "/yhlt" }
      ]
    };
  }
};
</script>
