//This algorithm truncates a string. 

//Basic code solution
function truncateString(str, num) {
    if (str.length > num && num > 3) {
    	return str.slice(0, (num - 3)) + "...";
    }
    else if (str.length > num && num <= 3) {
    	return str.slice(0, num) + "...";
    }
    else {
    	return str;
    }	
}
var result = truncateString("A-tisket a-tasket A green and yellow basket", 11);
console.log(result);

//Advanced code solution
function truncateStrings(str, num) {
	if (str.length > num) {
		return str.slice(0, num > 3 ? (num - 3) : num) + "...";
	}
	else {
		return str;
	}
	}
	var result2 = truncateStrings("A-tisket a-tasket A green and yellow basket", 11);
	console.log(result2);