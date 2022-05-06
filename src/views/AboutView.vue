<template>
  <v-container class="v-application mb-10">
    <v-row>
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
        <h1 class="mt-10 mb-2 title-page text-left">Hello, nice to meet you.</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
      <v-row class="ma-0">
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
        <v-col cols
               md="4"
               lg="4"
               xl="4"
               class="mb-10 mt-5 pa-0" style="align: left;">
          <img
              height="400px"
              width="auto"
              :src="require(`@/assets/about_foto.png`)"/>
        </v-col>
        <v-spacer/>
        <div class="vertical-center">
          <v-col col="6" class="pa-0">
            <p class="title-page text-right" style="font-size: 44px; color: #424242;">»You don't take a photograph. <br>
              You make it.«</p>
          </v-col>
        </div>
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
        <v-col cols
               md="10"
               lg="12"
               xl="8"
               class="mb-10 pa-0">
          <p class="text-page">Mein Name ist Katharina Düwel, ich bin 20 Jahre alt und Fotografieren ist meine große
            Leidenschaft. <br>
            Ich fotografiere, seitdem ich ein kleines Mädchen bin - damals noch einfach drauf los mit einer kleinen
            Digitalkamera. <br>
            Durch meinen Pflegehund Sammy, den ich seit über neun Jahren kenne und der mir als Model seither immer
            geduldig und motiviert zur Seite steht, habe ich die Fotografie als Hobby kennen und lieben gelernt.
            So kam es, dass ich mit 13 Jahren das erste mal eine Spiegelreflexkamera in den Händen hielt, und kurze
            Zeit später zog meine erste eigene Kamera ein. <br>
            Es dauerte nicht lange, und ich wusste: Fotografieren ist nicht nur ein Hobby für mich. Es ist viel mehr
            als das, und da fiel die Entscheidung, diese Leidenschaft professionell zu betreiben und der Berufswunsch
            als Fotografin wuchs - und wächst auch heute immer noch. <br>
            Ich konnte durch verschiedenste Shootings viel Erfahrung sammeln, habe dadurch ein gutes Auge für schöne
            Locations entwickelt und weiß, wie ich Menschen, Tiere und Landschaften ins beste Licht rücke. Ich
            fotografiere nicht nur,
            weil es mir Spaß macht. Es geht mir viel mehr darum, besondere Momente
            einzufangen und Gefühle und Erinnerungen für immer festzuhalten. </p>
        </v-col>
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
               xl="5"
               class="pa-0">
          <h1 class="mb-2 title-page">Equipment</h1>
          <p class="text-page"> Canon EOS 6D Mark ii
            <br>
            Canon 24-70mm f2.8 L USM
            <br>
            Canon 135mm f2 L USM
            <br>
            Canon 70-200mm f2.8 L USM
            <br>
            Lightroom CC & Photoshop CC </p>
        </v-col>
        <v-col cols
               md="6"
               lg="6"
               xl="5"
               class="pa-0">
          <h1 class="mb-2 title-page">Referenzen</h1>
          <p class="text-page"> Veröffentlichung in "Lifehacks Hund - Die besten Kniffe für den Alltag" von Julia
            Wenderoth, erschienen im GU-Verlag
            <br> <br>
            Kooperation mit der Hundefuttermarke "Goood Dog"
            (Mai 2018 bis Mai 2019)
            <br> <br>
            Veröffentlichung in der September-Ausgabe 2018 der British Vogue
            <br> <br>
            Veröffentlichung in "Entspannt draußen - Wie du die Spaziergänge mit deinem Hund wieder genießen kannst"
            von
            Sarah Both
            <br> <br>
            Veröffentlichung in "Hundetraining für Welpen und Junghunde" von Sarah Both
            <br> <br>
            Praktikum bei GentlePup in Singapur (August 2019)
            <br> <br>
            Fotografische Begleitung für "Women in Business" (LMU, Oktober 2019 bis März 2020)</p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class AboutView extends Vue {

}
</script>