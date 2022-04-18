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
        <h1 class="mt-10 mb-2 title-page">The Art of Tattoo</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page">Reportage über die Entstehung eines Tattoos im Tattoostudio "Hola Papaya" in
          München (2. Semester, Juni 2021). <br> Da ich in diesem Studio selbst Kundin bin, war ich sehr glücklich, dort
          meine Reportage fotografieren zu können. <br> Das Tätowieren hat mich schon seit Jahren fasziniert und
          begeistert. Hier habe ich Fefy begleitet, die einer Stammkundin ein Cover-Up gestochen hat. </p>
      </v-col>
      <v-col class="pa-0 mb-5">
        <gallery-tattoo-component/>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryTattooComponent.vue";
import GalleryTattooComponent from "@/components/GalleryTattooComponent.vue";

@Component({
  components: {
    GalleryTattooComponent,
  }
})
export default class TattooView extends Vue {

}
</script>


