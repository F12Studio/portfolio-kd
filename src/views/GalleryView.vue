<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="title-page">This is the gallery page</h1>
        <v-btn
            class="mr-2 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Tattoo</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryView extends Vue {

}
</script>
