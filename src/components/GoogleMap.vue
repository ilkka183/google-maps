<template>
  <div class="google-map" ref="googleMap">
    <template v-if="apiLoaded">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
import { mapSettings } from "@/constants/mapSettings";

export default {
  props: {
    center: { type: Object, required: false },
    zoom: { type: Number, required: false },
    apiKey: { type: String, required: false }
  },
  data() {
    return {
      google: null,
      map: null
    }
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({ apiKey: this.apiKey });
    this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
  },
  computed: {
    mapConfig() {
      let config = mapSettings;

      if (this.zoom)
        config.zoom = this.zoom;

      return {
        ...config,
        center: this.center
      }
    },
    apiLoaded() {
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
