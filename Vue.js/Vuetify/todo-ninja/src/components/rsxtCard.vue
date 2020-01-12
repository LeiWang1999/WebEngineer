<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">人生信条</v-list-item-title>
        <v-list-item v-for="(text,i) in texts" :key="i">
          <v-list-tile-content small>
            <span>{{text}}</span>
          </v-list-tile-content>
        </v-list-item>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions style="left: 150px; position: relative">
      <v-btn icon>
          <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
    <v-card-text>
     Current:{{curLikes}}
    </v-card-text>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
    name: "rsxt",
    data(){
      return {
        texts:[
        '静坐常思已过',
        '闲谈莫论人非',
        '承担自己责任',
        '发现问题是解决不是埋怨'
        ],
        curLikes:0
      }
    }
}
</script>