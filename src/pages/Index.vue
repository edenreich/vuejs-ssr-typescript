<template>
  <h1>
    Index Page
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MenuBar from '@components/menu.vue';

@Component({})
export default class IndexPage extends Vue {
  created (): void {
    console.log('Index Page');
  }
}
</script>

<style lang="css" scoped>

</style>