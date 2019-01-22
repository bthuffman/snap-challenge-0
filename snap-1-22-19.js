/**
 *
 * The for loop loops through an array and ads it's values together incrementally posting the additions with document.write.
 *
 * @arrayOne <array> this specifies the content of the array
 *
 * @sum <variable> this creates a variable which can representing the incremental summations of the array and which can be called by document write.
 *
 */
/*
let arrayOne = [0,1,2,3,5,8,13,21,34];
let sum = 0;
for (let i = 0; i < arrayOne.length; i++) {
	sum = sum + arrayOne[i];
	document.write(sum+"<br/>");
}
*/
/************************************************************************** WILL
//Will was able to use Each and In

//for-in version:

function sumArray2 (array) {

	let sum = 0;

	for (i in array) {

		sum = sum + array[i];

	}

	return sum;

}



//forEach version

function sumArray3 (array) {

	let sum = 0;

	array.forEach(function(element) {

		sum = sum + element;

	})

	return sum;

}
 */
/*********************************************************************** MY RECURSION
 */
/**
 *
 * From my understanding this ES6 Recursion function reduces the array until it is empty and adds each eliminated element to sum.
 *
 * The function is using a ternary operator (condition ? express1 : /otherwise/ express2)
 *
 *The array.slice creates a copy of the array starting with the first and goes through the array without mutating the original array.
 *
 */
/*PRE-ES6 Recursion Function that also works
let sum = function(array) {
	return(array.length === 0) ? 0 : array[0] + sum(array.slice(1));
};
*/
//ES6 Recursion
let sum = (array) => (array.length===0) ? 0 : array[0]+sum(array.slice(1));
document.write(sum([0,1,2,3,5,8,13,21,34],0));
//If you put array.slice(1,3) you go up to the 4th iteration (index of 3), but not including it thus this would result
// in 0+1+2 = 3 rather than 0+1+2+3 = 6.