<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-spacer/>
        <v-col cols md="12" lg="12" xl="10" class="mt-5 pa-0">
          <v-row>
            <v-item v-for="image in images" v-bind:key="image">
              <v-col
                  md="6"
                  sm="8"
                  xs="12">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/imitation//${image}`)"
                    height="500"
                    width="750"
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
               :src="require(`@/assets/galleries/imitation//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryImitationComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'imitation-1.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'imitation-1.jpg',
    'imitation-2.jpg',
    'imitation-3.jpg',
    'imitation-4.jpg',
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
