var size = 0;

var styleCache_1kmlibbuffer3={}
var style_1kmlibbuffer3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.59)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(162,68,129,0.59)'})
    })];
    if (feature.get("NUMPOINTS") !== null) {
        var labelText = String(feature.get("NUMPOINTS"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_1kmlibbuffer3[key]){
        var text = new ol.style.Text({
              font: '16.9px \'.SF NS Text\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_1kmlibbuffer3[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_1kmlibbuffer3[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};