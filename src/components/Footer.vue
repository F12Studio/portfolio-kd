<template>
  <v-footer
      class="ma-0 pa-0"
  >
    <v-row>
      <v-col cols="12" class="pa-0">
        <v-card
            flat
            tile
            class="footer-main pa-7 ma-0 text-center"
        >
          <h1 class="footer-title pb-4">Kontakt</h1>
          <v-card-text class="pa-0">
            <p class="ma-0"><span class="footer-text mr-2">Katharina Düwel Fotografie</span> <span class="footer-slash">I</span>
              <a href="mailto:katharinaduewel@icloud.com"
                 class="footer-text mr-2 ml-2">katharinaduewel@icloud.com</a>
              <span class="footer-slash">I</span> <span class="ml-2 footer-text">+49 173 2188024</span></p>
            <v-divider class="divider-footer"></v-divider>
            <p class="ma-0"><a href="https://www.katharinaduewelfotografie.de/about/" class="footer-text mr-2">Impressum</a>
              <span class="footer-slash">I</span> <span class="ml-2 footer-text">©2022 by Katharina Düwel</span></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>
.footer-main {
  background-color: #fff;
  margin: 0;
  padding: 0;
}

.footer-title {
  color: #424242;
  opacity: 65%;
  font-family: Poppins;
  font-size: 18px;
}

.footer-text {
  color: #424242 !important;
  opacity: 65%;
  font-family: Poppins;
  font-size: 15px;
  text-decoration: none;
}

.divider-footer {
  width: 750px;
  border-color: #424242 !important;
  opacity: 25%;
  display: inline-block;
}
</style>

<style>
.footer-slash {
  color: #424242;
  opacity: 85%;
}
</style>