<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-title primary-title>
      <div class="title">资料下载</div>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn text>
          <v-icon color="blue">mdi-more</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-divider></v-divider>
    <v-list-itern-group v-model="means">
      <v-list-item v-for="(eachmean, i) in means" :key="i">
        <v-list-item-content>
            <v-btn block text class="grey--text">
              <span class="text--right" block>{{eachmean.title}}</span>
            </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list-itern-group>
  </v-card>
</template>

<script>
export default {
    name:"zlxz",
    data(){
      return {
        means:[
          {title:"资料1"},
          {title:"资料2"},
          {title:"资料3"},
          {title:"资料4"},
          {title:"资料5"}
        ]
      }
    }
}
</script>

<style>

</style>