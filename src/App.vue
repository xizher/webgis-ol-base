<template>
  <MapContainer :map-id="mapId" />
</template>

<script setup>
/* eslint-disable */
import { onMounted } from 'vue'
import MapContainer from './project/components/map/map-container/map-container.vue'
import { WebMap, Basemap } from './wxz/gis/ol'
import { BaseUtils } from './wxz/js-utils'
/* eslint-enable */

const mapId = BaseUtils.guid() // eslint-disable-line

</script>

<style lang="sass" scoped>

</style>
