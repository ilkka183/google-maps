<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String
  },
  data() {
    return {
      google: null,
      map: null
    };
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({ apiKey: this.apiKey });
    this.map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig);
  }
};
</script>

<style scoped>
.google-map {
  width: 100%;
  min-height: 100%;
}
</style>
