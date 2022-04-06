<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">Big city life - Singapore</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page"> (Eigene Serie, 2019). <br> Eine Metropole geprägt von Moderne, Technik und Architektur -
          Willkommen in Singapur! <br> Kaum eine andere Stadt hat sich in den letzten Jahren so stark verändert. Nach
          meinem Abitur im Jahr 2019 hatte das Glück, für einige Wochen dort zu wohnen, und
          selten habe ich mich so schnell verliebt. <br> Fotografisch ist Singapur ein absolutes Highlight, aber seht
          selbst ...
        </p>
      </v-col>
      <v-col cols="12">
        <gallery-city-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryCityComponent.vue";
import GalleryCityComponent from "@/components/GalleryCityComponent.vue";

@Component({
  components: {
    GalleryCityComponent,
  }
})
export default class CityView extends Vue {

}
</script>

