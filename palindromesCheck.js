function palindrome(str) {
  var string = str.replace(/[^0-9a-z]/gi, '');
  
  
  
  if (string.split('').reverse().join('') == string) {
    return true;
    
  }
  
  else {
    return false;
  }
  
}

var newString = palindrome("nanan");

console.log(newString);