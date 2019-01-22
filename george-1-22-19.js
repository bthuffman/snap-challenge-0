/**
 *
 * Not using var. Const and Let instead
 *
 * Notice that you cannot have value below be just = 1. I.e. an array must be an array.
 *
 */

const values = [0,1,2,3,5,8,13,21,34];
//Once move out of a loop then the variable is gone so that's additional reason to have let total. If you put total in
// the loop then it is outside of the global scope and so can't be used outside of the for loop and thus calls for it
// would be listed as undefined.
//Interestingly if you put var total = 0 in the for loop, then it would iterate through all the array values, but restart
// at zero each time and thus you would get a console.log(total); //returns 34 (i.e. the 9th iteration in the array).
//Also note that the
let total = 0;
//i = initial statement, i < how long will loop through,
for(i=0; i < values.length; i++) {
	total = total + values[i];
}
console.log(total);
console.log(values[6]);

/*****************************RECURSION
 *It's like having a function repeat within a function.
 */