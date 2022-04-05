<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-row>
            <v-item v-for="image in images" v-bind:key="image">
              <v-col
              md="4"
              sm="6"
              xs="12">
                <v-card
                  class="d-flex align-center"
                  dark
                  tile
                  flat
                  :img="require(`@/assets/galleries/dogs//${image}`)"
                  height="400"
                  width="600"
                  @click="setCurrentPicture(image)"
                >
                </v-card>
              </v-col>
            </v-item>
          </v-row>
        </v-col>
      </v-row>
      <v-overlay :value="overlayActive" @click="overlayActive = false" opacity="0.95">
        <div :style="windowSize" class="image-wrapper">
          <img class="gallery-image" @click="overlayActive = false" :src="require(`@/assets/galleries/dogs//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryDogsComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'dogs-01.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'dogs-01.jpg',
    'dogs-02.jpg',
    'dogs-03.jpg',
    'dogs-04.jpg',
    'dogs-05.jpg',
    'dogs-06.jpg',
    'dogs-07.jpg',
    'dogs-08.jpg',
    'dogs-09.jpg',
    'dogs-10.jpg',
    'dogs-11.jpg',
    'dogs-12.jpg',
    'dogs-13.jpg',
    'dogs-14.jpg',
    'dogs-15.jpg',
  ]

  public setCurrentPicture(image: string) {
    this.currentSelectedPicture = image;
    this.overlayActive = true;
  }


  public mounted() {
    window.addEventListener("resize", this.recalculateWindowSize);
  }

  public recalculateWindowSize (){
    this.windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';
  }

}
</script>

<style scoped>
.gallery-image{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.image-wrapper{
  text-align: center;
}

</style>
