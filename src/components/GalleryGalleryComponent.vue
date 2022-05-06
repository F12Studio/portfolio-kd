<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-spacer/>
        <v-col cols md="12" lg="12" xl="10" class="mt-5">
          <v-row>
            <v-col
                md="4"
                sm="6"
                xs="12"
                class="pl-0">
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
                        style="height: 100%; width: 800px;"
                    >
                      <h1 class="hover-text">Imitation</h1>
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
                        style="height: 100%; width: 800px;"
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
                xs="12"
                class="pr-0">
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
                        style="height: 100%; width: 800px;"
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
                xs="12"
                class="pl-0">
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
                        style="height: 100%; width: 800px;"
                    >
                      <h1 class="hover-text">Dogs</h1>
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
                    :img="require(`@/assets/galleries/city/city-07.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('city')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        class="hover-button"
                        style="height: 100%; width: 800px;"
                    >
                      <h1 class="hover-text">City</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
            <v-col
                md="4"
                sm="6"
                xs="12"
                class="pr-0">
              <v-hover v-slot="{ hover }">
                <v-card
                    class="d-flex align-center"
                    dark
                    tile
                    flat
                    :img="require(`@/assets/galleries/landscape/landscape-03.jpg`)"
                    height="400"
                    width="600"
                    @click="$router.push('landscape')"
                >
                  <v-expand-transition>
                    <div
                        v-if="hover"
                        class="hover-button"
                        style="height: 100%; width: 800px;"
                    >
                      <h1 class="hover-text">Landscape</h1>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<style>

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
  color: #eeeeee;
  font-family: Didot;
  font-weight: 300;
}
</style>
