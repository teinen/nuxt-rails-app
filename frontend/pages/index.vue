<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

declare global {
  interface Window {
    google: any
  }
}

export default Vue.extend({
  data() {
    return {
      map: undefined
    }
  },
  mounted(): void {
    const mapMountEl = document.getElementById('map')

    const { Map } = window.google.maps
    this.map = new Map(mapMountEl, {
      center: { lat: 38.681, lng: 139.767 },
      zoom: 6
    })
  }
})
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>
