import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const pathResolve = dirName => path.resolve(__dirname, dirName) // eslint-disable-line

export default defineConfig({
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '/@project': pathResolve('src/project'),
      '/@wxz': pathResolve('src/wxz'),
    },
  },
  optimizeDeps: {
    include: [
      // /^(?=ol\/)/
      'ol/Map',
      'ol/View',
      'ol/Collection',
      'ol/Feature',
      'ol/style',
      'ol/extent',
      'ol/layer/Tile',
      'ol/layer/Group',
      'ol/layer/Vector',
      'ol/layer/Base',
      'ol/source/XYZ',
      'ol/source/OSM',
      'ol/source/Vector',
      'ol/geom/Geometry',
      'ol/geom/GeometryLayout',
      'ol/geom/Point',
      'ol/geom/LineString',
      'ol/geom/Polygon',
      'ol/geom/Circle',
      'ol/interaction/DragPan',
    ]
  },
  plugins: [
    vue(),
  ],
})
