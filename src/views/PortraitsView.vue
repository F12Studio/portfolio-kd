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
        <h1 class="mt-10 mb-2 title-page">Portraits & Couples</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page mb-10">(Eigene Serie, 2019 - 2022). <br> Portraitfotografie ist meiner Meinung nach eine der
          Königsdisziplinen beim Fotografieren. <br>Die menschlichen Emotionen einzufangen, ohne dass es gestellt wirkt,
          ist eine Kunst für sich. <br>Aus diesem Grund ist jedes Shooting eine Challenge, an der ich immer mehr wachsen kann.</p>
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

