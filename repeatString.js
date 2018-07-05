//This algorithm repeats a word you feed into it the number of times you want it to repeat it. 

function repeatString(str, num) {

	if (num >= 0) {
		return str.repeat(num);
	}
	else {
		return "Input something bitch!";
	}
		
}

var word = repeatString("abc", 2);

console.log(word);