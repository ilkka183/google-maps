<template>
  <div id="app">
    <TravelMap class="travel-map"/>
  </div>
</template>

<script>
import TravelMap from './components/TravelMap.vue'

export default {
  name: 'app',
  components: {
    TravelMap
  }
}
</script>

<style scoped>
.travel-map {
  height: 400px;
}
</style>
