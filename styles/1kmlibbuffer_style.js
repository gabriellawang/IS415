var size = 0;

var styleCache_1kmlibbuffer={}
var style_1kmlibbuffer = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.776471)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(71,185,160,0.776471)'})
    })];
    if (feature.get("NUMPOINTS") !== null) {
        var labelText = String(feature.get("NUMPOINTS"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_1kmlibbuffer[key]){
        var text = new ol.style.Text({
              font: '15.925px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_1kmlibbuffer[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_1kmlibbuffer[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};