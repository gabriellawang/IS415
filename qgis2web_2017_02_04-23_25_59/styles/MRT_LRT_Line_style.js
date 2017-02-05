var size = 0;
function categories_MRT_LRT_Line(feature, value) {
                switch(value) {case "Bukit Panjang LRT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "Circle Line MRT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(230,108,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "Downtown Line MRT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(21,123,232,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "MRT East West Line (EW)":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,169,25,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "MRT East West Line (EW) Changi Airport Line":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,169,25,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "North East Line (NE)":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(177,41,240,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "North South Line (NS)":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,68,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "Punggol LRT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "Sengkang LRT":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;
case "":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,28,166,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
    })];
                    break;}};
var styleCache_MRT_LRT_Line={}
var style_MRT_LRT_Line = function(feature, resolution){
    var value = feature.get("name");
    var style = categories_MRT_LRT_Line(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MRT_LRT_Line[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_MRT_LRT_Line[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MRT_LRT_Line[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};