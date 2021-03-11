<template>
  <div class="map-measure">
    <div class="map-measure-selector">
      <div
        v-for="t in typeList"
        :key="t"
        class="map-measure-selector-item"
        :class="(t === selectedType && enabled) ? 'map-measure-selector-item__selected' : ''"
        @click="selectedType = t"
      >
        {{ t }}
      </div>
      <div
        class="map-measure-selector-item"
        @click="clear"
      >
        Clear
      </div>
      <div
        class="map-measure-selector-item"
        :class="actived ? 'map-measure-selector-item__selected' : ''"
        @click="actived = true"
      >
        Remove
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import { useClear, useEnabled, useType, useMeasureRemoveTool } from '../../../../zhd/dist/gis/openlayers/hooks/measure-tool.hooks'

export default defineComponent({
  name: 'MapMeasure',
  setup () {
    const { mapTools } = useMap()
    const [selectedType, typeList] = useType(mapTools)
    const enabled = useEnabled(mapTools)
    const clear = useClear(mapTools)
    const actived = useMeasureRemoveTool(mapTools)
    return {
      selectedType, typeList, enabled, clear, actived
    }
  },
})
</script>

<style lang="scss" scoped>
.map-measure {
  position: absolute;
  bottom: 38px;
  left: 8px;
  padding: 8px;
  background-color: white;
  box-shadow: 2px 2px 5px #888888;

  .map-measure-selector-item {
    margin: 4px;
    border: 1px solid #333;
    cursor: pointer;
  }

  .map-measure-selector-item__selected {
    font-weight: bold;
  }
}
</style>
