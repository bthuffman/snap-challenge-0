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