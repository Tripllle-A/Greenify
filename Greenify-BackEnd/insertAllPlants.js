var db = require('./db/index.js')
var data = require('./data/plants.json')

// we should run insertAllPlants.js as server with node ...
var insertAllPlants = function() {
	console.log(data);
	 db.Plant.create(data, function(err, data) {
    db.disconnect();
	})
	}

insertAllPlants();
