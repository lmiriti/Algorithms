//This algorithm returns and displays the factorial of any number fed into it that has a result of up to 300 digits. Beyond that it will return a value of infinity.

function factorial(num) {
	for(var i = 1; num > 0; num--) {
		i *= num;
	}
	return i;
}

var answer = factorial(170);
console.log(answer);