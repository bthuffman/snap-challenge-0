//Goal:using a foreach loop in javascript multiplty the values in the array [1,2,3,5,8,13,21,34];

//First for each
const arrayOne = [1,2,3,5,8,13,21,34];

arrayOne.forEach(v=>{
	console.log(v*2);
});


//Array Reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

//Second attempt with for each
var ar = [1, 2, 3, 4, 5];
ar.forEach( function(v, i, ar) { ar[i] = v*ar[i+1]; } );
console.log( ar );

//Will's Javascript that works!!!
const myArray = [1,2,3,5,8,13,21,34];



function multiplyArray (arr) {

	let sum = arr[0];

	arr.forEach(function(element) {

		console.log(element);

		sum = (sum * element);

	}); return sum;

}



console.log(multiplyArray(myArray));

//Callback function, a function passed into another as an argument which is invoked inside the other function. Many more to come.
//George's solution

const array = [1,2,3,5,8,13,21,34];
let total = 1;
let total1 = 1;

value1 = array.forEach(
	function(index){
		total = total * index;
		console.log(total);
	}
);
//this does the same as above, but in one line
value2 = array.forEach(index => total1 = total1 * index);
console.log(total1);

//Note the "Fat arrow operator" i.e. "=>" skips the requirement of defining a function. Set parameters to the left of it,
//statements to the right. implicit return with this, as long as only one statement. Otherwise more than one statement requires
// the use of return (ex return total1 = total1 * index;)
//Note also that must create variables like total & total1 and set them = to 1 because multiply by an undefined variable
// will not work. Ex. total; or total1; instead of total = 1; and total1 = 1;

//Recall how functions can work in Javascript
function myFunction(a, b) {
	return a * b;
}

var x = myFunction(5, 6);
document.write(x);