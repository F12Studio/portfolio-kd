<template>
  <v-container>
    <v-row class="text-center">
      <v-spacer/>
      <v-col cols="8">
        <h1 class="title-page">This is the gallery page</h1>
        <v-btn
            class="mr-2 mt-5 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Tattoo</span>
        </v-btn>
        <v-btn
            class="mt-5 mr-2 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Imitation</span>
        </v-btn>
        <v-btn
            class="mt-5 mr-2 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Portraits</span>
        </v-btn>
        <v-btn
            class="mt-5 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Dogs</span>
        </v-btn>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryView extends Vue {

}
</script>
