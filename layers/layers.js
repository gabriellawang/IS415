var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_subzonepopulationage = new ol.format.GeoJSON();
var features_subzonepopulationage = format_subzonepopulationage.readFeatures(geojson_subzonepopulationage, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_subzonepopulationage = new ol.source.Vector();
jsonSource_subzonepopulationage.addFeatures(features_subzonepopulationage);var lyr_subzonepopulationage = new ol.layer.Vector({
                source:jsonSource_subzonepopulationage, 
                style: style_subzonepopulationage,
                title: "subzone-population-age"
            });var format_2kmlibbuffer = new ol.format.GeoJSON();
var features_2kmlibbuffer = format_2kmlibbuffer.readFeatures(geojson_2kmlibbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2kmlibbuffer = new ol.source.Vector();
jsonSource_2kmlibbuffer.addFeatures(features_2kmlibbuffer);var lyr_2kmlibbuffer = new ol.layer.Vector({
                source:jsonSource_2kmlibbuffer, 
                style: style_2kmlibbuffer,
                title: "2km-lib-buffer"
            });var format_1kmlibbuffer = new ol.format.GeoJSON();
var features_1kmlibbuffer = format_1kmlibbuffer.readFeatures(geojson_1kmlibbuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1kmlibbuffer = new ol.source.Vector();
jsonSource_1kmlibbuffer.addFeatures(features_1kmlibbuffer);var lyr_1kmlibbuffer = new ol.layer.Vector({
                source:jsonSource_1kmlibbuffer, 
                style: style_1kmlibbuffer,
                title: "1km-lib-buffer"
            });var format_populationlibjoined = new ol.format.GeoJSON();
var features_populationlibjoined = format_populationlibjoined.readFeatures(geojson_populationlibjoined, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populationlibjoined = new ol.source.Vector();
jsonSource_populationlibjoined.addFeatures(features_populationlibjoined);var lyr_populationlibjoined = new ol.layer.Vector({
                source:jsonSource_populationlibjoined, 
                style: style_populationlibjoined,
                title: "population-lib-joined"
            });var format_MRT_LRT_Line = new ol.format.GeoJSON();
var features_MRT_LRT_Line = format_MRT_LRT_Line.readFeatures(geojson_MRT_LRT_Line, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MRT_LRT_Line = new ol.source.Vector();
jsonSource_MRT_LRT_Line.addFeatures(features_MRT_LRT_Line);var lyr_MRT_LRT_Line = new ol.layer.Vector({
                source:jsonSource_MRT_LRT_Line, 
                style: style_MRT_LRT_Line,
                title: "MRT_LRT_Line"
            });var format_MRTstations = new ol.format.GeoJSON();
var features_MRTstations = format_MRTstations.readFeatures(geojson_MRTstations, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MRTstations = new ol.source.Vector();
jsonSource_MRTstations.addFeatures(features_MRTstations);var lyr_MRTstations = new ol.layer.Vector({
                source:jsonSource_MRTstations, 
                style: style_MRTstations,
                title: "MRT-stations"
            });var format_schools = new ol.format.GeoJSON();
var features_schools = format_schools.readFeatures(geojson_schools, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools = new ol.source.Vector();
jsonSource_schools.addFeatures(features_schools);var lyr_schools = new ol.layer.Vector({
                source:jsonSource_schools, 
                style: style_schools,
                title: "schools"
            });var format_schoolsoutsidebuffer = new ol.format.GeoJSON();
var features_schoolsoutsidebuffer = format_schoolsoutsidebuffer.readFeatures(geojson_schoolsoutsidebuffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schoolsoutsidebuffer = new ol.source.Vector();
jsonSource_schoolsoutsidebuffer.addFeatures(features_schoolsoutsidebuffer);var lyr_schoolsoutsidebuffer = new ol.layer.Vector({
                source:jsonSource_schoolsoutsidebuffer, 
                style: style_schoolsoutsidebuffer,
                title: "schools-outside-buffer"
            });var format_libraries = new ol.format.GeoJSON();
var features_libraries = format_libraries.readFeatures(geojson_libraries, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_libraries = new ol.source.Vector();
jsonSource_libraries.addFeatures(features_libraries);var lyr_libraries = new ol.layer.Vector({
                source:jsonSource_libraries, 
                style: style_libraries,
                title: "libraries"
            });

lyr_subzonepopulationage.setVisible(true);lyr_2kmlibbuffer.setVisible(true);lyr_1kmlibbuffer.setVisible(true);lyr_populationlibjoined.setVisible(true);lyr_MRT_LRT_Line.setVisible(true);lyr_MRTstations.setVisible(true);lyr_schools.setVisible(true);lyr_schoolsoutsidebuffer.setVisible(true);lyr_libraries.setVisible(true);
var layersList = [baseLayer,lyr_subzonepopulationage,lyr_2kmlibbuffer,lyr_1kmlibbuffer,lyr_populationlibjoined,lyr_MRT_LRT_Line,lyr_MRTstations,lyr_schools,lyr_schoolsoutsidebuffer,lyr_libraries];
lyr_subzonepopulationage.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_N': 'SUBZONE_N', 'PLN_AREA_N': 'PLN_AREA_N', 'TOTAL': 'TOTAL', 'BET0TO4': 'BET0TO4', 'BET5TO9': 'BET5TO9', 'BET10TO14': 'BET10TO14', 'BET15TO19': 'BET15TO19', 'BET20TO24': 'BET20TO24', 'BET25TO29': 'BET25TO29', 'BET30TO34': 'BET30TO34', 'BET35TO39': 'BET35TO39', 'BET40TO44': 'BET40TO44', 'BET45TO49': 'BET45TO49', 'BET50TO54': 'BET50TO54', 'BET55TO59': 'BET55TO59', 'BET60TO64': 'BET60TO64', 'BET65TO69': 'BET65TO69', 'BET70TO74': 'BET70TO74', 'BET75TO79': 'BET75TO79', 'BET80TO84': 'BET80TO84', 'OVER85': 'OVER85', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', '5TO19': '5TO19', });
lyr_2kmlibbuffer.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_1kmlibbuffer.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'NUMPOINTS': 'NUMPOINTS', });
lyr_populationlibjoined.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'sumOBJECTI': 'sumOBJECTI', 'sumTOTAL': 'sumTOTAL', 'sumBET0TO4': 'sumBET0TO4', 'sumBET5TO9': 'sumBET5TO9', 'sumBET10TO': 'sumBET10TO', 'sumBET15TO': 'sumBET15TO', 'sumBET20TO': 'sumBET20TO', 'sumBET25TO': 'sumBET25TO', 'sumBET30TO': 'sumBET30TO', 'sumBET35TO': 'sumBET35TO', 'sumBET40TO': 'sumBET40TO', 'sumBET45TO': 'sumBET45TO', 'sumBET50TO': 'sumBET50TO', 'sumBET55TO': 'sumBET55TO', 'sumBET60TO': 'sumBET60TO', 'sumBET65TO': 'sumBET65TO', 'sumBET70TO': 'sumBET70TO', 'sumBET75TO': 'sumBET75TO', 'sumBET80TO': 'sumBET80TO', 'sumOVER85': 'sumOVER85', 'sumX_ADDR': 'sumX_ADDR', 'sumY_ADDR': 'sumY_ADDR', 'sumSHAPE_L': 'sumSHAPE_L', 'sumSHAPE_A': 'sumSHAPE_A', 'sum5TO19': 'sum5TO19', 'count': 'count', });
lyr_MRT_LRT_Line.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_MRTstations.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STN_NAME': 'STN_NAME', 'STN_NO': 'STN_NO', });
lyr_schools.set('fieldAliases', {'PIO_NAME': 'PIO_NAME', 'POI_ADDRES': 'POI_ADDRES', 'POSTCODE': 'POSTCODE', 'POI_CHAR': 'POI_CHAR', 'POI_ATTRI1': 'POI_ATTRI1', 'POI_YEAR': 'POI_YEAR', 'POI_TYPE': 'POI_TYPE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', });
lyr_schoolsoutsidebuffer.set('fieldAliases', {'PIO_NAME': 'PIO_NAME', 'POI_ADDRES': 'POI_ADDRES', 'POSTCODE': 'POSTCODE', 'POI_CHAR': 'POI_CHAR', 'POI_ATTRI1': 'POI_ATTRI1', 'POI_YEAR': 'POI_YEAR', 'POI_TYPE': 'POI_TYPE', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', });
lyr_libraries.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADDRESSBLO': 'ADDRESSBLO', 'ADDRESSBUI': 'ADDRESSBUI', 'ADDRESSSTR': 'ADDRESSSTR', 'ADDRESSTYP': 'ADDRESSTYP', 'DESCRIPTIO': 'DESCRIPTIO', 'LANDXADDRE': 'LANDXADDRE', 'LANDYADDRE': 'LANDYADDRE', 'NAME': 'NAME', 'ADDRESSPOS': 'ADDRESSPOS', 'ADDRESSFLO': 'ADDRESSFLO', 'HYPERLINK': 'HYPERLINK', 'PHOTOURL': 'PHOTOURL', 'ADDRESSUNI': 'ADDRESSUNI', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', });
lyr_subzonepopulationage.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'TOTAL': 'TextEdit', 'BET0TO4': 'Hidden', 'BET5TO9': 'Hidden', 'BET10TO14': 'Hidden', 'BET15TO19': 'Hidden', 'BET20TO24': 'Hidden', 'BET25TO29': 'Hidden', 'BET30TO34': 'Hidden', 'BET35TO39': 'Hidden', 'BET40TO44': 'Hidden', 'BET45TO49': 'Hidden', 'BET50TO54': 'Hidden', 'BET55TO59': 'Hidden', 'BET60TO64': 'Hidden', 'BET65TO69': 'Hidden', 'BET70TO74': 'Hidden', 'BET75TO79': 'Hidden', 'BET80TO84': 'Hidden', 'OVER85': 'Hidden', 'INC_CRC': 'Hidden', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', '5TO19': 'TextEdit', });
lyr_2kmlibbuffer.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_1kmlibbuffer.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_populationlibjoined.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'Hidden', 'FMEL_UPD_D': 'Hidden', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'sumOBJECTI': 'Hidden', 'sumTOTAL': 'Hidden', 'sumBET0TO4': 'Hidden', 'sumBET5TO9': 'Hidden', 'sumBET10TO': 'Hidden', 'sumBET15TO': 'Hidden', 'sumBET20TO': 'Hidden', 'sumBET25TO': 'Hidden', 'sumBET30TO': 'Hidden', 'sumBET35TO': 'Hidden', 'sumBET40TO': 'Hidden', 'sumBET45TO': 'Hidden', 'sumBET50TO': 'Hidden', 'sumBET55TO': 'Hidden', 'sumBET60TO': 'Hidden', 'sumBET65TO': 'Hidden', 'sumBET70TO': 'Hidden', 'sumBET75TO': 'Hidden', 'sumBET80TO': 'Hidden', 'sumOVER85': 'Hidden', 'sumX_ADDR': 'Hidden', 'sumY_ADDR': 'Hidden', 'sumSHAPE_L': 'Hidden', 'sumSHAPE_A': 'Hidden', 'sum5TO19': 'TextEdit', 'count': 'TextEdit', });
lyr_MRT_LRT_Line.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_MRTstations.set('fieldImages', {'OBJECTID': 'TextEdit', 'STN_NAME': 'TextEdit', 'STN_NO': 'TextEdit', });
lyr_schools.set('fieldImages', {'PIO_NAME': 'TextEdit', 'POI_ADDRES': 'TextEdit', 'POSTCODE': 'TextEdit', 'POI_CHAR': 'TextEdit', 'POI_ATTRI1': 'TextEdit', 'POI_YEAR': 'TextEdit', 'POI_TYPE': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', });
lyr_schoolsoutsidebuffer.set('fieldImages', {'PIO_NAME': 'TextEdit', 'POI_ADDRES': 'TextEdit', 'POSTCODE': 'TextEdit', 'POI_CHAR': 'TextEdit', 'POI_ATTRI1': 'TextEdit', 'POI_YEAR': 'TextEdit', 'POI_TYPE': 'TextEdit', 'XCOORD': 'TextEdit', 'YCOORD': 'TextEdit', });
lyr_libraries.set('fieldImages', {'OBJECTID': 'TextEdit', 'ADDRESSBLO': 'TextEdit', 'ADDRESSBUI': 'TextEdit', 'ADDRESSSTR': 'TextEdit', 'ADDRESSTYP': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'LANDXADDRE': 'TextEdit', 'LANDYADDRE': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESSPOS': 'TextEdit', 'ADDRESSFLO': 'TextEdit', 'HYPERLINK': 'TextEdit', 'PHOTOURL': 'TextEdit', 'ADDRESSUNI': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', });
lyr_subzonepopulationage.set('fieldLabels', {'OBJECTID': 'header label', 'SUBZONE_N': 'header label', 'PLN_AREA_N': 'header label', 'TOTAL': 'header label', 'FMEL_UPD_D': 'header label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', '5TO19': 'header label', });
lyr_2kmlibbuffer.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'header label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'header label', 'DESCRIPTIO': 'header label', 'LANDXADDRE': 'header label', 'LANDYADDRE': 'header label', 'NAME': 'header label', 'ADDRESSPOS': 'header label', 'ADDRESSFLO': 'header label', 'HYPERLINK': 'header label', 'PHOTOURL': 'header label', 'ADDRESSUNI': 'header label', 'INC_CRC': 'header label', 'FMEL_UPD_D': 'header label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', });
lyr_1kmlibbuffer.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'header label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'header label', 'DESCRIPTIO': 'header label', 'LANDXADDRE': 'header label', 'LANDYADDRE': 'header label', 'NAME': 'header label', 'ADDRESSPOS': 'header label', 'ADDRESSFLO': 'header label', 'HYPERLINK': 'header label', 'PHOTOURL': 'header label', 'ADDRESSUNI': 'header label', 'INC_CRC': 'header label', 'FMEL_UPD_D': 'header label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', 'NUMPOINTS': 'header label', });
lyr_populationlibjoined.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'header label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'header label', 'DESCRIPTIO': 'header label', 'LANDXADDRE': 'header label', 'LANDYADDRE': 'header label', 'NAME': 'header label', 'ADDRESSPOS': 'header label', 'ADDRESSFLO': 'header label', 'HYPERLINK': 'header label', 'PHOTOURL': 'header label', 'ADDRESSUNI': 'header label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', 'sum5TO19': 'header label', 'count': 'header label', });
lyr_MRT_LRT_Line.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_MRTstations.set('fieldLabels', {'OBJECTID': 'header label', 'STN_NAME': 'header label', 'STN_NO': 'header label', });
lyr_schools.set('fieldLabels', {'PIO_NAME': 'header label', 'POI_ADDRES': 'header label', 'POSTCODE': 'header label', 'POI_CHAR': 'header label', 'POI_ATTRI1': 'header label', 'POI_YEAR': 'header label', 'POI_TYPE': 'header label', 'XCOORD': 'header label', 'YCOORD': 'header label', });
lyr_schoolsoutsidebuffer.set('fieldLabels', {'PIO_NAME': 'header label', 'POI_ADDRES': 'header label', 'POSTCODE': 'header label', 'POI_CHAR': 'header label', 'POI_ATTRI1': 'header label', 'POI_YEAR': 'header label', 'POI_TYPE': 'header label', 'XCOORD': 'header label', 'YCOORD': 'header label', });
lyr_libraries.set('fieldLabels', {'OBJECTID': 'header label', 'ADDRESSBLO': 'header label', 'ADDRESSBUI': 'header label', 'ADDRESSSTR': 'header label', 'ADDRESSTYP': 'header label', 'DESCRIPTIO': 'header label', 'LANDXADDRE': 'header label', 'LANDYADDRE': 'header label', 'NAME': 'header label', 'ADDRESSPOS': 'header label', 'ADDRESSFLO': 'header label', 'HYPERLINK': 'header label', 'PHOTOURL': 'header label', 'ADDRESSUNI': 'header label', 'INC_CRC': 'header label', 'FMEL_UPD_D': 'header label', 'X_ADDR': 'header label', 'Y_ADDR': 'header label', });
lyr_libraries.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});