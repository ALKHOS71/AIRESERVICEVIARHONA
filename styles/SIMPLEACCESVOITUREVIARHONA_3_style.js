var size = 0;
var placement = 'point';
function categories_SIMPLEACCESVOITUREVIARHONA_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'SIMPLE ACCES VOITURE':
                    return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [149, 150],
                  scale: 0.10067114093959731,
                  anchor: [7, 7],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/ID1a.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SIMPLEACCESVOITUREVIARHONA_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("NIVEAU");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fbfbf8";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NOM") !== null) {
        labelText = String(feature.get("NOM"));
    }
    
var style = categories_SIMPLEACCESVOITUREVIARHONA_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
