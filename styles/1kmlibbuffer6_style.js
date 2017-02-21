var size = 0;

var styleCache_1kmlibbuffer6={}
var style_1kmlibbuffer6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.91)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(178,223,138,0.91)'})
    })];
    if (feature.get("NUMPOINTS") !== null) {
        var labelText = String(feature.get("NUMPOINTS"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_1kmlibbuffer6[key]){
        var text = new ol.style.Text({
              font: '16.9px \'Arial\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_1kmlibbuffer6[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_1kmlibbuffer6[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};