var size = 0;

var styleCache_MRTstations8={}
var style_MRTstations8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = feature.get('features').length;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [579.997, 579.997],
                  scale: 0.0379312306788,
                  anchor: [11, 11],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/railway=station.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MRTstations8[key]){
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
        styleCache_MRTstations8[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MRTstations8[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};