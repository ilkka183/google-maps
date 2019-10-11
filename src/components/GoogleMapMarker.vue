<script>
import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";

export default {
  props: {
    position: { type: Object, required: true }
  },
  mounted() {
    new this.$parent.google.maps.Marker({
      position: this.position,
      map: this.$parent.map,
      icon: POINT_MARKER_ICON_CONFIG
    });
  },
  render() { return null; }
}
</script>
