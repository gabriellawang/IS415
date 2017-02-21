var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_subzonepopulationage0 = new ol.format.GeoJSON();
var features_subzonepopulationage0 = format_subzonepopulationage0.readFeatures(geojson_subzonepopulationage0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subzonepopulationage0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_subzonepopulationage0.addFeatures(features_subzonepopulationage0);var lyr_subzonepopulationage0 = new ol.layer.Vector({
                source:jsonSource_subzonepopulationage0, 
                style: style_subzonepopulationage0,
                title: "subzone-population-age"
            });var format_MRT_LRT_Line1 = new ol.format.GeoJSON();
var features_MRT_LRT_Line1 = format_MRT_LRT_Line1.readFeatures(geojson_MRT_LRT_Line1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MRT_LRT_Line1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MRT_LRT_Line1.addFeatures(features_MRT_LRT_Line1);var lyr_MRT_LRT_Line1 = new ol.layer.Vector({
                source:jsonSource_MRT_LRT_Line1, 
                style: style_MRT_LRT_Line1,
                title: "MRT_LRT_Line"
            });var format_schools2 = new ol.format.GeoJSON();
var features_schools2 = format_schools2.readFeatures(geojson_schools2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_schools2.addFeatures(features_schools2);var lyr_schools2 = new ol.layer.Vector({
                source:jsonSource_schools2, 
                style: style_schools2,
                title: "schools"
            });var format_schoolsoutsidebuffer3 = new ol.format.GeoJSON();
var features_schoolsoutsidebuffer3 = format_schoolsoutsidebuffer3.readFeatures(geojson_schoolsoutsidebuffer3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schoolsoutsidebuffer3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_schoolsoutsidebuffer3.addFeatures(features_schoolsoutsidebuffer3);var lyr_schoolsoutsidebuffer3 = new ol.layer.Vector({
                source:jsonSource_schoolsoutsidebuffer3, 
                style: style_schoolsoutsidebuffer3,
                title: "schools-outside-buffer"
            });var format_libraries4 = new ol.format.GeoJSON();
var features_libraries4 = format_libraries4.readFeatures(geojson_libraries4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_libraries4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_libraries4.addFeatures(features_libraries4);var lyr_libraries4 = new ol.layer.Vector({
                source:jsonSource_libraries4, 
                style: style_libraries4,
                title: "libraries"
            });var format_MRTstations5 = new ol.format.GeoJSON();
var features_MRTstations5 = format_MRTstations5.readFeatures(geojson_MRTstations5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MRTstations5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MRTstations5.addFeatures(features_MRTstations5);cluster_MRTstations5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_MRTstations5
});var lyr_MRTstations5 = new ol.layer.Vector({
                source:cluster_MRTstations5, 
                style: style_MRTstations5,
                title: "MRT-stations"
            });var format_1kmlibbuffer6 = new ol.format.GeoJSON();
var features_1kmlibbuffer6 = format_1kmlibbuffer6.readFeatures(geojson_1kmlibbuffer6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1kmlibbuffer6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_1kmlibbuffer6.addFeatures(features_1kmlibbuffer6);var lyr_1kmlibbuffer6 = new ol.layer.Vector({
                source:jsonSource_1kmlibbuffer6, 
                style: style_1kmlibbuffer6,
                title: "1km-lib-buffer"
            });var format_2kmlibbuffer7 = new ol.format.GeoJSON();
var features_2kmlibbuffer7 = format_2kmlibbuffer7.readFeatures(geojson_2kmlibbuffer7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2kmlibbuffer7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2kmlibbuffer7.addFeatures(features_2kmlibbuffer7);var lyr_2kmlibbuffer7 = new ol.layer.Vector({
                source:jsonSource_2kmlibbuffer7, 
                style: style_2kmlibbuffer7,
                title: "2km-lib-buffer"
            });var format_populationlibjoined8 = new ol.format.GeoJSON();
var features_populationlibjoined8 = format_populationlibjoined8.readFeatures(geojson_populationlibjoined8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populationlibjoined8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_populationlibjoined8.addFeatures(features_populationlibjoined8);var lyr_populationlibjoined8 = new ol.layer.Vector({
                source:jsonSource_populationlibjoined8, 
                style: style_populationlibjoined8,
                title: "population-lib-joined"
            });

lyr_subzonepopulationage0.setVisible(true);lyr_MRT_LRT_Line1.setVisible(false);lyr_schools2.setVisible(false);lyr_schoolsoutsidebuffer3.setVisible(false);lyr_libraries4.setVisible(true);lyr_MRTstations5.setVisible(false);lyr_1kmlibbuffer6.setVisible(false);lyr_2kmlibbuffer7.setVisible(false);lyr_populationlibjoined8.setVisible(false);
var layersList = [baseLayer,lyr_subzonepopulationage0,lyr_MRT_LRT_Line1,lyr_schools2,lyr_schoolsoutsidebuffer3,lyr_libraries4,lyr_MRTstations5,lyr_1kmlibbuffer6,lyr_2kmlibbuffer7,lyr_populationlibjoined8];
lyr_subzonepopulationage0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_N': 'SUBZONE_N', 'PLN_AREA_N': 'PLN_AREA_N', 'TOTAL': 'TOTAL', 'BET0TO4': 'BET0TO4', 'BET5TO9': 'BET5TO9', 'BET10TO14': 'BET10TO14', 'BET15TO19': 'BET15TO19', 'BET20TO24': 'BET20TO24', 'BET25TO29': 'BET25TO29', 'BET30TO34': 'BET30TO34', 'BET35TO39': 'BET35TO39', 'BET40TO44': 'BET40TO44', 'BET45TO49': 'BET45TO49', 'BET50TO54': 'BET50TO54', 'BET55TO59': 'BET55TO59', 'BET60TO64': 'BET60TO64', 'BET65TO69': 'BET65TO69', 'BET70TO74': 'BET70TO74', 'BET75TO79': 'BET75TO79', 'BET80TO84': 'BET80TO84', 'OVER85': 'OVER85', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '5TO19': '5TO19', });
lyr_MRT_LRT_Line1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_schools2.set('fieldAliases', {'PIO_NAME': 'PIO_NAME', 'POI_ADDRES': 'POI_ADDRES', 'POSTCODE': 'POSTCODE', 'POI_CHAR': 'POI_CHAR', 'POI_ATTRI1': 'POI_ATTRI1', 'POI_YEAR': 'POI_YEAR', 'POI_TYPE': 'POI_TYPE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', });
lyr_schoolsoutsidebuffer3.set('fieldAliases', {'PIO_NAME': 'PIO_NAME', 'POI_ADDRES': 'POI_ADDRES', 'POSTCODE': 'POSTCODE', 'POI_CHAR': 'POI_CHAR', 'POI_ATTRI1': 'POI_ATTRI1', 'POI_YEAR': 'POI_YEAR', 'POI_TYPE': 'POI_TYPE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', });
lyr_libraries4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_MRTstations5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STN_NAME': 'STN_NAME', 'STN_NO': 'STN_NO', });
lyr_1kmlibbuffer6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'NUMPOINTS': 'NUMPOINTS', });
lyr_2kmlibbuffer7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_populationlibjoined8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'sumOBJECTI': 'sumOBJECTI', 'sumTOTAL': 'sumTOTAL', 'sumBET0TO4': 'sumBET0TO4', 'sumBET5TO9': 'sumBET5TO9', 'sumBET10TO': 'sumBET10TO', 'sumBET15TO': 'sumBET15TO', 'sumBET20TO': 'sumBET20TO', 'sumBET25TO': 'sumBET25TO', 'sumBET30TO': 'sumBET30TO', 'sumBET35TO': 'sumBET35TO', 'sumBET40TO': 'sumBET40TO', 'sumBET45TO': 'sumBET45TO', 'sumBET50TO': 'sumBET50TO', 'sumBET55TO': 'sumBET55TO', 'sumBET60TO': 'sumBET60TO', 'sumBET65TO': 'sumBET65TO', 'sumBET70TO': 'sumBET70TO', 'sumBET75TO': 'sumBET75TO', 'sumBET80TO': 'sumBET80TO', 'sumOVER85': 'sumOVER85', 'sumX_ADDR': 'sumX_ADDR', 'sumY_ADDR': 'sumY_ADDR', 'sumSHAPE_L': 'sumSHAPE_L', 'sumSHAPE_A': 'sumSHAPE_A', 'sum5TO19': 'sum5TO19', 'count': 'count', });
lyr_subzonepopulationage0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'TOTAL': 'TextEdit', 'BET0TO4': 'TextEdit', 'BET5TO9': 'TextEdit', 'BET10TO14': 'TextEdit', 'BET15TO19': 'TextEdit', 'BET20TO24': 'TextEdit', 'BET25TO29': 'TextEdit', 'BET30TO34': 'TextEdit', 'BET35TO39': 'TextEdit', 'BET40TO44': 'TextEdit', 'BET45TO49': 'TextEdit', 'BET50TO54': 'TextEdit', 'BET55TO59': 'TextEdit', 'BET60TO64': 'TextEdit', 'BET65TO69': 'TextEdit', 'BET70TO74': 'TextEdit', 'BET75TO79': 'TextEdit', 'BET80TO84': 'TextEdit', 'OVER85': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', '5TO19': 'TextEdit', });
lyr_MRT_LRT_Line1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_schools2.set('fieldImages', {'PIO_NAME': 'TextEdit', 'POI_ADDRES': 'TextEdit', 'POSTCODE': 'TextEdit', 'POI_CHAR': 'TextEdit', 'POI_ATTRI1': 'TextEdit', 'POI_YEAR': 'TextEdit', 'POI_TYPE': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', });
lyr_schoolsoutsidebuffer3.set('fieldImages', {'PIO_NAME': 'TextEdit', 'POI_ADDRES': 'TextEdit', 'POSTCODE': 'TextEdit', 'POI_CHAR': 'TextEdit', 'POI_ATTRI1': 'TextEdit', 'POI_YEAR': 'TextEdit', 'POI_TYPE': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', });
lyr_libraries4.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_MRTstations5.set('fieldImages', {'OBJECTID': 'TextEdit', 'STN_NAME': 'TextEdit', 'STN_NO': 'TextEdit', });
lyr_1kmlibbuffer6.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_2kmlibbuffer7.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_populationlibjoined8.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'sumOBJECTI': 'TextEdit', 'sumTOTAL': 'TextEdit', 'sumBET0TO4': 'TextEdit', 'sumBET5TO9': 'TextEdit', 'sumBET10TO': 'TextEdit', 'sumBET15TO': 'TextEdit', 'sumBET20TO': 'TextEdit', 'sumBET25TO': 'TextEdit', 'sumBET30TO': 'TextEdit', 'sumBET35TO': 'TextEdit', 'sumBET40TO': 'TextEdit', 'sumBET45TO': 'TextEdit', 'sumBET50TO': 'TextEdit', 'sumBET55TO': 'TextEdit', 'sumBET60TO': 'TextEdit', 'sumBET65TO': 'TextEdit', 'sumBET70TO': 'TextEdit', 'sumBET75TO': 'TextEdit', 'sumBET80TO': 'TextEdit', 'sumOVER85': 'TextEdit', 'sumX_ADDR': 'TextEdit', 'sumY_ADDR': 'TextEdit', 'sumSHAPE_L': 'TextEdit', 'sumSHAPE_A': 'TextEdit', 'sum5TO19': 'TextEdit', 'count': 'TextEdit', });
lyr_subzonepopulationage0.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_N': 'header label', 'PLN_AREA_N': 'header label', 'TOTAL': 'header label', 'BET0TO4': 'no label', 'BET5TO9': 'no label', 'BET10TO14': 'no label', 'BET15TO19': 'no label', 'BET20TO24': 'no label', 'BET25TO29': 'no label', 'BET30TO34': 'no label', 'BET35TO39': 'no label', 'BET40TO44': 'no label', 'BET45TO49': 'no label', 'BET50TO54': 'no label', 'BET55TO59': 'no label', 'BET60TO64': 'no label', 'BET65TO69': 'no label', 'BET70TO74': 'no label', 'BET75TO79': 'no label', 'BET80TO84': 'no label', 'OVER85': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', '5TO19': 'header label', });
lyr_MRT_LRT_Line1.set('fieldLabels', {'osm_id': 'header label', 'name': 'header label', 'type': 'header label', });
lyr_schools2.set('fieldLabels', {'PIO_NAME': 'header label', 'POI_ADDRES': 'inline label', 'POSTCODE': 'inline label', 'POI_CHAR': 'inline label', 'POI_ATTRI1': 'no label', 'POI_YEAR': 'no label', 'POI_TYPE': 'no label', 'XCOORD': 'no label', 'YCOORD': 'no label', });
lyr_schoolsoutsidebuffer3.set('fieldLabels', {'PIO_NAME': 'header label', 'POI_ADDRES': 'header label', 'POSTCODE': 'header label', 'POI_CHAR': 'header label', 'POI_ATTRI1': 'header label', 'POI_YEAR': 'header label', 'POI_TYPE': 'header label', 'XCOORD': 'no label', 'YCOORD': 'no label', });
lyr_libraries4.set('fieldLabels', {'OBJECTID': 'no label', 'ADDRESSBLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'no label', 'DESCRIPTIO': 'no label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'header label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'HYPERLINK': 'no label', 'PHOTOURL': 'no label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'header label', });
lyr_MRTstations5.set('fieldLabels', {'OBJECTID': 'header label', 'STN_NAME': 'header label', 'STN_NO': 'header label', });
lyr_1kmlibbuffer6.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'no label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'header label', 'DESCRIPTIO': 'header label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'header label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'HYPERLINK': 'header label', 'PHOTOURL': 'no label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'NUMPOINTS': 'header label', });
lyr_2kmlibbuffer7.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'no label', 'ADDRESSBUI': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSTYP': 'no label', 'DESCRIPTIO': 'no label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'header label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'HYPERLINK': 'header label', 'PHOTOURL': 'header label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'header label', 'Y_ADDR': 'no label', });
lyr_populationlibjoined8.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'no label', 'ADDRESSSTR': 'no label', 'ADDRESSTYP': 'no label', 'DESCRIPTIO': 'no label', 'LANDXADDRE': 'no label', 'LANDYADDRE': 'no label', 'NAME': 'header label', 'ADDRESSPOS': 'no label', 'ADDRESSFLO': 'no label', 'HYPERLINK': 'no label', 'PHOTOURL': 'no label', 'ADDRESSUNI': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'sumOBJECTI': 'no label', 'sumTOTAL': 'no label', 'sumBET0TO4': 'no label', 'sumBET5TO9': 'no label', 'sumBET10TO': 'no label', 'sumBET15TO': 'no label', 'sumBET20TO': 'no label', 'sumBET25TO': 'no label', 'sumBET30TO': 'no label', 'sumBET35TO': 'no label', 'sumBET40TO': 'no label', 'sumBET45TO': 'no label', 'sumBET50TO': 'no label', 'sumBET55TO': 'no label', 'sumBET60TO': 'no label', 'sumBET65TO': 'no label', 'sumBET70TO': 'no label', 'sumBET75TO': 'no label', 'sumBET80TO': 'no label', 'sumOVER85': 'no label', 'sumX_ADDR': 'no label', 'sumY_ADDR': 'no label', 'sumSHAPE_L': 'no label', 'sumSHAPE_A': 'no label', 'sum5TO19': 'header label', 'count': 'header label', });
lyr_populationlibjoined8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});