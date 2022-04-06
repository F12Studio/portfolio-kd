<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">Landscape</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page"> (Eigene Serie, 2018 - 2021). <br> Entspannen und einfach mal Sein, Innehalten und die
          Stille genießen ... <br> Egal ob das atemberaubende Island, die schönen Dolomiten oder die guten Münchner
          Hausberge - in der Natur kann man Durchatmen. So ganz klein und nichtig fühlt man sich manchmal, aber dann
          doch wieder so stark und unaufhaltbar.
        </p>
      </v-col>
      <v-col cols="12">
        <gallery-landscape-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryLandscapeComponent.vue";
import GalleryLandscapeComponent from "@/components/GalleryLandscapeComponent.vue";

@Component({
  components: {
    GalleryLandscapeComponent,
  }
})
export default class LandscapeView extends Vue {

}
</script>
