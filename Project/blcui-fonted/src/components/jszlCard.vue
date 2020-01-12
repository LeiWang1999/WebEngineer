<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-title primary-title>
      <div class="title">技术专栏</div>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn text>
          <v-icon color="blue">mdi-more</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-divider></v-divider>
    <v-list-itern-group v-model="news">
      <v-list-item v-for="(eachnew, i) in news" :key="i">
        <v-list-item-content>
            <v-btn block text class="grey--text">
              <span class="text--right" block>{{eachnew.title}}</span>
            </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list-itern-group>
  </v-card>
</template>

<script>
export default {
  name:"jszl",
  data(){
    return {
      news:[
        {title:"技术1"},
        {title:"技术2"},
        {title:"技术3"},
        {title:"技术4"},
        {title:"技术5"},
      ]
    }
  }
}
</script>

<style>

</style>