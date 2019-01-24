<?php
/*first version of snap-challenge without catchs (poorMan)
*
*the Filter Flag just adds additional behavior, in this case it doesn't want it to encode it's quotes (i.e. "" and '').
*
*Encoding...
*
*The : void is saying there is no return keyword and it will not give anything back
*
*The string in the () is saying it is a string.
*
*Pass in 3 arguements into filter var (variable, filter, options)*
*/
/*
 * 2nd version (richMan)
 *
 * If throw exception must catch it.
 *
 * Catch collects all those exceptions for you
 *
 */

//first version of snap-challenge without catchs

function poorMansMethod(string $input) : void {

	//$input = filter_var($input, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);



	if(empty($input) === true) {

		echo "you must add content to your input";

	}

	// verify the avatar URL will fit in the database

	if(strlen($input) > 280) {

		echo "input is incorrect length";

	}

} function richMansMethod(string $input) : void {

	$input = filter_var($input, FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);



	if(empty($input) === true) {

		throw(new \InvalidArgumentException("profile at handle is empty or insecure"));

	}

	// verify the avatar URL will fit in the database

	if(strlen($input) > 280) {

		throw(new \RangeException("profile at handle is too large"));

	}

} try {

	richMansMethod("");

} catch (\InvalidArgumentException | \RangeException $e) {

	var_dump($e);

}

var_dump(poorMansMethod("this is my content"));

//Var dump is essentially console.log