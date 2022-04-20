<template>
  <v-container class="v-application mb-15">
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
        <h1 class="mt-10 mb-2 title-page">Portraits & Couples</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10">(Eigene Serie, 2019 - 2022). <br> Auch wenn ich mit der Tierfotografie begonnen habe, bin
          ich relativ schnell zur Portraitfotografie gekommen. <br> Es ist nochmal eine ganz andere Herausforderung, der
          ich mich sehr gerne stelle und so imemr weiter an mir arbeiten kann. <br> Abgesehen von normalen Portraits und
          Couple-Shootings arbeite ich auch sehr gerne mit Photoshop, um die reale und fiktive Welt miteinander zu
          verbinden. </p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-portraits-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryPortraitsComponent from "@/components/GalleryPortraitsComponent.vue";

@Component({
  components: {
    GalleryPortraitsComponent,
  }
})
export default class PortraitsView extends Vue {

}
</script>

