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

  onMounted(() => {
    webMap = new WebMap(mapId, options)
      .use(new Basemap())
      .mount()

    window.webMap = webMap // 开发模式下使用
  })
}
