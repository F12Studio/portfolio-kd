<template>
  <v-app-bar
      app
      color="#fff"
      height="100vh"
      fixed
      flat
  >
    <v-col cols
           md="0"
           lg="1"
           xl="1"
           class="pa-0"></v-col>
    <v-col cols="4" class="text-left pt-5 pb-5 pl-0 pr-0">
      <v-img
          :src="require(`@/assets/logo3.png`)"
          @click="$router.push('/')"
          class="image-logo"
      ></v-img>
    </v-col>
    <v-col cols
           md="4"
           lg="2"
           xl="2"
           class="pa-0"></v-col>
    <v-col cols="4" class="text-right pa-0">
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
          style="margin-right: -7px;"
      >
        <span class="navigation-buttons-text">GALLERY</span>
      </v-btn>
    </v-col>
    <v-col cols
           md="0"
           lg="1"
           xl="1"
           class="pa-0"
    ></v-col>
  </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class NavigationBar extends Vue {

}
</script>

<style>
.navigation-buttons-text {
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 400;
  font-family: Poppins;
  color: #424242 !important;
}

.image-logo {
  width: 60%;
  height: 60%;
  cursor: pointer;
  margin-left: -5px !important;
}
</style>
