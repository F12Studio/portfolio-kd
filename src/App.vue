<template>
  <v-app>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <v-main>
      <div class="v-application">
        <NavigationBar/>
        <router-view/>
      </div>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationBar from "@/components/NavigationBar.vue";
import Footer from "@/components/Footer.vue"

export default Vue.extend({
  name: 'App',
  components: {Footer, NavigationBar},
  data: () => ({
    //
  }),
  mounted() {
    console.log(Vue.version);
  }
});
</script>

<style>
@font-face {
  font-family: "Signerica Medium";
  src: local("Signerica Medium"),   url(fonts/Signerica_Medium.ttf) format("truetype");
}

.header {
  padding: 0!important;
  display: inline-block;
}

.text-page {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 300;
  font-family: Poppins;
  line-height: 1.8;
  color: #424242;
}

.title-page {
  font-size: 32px;
  font-family: "Didot";
  font-weight: 500;
  color: #009994;
}

.divider {
  margin-bottom: 50px;
  width: 15%;
  border-color: #424242 !important;
}

.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-application {
  background-color: #eeeeee !important;
}

.image-wrapper{
  text-align: center;
}

.gallery-image{
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
