<template>
  <h1>
    Contact Page
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {}
})
export default class ContactPage extends Vue {
  mounted () {
    console.log('Contact Page')
  }
}
</script>

<style scoped>

</style>