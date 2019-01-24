<?php
/**
 * Created by PhpStorm.
 * User: bhuff
 * Date: 1/23/2019
 * Time: 8:04 AM
 */
<?php
//Taken from stack overflow
/*
function foo($value)
{
	// Expected format: Surname, GivenNames
	if (strpos($value, ", ") === false) return false;
	list($surname, $givennames) = explode(", ", $value, 2);
	$empty = (empty($surname) || empty($givennames));
	$notstrings = (!is_string($surname) || !is_string($givennames));
	if ($empty || $notstrings) {
		echo false;
	} else {
		echo $value;
	}
}
$var = filter_var('Doe, Jane Sue', FILTER_CALLBACK, array('options' => 'foo'));
*/
/*
//My psuedo code
<?php
function stringVerified ($parameterOne){
	if $varOne
	echo "The variable is a string
	else
	echo "The variable is not a string
}
function lengthVerified ($parameterOne){
	if $varOne
	echo "The variable is not larger than 280 characters."
	else
		echo "The variable is larger than 280 characters."
}
*/
/*My 3rd attempt
// Sample user comment
$comment = "How much";

// Sanitize and print comment string
$sanitizedComment = filter_var($comment, FILTER_SANITIZE_STRING);
echo $sanitizedComment;
function count ($sanitizedComment);{
	count_chars($sanitizedComment);
	echo $count
	*/