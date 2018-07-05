//This is an algorithm that reverses a phrase, both at the letter, and word level.

function reverseString(str) {
	return str.split('').reverse().join('');
};

var answer = reverseString("this algorithm shit is fun");

console.log(answer);