<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="title-page">This is the portraits page</h1>
        <h2 class="navigation-buttons-text">Reportage über die Entstehung eines Tattoos im Tattoostudio "Hola Papaya" in
          München (Jun, 2021).</h2>
      </v-col>
      <v-col cols="12">
        <gallery-portraits-component/>
      </v-col>
    </v-row>

  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryPortraitsComponent.vue";
import GalleryPortraitsComponent from "@/components/GalleryPortraitsComponent.vue";

@Component({
  components: {
    GalleryPortraitsComponent,
  }
})
export default class PortraitsView extends Vue {

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
