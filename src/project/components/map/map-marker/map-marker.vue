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
        @click="useClear"
      >
        Clear
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import './map-marker.scss'

export default defineComponent({
  name: 'MapMarker',
  setup () {
    const {
      useEnabled, useClear, useMarkType
    } = useMap().olHooks.useMarkTool()
    const [selectedType, typeList] = useMarkType()
    const enabled = useEnabled()

    return {
      selectedType, typeList, enabled, useClear
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
