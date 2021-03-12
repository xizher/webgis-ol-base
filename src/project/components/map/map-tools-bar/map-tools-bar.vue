<template>
  <div class="map-tools-bar">
    <div
      v-for="t in toolList"
      :key="t"
      class="map-tools-bar-item"
      :class="t === activedKey ? 'map-tools-bar-item__selected' : ''"
      @click="set(t)"
    >
      {{ t }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import useMapTools from '../../../../zhd/dist/gis/openlayers/hooks/map-tools.hooks'
import './map-tools-bar.scss'
export default defineComponent({
  name: 'MapToolsBar',
  setup () {
    const [activedKey, toolList] = useMapTools(useMap().mapTools, [
      'default',
      'zoom-in',
      'zoom-out',
      'zoom-home',
      'zoom-in-rect',
      'zoom-out-rect',
      'fullscreen',
      'fullmap',
    ])

    function set (key) {
      activedKey.value = key
    }

    return {
      activedKey, toolList, set
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
