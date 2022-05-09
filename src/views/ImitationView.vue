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
        <h1 class="mt-10 mb-2 title-page">Imitation of an Idol</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10">Imitation des Fotografen Marius Sperlich (1. Semester, Januar 2021). <br> Vorbild und
          Nachbild - mein erstes
          Fotoprojekt im Studium, und es ist immer noch eines meiner Favoriten. <br> Seine starken Bildern und der
          gesellschaftskritische Inhalt haben Marius SPerlich bekannt gemacht, sein Stil ist einzigartig. Ihn zu
          imitieren war nicht einfach, aber auf jeden Fall eine schöne Challenge, auf die ich sehr stolz bin.</p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-imitation-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryImitationComponent from "@/components/GalleryImitationComponent.vue";

@Component({
  components: {
    GalleryImitationComponent,
  }
})
export default class ImitationView extends Vue {

}
</script>

