<template>
  <v-container style="margin-bottom: 50px;">
    <v-row class="text-left">
      <v-col cols
             md="0"
             lg="0"
             xl="1"
             class="pa-0"></v-col>
      <v-col cols
             md="12"
             lg="12"
             xl="10"
             class="pa-0">
        <h1 class="mt-10 mb-2 title-page">Gallery</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-gallery-component/>
      </v-col>
    </v-row>
    <v-col cols
           md="0"
           lg="0"
           xl="1"
           class="pa-0"></v-col>
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
