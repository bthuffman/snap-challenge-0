function checkType(type) {
	let message = "";
	if(typeof type === "string") {
		message = "variable is a string";
	}else if (typeof type ==="number"){
		message = "variable is a number";
	}else {
		message = "variable is undefined";
	}
	return message;
}

console.log(checkType(1));

//alternative
//type => typeof type;

/************************* GEORGE's CODE BELLOW, PRACTICE ABOVE

* function that checks the type of the variable and retruns a string with its type.
*
* @param string type  variable being checked for type
* @return string a string with what type the function is.
*/
/**
function checkType(type) {
	let message = "";

	if(typeof type === "string") {
		message = typeof type;
	}else if (typeof type ==="number") {
		message = "variable is a number";
	} else if (typeof type === "function") {
		message = "variable is a function"
	} else {
		message = "variable is probably an object or undefined"
	}
	return messag;e
}
console.log(checkType("strings for days"));

 */