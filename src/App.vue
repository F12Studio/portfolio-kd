<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-btn
          class="mr-2"
          rounded
          outlined
          @click="$router.push('/')"
      >
        HOME
      </v-btn>
      <v-btn
          rounded
          outlined
          @click="$router.push('about')"
      >
        ABOUT
      </v-btn>
      <v-spacer/>
      Katharina Duewel
      <v-spacer/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
