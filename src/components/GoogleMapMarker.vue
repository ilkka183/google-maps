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
    position: { type: Object, required: true }
  },
  data() {
    return {
      control: null
    }
  },
  mounted() {
    this.control = new this.google.maps.Marker({
      map: this.map,
      position: this.position,
      icon: POINT_MARKER_ICON_CONFIG,
    });
  }
}
</script>
