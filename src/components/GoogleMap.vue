<template>
  <div class="google-map" ref="googleMap">
    <template v-if="mapLoaded">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    apiKey: { type: String, required: false },
    center: { type: Object, required: true },
    zoom: { type: Number, required: false, default: 7 }
  },
  data() {
    return {
      google: null,
      map: null
    }
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({ apiKey: this.apiKey });
    this.map = new this.google.maps.Map(this.mapElement, this.mapOptions);
  },
  computed: {
    mapElement() {
      return this.$refs.googleMap;
    },
    mapOptions() {
      return {
        center: this.center,
        zoom: this.zoom
      }
    },
    mapLoaded() {
      return this.google && this.map;
    }
  }
}
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
