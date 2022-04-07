<template>

  <v-app-bar
      app
      color="#fff"
      height="100px"
      fixed
      flat
  >
    <v-col cols="1"></v-col>
    <v-col cols="4" class="text-left">
      <v-img
          :src="require(`@/assets/logo3.png`)"
          @click="$router.push('/')"
          style="width: 75%; height: 75%;"
      ></v-img>
    </v-col>
    <v-spacer/>
    <v-col cols="4" class="text-right">
      <v-btn
          class="mr-10 pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('/')"
      >
        <span class="navigation-buttons-text">HOME</span>
      </v-btn>
      <v-btn
          class="mr-10 pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('about')"
      >
        <span class="navigation-buttons-text">ABOUT</span>
      </v-btn>
      <v-btn
          class="pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('gallery')"
      >
        <span class="navigation-buttons-text">GALLERY</span>
      </v-btn>
    </v-col>
    <v-col cols="1"></v-col>
  </v-app-bar>


</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class NavigationBar extends Vue {

}
</script>

<style>
/*.navigation-main-text {
  font-size: 20px;
  font-family: "Signerica Medium";
  color: #212121;
}*/

.navigation-buttons-text {
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 400;
  font-family: Poppins;
  color: #424242 !important;

}
</style>
