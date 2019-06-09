<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

declare global {
  interface Window {
    google: any
  }
}

@Component
export default class Index extends Vue {
  map: any = undefined

  mounted(): void {
    const mapMountEl = document.getElementById('map')

    const { Map } = window.google.maps
    this.map = new Map(mapMountEl, {
      center: { lat: 38.681, lng: 139.767 },
      zoom: 6
    })
  }
}
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>
