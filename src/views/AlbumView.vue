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
        <h1 class="mt-10 mb-2 title-page text-left">Dreams and Disgust - Album Booklet</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class AlbumView extends Vue {

}
</script>
