<template>
  <div class="map-container">
    <div :id="mapId" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCreateWebMap } from '../../../hooks/useMap'
import './map-container.scss'
import appConfig from '../../../config/app.config'

export default defineComponent({
  name: 'MapContainer',
  props: {
    mapId: { type: String, default: 'map-container' }
  },
  setup (props) {
    useCreateWebMap(props.mapId, appConfig.webgisOptions)

    return {
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
