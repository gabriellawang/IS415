var size = 0;
function categories_MRT_LRT_Line7(feature, value) {
                switch(value) {case 'Bukit Panjang LRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'Circle Line MRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'Downtown Line MRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'MRT East West Line (EW)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,160,44,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'MRT East West Line (EW) Changi Airport Line':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,160,44,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'North East Line (NE)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,0,146,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'North South Line (NS)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'Punggol LRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case 'Sengkang LRT':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 8}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(162,224,100,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;}};
var styleCache_MRT_LRT_Line7={}
var style_MRT_LRT_Line7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("name");
    var style = categories_MRT_LRT_Line7(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MRT_LRT_Line7[key]){
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
        styleCache_MRT_LRT_Line7[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MRT_LRT_Line7[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};