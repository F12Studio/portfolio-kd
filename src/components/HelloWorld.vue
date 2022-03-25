<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>HELLO KATHI</h1>
        <h2>{{name}}</h2>
        <h3>{{number}}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  public name: string = "Hello Kathi - I am your project";
  public number: number = 0;

  public beforeMount(){
    this.countUp();
  }

  public countUp(){
    this.number++;
    setTimeout(() => {this.countUp()}, 1000);
  }
}
</script>
