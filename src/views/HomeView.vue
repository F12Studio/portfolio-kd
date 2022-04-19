<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="background-wrapper">
        <v-row>
          <v-spacer/>
          <v-col cols="10">
            <p class="title-white">
              <span class="animation">Stay focused.</span>
            </p>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class HomeView extends Vue {
}
</script>

<style>
.background-wrapper {
  background-image: url("../../src/assets/galleries/title/titel6.jpg");
  height: 85vh;
  background-size: cover;
  background-position: center;
}

.title-white {
  color: #fff;
  font-family: Didot;
  text-shadow: #212121;
  font-size: 72px;
  text-align: left;
  padding-top: 55vh;
}

.animation {
  color: transparent;
  animation: blur 6s ease-out infinite;
  -webkit-animation: blur 6s ease-out infinite;
}

.animation:nth-child(1) {
  animation-delay: 1s;
  -webkit-animation-delay: 1s;
}

@keyframes blur {
  0% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
  5% {
    text-shadow: 0 0 90px #fff;
  }
  15% {
    opacity: 1;
  }
  20% {
    text-shadow: 0 0 0px #fff;
  }
  80% {
    text-shadow: 0 0 0px #fff;
  }
  85% {
    opacity: 1;
  }
  95% {
    text-shadow: 0 0 90px #fff;
  }
  100% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
}

@-webkit-keyframes blur {
  0% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
  5% {
    text-shadow: 0 0 90px #fff;
  }
  15% {
    opacity: 1;
  }
  20% {
    text-shadow: 0 0 0px #fff;
  }
  80% {
    text-shadow: 0 0 0px #fff;
  }
  85% {
    opacity: 1;
  }
  95% {
    text-shadow: 0 0 90px #fff;
  }
  100% {
    text-shadow: 0 0 100px #fff;
    opacity: 0;
  }
}
</style>