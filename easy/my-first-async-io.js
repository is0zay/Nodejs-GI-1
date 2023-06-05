const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, (err, data) => {
	const newLines = data.toString().split("\n").length - 1;
	console.log(newLines);
});

