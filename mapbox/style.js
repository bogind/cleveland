
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Centroids_1": {
            "type": "geojson",
            "data": json_Centroids_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_Centroids_1_0",
            "type": "circle",
            "source": "Centroids_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'tax_luc_description'], '4- 6 UNIT APARTMENTS'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 20-39U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 40+ U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 7-19 U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 20-39 U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 40+ U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'MULTI-TENANT WHSE'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 20-39 U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 40+ U'], ['/', 7.142857142857142, 2], ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 7-19 U'], ['/', 7.142857142857142, 2], ['/', 7.142857142857142, 2]], 'circle-color': ['case', ['==', ['get', 'tax_luc_description'], '4- 6 UNIT APARTMENTS'], '#d51232', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 20-39U'], '#18d31e', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 40+ U'], '#c955f0', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 7-19 U'], '#d8d265', ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 20-39 U'], '#dd3fae', ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 40+ U'], '#8e76e5', ['==', ['get', 'tax_luc_description'], 'MULTI-TENANT WHSE'], '#77eaba', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 20-39 U'], '#d7946b', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 40+ U'], '#5adbec', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 7-19 U'], '#bdef87', '#7b9ad7'], 'circle-opacity': ['case', ['==', ['get', 'tax_luc_description'], '4- 6 UNIT APARTMENTS'], 1.0, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 20-39U'], 1.0, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 40+ U'], 1.0, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 7-19 U'], 1.0, ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 20-39 U'], 1.0, ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 40+ U'], 1.0, ['==', ['get', 'tax_luc_description'], 'MULTI-TENANT WHSE'], 1.0, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 20-39 U'], 1.0, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 40+ U'], 1.0, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 7-19 U'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'tax_luc_description'], '4- 6 UNIT APARTMENTS'], 1, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 20-39U'], 1, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 40+ U'], 1, ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 7-19 U'], 1, ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 20-39 U'], 1, ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 40+ U'], 1, ['==', ['get', 'tax_luc_description'], 'MULTI-TENANT WHSE'], 1, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 20-39 U'], 1, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 40+ U'], 1, ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 7-19 U'], 1, 1], 'circle-stroke-color': ['case', ['==', ['get', 'tax_luc_description'], '4- 6 UNIT APARTMENTS'], '#232323', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 20-39U'], '#232323', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 40+ U'], '#232323', ['==', ['get', 'tax_luc_description'], 'ELEVATOR APTS 7-19 U'], '#232323', ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 20-39 U'], '#232323', ['==', ['get', 'tax_luc_description'], 'GARDEN APTS 40+ U'], '#232323', ['==', ['get', 'tax_luc_description'], 'MULTI-TENANT WHSE'], '#232323', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 20-39 U'], '#232323', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 40+ U'], '#232323', ['==', ['get', 'tax_luc_description'], 'WALK-UP APTS 7-19 U'], '#232323', '#232323']}
        }
],
}