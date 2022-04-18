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
                    :img="require(`@/assets/galleries/city//${image}`)"
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
               :src="require(`@/assets/galleries/city//${currentSelectedPicture}`)"/>
        </div>
      </v-overlay>
    </v-container>
  </v-item-group>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class GalleryCityComponent extends Vue {
  private overlayActive = false;
  private currentSelectedPicture = 'city-01.jpg';
  private windowSize = 'height: ' + (window.innerHeight - 100) + 'px; width: ' + (window.innerWidth - 100) + 'px;';

  private images = [
    'city-01.jpg',
    'city-02.jpg',
    'city-03.jpg',
    'city-04.jpg',
    'city-05.jpg',
    'city-06.jpg',
    'city-07.jpg',
    'city-08.jpg',
    'city-09.jpg',
    'city-10.jpg',
    'city-11.jpg',
    'city-12.jpg',
    'city-13.jpg',
    'city-14.jpg',
    'city-15.jpg',
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
