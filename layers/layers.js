ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2154").setExtent([857858.725634, 6497114.161692, 935715.233111, 6542770.511996]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EPCIMISSIONAETB_1 = new ol.format.GeoJSON();
var features_EPCIMISSIONAETB_1 = format_EPCIMISSIONAETB_1.readFeatures(json_EPCIMISSIONAETB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_EPCIMISSIONAETB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIMISSIONAETB_1.addFeatures(features_EPCIMISSIONAETB_1);
var lyr_EPCIMISSIONAETB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EPCIMISSIONAETB_1, 
                style: style_EPCIMISSIONAETB_1,
                interactive: true,
                title: '<img src="styles/legend/EPCIMISSIONAETB_1.png" /> EPCI MISSION A ET B'
            });
var format_VIARHONA_2 = new ol.format.GeoJSON();
var features_VIARHONA_2 = format_VIARHONA_2.readFeatures(json_VIARHONA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_VIARHONA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIARHONA_2.addFeatures(features_VIARHONA_2);
var lyr_VIARHONA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VIARHONA_2, 
                style: style_VIARHONA_2,
                interactive: true,
                title: '<img src="styles/legend/VIARHONA_2.png" /> VIARHONA'
            });
var format_SIMPLEACCESVOITUREVIARHONA_3 = new ol.format.GeoJSON();
var features_SIMPLEACCESVOITUREVIARHONA_3 = format_SIMPLEACCESVOITUREVIARHONA_3.readFeatures(json_SIMPLEACCESVOITUREVIARHONA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_SIMPLEACCESVOITUREVIARHONA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIMPLEACCESVOITUREVIARHONA_3.addFeatures(features_SIMPLEACCESVOITUREVIARHONA_3);
var lyr_SIMPLEACCESVOITUREVIARHONA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIMPLEACCESVOITUREVIARHONA_3, 
                style: style_SIMPLEACCESVOITUREVIARHONA_3,
                interactive: true,
    title: 'SIMPLE ACCES VOITURE VIARHONA<br />\
    <img src="styles/legend/SIMPLEACCESVOITUREVIARHONA_3_0.png" /> SIMPLE ACCES VOITURE<br />'
        });
var format_HALTEREPOSVIARHONA_4 = new ol.format.GeoJSON();
var features_HALTEREPOSVIARHONA_4 = format_HALTEREPOSVIARHONA_4.readFeatures(json_HALTEREPOSVIARHONA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_HALTEREPOSVIARHONA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HALTEREPOSVIARHONA_4.addFeatures(features_HALTEREPOSVIARHONA_4);
var lyr_HALTEREPOSVIARHONA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HALTEREPOSVIARHONA_4, 
                style: style_HALTEREPOSVIARHONA_4,
                interactive: true,
    title: 'HALTE REPOS VIARHONA<br />\
    <img src="styles/legend/HALTEREPOSVIARHONA_4_0.png" /> HALTE REPOS<br />\
    <img src="styles/legend/HALTEREPOSVIARHONA_4_1.png" /> HALTE REPOS A COMPLETER<br />\
    <img src="styles/legend/HALTEREPOSVIARHONA_4_2.png" /> HALTE-REPOS A CREER<br />'
        });
var format_AIREDESERVICESVIARHONA_5 = new ol.format.GeoJSON();
var features_AIREDESERVICESVIARHONA_5 = format_AIREDESERVICESVIARHONA_5.readFeatures(json_AIREDESERVICESVIARHONA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_AIREDESERVICESVIARHONA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIREDESERVICESVIARHONA_5.addFeatures(features_AIREDESERVICESVIARHONA_5);
var lyr_AIREDESERVICESVIARHONA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIREDESERVICESVIARHONA_5, 
                style: style_AIREDESERVICESVIARHONA_5,
                interactive: true,
    title: 'AIRE DE SERVICES VIARHONA<br />\
    <img src="styles/legend/AIREDESERVICESVIARHONA_5_0.png" /> AIRE DE SERVICES<br />\
    <img src="styles/legend/AIREDESERVICESVIARHONA_5_1.png" /> AIRE DE SERVICES A COMPLETER<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_EPCIMISSIONAETB_1.setVisible(true);lyr_VIARHONA_2.setVisible(true);lyr_SIMPLEACCESVOITUREVIARHONA_3.setVisible(true);lyr_HALTEREPOSVIARHONA_4.setVisible(true);lyr_AIREDESERVICESVIARHONA_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EPCIMISSIONAETB_1,lyr_VIARHONA_2,lyr_SIMPLEACCESVOITUREVIARHONA_3,lyr_HALTEREPOSVIARHONA_4,lyr_AIREDESERVICESVIARHONA_5];
lyr_EPCIMISSIONAETB_1.set('fieldAliases', {'NOM_EPCI': 'NOM_EPCI', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_VIARHONA_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_SIMPLEACCESVOITUREVIARHONA_3.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'STATUT': 'STATUT', });
lyr_HALTEREPOSVIARHONA_4.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'STATUT': 'STATUT', });
lyr_AIREDESERVICESVIARHONA_5.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', 'PARKING VL': 'PARKING VL', 'NIVEAU': 'NIVEAU', 'STATUT': 'STATUT', });
lyr_EPCIMISSIONAETB_1.set('fieldImages', {'NOM_EPCI': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_VIARHONA_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_SIMPLEACCESVOITUREVIARHONA_3.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'STATUT': 'TextEdit', });
lyr_HALTEREPOSVIARHONA_4.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'STATUT': 'TextEdit', });
lyr_AIREDESERVICESVIARHONA_5.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', 'PARKING VL': 'TextEdit', 'NIVEAU': 'TextEdit', 'STATUT': 'TextEdit', });
lyr_EPCIMISSIONAETB_1.set('fieldLabels', {'NOM_EPCI': 'inline label', });
lyr_VIARHONA_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_SIMPLEACCESVOITUREVIARHONA_3.set('fieldLabels', {'id': 'no label', 'NOM': 'inline label', 'PARKING VL': 'no label', 'NIVEAU': 'inline label', 'STATUT': 'no label', });
lyr_HALTEREPOSVIARHONA_4.set('fieldLabels', {'id': 'no label', 'NOM': 'inline label', 'PARKING VL': 'no label', 'NIVEAU': 'inline label', 'STATUT': 'no label', });
lyr_AIREDESERVICESVIARHONA_5.set('fieldLabels', {'id': 'no label', 'NOM': 'inline label', 'PARKING VL': 'no label', 'NIVEAU': 'inline label', 'STATUT': 'no label', });
lyr_AIREDESERVICESVIARHONA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});