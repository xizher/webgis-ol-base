<template>
  <div class="basemap-selector">
    <select @change="selectedHandler">
      <option
        v-for="item in list"
        :key="item"
        :value="item"
        :selected="item === selectedkey"
      >
        {{ item }}
      </option>
      <!-- <option value="volvo">
        Volvo
      </option>
      <option value="saab">
        Saab
      </option>
      <option
        value="fiat"
        selected
      >
        Fiat
      </option>
      <option value="audi">
        Audi
      </option> -->
    </select>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useMap from '../../../hooks/useMap'
import './basemap-selector.scss'

export default defineComponent({
  name: 'BasemapSelector',
  setup () {
    const { useSelector, useList } = useMap().olHooks.useBasemap()
    const [selectedkey, set] = useSelector()
    const list = useList()
    function selectedHandler (e) {
      set(e.target.value)
    }
    return {
      selectedkey, list, selectedHandler
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
