<template>
  <v-container class="v-application mb-15">
    <v-row class="ma-0">
      <v-col cols
             md="0"
             lg="0"
             xl="1"
             class="pa-0"></v-col>
      <v-col cols
             md="12"
             lg="12"
             xl="10"
             class="pa-0">
        <h1 class="mt-10 mb-2 title-page text-left">Design</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-row class="ma-0">
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
        <v-col cols
               md="6"
               lg="6"
               xl="4"
               class="pl-0 pb-0 pt-0 pr-10">
          <v-hover v-slot="{ hover }">
            <v-card
                class="d-flex align-center"
                dark
                tile
                flat
                :img="require(`@/assets/design/cd_title.png`)"
                height="400"
                width="600"
                @click="$router.push('album')"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <h1 class="hover-text">See more</h1>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">Dreams and Disgust - Album Booklet</p>
            <p class="text-page text-left">(eigenes Projekt, 2021).<br> Gestaltung eines Covers und Booklets für die
              neue CD<br>der Münchner Indie-Band
              Dirty Red Bandanas.</p>
            <span class="info-text-page mr-2">Adobe Illustrator</span>
            <span class="footer-slash">I</span> <span class="info-text-page ml-2">Adobe InDesign</span>
          </v-col>
        </div>
        <v-spacer/>
      </v-row>
      <v-row class="ma-0">
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
        <v-col cols
               md="6"
               lg="6"
               xl="4"
               class="pl-0 pb-0 pt-10 pr-10">
          <v-hover v-slot="{ hover }">
            <v-card
                class="d-flex align-center"
                dark
                tile
                flat
                :img="require(`@/assets/design/spielkarte_titel.jpg`)"
                height="400"
                width="600"
                @click="$router.push('cmykarten')"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <h1 class="hover-text">See more</h1>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">CMYKarten</p>
            <p class="text-page text-left">Kreativwerkzeuge (2. Semester, 2021).<br> Gestaltung von Spielkarten mit
              eigenen Illustrationen für<br>Bube, Dame, König und Joker im CMYK-Stil.</p>
            <span class="info-text-page mr-2">Adobe Illustrator</span> <span class="footer-slash">I</span> <span
              class="info-text-page ml-2">Adobe InDesign</span>
          </v-col>
        </div>
        <v-spacer/>
      </v-row>
      <v-row class="ma-0">
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
        <v-col cols
               md="6"
               lg="6"
               xl="4"
               class="pl-0 pb-0 pt-10 pr-10">
          <v-hover v-slot="{ hover }">
            <v-card
                class="d-flex align-center"
                dark
                tile
                flat
                :img="require(`@/assets/design/website_tee.jpg`)"
                height="400"
                width="600"
                @click="$router.push('communitea')"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <h1 class="hover-text">See more</h1>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">CommuniTea - Website Design</p>
            <p class="text-page text-left">Online Medien (2. Semester, 2021).<br> Gestaltung einer fiktiven interaktiven
              Homepage für einen
              <br>Teeshop inklusive Dokumentation in PDF-Format.</p>
            <span class="info-text-page mr-2">Adobe Illustrator</span> <span class="footer-slash">I</span> <span
              class="info-text-page ml-2 mr-2">Adobe InDesign</span>
            <span class="footer-slash">I</span> <span class="info-text-page ml-2">Adobe XD</span>
          </v-col>
        </div>
        <v-spacer/>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class FilmView extends Vue {

}
</script>
