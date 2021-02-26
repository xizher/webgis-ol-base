import { onMounted, ref } from 'vue'
import {
  WebMap,
  Basemap,
  MapTools,
  MapElementDisplay,
  MapCursor,
  OlHooks,
} from '../../wxz/gis/ol'

/**
 * @type { WebMap }
 */
let webMap = null
const loaded = ref(false)

export default () => webMap
export function useLoaded () {
  return loaded
}

export function useCreateWebMap (mapId, options = {}) {

  onMounted(() => {
    webMap = new WebMap(mapId, options)
      .use(new OlHooks)
      .use(new Basemap())
      .use(new MapElementDisplay())
      .use(new MapTools())
      .use(new MapCursor())
      .mount()
    loaded.value = true

    window.webMap = webMap // 开发模式下使用
  })
}
