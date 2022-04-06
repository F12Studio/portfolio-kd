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
  color: #009994;
}

.divider {
  margin-bottom: 25px;
  width: 15%;
  border-color: #7d7d7d !important;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
