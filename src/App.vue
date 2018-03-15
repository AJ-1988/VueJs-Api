<template>
  <div id="app">
    <Navagation></Navagation>
    <router-view/>
  </div>
</template>

<script>
import Navagation from './components/Navagation'

export default {
  name: 'App',
  components: {
    Navagation
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
