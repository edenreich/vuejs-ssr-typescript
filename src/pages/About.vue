<template>
  <h1>
    About Page
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class AboutPage extends Vue {
  created (): void {
    console.log('About Page');
  }
}
</script>

<style lang="css" scoped>

</style>