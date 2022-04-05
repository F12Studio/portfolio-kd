<template>
  <v-container>
    <v-row class="left">
      <v-col cols="12">
        <h1 class="mt-10 mb-2 title-page text-left">Hello, nice to meet you.</h1>
        <v-divider class="divider"></v-divider>
        <v-row>
          <v-col col="4" class="mb-5">
            <img
                height="400px"
                width="600px"
                src="https://www.photographiede.com/wp-content/uploads/2022/02/Photographers01.jpg"/>
          </v-col>
          <v-col col="4">
            <p class="title-page text-right">"Fotografie ist für mich mehr <br> als nur ein Hobby"</p>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer/>
          <v-col cols="10" class="mb-5">
            <p class="text-page">Mein Name ist Katharina Düwel, ich bin 20 Jahre alt und Fotografieren ist meine große
              Leidenschaft. <br>
              Ich fotografiere, seitdem ich ein kleines Mädchen bin - damals noch einfach drauf los mit einer kleinen
              Digitalkamera. <br>
              Durch meinen Pflegehund Sammy, den ich seit über acht Jahren kenne und der mir als Model seither immer
              geduldig und motiviert zur Seite steht, habe ich die Fotografie als Hobby kennen und lieben gelernt.
              So kam es, dass ich mit 13 Jahren das erste mal eine Spiegelreflexkamera in den Händen hielt, und kurze
              Zeit
              später zog meine erste eigene Kamera ein. <br>
              Es dauerte nicht lange, und ich wusste: Fotografieren ist nicht nur ein Hobby für mich. Es ist viel mehr
              als
              das, und da fiel die Entscheidung, diese Leidenschaft professionell zu betreiben und der Berufswunsch als
              Fotografin wuchs - und wächst auch heute immer noch. <br>
              Ich konnte durch verschiedenste Shootings viel Erfahrung sammeln, habe dadurch ein gutes Auge für schöne
              Locations entwickelt und weiß, wie ich Ihren Vierbeiner ins beste Licht rücke.
              Ich fotografiere nicht nur, weil es mir Spaß macht. Es geht mir viel mehr darum, besondere Momente
              einzufangen
              und Gefühle und Erinnerungen für immer festzuhalten. </p>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-col>
      <v-row>
        <v-spacer/>
        <v-col cols="5">
          <h1 class="mb-1 title-page">Equipment</h1>
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
        <v-col cols="5" class="mb-2">
          <h1 class="mb-1 title-page">Referenzen</h1>
          <p class="text-page"> Veröffentlichung in "Lifehacks Hund - Die besten Kniffe für den Alltag" von Julia
            Wenderoth, erschienen im GU-Verlag
            <br> <br>
            Kooperation mit der Hundefuttermarke "Goood Dog"
            (Mai 2018 bis Mai 2019)
            <br> <br>
            Veröffentlichung in der September-Ausgabe 2018 der British Vogue
            <br> <br>
            Veröffentlichung in "Entspannt draußen - Wie du die Spaziergänge mit deinem Hund wieder genießen kannst" von
            Sarah Both
            <br> <br>
            Veröffentlichung in "Hundetraining für Welpen und Junghunde" von Sarah Both </p>
        </v-col>
        <v-spacer/>
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