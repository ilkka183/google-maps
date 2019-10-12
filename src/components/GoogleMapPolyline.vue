<script>
import GoogleMapOverlay from "./GoogleMapOverlay";

export default {
  extends: GoogleMapOverlay,
  props: {
    path: { type: Array, required: true },
    strokeColor: { type: String, required: false, default: '#0000FF' },
    strokeOpacity: { type: Number, required: false, default: 0.5 },
    strokeWeight: { type: Number, required: false, default: 2 }
  },
  mounted() {
    this.control = new this.google.maps.Polyline({
      map: this.map,
      path: this.path,
      strokeColor: this.strokeColor,
      strokeOpacity: this.strokeOpacity,
      strokeWeight: this.strokeWeight,
    });
  }
}
</script>
