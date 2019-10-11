<template>
  <div id="app">
    <GoogleMap class="map" :center="point2" :zoom="7">
      <GoogleMapMarker :position="point1" />
      <GoogleMapMarker :position="point2" />
      <GoogleMapMarker :position="point3" />
      <GoogleMapLine :path="[point1, point2]" />
      <GoogleMapLine :path="[point2, point3]" />
    </GoogleMap>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import GoogleMapLine from "@/components/GoogleMapLine";
import GoogleMapMarker from "@/components/GoogleMapMarker";

export default {
  name: 'app',
  components: {
    GoogleMap,
    GoogleMapLine,
    GoogleMapMarker
  },
  data() {
    return {
      point1: { lat: 3, lng: 105 },
      point2: { lat: 5, lng: 100 },
      point3: { lat: 7, lng: 95 },
    }
  }
}
</script>

<style scoped>
.map {
  height: 400px;
}
</style>
