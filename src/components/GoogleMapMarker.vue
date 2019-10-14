<template>
  <div>
    <template v-if="control">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import GoogleMapControl from "./GoogleMapControl";
import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";

export default {
  extends: GoogleMapControl,
  props: {
    position: { type: Object, required: false },
  },
  data() {
    return {
      control: null
    }
  },
  mounted() {
    if ((this.position.geolocation) && (navigator.geolocation)) {
      navigator.geolocation.getCurrentPosition(position => {
        this.createMarker({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      this.createMarker(this.position);
    }
  },
  methods: {
    createMarker(position) {
      this.control = new this.google.maps.Marker({
        map: this.map,
        position,
        icon: POINT_MARKER_ICON_CONFIG,
      });
    }
  }
}
</script>
