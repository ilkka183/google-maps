<template>
  <div>
    <template v-if="marker.control">
      <slot></slot>
    </template>
  </div>
</template>

<script>
import { nodeToHtml } from '@/modules/utils.js';

export default {
  props: {
  },
  computed: {
    marker() {
      return this.$parent;
    }
  },
  mounted() {
    const html = nodeToHtml(this.$slots.default[0]);
    const content = '<div id="content">' + html + '</div>';

    const infowindow = new this.marker.google.maps.InfoWindow({ content });

    this.marker.control.addListener('click', () => { infowindow.open(this.marker.map, this.marker.control); });
  }
}
</script>
