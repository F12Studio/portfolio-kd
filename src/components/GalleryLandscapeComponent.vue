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
                    :img="require(`@/assets/galleries/landscape//${image}`)"
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
               :src="require(`@/assets/galleries/landscape//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryLandscapeComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'landscape-01.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'landscape-01.jpg',
    'landscape-02.jpg',
    'landscape-03.jpg',
    'landscape-04.jpg',
    'landscape-05.jpg',
    'landscape-06.jpg',
    'landscape-07.jpg',
    'landscape-08.jpg',
    'landscape-09.jpg',
    'landscape-10.jpg',
    'landscape-11.jpg',
    'landscape-12.jpg',
    'landscape-13.jpg',
    'landscape-14.jpg',
    'landscape-15.jpg',
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
