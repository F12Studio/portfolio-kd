<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">Life is better with a dog</h1>
        <v-divider class="divider"></v-divider>
        <p class="text-page"> (Eigene Serie, 2018 - 2022). <br> Fliegende Ohren, glückliche Gesichter und einfach nur
          Spaß - das sind Hunde in Action. <br> Durch die Hunde bin ich zum Fotografieren gekommen und es ist immer noch
          meine größte Passion. Natürlich liebe ich alle Posen, egal, ob der Hund steht, sitzt oder liegt. <br> Doch
          sobald es ans Rennen geht, zeigt sich der einzigartige Charakter der Fellnasen - es gibt nichts Schöneres auf der Welt!
        </p>
      </v-col>
      <v-col cols="12">
        <gallery-dogs-component/>
      </v-col>
    </v-row>

  </v-container>
</template>


<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryDogsComponent.vue";
import GalleryDogsComponent from "@/components/GalleryDogsComponent.vue";

@Component({
  components: {
    GalleryDogsComponent,
  }
})
export default class DogsView extends Vue {

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
