const express = require('express');
const app = express();
const port = 5000;

const employees = require("./employees.json");

app.get('/employees', (req,res) => {
	res.json(employees);
});

app.get('/employees/:id', (req,res) => {
	const id = parseInt(req.params.id);
	const employee = employees.find((employee) => employee.id === id);
	
	if(employee) {
		res.json(employee);
	}else {
		res.status(404).json({error:"Employee not found"});
	}
});



app.listen(port, ()=> {
	console.log(`Listening on port: ${port}`)
});