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
                  :img="require(`@/assets/galleries/tattoo//${image}`)"
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
          <img class="gallery-image" @click="overlayActive = false"
               :src="require(`@/assets/galleries/tattoo//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryTattooComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'tattoo-01.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'tattoo-01.jpg',
    'tattoo-02.jpg',
    'tattoo-03.jpg',
    'tattoo-04.jpg',
    'tattoo-05.jpg',
    'tattoo-06.jpg',
    'tattoo-07.jpg',
    'tattoo-08.jpg',
    'tattoo-09.jpg',
    'tattoo-10.jpg',
    'tattoo-11.jpg',
    'tattoo-12.jpg',
    'tattoo-13.jpg',
    'tattoo-14.jpg',
    'tattoo-15.jpg',
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
