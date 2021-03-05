<template>
  <MapContainer :map-id="mapId" />
  <div v-if="loaded">
    <!-- <MapToolsBar />
    <BasemapSelector />
    <MapMarker /> -->
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted } from 'vue'
import MapContainer from './project/components/map/map-container/map-container.vue'
import MapToolsBar from './project/components/map/map-tools-bar/map-tools-bar.vue'
import BasemapSelector from './project/components/map/basemap-selector/basemap-selector.vue'
import MapMarker from './project/components/map/map-marker/map-marker.vue'
import { useLoaded } from './project/hooks/useMap'
import { WebMap, Basemap } from './wxz/gis/ol'
import { BaseUtils } from './wxz/js-utils'
/* eslint-enable */

const loaded = useLoaded() // eslint-disable-line
const mapId = BaseUtils.guid() // eslint-disable-line

</script>

<style lang="scss" scoped>

</style>
