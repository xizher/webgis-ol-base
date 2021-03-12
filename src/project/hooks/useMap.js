import { onMounted, ref } from 'vue'
import {
  WebMap,
  Basemap,
  MapTools,
  MapCursor,
  MapElementDisplay
} from '../../zhd/dist/gis/openlayers'
import { LayerOperation } from '../../zhd/dist/gis/openlayers/plugins/layer-operation/layer-operation'

/**
 * @type { WebMap }
 */
let webMap = null
const loaded = ref(false)

export default () => webMap
export function useLoaded () {
  return loaded
}

export function useCreateWebMap (mapId, options) {

  onMounted(() => {
    webMap = new WebMap(mapId, options.webgisOptions)
      .use(new Basemap(options.basemapOptions))
      .use(new MapElementDisplay())
      .use(new MapTools())
      .use(new MapCursor())
      .use(new LayerOperation(options.layerOperationOptions))
      .mount()
    loaded.value = true

    window.webMap = webMap // 开发模式下使用
  })
}
