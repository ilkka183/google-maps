<script>
import { LINE_PATH_CONFIG } from "@/constants/mapSettings";

export default {
  props: {
    path: { type: Array, required: true }
  },
  mounted() {
    new this.$parent.google.maps.Polyline({
      path: this.path,
      map: this.$parent.map,
      ...LINE_PATH_CONFIG
    });
  },
  render() { return null; }
}
</script>
