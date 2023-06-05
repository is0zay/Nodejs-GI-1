'use strict'

const process = require("process");

let getSum = (arr) => {
	let sum = 0;
	for (let i = 2; i < arr.length; i++) {
	
		if(isNaN(arr[i]) !== true) {
			sum += Number(arr[i]);
		} 
	}return sum;
}
console.log(getSum(process.argv));