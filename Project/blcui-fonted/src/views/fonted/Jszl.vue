<template>
  <div class="cbzz">
    <v-subheader class="grey--text">认证情况</v-subheader>
    <v-container class="my-5" grid-list-xs>
      <v-card class="pa-5" v-for="(cert, i) in certs" :key="i">
        <v-row no-gutters>
          <v-col cols="12" sm="6">
              <div caption small class="grey--text">时间</div>
            <div>{{cert.time}}</div>
          </v-col>
          <v-col cols="12" sm="6">
            <span>{{cert.name}}</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "jszl",
  data() {
    return {
      certs: [
        { time: "2000年", name: "微软MCSE认证" },
        { time: "2001年", name: "思科CCNA认证" },
        { time: "2006年", name: "思科R&S CCIE认证" },
        { time: "2007年", name: "锐捷RCSI讲师认证" },
        { time: "2008年", name: "思科SecurityCCIE笔试" }
      ]
    };
  }
};
</script>

<style>
</style>