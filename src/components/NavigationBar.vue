<template>

  <v-app-bar
      app
      color="#fff"
      height="110px"
      class="header"
      fixed
      flat
  >
    <v-col cols="1"
           class="pa-0 ma-0"></v-col>
    <v-col cols="4" class="text-left pa-0">
      <v-img
          :src="require(`@/assets/logo3.png`)"
          @click="$router.push('/')"
          class="image-logo"
      ></v-img>
    </v-col>
    <v-spacer/>
    <v-col cols="6" class="text-right pa-0">
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
          class="mr-10 pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('photography')"
      >
        <span class="navigation-buttons-text">PHOTOGRAPHY</span>
      </v-btn>
      <v-btn
          class="mr-10 pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('film')"
      >
        <span class="navigation-buttons-text">FILM</span>
      </v-btn>
      <v-btn
          class="pa-0 navigation-buttons"
          rounded
          color="#fff"
          depressed
          plain
          @click="$router.push('design')"
      >
        <span class="navigation-buttons-text">DESIGN</span>
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
.header{
  padding: 0 !important;
}

.navigation-buttons-text {
  font-size: 16px;
  letter-spacing: 3px;
  font-weight: 400;
  font-family: Poppins;
  color: #424242 !important;
}

.image-logo {
  width: 350px;
  height: auto;
  cursor: pointer;
}
</style>
