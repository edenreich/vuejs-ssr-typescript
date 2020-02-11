<template>
  <nav>
    Menu bar
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MenuBar extends Vue {
  mounted (): void {
    console.log('Menu Bar');
  }
}
</script>

<style scoped>

</style>