<script>
import GoogleMapOverlay from "./GoogleMapOverlay";

export default {
  extends: GoogleMapOverlay,
  props: {
    path: { type: Array, required: true },
    strokeColor: { type: String, required: false, default: '#000000' },
    strokeOpacity: { type: Number, required: false, default: 0 },
    strokeWeight: { type: Number, required: false, default: 0 },
  },
  mounted() {
    this.control = new this.google.maps.Polygon({
      map: this.map,
      path: this.path,
      strokeColor: this.strokeColor,
      strokeOpacity: this.strokeOpacity,
      strokeWeight: this.strokeWeight,
    });
  }
}
</script>
