let arrayOne=
[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

//somewhat redundant since concat will return a new array.
//let arrayTwo = arrayOne;

//targets the title and the body content within arrayOne
function getElement(elem){
	return {valueOne:elem.title,valueTwo:elem.body};
}

//concatenates the array elements selected (see function getElement) and returns a new array
function flatten(arr) {
	return Array.prototype.concat.apply([], arr);
}

//applies the flatten function to arrayTwo which has the getElement function applied to each of it's elements (or in this case the two that apply, title and body)
let concatenationOne = flatten(arrayOne.map(getElement));

//post the new array
console.log(concatenationOne);

/////////////////////////////////////////////////////////////////////
//Following method works! Source: luxcoder on https://stackoverflow.com/questions/17069223/concatenate-nested-array-after-mapping
//titles = [].concat.apply([], arrayTwo.map(elem => ({valueOne:elem.title, valueTwo:elem.body})));

//console.log(titles);
/*
var x = arrayTwo.map(function(val) {
	return val.title;
}).reduce(function(pre, cur) {
	return pre.concat(cur);
}).map(function(e,i) {
	return {label:e.name,value:e.itemId};
});
*/

////////////////////////////////////////////////////////////////////
/*
arrayTwo.map( arrayOne => {
	function combineStrings(stringOne, stringTwo) {
//		stringOne = arrayOne.body;
//		stringTwo = arrayOne.title;
		stringOne= stringOne + stringTwo;
		console.log(stringOne);
//		console.log(combineStrings(arrayOne.body+array.title));
	}
});
combineStrings(arrayOne.title, arrayOne.body);
*/