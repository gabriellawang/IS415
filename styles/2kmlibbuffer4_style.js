var size = 0;

var styleCache_2kmlibbuffer4={}
var style_2kmlibbuffer4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.65)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(245,161,169,0.65)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_2kmlibbuffer4[key]){
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
        styleCache_2kmlibbuffer4[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_2kmlibbuffer4[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};