<template>

  <v-app-bar
      app
      color="#fff"
      height="100px"
      fixed
      flat
  >
    <v-spacer/>
    <v-col cols="4" class="text-left">
      <span class="navigation-main-text">Katharina Düwel</span>
    </v-col>
    <v-col cols="4" class="text-right">
      <v-btn
          class="mr-2 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('/')"
      >
        <span class="navigation-buttons-text">HOME</span>
      </v-btn>
      <v-btn
          class="mr-2 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('about')"
      >
        <span class="navigation-buttons-text">ABOUT</span>
      </v-btn>
      <v-btn
          class="navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('gallery')"
      >
        <span class="navigation-buttons-text">GALLERY</span>
      </v-btn>
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
.navigation-main-text {
  font-size: 20px;
  font-family: "Signerica Medium";
  color: #212121;
}

.navigation-buttons-text {
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 300;
  font-family: Poppins;
  color: #212121;

}
</style>
