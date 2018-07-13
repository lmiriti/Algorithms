//This is a binary search algorithm

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    if (max < min) {
	return -1;}
	while (max >= min) {
	  guess = Math.floor((max + min)/2);  
	  if (array[guess] === targetValue) {
	      return guess;
	  }
	  else if (targetValue > array[guess]) {
	      min = guess + 1;
	  }
	  else {
	      max = guess - 1;
	  }  
	}	
};
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 11);
console.log("Found prime at index " + result);