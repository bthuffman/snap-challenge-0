/*
function isString(x) {
	return typeof x === 'string' || value instanceof String;
}

console.log(isString("spock"));
*/
////////////////////////////////////////////
function variableCheck(num1) {
	if(typeof num1 === 'number') {
		document.write(num1 + " is a number!");
	}
	else if(typeof num1 === 'string')
	{
		document.write(num1 + " is a string!");
	}else if(typeof num1 === 'boolean')
	{
		document.write(num1 + " is a boolean!");
	}
	else if(typeof num1 === 'object')
	{
		document.write(num1 + " is a object!");
	}
	else if(typeof num1 === null)
	{
		document.write(num1 + " is null!");
	}else
	{
		document.write(num1 + " is undefined!");
	}
}
console.log(variableCheck(true));
// NOTICE: Typing null will always return as an object, because technically it is an empty object.
//////////////////////////////////////////
/*
console.log(typeof 42);
// output "number"
*/