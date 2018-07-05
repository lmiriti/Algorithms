//This algorithm checks if a word or phrase is the same backwards as it is forword. It would return true for the word "eye" for example.
//It would also return true for the phrase "Dog eat dog"

function palindrome(str) {
	
  var string = str.replace(/[^0-9a-z]/gi, '');
  
  if (string.split('').reverse().join('') == string) {
    return true;  
  }
  else if (string.split(' ').reverse().join(' ') == string) {
	  return true;
  }
  else {
    return false;
  }
  
}

var newString = palindrome("dog eat dog");

console.log(newString);