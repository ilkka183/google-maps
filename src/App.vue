<template>
  <div id="app">
    <GoogleMap class="map" :center="kausala" :zoom="10">
      <GoogleMapMarker :position="helsinki" />
      <GoogleMapMarker :position="turku" />
      <GoogleMapMarker :position="tampere" />
      <GoogleMapPolygon :path="[helsinki, turku, tampere]" />
      <GoogleMapMarker :position="lahti">
        <GoogleMapInfoWindow>
          <p>Hello <a href="http://www.google.fi">this</a> new world</p>
        </GoogleMapInfoWindow>
      </GoogleMapMarker>
      <GoogleMapMarker :position="kausala" />
      <GoogleMapMarker :position="kouvola" />
      <GoogleMapPolyline :path="[lahti, kausala, kouvola]" />
      <GoogleMapMarker :position="geolocation" />
      <GoogleMapMarker :position="maarianhamina" />
      <GoogleMapCircle :center="maarianhamina" :radius="40000" />
    </GoogleMap>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue';
import GoogleMapCircle from "@/components/GoogleMapCircle";
import GoogleMapInfoWindow from "@/components/GoogleMapInfoWindow";
import GoogleMapMarker from "@/components/GoogleMapMarker";
import GoogleMapPolygon from "@/components/GoogleMapPolygon";
import GoogleMapPolyline from "@/components/GoogleMapPolyline";

export default {
  name: 'app',
  components: {
    GoogleMap,
    GoogleMapCircle,
    GoogleMapInfoWindow,
    GoogleMapMarker,
    GoogleMapPolygon,
    GoogleMapPolyline
  },
  data() {
    return {
      helsinki: { lat: 60.170833, lng: 24.9375 },
      turku: { lat: 60.451389, lng: 22.266667 },
      tampere: { lat: 61.498056, lng: 23.760833 },
      forssa: { lat: 60.813889, lng: 23.622222 },
      lahti: { lat: 60.983333, lng: 25.65 },
      kausala: { lat: 60.89, lng: 26.33 },
      mankala: { lat: 60.985, lng: 26.245 },
      kouvola: { lat: 60.868056, lng: 26.704167 },
      maarianhamina: { lat: 60.098611, lng: 19.944444 },
      geolocation: { geolocation: true }
    }
  }
}
</script>

<style scoped>
.map {
  height: 500px;
}
</style>
