<template>
  <v-footer
      style="padding: 0; margin: 0; "
  >
    <v-row>
      <v-col cols="12">
        <v-card
            flat
            tile
            class="footer-main pa-7 ma-0 text-center"
        >
          <h1 class="footer-text" style="font-size: 18px;">Kontakt</h1>
          <v-card-text class="footer-text">
            Katharina Düwel Fotografie <strong style="color: #424242;">I</strong> katharinaduewel@icloud.com <strong
              style="color: #212121;">I</strong> 0173 2188024
          </v-card-text>

          <v-divider style="width: 750px; border-color: #747474; opacity: 75%; display: inline-block;"></v-divider>

          <v-card-text class="footer-text">
            <strong style="color: #424242;">© 2022</strong> by Katharina Düwel
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