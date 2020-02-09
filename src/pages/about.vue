<template>
  <h1>
    About Page
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {}
})
export default class AboutPage extends Vue {
  mounted () {
    console.log('About Page')
  }
}
</script>

<style scoped>

</style>