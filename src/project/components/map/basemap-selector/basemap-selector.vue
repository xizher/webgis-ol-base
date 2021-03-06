<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import {
  useList,
  useKey,
  useVisible,
} from '../../../../zhd/hooks/gis.ol/basemap.hooks'
import './basemap-selector.scss'

export default defineComponent({
  name: 'BasemapSelector',
  setup () {
    const webMap = useMap()
    const [list] = useList(webMap.basemap)
    const selectedKey = useKey(webMap.basemap)
    const visible = useVisible(webMap.basemap)
    return {
      list, selectedKey, visible
    }
  },
})
</script>

<template>
  <div class="basemap-selector">
    <select @change="e => selectedKey = e.target.value">
      <option
        v-for="item in list"
        :key="item"
        :value="item"
        :selected="item === selectedKey"
      >
        {{ item }}
      </option>
    </select>
    <input
      type="checkbox"
      :checked="visible"
      @change="e => visible = e.target.checked"
    >
  </div>
</template>

<style lang="scss" scoped>

</style>
