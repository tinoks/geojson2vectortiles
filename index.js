const fs = require('fs');
const geojson2mvt = require('geojson2mvt');
const turf = require('@turf/turf')

var geojson = JSON.parse(fs.readFileSync('./marker16.geojson', "utf8"));
var bbox = turf.bbox(geojson)

var options = {
  rootDir: 'marker16',
  layers: {
	marker16: geojson
  },
  bbox : [bbox[1], bbox[0], bbox[3], bbox[2]],
  zoom : {
    min : 1,
    max : 12,
  }
};


// build the static tile pyramid
geojson2mvt(options);
