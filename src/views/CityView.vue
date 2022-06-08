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
        <h1 class="mt-10 mb-2 title-page">Big city life - Singapore</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10 text-justify"> (Eigene Serie, 2019). <br> Eine Metropole geprägt von Moderne, Technik und Architektur -
          Willkommen in Singapur! <br> Kaum eine andere Stadt hat sich in den letzten Jahrzehnten so stark verändert. Nach
          meinem Abitur vor <br>drei Jahren hatte ich die Gelegenheit, für einige Wochen dort zu wohnen, und
          selten war ich so fasziniert. <br> Fotografisch ist Singapur ein absolutes Highlight, aber seht
          selbst ...
        </p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-city-component/>
        </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryCityComponent from "@/components/GalleryCityComponent.vue";

@Component({
  components: {
    GalleryCityComponent,
  }
})
export default class CityView extends Vue {

}
</script>

