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
        <h1 class="mt-10 mb-2 title-page text-left">Film</h1>
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
                :img="require(`@/assets/film/making_of_title.png`)"
                height="400"
                width="600"
                href="https://www.youtube.com/watch?v=Vcro9gBUYM8"
                target="_blank"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <v-icon size="150px" color="#eeeeee">play_circle</v-icon>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">Analoge Fotografie - Making Of</p>
            <p class="text-page text-left">Vertiefung Fotografie und Bewegtbild (2. Semester, 2021).<br> Im Rahmen eines
              Kurses durften wir uns mit der <br>analogen Fotografie beschäftigen und haben dies <br>in kurzen Videos
              festgehalten.</p>
            <span class="info-text-page mr-2">Kamera</span>
            <span class="footer-slash">I</span> <span class="info-text-page ml-2">Schnitt</span>
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
                :img="require(`@/assets/film/verhoer_title2.png`)"
                height="400"
                width="600"
                href="https://www.instagram.com/p/CdHg_QMt9Nx/"
                target="_blank"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <v-icon size="150px" color="#eeeeee">play_circle</v-icon>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">Wahnsinn⁶ - Das Verhör</p>
            <p class="text-page text-left">Interdisciplinary Project (3. Semester, 2022).<br> In Wahnsinn⁶ begleiten
              wir das Leben zweier WGs,<br>die unterschhiedlicher nicht sein könnten.</p>
            <span class="info-text-page mr-2">Drehbuch</span> <span class="footer-slash">I</span> <span
              class="info-text-page ml-2 mr-2">Kamera</span>
            <span class="footer-slash">I</span> <span class="info-text-page ml-2">Schnitt</span>
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
                :img="require(`@/assets/film/bengrund.jpg`)"
                height="400"
                width="600"
                href="https://www.youtube.com/watch?v=AHWSiRnCApI"
                target="_blank"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="hover-button"
                    style="height: 100%; width: 800px;"
                >
                  <v-icon size="150px" color="#eeeeee">play_circle</v-icon>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
        <div class="vertical-bottom">
          <v-col class="pa-0">
            <p class="title-page text-left" style="color: #424242;">Interview mit Benjamin Grund</p>
            <p class="text-page text-left">Business Photography (4. Semester, 2022).<br> Kurzes Interview mit Benjamin Grund,<br>Sänger und Besitzer eines Motorradhelmgeschäftes.</p>
            <span class="info-text-page mr-2">Kamera</span>
            <span class="footer-slash">I</span> <span class="info-text-page ml-2">Schnitt</span>
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
  components: {

  }
})
export default class FilmView extends Vue {

}
</script>
