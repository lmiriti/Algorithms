
function factorial(num) {
	for(var i = 1; num > 0; num--) {
		i *= num;
	}
	
	return i;
}

var answer = factorial(5);

console.log(answer);