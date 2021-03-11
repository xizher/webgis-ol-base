<template>
  <div class="map-marker">
    <div class="map-marker-selector">
      <div
        v-for="t in typeList"
        :key="t"
        class="map-marker-selector-item"
        :class="(t === selectedType && enabled) ? 'map-marker-selector-item__selected' : ''"
        @click="selectedType = t"
      >
        {{ t }}
      </div>
      <div
        class="map-marker-selector-item"
        @click="clear"
      >
        Clear
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import useMark, { useEnabled, useClearMark } from '../../../../zhd/dist/gis/openlayers/hooks/mark-tool.hooks'
import './map-marker.scss'

export default defineComponent({
  name: 'MapMarker',
  setup () {
    const { mapTools } = useMap()
    const [selectedType, typeList] = useMark(mapTools)
    const enabled = useEnabled(mapTools)
    const clear = useClearMark(mapTools)

    return {
      selectedType, typeList, enabled, clear
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
