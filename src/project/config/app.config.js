
/** @type { import('../../zhd/dist/gis/openlayers/web-map/web-map').IWebMapOptions } */
const webMapOptions = {

}

/** @type { import('../../zhd/dist/gis/openlayers/plugins/basemap/basemap').IBasemapOptions } */
const basemapOptions = {
  key: '天地图矢量'
}

/** @type { import('../../zhd/dist/gis/openlayers/plugins/layer-operation/layer-operation').ILayerOperationOptions } */
const layerOperationOptions = {
  layerItems: [
    {
      name: '广州区县级行政区划',
      type: 'wms',
      url: 'http://wuxizhe.fun:8080/geoserver/webgis-ol-base/wms',
      params: {
        'FORMAT': 'image/png',
        'VERSION': '1.1.1',
        'tiled': true,
        'STYLES': '',
        'LAYERS': 'webgis-ol-base:boundary',
        'exceptions': 'application/vnd.ogc.se_inimage'
      }
    }, {
      name: '广佛地铁站点',
      type: 'wfs',
      url: 'http://wuxizhe.fun:8080/geoserver/webgis-ol-base/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=webgis-ol-base:stations&outputFormat=application/json'
    }, {
      name: '广佛地铁线路',
      type: 'wfs',
      url: 'http://wuxizhe.fun:8080/geoserver/webgis-ol-base/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=webgis-ol-base:subway&outputFormat=application/json'
    }
  ]
}

const appConfig = {
  webgisOptions: {
    webMapOptions,
    basemapOptions,
    layerOperationOptions,
  }
}

export default appConfig
