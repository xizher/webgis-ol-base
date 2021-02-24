import { onMounted } from 'vue'
import {
  WebMap,
  Basemap,
} from '../../wxz/gis/ol'

/**
 * @type { WebMap }
 */
let webMap = null

export default () => webMap

export function useCreateWebMap (mapId, options = {}) {
  const webMap = new WebMap(mapId, options)
    .use(new Basemap())

  onMounted(() => webMap.mount())
}
