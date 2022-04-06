<template>
  <v-footer
      style="margin-top: 50px; padding: 0; "
  >
    <v-card
        flat
        tile
        class="footer-main pa-7 ma-0 text-center"
    >
      <h1 class="footer-text" style="font-size: 18px; color: #616161;"> Kontakt </h1>
      <v-card-text class="footer-text">
        Katharina Düwel Fotografie I katharinaduewel@icloud.com I 0173 2188024
      </v-card-text>

      <v-divider style="width: 500px; border-color: #747474; opacity: 50%;"></v-divider>

      <v-card-text class="footer-text">
        <strong style="color: #616161;"> © 2022 </strong> by  Katharina Düwel
      </v-card-text>
    </v-card>
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
  font-family: Poppins;
  font-size: 14px;
}
</style>