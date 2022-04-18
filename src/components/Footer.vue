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
          <h1 class="footer-text pb-4" style="font-size: 18px;">Kontakt</h1>
          <v-card-text class="footer-text pa-0">
            <p class="ma-0"><span class="mr-2">Katharina Düwel Fotografie</span> <strong
                style="color: #424242;">I</strong> <span class="ml-2 mr-2">katharinaduewel@icloud.com</span> <strong
                style="color: #212121;">I</strong> <span class="ml-2">0173 2188024</span></p>


          <v-divider style="width: 750px; border-color: #747474; opacity: 75%; display: inline-block;" class=""></v-divider>
            <p class="ma-0 mt-2"><strong style="color: #424242;">© 2022</strong> by Katharina Düwel</p>

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
  color: #424242;
  margin: 0;
  padding: 0;
}

.footer-text {
  color: #424242;
  opacity: 75%;
  font-family: Poppins;
  font-size: 14px;
}
</style>