const fs = require('fs');

fs.readFile('./planets.txt', (err, data) => {
	if(err) {
		console.log(err)
	}
	console.log(data.toString());
});