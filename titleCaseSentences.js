
function titleCase(str) {
	var array = str.toLowerCase().split(' '); //to put everything in lower-case then split it into an array.
	
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
	}
	
	return array.join(' ');
}

var answer = titleCase("tHe Fat doG FaRtEd oN Me BITCHES...");

console.log(answer);