<!--<template>
    <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="mt-10 mb-5 title-page">This is the home page</h1>
      </v-col>
    </v-row>
  </v-container>
</template>-->

<template>
  <v-container >
    <v-row>
      <v-col cols="12">
        <v-img
            aspect-ratio
            class="image"
            :src="require(`@/assets/galleries/title/titel2.jpg`)"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class HomeView extends Vue {
}
</script>



