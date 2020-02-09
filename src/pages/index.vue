<template>
  <h1>
    Index Page
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {}
})
export default class IndexPage extends Vue {
  mounted () {
    console.log('Index Page')
  }
}
</script>

<style scoped>

</style>