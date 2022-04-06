<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page">Gallery</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-col cols="12">
        <gallery-gallery-component/>
      </v-col>
    </v-row>
<!--    <v-row class="text-center">
      <v-spacer/>
      <v-col cols="8">
        <h1 class="mt-10 mb-5 title-page">This is the gallery page</h1>
        <v-btn
            class="mr-2 mt-5 navigation-buttons"
            rounded
            outlined
            @click="$router.push('tattoo')"
        >
          <span class="navigation-buttons-text">Tattoo</span>
        </v-btn>
        <v-btn
            class="mt-5 mr-2 navigation-buttons"
            rounded
            outlined
            @click="$router.push('imitation')"
        >
          <span class="navigation-buttons-text">Imitation</span>
        </v-btn>
        <v-btn
            class="mt-5 mr-2 navigation-buttons"
            rounded
            outlined
            @click="$router.push('portraits')"
        >
          <span class="navigation-buttons-text">Portraits</span>
        </v-btn>
        <v-btn
            class="mt-5 navigation-buttons"
            rounded
            outlined
            @click="$router.push('dogs')"
        >
          <span class="navigation-buttons-text">Dogs</span>
        </v-btn>
      </v-col>
      <v-spacer/>
    </v-row>-->
    <!--    <v-row>
          <v-col cols="3">
            <v-btn
                color="transparent"
                depressed
                rounded
                @click="$router.push('tattoo')"
            ><img
                height="200px"
                width="auto"
                :src="require(`@/assets/galleries/tattoo/tattoo-06.jpg`)"/>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
                color="transparent"
                depressed
                rounded
                @click="$router.push('imitation')"
            ><img
                height="200px"
                width="auto"
                :src="require(`@/assets/galleries/imitation/imitation-1.jpg`)"/>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
                color="transparent"
                depressed
                rounded
                @click="$router.push('portraits')"
            ><img
                height="200px"
                width="auto"
                :src="require(`@/assets/galleries/portraits/portraits-01.jpg`)"/>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
                color="transparent"
                depressed
                rounded
                @click="$router.push('dogs')"
            ><img
                height="200px"
                width="auto"
                :src="require(`@/assets/galleries/dogs/dogs-09.jpg`)"/>
            </v-btn>
          </v-col>
        </v-row>-->
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import GalleryComponent from "@/components/GalleryGalleryComponent.vue";
import GalleryGalleryComponent from "@/components/GalleryGalleryComponent.vue";

@Component({
  components: {
    GalleryGalleryComponent,
  }
})
export default class GalleryView extends Vue {

}
</script>
