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
        <h1 class="mt-10 mb-2 title-page text-left">CommuniTea - Website Design</h1>
        <v-divider class="divider"></v-divider>
      </v-col>
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
          <v-spacer/>
          <img
              class="image-full-size"
              :src="require(`@/assets/design/communitea/communitea-02.png`)"/>
        </v-col>
        <v-spacer/>
        <v-col cols
               md="0"
               lg="0"
               xl="1"
               class="pa-0"></v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class COmmuniTeaView extends Vue {

}
</script>

<style scoped>
.image-full-size {
  width: inherit !important;
}
</style>
