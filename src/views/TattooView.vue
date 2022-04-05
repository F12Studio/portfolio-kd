<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">The Art of Tattoo</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page">Reportage über die Entstehung eines Tattoos im Tattoostudio "Hola Papaya" in
          München (2. Semester, Juni 2021). <br> Da ich in diesem Studio selbst Kundin bin, war ich sehr glücklich, dort
          meine Reportage fotografieren zu können. <br> Das Tätowieren hat mich schon seit Jahren fasziniert und
          begeistert. Hier habe ich Fefy begleitet, die einer Stammkundin ein Cover-Up gestochen hat. </p>
      </v-col>
      <v-col cols="12">
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


<style scoped>

.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px 5px 48px 5px;
}

</style>
