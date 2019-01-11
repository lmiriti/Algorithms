//This algorithm checks to see if a word or phrase ends with a given word, letter, or phrase. It will return true if so, if not it will return false

function endsWith(str, target) {
	if(target.length > 0) {
		if(str.substr(str.length - target.length) === target) {
    		console.log(true);
    		}
    		else {
    		console.log(false);
    		
    		}
    }
	else {
    	console.log("Feed me an input bitch!");
    }	
}
var ans = endsWith("im not sure", ".");

