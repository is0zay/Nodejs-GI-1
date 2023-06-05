// Import modules for fs path process
const fs = require('fs');
const path = require('path');
const process = require('process');

fs.readdir(process.argv[2], (err, list) => {	// readdir is an async function that reads content of a directory
	list.forEach((file) => {	// use forEach to iterate through each item  in list
		if(path.extname(file) === '.' + process.argv[3]) {		// if file extension name matches with "." + process.argv[3], print the file
			console.log(file);
		}
	});
});