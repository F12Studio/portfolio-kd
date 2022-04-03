<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <h1 class="title-page">This is the tattoo page</h1>
        <h2 class="navigation-buttons-text">Reportage über die Entstehung eines Tattoos im Tattoostudio "Hola Papaya" in
          München (Jun, 2021).</h2>
      </v-col>
      <v-col
          v-for="n in 9"
          :key="n"
          class="d-flex child-flex"
          cols="4"
      >
        <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component
export default class TattooView extends Vue {
}
</script>