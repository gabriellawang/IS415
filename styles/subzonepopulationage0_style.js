var size = 0;
var ranges_subzonepopulationage0 = [[0.000000, 1030.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[1030.000000, 3360.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})
    })]],
[3360.000000, 7140.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})
    })]],
[7140.000000, 13060.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})
    })]],
[13060.000000, 21750.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_subzonepopulationage0={}
var style_subzonepopulationage0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("5TO19");
    var style = ranges_subzonepopulationage0[0][2];
    for (i = 0; i < ranges_subzonepopulationage0.length; i++){
        var range = ranges_subzonepopulationage0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_subzonepopulationage0[key]){
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
        styleCache_subzonepopulationage0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_subzonepopulationage0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};