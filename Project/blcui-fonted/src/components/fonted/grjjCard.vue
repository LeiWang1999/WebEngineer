<template>
  <v-card>
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">个人简介</span>
          </v-flex>
        </v-layout>
      </v-container>
    <v-card-title>
      <v-container>
        <v-layout column align-center>
          <v-flex mt-5>
            <v-avatar size="150" color="red">
              <img src="/avatar.jpg" alt="alt" />
            </v-avatar>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
    <v-card-text>
      <h2 align="center" >崔北亮</h2>
    </v-card-text>
    <v-card-text>
      <p >男，中共党员，现任职于南京工业大学信息中心，高级工程师</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>