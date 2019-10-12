<script>
import GoogleMapOverlay from "./GoogleMapOverlay";

export default {
  extends: GoogleMapOverlay,
  props: {
    center: { type: Object, required: true },
    radius: { type: Number, required: false, default: 20000 },
    strokeColor: { type: String, required: false, default: '#000000' },
    strokeOpacity: { type: Number, required: false, default: 0 },
    strokeWeight: { type: Number, required: false, default: 0 },
  },
  mounted() {
    new this.google.maps.Circle({
      map: this.map,
      center: this.center,
      radius: this.radius,
      strokeColor: this.strokeColor,
      strokeOpacity: this.strokeOpacity,
      strokeWeight: this.strokeWeight,
    });
  }
}
</script>
