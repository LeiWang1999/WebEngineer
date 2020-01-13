<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-title primary-title>
      <div class="title">出版专著</div>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn text>
          <v-icon color="blue">mdi-more</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-title>
    <v-divider></v-divider>
      <v-list-item v-model="books" v-for="(eachbook, i) in books" :key="i">
        <v-list-item-content>
            <v-card-text small align="center"> 
              {{eachbook.title}}
            </v-card-text>
        </v-list-item-content>
      </v-list-item>
  </v-card>
</template>

<script>
export default { 
    name:"cbzz",
    data(){
      return {
        books:[
          {title:"《IPV6部署实战》"},
          {title:"《数据结构和算法》"},
          {title:"《计算机组成原理》"},
          {title:"《计算机网络》"},
          {title:"《网络安全基础》"},
        ]
      }
    }
}
</script>

<style>

</style>