<template>
  <v-app>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <v-main>
    <NavigationBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationBar from "@/components/NavigationBar.vue";

export default Vue.extend({
  name: 'App',
  components: {NavigationBar},
  data: () => ({
    //
  }),
  mounted() {
    console.log(Vue.version);
  }
});
</script>

<style>
.text-page {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 300;
  font-family: Poppins;
  line-height: 1.8;
  color: #7d7d7d;
}

.title-page {
  font-size: 32px;
  font-family: "Didot";
  font-weight: 500;
  color: #2c2c2c;
}

.divider {
  outline-color: aquamarine;
  margin-bottom: 20px;
  width: 15%;
}

.vertical-center {
  vertical-align: baseline;
}
</style>
