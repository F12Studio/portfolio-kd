<template>

  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-col cols="4">
      <v-btn
          class="mr-2 navigation-buttons"
          rounded
          outlined
          @click="$router.push('/')"
      >
        <span class="navigation-buttons-text">HOME</span>
      </v-btn>
      <v-btn
          class="navigation-buttons"
          rounded
          outlined
          @click="$router.push('about')"
      >
        <span class="navigation-buttons-text">THIS IS A TEST</span>
      </v-btn>
    </v-col>
    <v-col cols="4" class="text-center">
      <span class="navigation-main-text">Katharina Düwel</span>
    </v-col>
    <v-spacer/>
  </v-app-bar>


</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class NavigationBar extends Vue {

}
</script>

<style>
.navigation-main-text{
  font-size: 20px;
  letter-spacing: 5px;
}

.navigation-buttons-text{
  font-size: 10px;
  letter-spacing: 5px;
}
</style>
