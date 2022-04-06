<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
                md="4"
                sm="6"
                xs="12">
              <v-hover v-slot="{ hover }">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/imitation/imitation-2.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('imitation')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        id="hover-button"
                        class="hover-button"
                        style="height: 100%; width: 400px;"
                    >
                      <h1 class="hover-text">Imitaiton</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
                md="4"
                sm="6"
                xs="12">
              <v-hover v-slot="{ hover }">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/tattoo/tattoo-06.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('tattoo')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        class="hover-button"
                        style="height: 100%; width: 400px;"
                    >
                      <h1 class="hover-text">Tattoo</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
                md="4"
                sm="6"
                xs="12">
              <v-hover v-slot="{ hover }">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/portraits/portraits-01.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('portraits')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        class="hover-button"
                        style="height: 100%; width: 400px;"
                    >
                      <h1 class="hover-text">Portraits</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
                md="4"
                sm="6"
                xs="12">
              <v-hover v-slot="{ hover }">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/dogs/dogs-09.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('dogs')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        class="hover-button"
                        style="height: 100%; width: 400px;"
                    >
                      <h1 class="hover-text">Dogs</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<style scoped>
.gallery-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.image-wrapper {
  text-align: center;
}

.hover-button {
  display: flex;
  background-color: #212121;
  opacity: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms !important;
}

.hover-text {
  color: #f5f5f5;
  font-family: Didot;
  font-weight: 300;
}
</style>
