<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-spacer/>
        <v-col cols md="12" lg="12" xl="10" class="mt-5 pa-0">
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
                    :img="require(`@/assets/galleries/portraits//${image}`)"
                    height="400"
                    width="600"
                    @click="setCurrentPicture(image)"
                >
                </v-card>
              </v-col>
            </v-item>
          </v-row>
        </v-col>
        <v-spacer/>
      </v-row>
      <v-overlay :value="overlayActive" @click="overlayActive = false" opacity="0.95">
        <div :style="windowSize" class="image-wrapper">
          <img class="gallery-image" @click="overlayActive = false"
               :src="require(`@/assets/galleries/portraits//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryPortraitsComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'portraits-01.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'portraits-01.jpg',
    'portraits-02.jpg',
    'portraits-03.jpg',
    'portraits-04.jpg',
    'portraits-05.jpg',
    'portraits-06.jpg',
    'portraits-07.jpg',
    'portraits-08.jpg',
    'portraits-09.jpg',

    'portraits-12.jpg',
    'portraits-13.jpg',
    'portraits-14.jpg',

  ]

  public setCurrentPicture(image: string) {
    this.currentSelectedPicture = image;
    this.overlayActive = true;
  }


  public mounted() {
    window.addEventListener("resize", this.recalculateWindowSize);
  }

  public recalculateWindowSize() {
    this.windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';
  }

}
</script>
