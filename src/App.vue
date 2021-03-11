<template>
  <MapContainer :map-id="mapId" />
  <div v-if="loaded">
    <MapToolsBar />
    <BasemapSelector />
    <MapMarker />
    <MapMeasure />
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { onMounted } from 'vue'
import MapContainer from './project/components/map/map-container/map-container.vue'
import MapToolsBar from './project/components/map/map-tools-bar/map-tools-bar.vue'
import BasemapSelector from './project/components/map/basemap-selector/basemap-selector.vue'
import MapMarker from './project/components/map/map-marker/map-marker.vue'
import MapMeasure from './project/components/map/map-measure/map-measure.vue'
import { useLoaded } from './project/hooks/useMap'
import { WebMap, Basemap } from './wxz/gis/ol'
import { BaseUtils } from './wxz/js-utils'

const loaded = useLoaded()
const mapId = BaseUtils.guid()

/* eslint-enable no-unused-vars */
</script>

<style lang="scss" scoped>

</style>
