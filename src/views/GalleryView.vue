<template>
  <v-container style="margin-bottom: 50px;">
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">Gallery</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-col cols="12">
        <gallery-gallery-component/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryGalleryComponent.vue";
import GalleryGalleryComponent from "@/components/GalleryGalleryComponent.vue";

@Component({
  components: {
    GalleryGalleryComponent,
  }
})
export default class GalleryView extends Vue {

}
</script>

<style>
.gallery-image{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  align-self: center;
}

.image-wrapper{
  text-align: center;
  display: flex;
  justify-content: center;
;
}
</style>
