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
        <h1 class="mt-10 mb-2 title-page">Life is better with a dog</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10 text-justify-all"> (Eigene Serie, 2018 - 2022). <br> Fliegende Ohren, glückliche Gesichter und einfach nur
          Charakter pur - das sind Hunde in Bewegung. <br> Durch die Fellnasen bin ich zum Fotografieren gekommen und es ist immer noch
          meine große Passion. <br> Denn
          sobald es ans Rennen geht, zeigt sich die Lebensfreude ... es gibt nichts Schöneres auf der Welt!
        </p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-dogs-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryDogsComponent from "@/components/GalleryDogsComponent.vue";

@Component({
  components: {
    GalleryDogsComponent,
  }
})
export default class DogsView extends Vue {

}
</script>

