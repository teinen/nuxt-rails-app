<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
const data = function() {
  return {
    google: window.google,
    map: undefined
  }
}

const computed = {}

const methods = {
  initializeMap() {}
}

const component = {
  data,
  computed,
  methods,
  mounted() {
    const mapMountEl = document.getElementById('map')
    const { Map } = window.google.maps
    this.map = new Map(mapMountEl, {
      center: { lat: 38.681, lng: 139.767 },
      zoom: 6
    })
  }
}

export default component
</script>

<style>
#map {
  height: 100vh;
  width: 100vw;
}
</style>
