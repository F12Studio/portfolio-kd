<template>
  <v-container class="v-application mb-10">
    <v-row class="text-left ma-0">
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
        <h1 class="mt-10 mb-2 title-page">Landscape</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10"> (Eigene Serie, 2018 - 2021). <br> Entspannen und einfach mal Sein, Innehalten und die
          Stille genießen ... <br> Ob das atemberaubende Island oder die Münchner
          Hausberge - in der Natur kann man Durchatmen. <br>Ganz klein und nichtig fühlt man sich manchmal, aber dann
          doch wieder so stark und unaufhaltsam.
        </p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-landscape-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryLandscapeComponent from "@/components/GalleryLandscapeComponent.vue";

@Component({
  components: {
    GalleryLandscapeComponent,
  }
})
export default class LandscapeView extends Vue {

}
</script>
